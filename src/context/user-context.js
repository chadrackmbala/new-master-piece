import { create } from 'zustand'

const useUserStore = create((set) => ({
    isLogged: false,
    email: "Salut",
    upDateIsLogged() {
        set({ email: "drackmb@gmail.com" });
    }
}))

export default useUserStore;