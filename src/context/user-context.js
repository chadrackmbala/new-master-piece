import { create } from 'zustand'

const useUserStore = create((set) => ({
    isLogged: false,
    email: "Salut",
    upDateIsLogged() {
        set({ isLogged: true });
    }
}))

export default useUserStore;