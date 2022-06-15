import React from 'react';

interface FilterContextProps {

    productName: string
    setProductName: (filter: string) => void

}

export const FilterContext = React.createContext({} as FilterContextProps);

export const useFilterContext = () => React.useContext(FilterContext);