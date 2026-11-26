const siteAuth = {
  authors: [
    { id: "maimai", name: "麦麦小鹅", emoji: "🐧", email: "suzhiyuan0326@163.com" },
    { id: "tutu", name: "兔兔公主", emoji: "🐰", email: "15320934752@163.com" },
  ],

  createClient() {
    return window.supabase?.createClient?.(
      "https://jzpoaywushcdqrhssksm.supabase.co",
      "sb_publishable_yYHiwLSXOGgQtolLUp0sIQ_9F6y3s5V",
      { auth: { autoRefreshToken: true, detectSessionInUrl: true, persistSession: true } },
    ) || null;
  },
};
