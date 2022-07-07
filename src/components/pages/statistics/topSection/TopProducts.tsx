import React from 'react'
import * as S from './TopSection.styles'
import { Progress } from '@nextui-org/react';
import { IProductStatistic } from '../../../../shared/models';

interface Props {
    data: IProductStatistic[]
}

export const TopProducts = ({ data }: Props) => {
    return (
        <S.TopSubSectionContainer className='products'>
            <S.TopSectionTitle>Top Products</S.TopSectionTitle>

            {
                data.map(({ product, percentage }) => (

                    <S.TopSectionListItem key={product.id}>
                        <div className="details">
                            <span>{product.name}</span>
                            <span>{percentage}</span>
                        </div>
                        <Progress
                            value={Number(percentage)}
                            size='sm'
                        />
                    </S.TopSectionListItem>

                ))
            }
        </S.TopSubSectionContainer>
    )
}
