import http from "@/core/http";

export async function getDetailsSurvayDS(hash :string) {
  return http.get(`/polls/poll/${hash}`);
}