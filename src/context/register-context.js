import { create } from 'zustand';
import axios from "axios";

const useRegisterStore = create((set) => ({
    studentsRegister: [],
    async getRegistersData() { // Définir getNewsData comme une méthode asynchrone
        try {
            const response = await axios.get('http://localhost:3000/users');
            set({ studentsRegister: response.data.users }); // Mettre à jour le state avec les données reçues
            console.log(response.data.users);
            return studentsRegister;
        } catch (error) {
            console.error('Error fetching re data:', error);
            return error;
        }
    },
    // upDateRegistersData(data) {
    //     set({ studentsRegister: data });
    // }
}));

export default useRegisterStore;