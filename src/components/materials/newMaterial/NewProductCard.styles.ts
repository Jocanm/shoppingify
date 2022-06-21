import styled from 'styled-components';


export const NewMaterialCardBox = styled.div`

    padding: 3rem 4rem;
    height: 100%;

    display:flex;
    gap:2rem;
    flex-direction: column;
    justify-content: space-between;

    overflow-y: auto;

    background-color: ${props => props.theme.colors.lowWhite};

    ${props => props.theme.breakpoints.xl}{
        padding: 3rem;
    }

    ${props => props.theme.breakpoints.xs} {
        padding: 2rem;
    }

    .form-container{
        display: flex;
        flex-direction: column;

        gap: 1.5rem;
        
        textarea{
            height: 7rem;
        }

        ${props => props.theme.breakpoints.xl}{
            textarea{
                height: 14rem;
            }
        }
    }

`

export const ButtonContainer = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 100%;

    button{
        padding: 1rem 1.5rem;
        font-weight: 500;
    }

    button:first-child{
        background-color: ${props => props.theme.colors.white};
        color: ${props => props.theme.colors.text};
    }

`

export const CategoriesList = styled.ul`

    display: flex;
    flex-direction: column;
    padding:1.2rem .7rem;

    box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.04);
    border-radius: .75rem;
    max-height: 10rem;

    overflow-y: auto;

    border: 1px solid ${props => props.theme.colors.lightGray};
    background-color: ${props => props.theme.colors.white};

    ${props => props.theme.breakpoints.xl}{
        max-height: 12rem;
    }

`

export const CategoryItem = styled.li<{ isSelected: boolean }>`

    cursor: pointer;
    padding: .5rem 1rem;
    color:#828282;
    font-weight: 600;

    font-size: 1.2rem;
    transition: all .1s ease-in-out;
    border-radius: .75rem;

    text-transform: capitalize;

    background-color: ${props => props.isSelected && props.theme.colors.orange};
    color: ${props => props.isSelected && props.theme.colors.white};

    :hover{
        background-color:${props => props.isSelected ? props.theme.colors.orange : '#f2f2f2'};
        color: ${props => props.isSelected ? props.theme.colors.white : props.theme.colors.text};
    }

`