import axios from "./axios";


export const useProfileApi = () => {
  const getProfile = async (username) => {
    const res = await axios.get(`/users/c/${username}`);
    return res.data.data;
  };

  const getUserPosts = async (userId) => {
    const res = await axios.get(`/post/user/${userId}`);
    return res.data.data;
  };

  const createPost = async (content, owner) => {
    const res = await axios.post(`/post`, { content, owner });
    return res.data.data;
  };

  const updatePost = async (id, content) => {
    const res = await axios.patch(`/post/${id}`, { content });
    return res.data.data;
  };

  const deletePost = async (id) => {
    const res = await axios.delete(`/post/${id}`);
    return res.data.data;
  };

  const likePost = async (id) => {
    const res = await axios.post(`/likes/toggle/p/${id}`);

    return res.data.data;
  };

  const updateAvatar = async (formData) => {
    const res = await axios.patch(`/users/update-avatar`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return res.data.data;
  };

  const updateCoverImage = async (formData) => {
    const res = await axios.patch(`/users/updatecover-image`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return res.data.data;
  };



  const getideoByuser = async (userId) => {
    const res = await axios.get(`/video/u/${userId}`);
    return res.data.data;
  };

  return {
    getProfile,
    getUserPosts,
    createPost,
    updatePost,
    deletePost,
    likePost,
    updateAvatar,
    updateCoverImage,
    getideoByuser
  };
};