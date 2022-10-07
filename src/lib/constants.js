export const BASE_URI = 'https://node.deso.org/api/v0';
export const BASE_IDENTITY_URI = 'https://identity.deso.org';

export const config = {
    defaultOptions: {
        queries: {
            staleTime: 1 * 60 * 60 * 1000,
            cacheTime: 5 * 60 * 60 * 1000,
            refetchOnWindowFocus: false
        }
    }
}