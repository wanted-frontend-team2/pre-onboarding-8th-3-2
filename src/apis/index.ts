import axios from "axios";

import type { SickListType } from "src/types/sick.type";
import type { APIResponse } from "./type";

const BASE_URL = "http://localhost:4000";

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
});

export const searchAPI = {
  get: (keyword: string, _limit = 6): APIResponse<SickListType> => {
    console.log("calling api");
    return api.get("/sick", { params: { q: keyword, _limit } });
  },
};
