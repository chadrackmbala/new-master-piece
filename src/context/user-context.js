import { create } from 'zustand';
import axios from 'axios';
import { toast } from 'react-toastify';

const useUserStore = create((set) => ({
    isLogged: false,
    email: null,
    token: null,
    user: null,
    loading: false,
    login: async (data, callback) => {
        set({ loading: true });
        try {
           const response = await axios.post('https://masterpiece-backend.onrender.com/auth', data);
           set({ loading: false,  isLogged: true, token: response.data.token, user: response.data.user  })
           axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
           toast.success('Vous etes connecte!');
           callback();
        } catch (error) {
            set({ loading: false });
            toast.dismiss();
            toast.error(error?.response?.data.message || error?.message || "Erreur lors de l'authentification")
        }
    },
    upDateIsData(email) {
        set({ isLogged: true, email: email });
    }
}))

export default useUserStore;