import { Dialog } from '@mui/material'
import React, { useState } from 'react'
import { setDeleteProductModal, startDeleteProduct, useAppDispatch, useAppSelector } from '../../../config/redux'
import { Button } from '../buttons'
import * as S from './modals.styles'
import { motion } from 'framer-motion';

export const DeleteProductModal = () => {

    const [isLoading, setIsLoading] = useState(false)

    const { deleteProductModal } = useAppSelector().ui
    const dispatch = useAppDispatch()

    const handleClose = () => {
        dispatch(setDeleteProductModal(false))
    }

    const handleDelete = async () => {
        setIsLoading(true)
        await dispatch(startDeleteProduct())
        setIsLoading(false)
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
