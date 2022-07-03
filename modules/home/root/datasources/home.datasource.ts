import http from "@/core/http";

export async function getHomeDataDS() {
  return http.get(`/account/${imei}/home`);
}

export const imei = "4285FeD9-E79C-4D23-9F92-999E48F97348"
