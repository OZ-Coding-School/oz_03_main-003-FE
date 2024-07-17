import axios from "./axios";

export const healthCheck = () => {
    return axios.get("/health");
};
