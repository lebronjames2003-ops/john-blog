const SUPABASE_URL = "mfvatxtvhxnzpdjecygn.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_pLh5v9s8fcjrZnVwjPg3zA_0z5afFFz";

window.supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);