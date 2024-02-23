import { create } from 'zustand'

const useUserStore = create((set) => ({
    isLogged: false,
    email: null,
    upDateIsLogged() {
        set({ isLogged: true });
    }
}))

export default useUserStore;