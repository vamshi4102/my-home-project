import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL ="https://yukxeczfumuvnvkdjlbh.supabase.co";
const SUPABASE_ANNON_KEY ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1a3hlY3pmdW11dm52a2RqbGJoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY5MTExMjgsImV4cCI6MjA3MjQ4NzEyOH0.s3prY3WuQNHfeahmKnXOORpzpXXWwIFr4ieL84IWSMI";

export const supabase = createClient(SUPABASE_URL,SUPABASE_ANNON_KEY);