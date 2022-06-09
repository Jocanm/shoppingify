import styled from 'styled-components';


export interface StandardButtonProps {
    width?: string;
    height?: string;
    padding?: string;
    bgColor?: string;
    color?: string;
    radius?: string;
    margin?: string;
    fontSize?: string;
    fontWeight?: string;
    iconColor?: string;
    iconSize?: string;
    borderRadius?: string;
    boxShadow?: string;
    secondary?: boolean;
    fullWidth?: boolean;

    py?:string;
    px?:string;
    pl?:string;
    pr?:string;
    pt?:string;
    pb?:string;
    mx?:string;
    my?:string;
    mb?:string;
    ml?:string;
    mr?:string;
    mt?:string;

    m?:string;
    p?:string;
}

export const StandardButtonStyles = styled.button<StandardButtonProps>`

    width: ${props => props.width};
    height: ${props => props.height};
    margin: ${props => props.margin};
    padding: ${props => props.padding || '0.5rem 1.4rem'};
    font-size: ${props => props.fontSize || '1rem'};
    border-radius: ${props => props.radius};
    font-weight: ${props => props.fontWeight};
    border-radius: ${props => props.borderRadius || '6px'};
    color: ${props => props.color || props.theme.colors.white};
    background-color: ${props => props.bgColor || props.theme.colors.orange};

    ${props => props.fullWidth && `

        width: 100%;
        padding-left: 0;
        padding-right: 0;
    
    `}


    svg{
        fill: ${props => props.iconColor || props.theme.colors.white};
        font-size: ${props => props.iconSize || props.fontSize};
    }

    
    :disabled{
        background-color: ${props => !props.bgColor ? `${props.theme.colors.orange}90` : `${props.bgColor}90`};
    }

    ${props => props.secondary && `
    
        background-color: ${props.theme.colors.blue};
        :disabled{
            background-color: ${props.theme.colors.blue}90;
        }
    
    `}

    margin-left: ${props => props.mx};
    margin-right: ${props => props.mx};

    margin-top: ${props => props.my};
    margin-bottom: ${props => props.my};

    padding-left: ${props => props.px};
    padding-right: ${props => props.px};

    padding-top: ${props => props.py};
    padding-bottom: ${props => props.py};

    margin-bottom: ${props => props.mb};
    margin-top: ${props => props.mt};
    margin-left: ${props => props.ml};
    margin-right: ${props => props.mr};
    padding-top: ${props => props.pt};
    padding-bottom: ${props => props.pb};
    padding-left: ${props => props.pl};
    padding-right: ${props => props.pr};

    margin: ${props => props.m};
    padding: ${props => props.p};

`
