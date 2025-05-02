import axios from 'axios';


const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000/api', // Sua URL base
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json'
    }
  });
  
  // Configuração de interceptors global
  axiosInstance.interceptors.response.use(
    response => response.data, // Retorna apenas os dados
    error => {
      // Tratamento global de erros
      console.error('Axios error:', error);
      return Promise.reject(error);
    }
  );
  
  export default axiosInstance;