import http from "@/core/http";
import { imei } from "@/modules/home/root/datasources/home.datasource";

export async function getCompetitionsDataDS() {
  return http.get(`/competitions/${imei}`);
}