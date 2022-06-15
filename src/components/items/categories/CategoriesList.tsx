import { useMemo } from 'react'
import { useAppSelector } from '../../../config/redux'
import { useFilterContext } from '../../../shared/context'
import * as S from './CategoriesList.styles'
import { CategoryItem } from './CategoryItem'

export const CategoriesList = () => {

    const { categories } = useAppSelector().categories

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
