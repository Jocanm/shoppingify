import { Dialog } from '@mui/material'
import { motion } from 'framer-motion'
import { RootState, setDeleteProductModal, useAppDispatch, useAppSelector, useDeleteProductMutation } from '../../../config/redux'
import { toast } from '../../../shared/helpers'
import { Button } from '../buttons'
import * as S from './modals.styles'
import { useSelector } from 'react-redux';

export const DeleteProductModal = () => {

    // const { deleteProductModal } = useAppSelector().ui
    // const { email } = useAppSelector().auth.user || {}
    // const { activeProduct } = useAppSelector().categories

    const deleteProductModal = useSelector((state: RootState) => state.ui.deleteProductModal);
    const activeProduct = useSelector((state: RootState) => state.categories.activeProduct);
    const email = useSelector((state: RootState) => state.auth.user?.email);

    const dispatch = useAppDispatch()
    const [deleteProduct, { isLoading }] = useDeleteProductMutation()

    const handleClose = () => {
        dispatch(setDeleteProductModal(false))
    }

    const handleDelete = () => {
        if(email === 'test@test.test'){
            handleClose()
            toast('Test user is not allowed to delete products.','error')
            return;
        }
        deleteProduct(activeProduct!.id)
    }

    return (
        <Dialog
            open={deleteProductModal}
            onClose={handleClose}
        >
            <S.ModalWrapper>
                <h2>
                    Are you sure you want to delete this product?
                </h2>
                <S.ButtonContainer>

                    <Button
                        disabled={isLoading}
                        onClick={handleClose}
                    >
                        Cancel
                    </Button>

                    <Button
                        bgColor="#EB5757"
                        onClick={handleDelete}
                        isLoading={isLoading}
                        as={motion.button}
                        whileTap={{ scale: 0.9 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.1 }}
                    >
                        Yes
                    </Button>

                </S.ButtonContainer>
            </S.ModalWrapper>
        </Dialog>
    )
}
