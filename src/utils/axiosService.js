import axios from 'axios';
import useUserStore from '../context/user-context';


const { isLogged, token, logout } = useUserStore();

const axiosInstance = axios.create({
  baseURL: 'https://masterpiece-backend.onrender.com/home',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`, // Ajoutez votre token JWT ici
  },
});

export default axiosInstance;
