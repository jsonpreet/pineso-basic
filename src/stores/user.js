import create from 'zustand'

export const useUserStore = create((set) => ({
    isFetched: false,
    isSuccess: false,
    isLoading: false,
    isError: false,
    error: '',
    user: [],
    setUser : (user) => set({ user }),
    setFetched: (isFetched) => set({ isFetched }),
    setSuccess: (isSuccess) => set({ isSuccess }),
    setLoading: (isLoading) => set({ isLoading }),
    setError: (error) => set({ error }),
}))