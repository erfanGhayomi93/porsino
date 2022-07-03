import http from "@/core/http";
import { imei } from "@/modules/home/root/datasources/home.datasource";

export function getPollsDataDS() {
    return http.get(`/polls/${imei}`);
}