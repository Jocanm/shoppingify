import React from 'react'
import * as S from './TopSection.styles'
import { Progress } from '@nextui-org/react';
import { ICategoryStatistic } from '../../../../shared/models';
import CountUp from 'react-countup';

interface Props {
    data: ICategoryStatistic[]
}

export const TopCategories = ({ data }: Props) => {
    return (
        <S.TopSubSectionContainer className='categories'>
            <S.TopSectionTitle>Top Categories</S.TopSectionTitle>

            {
                data.map(({ category, percentage }) => (

                    <S.TopSectionListItem key={category.id}>
                        <div className="details">
                            <span>{category.name}</span>
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
