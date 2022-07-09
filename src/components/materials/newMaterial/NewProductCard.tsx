import { useForm } from 'react-hook-form';
import { Button, MyInput, Form, Box } from '../../';
import * as S from './NewProductCard.styles';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppSelector, useAppDispatch, startCreateNewProduct } from '../../../config/redux';
import { patterns } from '../../../shared';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
    toggleShowNewProduct: () => void
}

export const ProductFormShape = Yup.object({
    name: Yup
        .string()
        .required('Name is required')
        .min(3, 'Name must be at least 3 characters'),
    category: Yup
        .string()
        .required('Category is required')
        .lowercase(),
    image: Yup
        .string().matches(patterns.url, { excludeEmptyString: true, message: "Image url is invalid" }),
    note: Yup
        .string(),
})

export interface ProductFormProps extends Yup.InferType<typeof ProductFormShape> { }

export const NewProductCard = ({ toggleShowNewProduct }: Props) => {

    const methods = useForm<ProductFormProps>({ resolver: yupResolver(ProductFormShape) })
    const dispatch = useAppDispatch()

    const { categories } = useAppSelector().categories;
    const { showOpaqueLoader, showProductForm } = useAppSelector().ui;

    const selectedCategory = methods.watch('category')

    const onSubmit = async (data: ProductFormProps) => {
        await dispatch(startCreateNewProduct(data))
        methods.reset()
    }

    const onSelectCategory = (value: string) => {
        methods.setValue('category', value)
        methods.clearErrors('category')
    }

    return (
        <AnimatePresence>
            {
                showProductForm &&
                <S.NewMaterialCardBox
                    as={motion.div}
                    animate={{ x: 0 }}
                    initial={{ x: '110%' }}
                    exit={{ x: '110%' }}
                    transition={{ duration: 0.3 }}
                    key="newProductCard"
                >

                    <Form methods={methods} className="form-container">

                        <p>Add new product</p>

                        <MyInput
                            name='name'
                            label='Name'
                            placeholder="Enter a name"
                        />
                        <MyInput
                            name='note'
                            label='Note (optional)'
                            textarea
                            placeholder="Enter a note"
                        />
                        <MyInput
                            name='image'
                            label='Image (optional)'
                            placeholder="Enter a url"
                        />

                        <Box flex flexColumn gap="1.5rem">
                            <MyInput
                                name='category'
                                label='Category'
                                placeholder="Enter a category or choose one below"
                            />

                            <S.CategoriesList>
                                {
                                    categories.map(cat => (
                                        <S.CategoryItem
                                            onClick={() => onSelectCategory(cat.name)}
                                            isSelected={selectedCategory?.toLowerCase() === cat.name.toLowerCase()}
                                            key={cat.id}
                                        >
                                            {cat.name.toLowerCase()}
                                        </S.CategoryItem>
                                    ))
                                }
                            </S.CategoriesList>
                        </Box>

                    </Form>

                    <S.ButtonContainer>
                        <Button onClick={toggleShowNewProduct}>
                            Cancel
                        </Button>
                        <Button
                            onClick={methods.handleSubmit(onSubmit)} disabled={showOpaqueLoader} as={motion.button}
                            whileTap={{ scale: 0.9 }}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                        >
                            Save
                        </Button>
                    </S.ButtonContainer>
                </S.NewMaterialCardBox>
            }
        </AnimatePresence>
    )
}
