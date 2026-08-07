const SUPABASE_URL = "mfvatxtvhxnzpdjecygn.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_pLh5v9s8fcjrZnVwjPg3zA_0z5afFFz";

if (!window.supabase) {
    throw new Error("The Supabase library did not load.");
}

window.supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);

console.log("Supabase client connected:", window.supabaseClient);