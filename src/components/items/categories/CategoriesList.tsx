import { useMemo } from 'react'
import { RootState, setShowProductForm, useAppDispatch, useAppSelector } from '../../../config/redux'
import { useFilterContext } from '../../../shared/context'
import { Button } from '../../ui/buttons'
import * as S from './CategoriesList.styles'
import { CategoryItem } from './CategoryItem'
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';

export const CategoriesList = () => {

    // const { categories } = useAppSelector().categories
    const categories = useSelector((state: RootState) => state.categories.categories)
    const dispatch = useAppDispatch()

    const { productName } = useFilterContext()

    const filteredCategories = useMemo(() => {

        if (!productName) {
            return categories
        }

        const newCategories = categories.filter(({ products }) => {
            const productsNames = products.map(({ name }) => name.toLowerCase()).toLocaleString()
            return productsNames.includes(productName.toLowerCase())
        })

        return newCategories

    }, [productName, categories])

    const onOpen = () => {
        dispatch(setShowProductForm(true))
    }

    const numberOfProducts = useMemo(() => {
        return categories.reduce((acc, { products }) => {
            return acc + products.length
        }, 0)
    },[categories])

    if (numberOfProducts === 0) {
        return (
            <S.NoProductsBox>
                <span>
                    {"It's seems you don't have any products."}
                </span>
                <Button
                    as={motion.button}
                    // whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                    type="button"
                    onClick={onOpen}
                >
                    Add a new product
                </Button>
            </S.NoProductsBox>
        )
    }

    return (
        <S.CategoryListContainer>

            {
                filteredCategories.map(category => (
                    <CategoryItem
                        key={category.id}
                        {...category}
                    />
                ))
            }

        </S.CategoryListContainer>
    )
}
