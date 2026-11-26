-- Enable the private study room after supabase/setup.sql has been applied.
begin;

drop policy if exists "study room members can receive" on realtime.messages;
create policy "study room members can receive"
on realtime.messages
for select
to authenticated
using (
  realtime.topic() = 'penguin-bunny-study-room'
  and extension in ('broadcast', 'presence')
  and (select public.is_penguinbunny_user())
);

drop policy if exists "study room members can send" on realtime.messages;
create policy "study room members can send"
on realtime.messages
for insert
to authenticated
with check (
  realtime.topic() = 'penguin-bunny-study-room'
  and extension in ('broadcast', 'presence')
  and (select public.is_penguinbunny_user())
);

commit;
