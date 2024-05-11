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
           const response = await axios.post('/auth', data);
           set({ loading: false,  isLogged: true, token: response.data.token, user: response.data.user  })
           axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
           toast.success('Vous etes connecté avec succès ! 🎉');
           callback();
        } catch (error) {
            set({ loading: false });
            toast.dismiss();
            toast.error(error?.response?.data.message || error?.message || "Erreur lors de l'authentification")
        }
    },
    upDateIsData(email) {
        set({ isLogged: true, email: email });
    },
    setLogOut() {
        set({ isLogged: false, email: null });
        console.log(isLogged);
    }
}))

export default useUserStore;