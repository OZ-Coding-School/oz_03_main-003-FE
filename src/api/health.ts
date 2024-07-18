import axios from "./axios";

export const healthCheck = async () => {
    return await axios.get("/health");
};
