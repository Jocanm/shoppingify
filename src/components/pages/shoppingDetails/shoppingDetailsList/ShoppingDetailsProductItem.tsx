import { openProductDetails } from '../../../../config/redux/actions'
import { IPurchasedProductV2 } from '../../../../shared/models'
import * as S from './ShoppingDetailsList.styles'

interface Props {
    purchasedProduct: IPurchasedProductV2,
    position: number
}

const variants = {
    visible: (i: number) => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: (i + 0.1) * 0.1,
            duration: 0.4,
        }
    }),
    hidden: { opacity: 0, x: 100 },
}

export const ShoppingDetailsProductItem = ({ purchasedProduct, position }: Props) => {

    const { product, quantity, done } = purchasedProduct

    const onSelectProduct = () => {
        openProductDetails(product)
    }

    return (
        <S.ShoppingDetailsProductItemStyles
            done={done}
            animate="visible"
            initial="hidden"
            variants={variants}
            custom={position}
        >
            <span className="name" onClick={onSelectProduct}>{product.name}</span>
            <span className="quantity">{quantity} pc</span>
        </S.ShoppingDetailsProductItemStyles>
    )
}
