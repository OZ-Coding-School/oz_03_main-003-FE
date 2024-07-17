import axios from "./axios";

export const loginGoogle = () => {
    return axios.get("/auth/google/login");
};
