import { CategoriesList, Header } from '../components';
import { PrivateLayout } from '../layout';
import * as S from '../shared';
import { FilterProvider } from '../shared/context';
import { NextPageWithLayout } from './_app';
import { ReactElement } from 'react';

const HomePage: NextPageWithLayout = () => {

    return (
        <FilterProvider>
            <S.HomePageContainer>

                <Header />

                <CategoriesList />

            </S.HomePageContainer>
        </FilterProvider>
    )
}

HomePage.auth = true;

HomePage.getLayout = function getLayout(page: ReactElement) {
    return (
        <PrivateLayout
            title="Shoppingify | Home"
            description="Home page"
        >
            {page}
        </PrivateLayout>
    )
}

export default HomePage