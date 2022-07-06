import { openProductDetails } from '../../../../config/redux/actions'
import { IPurchasedProductV2 } from '../../../../shared/models'
import * as S from './ShoppingDetailsList.styles'

export const ShoppingDetailsProductItem = ({ product, quantity, done }: IPurchasedProductV2) => {

    const onSelectProduct = () => {
        openProductDetails(product)
    }

    return (
        <S.ShoppingDetailsProductItemStyles done={done}>
            <span className="name" onClick={onSelectProduct}>{product.name}</span>
            <span className="quantity">{quantity} pc</span>
        </S.ShoppingDetailsProductItemStyles>
    )
}
