import API from "./axios";



export const getVideoComments = (videoId) => {
  return  API.get(`/comments/${videoId}`);
};

export const addComment = (videoId, commentData) => {
  return  API.post(`/comments/${videoId}`, commentData);
};

export const deleteComment = (commentId) => {
  return  API.delete(`/comments/c/${commentId}`);
};

export const updateComment = (commentId, updatedData) => {
  return  API.patch(`/comments/c/${commentId}`, updatedData);
};


export const getUserComments = () =>{
    return  API.get(`/comments/user/all`, updatedData);

}
