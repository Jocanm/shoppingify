import React from 'react'
import * as S from './TopSection.styles'
import { Progress } from '@nextui-org/react';
import { ICategoryStatistic } from '../../../../shared/models';

interface Props {
    data: ICategoryStatistic[]
}

export const TopCategories = ({data}: Props) => {
    return (
        <S.TopSubSectionContainer className='categories'>
            <S.TopSectionTitle>Top Categories</S.TopSectionTitle>
            
            {
                data.map(({ category, percentage }) => (

                    <S.TopSectionListItem key={category.id}>
                        <div className="details">
                            <span>{category.name}</span>
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
