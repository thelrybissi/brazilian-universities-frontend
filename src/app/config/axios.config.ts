import axios from 'axios';


const axiosInstance = axios.create({
    baseURL: 'https://brazilian-universities-backend-production.up.railway.app/api/Universities', 
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json'
    }
  });
  
  
  axiosInstance.interceptors.response.use(
    response => response.data, 
    error => {
      console.error('Axios error:', error);
      return Promise.reject(error);
    }
  );
  
  export default axiosInstance;