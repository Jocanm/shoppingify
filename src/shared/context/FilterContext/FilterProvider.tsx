import React from 'react'
import { FilterContext } from './FilterContext'

interface Props {
    children: React.ReactNode
}

export const FilterProvider = ({ children }: Props) => {

    const [productName, setProductName] = React.useState('')

    return (
        <FilterContext.Provider
            value={{ productName, setProductName }}
        >
            {children}
        </FilterContext.Provider>
    )
}
