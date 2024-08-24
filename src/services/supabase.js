import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://dmsyuswfhznafnpezbni.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRtc3l1c3dmaHpuYWZucGV6Ym5pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI5MDY4MjgsImV4cCI6MjAzODQ4MjgyOH0.CLOUAtzSTAIIT7yJS7qRsX7jQChM8-TW7didg7aq2qQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
