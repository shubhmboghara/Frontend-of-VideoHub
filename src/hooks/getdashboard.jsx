import axios from "./axios";

export const getChannelVideos = async () => {

    try {
        const response = await axios.get(`/dashboard/videos`)
        return response.data;
    } catch (error) {
        console.error("Get liked videos  error:", error);
        throw error;
    }
}

export const getChannelStats = async () => {

    try {
        const response = await axios.get(`/dashboard/stats`)
        return response.data;
    } catch (error) {
        console.error("Get liked videos  error:", error);
        throw error;
    }
}
export const togglePublishStatus = async (videoId) => {

    try {
        const response = await axios.patch(`/video/toggle/publish/${videoId}`)
        return response.data;
    } catch (error) {
        console.error("Get liked videos  error:", error);
        throw error;
    }
}