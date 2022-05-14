import apiClient from "./axios";

export function getCurrentChange(from: String, to: String) {
  return apiClient
    .post("/calculator/exchange/calculate", {
      currency_from: from,
      currency_to: to,
    })
    .then((response) => response.data);
}
