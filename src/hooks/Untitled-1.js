import axiosInstance from './utils/axiosInstance';

axiosInstance.get('/users')
  .then(response => console.log(response.data))
  .catch(error => console.error(error));