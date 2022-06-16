import styled from 'styled-components';
import { AppearAnimation, NoVisivleScrollBar } from '../../shared';

interface Props{
    showShoppingList: boolean;
}

export const ShoppingListContainer = styled.section<Props>`

    ${NoVisivleScrollBar}

    width: 100%;
    height: 100%;
    overflow-y: auto;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1.2rem;

    background-color: ${props => props.theme.colors.lightOrange};

    transition: transform 0.3s ease-in-out;

    .img-container{
        padding: 3rem 2rem 0 2rem;
    }


    img:last-child{
        width: 20rem;
        height: 20rem;
        position:relative;
    }

    ${props => props.theme.breakpoints.lg} {
        position:absolute;
        max-width: 29rem;
        right: 0;

        ${props => props.showShoppingList 
        ? `
            transform: translateX(0rem);
        ` 
        : `
            display:none;
        `
    }

    }

    ${props => props.theme.breakpoints.xs} {
        width: auto;
        left: 6rem;

        .img-container{
            padding-top:1.5rem;
        }

        img:last-child{
            width: 17rem;
            height: 17rem;
            position:relative;
        }
    }

`

export const ShoppingImageCard = styled.section`

    display:flex;
    align-items: center;

    border-radius: 1.5rem;
    padding-right: 1rem;
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

    img{
        width:8.5rem;
        height:8.5rem;
    }

`

export const ShoppingNameBox = styled.section`

    background-color: ${props => props.theme.colors.white};
    padding: 3rem 2rem;
    position: sticky;
    bottom: 0;

    ${props => props.theme.breakpoints.xs} {
        padding: 2rem;
    }

    input{
        width: 100%;
        border-radius:0.75rem;
        padding: 0.8rem;
        padding-right:7rem;
        height:3.75rem;

        border: 0.125rem solid ${props => props.theme.colors.lightGray};
        color: ${props => props.theme.colors.text};

        :focus{
            border: 0.125rem solid ${props => props.theme.colors.orange};
        }
    }

    button{
        position:absolute;
        height:3.75rem;
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

    ${props => props.theme.breakpoints.xs} {

        p{
            margin-bottom: 0;
            margin-top: .5rem;
            font-size: 1.4rem;
        }

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

        border-radius: 0.75rem;

        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.5rem;

    `}

    ${props => props.theme.breakpoints.xs} {
        ${props => props.isEditMode && `
            gap: 0.2rem;
        `}
    }

    button:not(.quantity){
        display: ${props => !props.isEditMode && 'none'};
    }

    button{
        border-radius: 0.625rem;
        padding: .5rem .3rem;
        transition: background-color .2s ease-in-out;
    }

    button.quantity{
        word-break: keep-all;
        border-radius: 1.5rem;
        padding: .5rem 1rem;
        font-size: 1rem;

        min-width: 6rem;
        max-height: 2.5rem;

        border: 0.125rem solid ${props => props.theme.colors.orange};
        color: ${props => props.theme.colors.orange};

        ${props => props.theme.breakpoints.xs} {
            
            ${props => props.isEditMode && `
                padding: .5rem .3rem;
                border-radius: 1rem;
            `}
        }
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