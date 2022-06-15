import React, { FC } from 'react';
import { Box } from '../../globalComponents';
import { VanillaLoader } from '../loders';
import { StandardButtonProps, StandardButtonStyles } from './Button.style';

interface Props extends StandardButtonProps {
    Icon?: JSX.Element;
    onClick?: () => void;
    disabled?: boolean;
    isLoading?: boolean;
    loaderSize?: string;
    loaderColor?: string;
    [key: string]: any;
}

export const Button: FC<Props> = (props) => {

    const { children, disabled, isLoading, loaderColor = "#fff", loaderSize = "1rem", Icon, ...rest } = props;

    return (
        <StandardButtonStyles
            {...rest}
            disabled={disabled || isLoading}
        >
            {
                isLoading
                    ? (
                        <VanillaLoader
                            size={loaderSize}
                            color={loaderColor}
                        />
                    )
                    : (
                        <Box flex justifyCenter alignCenter gap=".5rem">
                            {children}
                            {Icon && Icon}
                        </Box>
                    )
            }
        </StandardButtonStyles>
    )
}
