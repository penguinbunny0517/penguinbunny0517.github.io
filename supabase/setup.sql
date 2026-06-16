-- Penguin & Bunny cross-device sync setup
-- Run this file once in Supabase Dashboard -> SQL Editor.

create extension if not exists pgcrypto;

create or replace function public.current_penguinbunny_author()
returns text
language sql
stable
as $$
  select case lower(coalesce(auth.jwt() ->> 'email', ''))
    when 'suzhiyuan0326@163.com' then 'maimai'
    when '15320934752@163.com' then 'tutu'
    else null
  end;
$$;

create or replace function public.is_penguinbunny_user()
returns boolean
language sql
stable
as $$
  select public.current_penguinbunny_author() is not null;
$$;

create or replace function public.touch_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create table if not exists public.love_messages (
  id text primary key default gen_random_uuid()::text,
  board_id text not null check (board_id in ('maimai', 'tutu')),
  author_id text not null check (author_id in ('maimai', 'tutu')),
  content text not null default '',
  images jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint love_messages_owner_only check (board_id = author_id),
  constraint love_messages_has_content check (
    length(trim(content)) > 0 or jsonb_array_length(images) > 0
  )
);

create table if not exists public.love_message_replies (
  id text primary key default gen_random_uuid()::text,
  message_id text not null references public.love_messages(id) on delete cascade,
  author_id text not null check (author_id in ('maimai', 'tutu')),
  content text not null check (length(trim(content)) > 0),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.love_wishes (
  id text primary key default gen_random_uuid()::text,
  text text not null check (length(trim(text)) > 0),
  created_by text not null check (created_by in ('maimai', 'tutu')),
  completed_by text check (completed_by in ('maimai', 'tutu')),
  completed_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

drop trigger if exists love_messages_touch_updated_at on public.love_messages;
create trigger love_messages_touch_updated_at
before update on public.love_messages
for each row execute function public.touch_updated_at();

drop trigger if exists love_message_replies_touch_updated_at on public.love_message_replies;
create trigger love_message_replies_touch_updated_at
before update on public.love_message_replies
for each row execute function public.touch_updated_at();

drop trigger if exists love_wishes_touch_updated_at on public.love_wishes;
create trigger love_wishes_touch_updated_at
before update on public.love_wishes
for each row execute function public.touch_updated_at();

alter table public.love_messages enable row level security;
alter table public.love_message_replies enable row level security;
alter table public.love_wishes enable row level security;

drop policy if exists "penguinbunny can read messages" on public.love_messages;
create policy "penguinbunny can read messages"
on public.love_messages
for select
to authenticated
using (public.is_penguinbunny_user());

drop policy if exists "owners can create messages" on public.love_messages;
create policy "owners can create messages"
on public.love_messages
for insert
to authenticated
with check (
  public.current_penguinbunny_author() = author_id
  and author_id = board_id
);

drop policy if exists "owners can update messages" on public.love_messages;
create policy "owners can update messages"
on public.love_messages
for update
to authenticated
using (
  public.current_penguinbunny_author() = author_id
  and author_id = board_id
)
with check (
  public.current_penguinbunny_author() = author_id
  and author_id = board_id
);

drop policy if exists "owners can delete messages" on public.love_messages;
create policy "owners can delete messages"
on public.love_messages
for delete
to authenticated
using (
  public.current_penguinbunny_author() = author_id
  and author_id = board_id
);

drop policy if exists "penguinbunny can read replies" on public.love_message_replies;
create policy "penguinbunny can read replies"
on public.love_message_replies
for select
to authenticated
using (public.is_penguinbunny_user());

drop policy if exists "penguinbunny can create replies" on public.love_message_replies;
create policy "penguinbunny can create replies"
on public.love_message_replies
for insert
to authenticated
with check (
  public.current_penguinbunny_author() = author_id
);

drop policy if exists "reply authors can update replies" on public.love_message_replies;
create policy "reply authors can update replies"
on public.love_message_replies
for update
to authenticated
using (
  public.current_penguinbunny_author() = author_id
)
with check (
  public.current_penguinbunny_author() = author_id
);

drop policy if exists "reply authors can delete replies" on public.love_message_replies;
create policy "reply authors can delete replies"
on public.love_message_replies
for delete
to authenticated
using (
  public.current_penguinbunny_author() = author_id
);

drop policy if exists "everyone can read wishes" on public.love_wishes;
create policy "everyone can read wishes"
on public.love_wishes
for select
to anon, authenticated
using (true);

drop policy if exists "penguinbunny can create wishes" on public.love_wishes;
create policy "penguinbunny can create wishes"
on public.love_wishes
for insert
to authenticated
with check (
  public.current_penguinbunny_author() = created_by
);

drop policy if exists "penguinbunny can update wishes" on public.love_wishes;
create policy "penguinbunny can update wishes"
on public.love_wishes
for update
to authenticated
using (public.is_penguinbunny_user())
with check (public.is_penguinbunny_user());

drop policy if exists "penguinbunny can delete wishes" on public.love_wishes;
create policy "penguinbunny can delete wishes"
on public.love_wishes
for delete
to authenticated
using (public.is_penguinbunny_user());

grant select, insert, update, delete on public.love_messages to authenticated;
grant select, insert, update, delete on public.love_message_replies to authenticated;
grant select on public.love_wishes to anon, authenticated;
grant insert, update, delete on public.love_wishes to authenticated;

delete from public.love_wishes
where id in (
  'wish-happy-valley-again',
  'wish-sea-sunrise',
  'wish-cook-dinner'
);

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'penguinbunny-message-images',
  'penguinbunny-message-images',
  true,
  10485760,
  array['image/jpeg', 'image/png', 'image/webp', 'image/gif']
)
on conflict (id) do update
set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "message images are publicly readable" on storage.objects;
create policy "message images are publicly readable"
on storage.objects
for select
to anon, authenticated
using (bucket_id = 'penguinbunny-message-images');

drop policy if exists "penguinbunny can upload message images" on storage.objects;
create policy "penguinbunny can upload message images"
on storage.objects
for insert
to authenticated
with check (
  bucket_id = 'penguinbunny-message-images'
  and public.is_penguinbunny_user()
);

drop policy if exists "penguinbunny can update own message images" on storage.objects;
create policy "penguinbunny can update own message images"
on storage.objects
for update
to authenticated
using (
  bucket_id = 'penguinbunny-message-images'
  and owner = auth.uid()
)
with check (
  bucket_id = 'penguinbunny-message-images'
  and owner = auth.uid()
);

drop policy if exists "penguinbunny can delete own message images" on storage.objects;
create policy "penguinbunny can delete own message images"
on storage.objects
for delete
to authenticated
using (
  bucket_id = 'penguinbunny-message-images'
  and owner = auth.uid()
);
