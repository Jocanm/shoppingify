import styled from 'styled-components';
import { ButtonSection } from '../../items/products/ProductsList.styles';


export const DeleteProductModalWrapper = styled.section`

    padding: 2rem;
    display:flex;
    flex-direction: column;
    gap: 1rem;

    h2{
        font-size: 2rem;
        font-weight: 500;
    }

`

export const ButtonContainer = styled(ButtonSection)`

    display:flex;
    gap:.5rem;
    justify-content:flex-end;
    
    button{
        font-size: 1.2rem;
        border-radius: .75rem;
        padding: 1rem 2rem;
    }

    button:last-child{
        width:5.8rem;
        height:3.5rem;
    }

`