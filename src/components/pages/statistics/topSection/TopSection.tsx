import React from 'react'
import { useGetTopStatisticsQuery } from '../../../../config/redux'
import { VanillaLoader } from '../../../ui/loders'
import { TopCategories } from './TopCategories'
import { TopProducts } from './TopProducts'
import * as S from './TopSection.styles'

export const TopSection = () => {

    const { data } = useGetTopStatisticsQuery(true,{
        refetchOnMountOrArgChange:true,
    })

    return (
        <S.TopSectionContainer>
            <TopProducts
                data={data?.topProductsList || []}
            />
            <TopCategories
                data={data?.topCategoriesList || []}
            />
        </S.TopSectionContainer>
    )
}
