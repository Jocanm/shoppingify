import React from 'react'
import * as S from './TopSection.styles'
import { Progress } from '@nextui-org/react';
import { IProductStatistic } from '../../../../shared/models';
import CountUp from 'react-countup';

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
                            <span>
                                <CountUp
                                    start={0}
                                    end={Number(percentage)}
                                    duration={0.5}
                                    decimal='.'
                                    decimals={1}
                                />%
                            </span>
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
