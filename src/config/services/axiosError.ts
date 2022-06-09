import axios from 'axios';

export const isAxiosError = (error: any): boolean => {
    
    const isAxiosError = axios.isAxiosError(error);
    return isAxiosError;

}