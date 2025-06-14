
import axios from "./axios";

export const getlikedvideos = async () => {
    
    try {
        const response = await axios.get(`/likes/videos`)
        return response.data;
    } catch (error) {
        console.error("Get liked videos  error:", error);
        throw error;
    }
};