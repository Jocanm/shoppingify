import { useState } from 'react';
import { Box, CategoriesList, Header, ShoppingList } from '../components';
import { PrivateLayout } from '../layout';
import * as S from '../shared';
import { FilterProvider } from '../shared/context';

const HomePage = () => {

    return (
        <PrivateLayout
            title="Shoppingify | Home"
            description="Home page"
        >
            <FilterProvider>
                <S.HomePageContainer>

                    <Header />

                    <CategoriesList />

                </S.HomePageContainer>
            </FilterProvider>
        </PrivateLayout>
    )
}

HomePage.auth = true;

export default HomePage