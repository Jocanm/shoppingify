import styled from 'styled-components';
import { AppearAnimation, globalWhiteCard, NoVisivleScrollBar } from '../../../shared';
import { ButtonContainer } from '../../materials/newMaterial/NewProductCard.styles';


export const ProductListBox = styled.ul`

    display:flex;
    gap:2rem 1.5rem;
    flex-wrap:wrap;

    ${props => props.theme.breakpoints.md}{
        gap:1rem;
    }

    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    align-items:start;

`

export const ProductItemBox = styled.li<{ isInCart: boolean }>`

    ${globalWhiteCard}
    ${AppearAnimation}

    font-size:1.2rem;
    font-weight:500;
    cursor: pointer;
    padding:0;

    display:grid;
    grid-template-columns: 5fr .5fr;

    >*{
        padding:.8rem;
        transition:all .1s ease-in-out;
    }

    span{
        border-radius: 12px 0 0 12px;
        text-transform:capitalize;
        flex:1;
        :hover{
            background-color:#ededed;
        }
    }

    button{
        height:100%;
        border-radius: 0 12px 12px 0;

        color:${props => props.isInCart ? props => props.theme.colors.white : props.theme.colors.lightGray};
        background-color:${props => props.isInCart && props.theme.colors.orange};

        :hover{
            background-color:${props => props.theme.colors.orange};
            color:${props => props.theme.colors.white};
        }
    }

    ${props => props.theme.breakpoints.md}{
        font-size:1rem;
    }

`

export const ProductDescriptionBox = styled.div`

    ${NoVisivleScrollBar}

    >*{
        ${AppearAnimation}
    }

    height:100%;
    padding: 2rem 3rem;

    display:flex;
    flex-direction:column;
    gap:2rem;

    overflow:auto;

    ${props => props.theme.breakpoints.xs} {
        padding: 2rem;
    }

    background-color:${props => props.theme.colors.white};

`

export const BackButton = styled.button`

    display:flex;
    align-items:center;
    font-size:1.2rem;
    font-weight:500;

    width:5.5rem;

    transition:all .1s ease-in-out;
    padding:.2rem .5rem;
    border-radius:.75rem;

    color:${props => props.theme.colors.orange};

    :hover{
        background-color:${props => props.theme.colors.orange};
        color:${props => props.theme.colors.white};
    }

    svg{
        transform:rotate(180deg);
    }

`

// export const ProductImage = styled.div<{ img: string }>`

//     width:100%;
//     height:15rem;
//     border-radius:1.5rem;

//     background-image:url(${props => props.img});
//     background-size:cover;
//     background-position:center;
//     background-repeat:no-repeat;

// `
export const ProductImage = styled.img`

    width:100%;
    border-radius:1.5rem;

    object-fit:cover;

`

export const ProductInfo = styled.div`

    display:flex;
    flex-direction:column;
    gap:.5rem;

    span{
        font-size:.9rem;
        color:${props => props.theme.colors.lightGray};
    }

    h3{
        text-transform:capitalize;
        font-size:1.3rem;
    }

`

export const ButtonSection = styled(ButtonContainer)`

    button{
        font-weight: 600;
    }

    button:first-child{

        transition:all .2s ease-in-out;

        background-color: ${props => props.theme.colors.white};
        color: ${props => props.theme.colors.text};

        :hover{
            background-color:#ededed;
        }
    }

`