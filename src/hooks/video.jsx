import axios from "./axios";

    export const updateVideo= async (videoId, formData) => {
    
    try {
        const response = await axios.patch(`/video/${videoId}`, formData)
        return response.data;
    } catch (error) {
        console.error("Update video error:", error);
        throw error;
    }
}

    export const deleteVideo= async (videoId) => {
        
        try {
            const response = await axios.delete(`/video/${videoId}`)
            return response.data;
        } catch (error) {
            console.error("delete Video error:", error);
            throw error;
        }
    }

    export const publishAVideo= async (formData) => {
    
    try {
        const response = await axios.post(`/video/`, formData)
        return response.data;
    } catch (error) {
        console.error("Publish video error:", error);
        throw error;
    }
}

