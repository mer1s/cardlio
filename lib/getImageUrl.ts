import { supabase } from "./supabase";

export function getImageUrl(path: string) {
  const { data } = supabase.storage.from("content").getPublicUrl(path);
  return data.publicUrl;
}