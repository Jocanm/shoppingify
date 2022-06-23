import { InputAdornment, TextField } from '@mui/material';
import React from 'react';
import { useFormContext, useFormState } from 'react-hook-form';
import styled from 'styled-components';

interface Props {
    name: string;
    label?: string;
    variant?: 'filled' | 'outlined' | 'standard';
    icon?: JSX.Element;
    iconPosition?: 'start' | 'end';
    message?: string;
    [key: string]: any;
}

export const MyTextField = ({ name, label, variant = "outlined", icon, iconPosition, message,...rest }: Props) => {

    const { register } = useFormContext()
    const { errors } = useFormState()

    return (
        <>
            {message && <label>{message}</label>}
            <TextField
                {...register(name, {
                    setValueAs: (value) => typeof value === 'string' ? value.trim() : value
                })}
                label={label}
                variant={variant}
                error={!!errors[name]}
                helperText={errors[name]?.message}
                autoComplete="off"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position={iconPosition || "start"}>
                            {icon}
                        </InputAdornment>
                    ),
                    sx: {
                        borderRadius: '8px',
                    },
                    autoComplete: 'off',
                }}
                {...rest}
            />
        </>
    )
}

export const CustomTextField = styled(TextField)`
    & label.Mui-focused {
        color: ${props => props.theme.colors.orange};
    }
    & .MuiOutlinedInput-root {
        &.Mui-focused fieldset {
            border-color: ${props => props.theme.colors.orange};
        }
    }
`;