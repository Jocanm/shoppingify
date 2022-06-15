import { Box, CategoriesList, Header, ShoppingList } from '../components';
import { PrivateLayout } from '../layout';
import * as S from '../shared';

const HomePage = () => {
    return (
        <PrivateLayout
            title="Shoppingify | Home"
            description="Home page"
        >
            <S.HomePageContainer>

                <Header />

                <CategoriesList />

            </S.HomePageContainer>
        </PrivateLayout>
    )
}

HomePage.auth = true;

export default HomePage