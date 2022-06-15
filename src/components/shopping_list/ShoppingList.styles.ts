import styled from 'styled-components';
import { AppearAnimation, NoVisivleScrollBar } from '../../shared';


export const ShoppingListContainer = styled.section`

    ${NoVisivleScrollBar}

    width: 100%;
    height: 100%;
    overflow-y: auto;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1.2rem;

    background-color: ${props => props.theme.colors.lightOrange};

    /* padding: 3rem 2rem; */
    
    .img-container{
        padding: 3rem 2rem 0 2rem;
    }

    img:last-child{
        width: 20rem;
        height: 20rem;
        position:relative;
    }

    ${props => props.theme.breakpoints.lg} {
        display: none;
    }

`

export const ShoppingImageCard = styled.section`

    display:flex;
    align-items: center;

    border-radius: 24px;
    background-color: ${props => props.theme.colors.redWine};

    .shopping-image{
        position: relative;
        bottom: 1.3rem;
    }

    .box-content{
        display: flex;
        flex-direction: column;

        font-size: 1.2rem;
        font-weight: bold;
        gap: 1rem;

        span{
            color: ${props => props.theme.colors.white};
        }

        button{
            width:8rem;
            font-weight: bold;
            padding: .7rem;

            background-color: ${props => props.theme.colors.white};
            color: ${props => props.theme.colors.text};
        }
    }

`

export const ShoppingNameBox = styled.section`

    background-color: ${props => props.theme.colors.white};
    padding: 3rem 2rem;
    position: sticky;
    bottom: 0;

    input{
        width: 100%;
        border-radius:12px;
        padding: 0.8rem;
        padding-right:7rem;
        height:60px;

        border: 2px solid ${props => props.theme.colors.lightGray};
        color: ${props => props.theme.colors.text};

        :focus{
            border: 2px solid ${props => props.theme.colors.orange};
        }
    }

    button{
        position:absolute;
        height:60px;
        right:2rem;
    }

`


export const ShoppingProductsListBox = styled.div`

    flex:1;

    display: flex;
    flex-direction: column;
    gap: 2rem;

    padding: 0 2rem;

    p{
        font-size: 1.6rem;
        font-weight: bold;
        margin-bottom: 1rem;
    }

`

interface IProps{
    isEditMode: boolean;
}

export const ShoppedItemStyles = styled.li<IProps>`

    ${AppearAnimation}

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;

    font-size: 1.2rem;
    font-weight: 500;

    ${props => props.isEditMode && `
    
        display: grid;
        grid-template-columns: 1fr 1.5fr;
    
    `}

`

export const ShoppedItemConfig = styled.div<IProps>`

    ${props => props.isEditMode && `
    
        background-color: #ffffff;

        border-radius: 12px;

        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.5rem;
    
    `}

    button:not(.quantity){
        display: ${props => !props.isEditMode && 'none'};
    }

    button{
        border-radius: 10px;
        padding: .5rem .3rem;

        transition: all .2s ease-in-out;
    }

    button.quantity{
        border-radius: 24px;
        padding: .5rem 1.5rem;

        border: 2px solid ${props => props.theme.colors.orange};
        color: ${props => props.theme.colors.orange};
    }

    .delete{
        color: ${props => props.theme.colors.white};
        background-color: ${props => props.theme.colors.orange};
    }

    .less, .plus{
        padding: .5rem .6rem;
        color: ${props => props.theme.colors.orange};
        font-size: 1.5rem;

        :hover{
            background-color: ${props => props.theme.colors.lightOrange};
        }
    }

`