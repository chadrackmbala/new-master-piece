import { create } from 'zustand';
import axios from "axios";

const useClubStore = create((set) => ({
    clubData: [], // Initialiser news à un tableau vide
    async getClubData() { // Définir getNewsData comme une méthode asynchrone
        try {
            const response = await axios.get('https://65b7cc9846324d531d558a48.mockapi.io/loangoserver');
            set({ clubData: response.data }); // Mettre à jour le state avec les données reçues
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.error('Error fetching news data:', error);
            return error;
        }
    },
    upDateClubData(data) {
        set({ clubData: data });
    }
}));

export default useClubStore;
