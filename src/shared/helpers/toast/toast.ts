import Toast from 'react-hot-toast'
import { DefaultToastOptions } from 'react-hot-toast';

type ToastType = 'success' | 'error';

interface IToast {
    (message: string, type?: ToastType, options?: DefaultToastOptions): void
}

export const toast: IToast = (message, type = "success", options) => {

    //@ts-ignore
    Toast[type](message, options)

}