import React from 'react'
import { InputAdornment, SvgIconTypeMap, TextField } from '@mui/material';
import { useFormContext, useFormState } from 'react-hook-form';
import styled from 'styled-components';
import { OverridableComponent } from '@mui/material/OverridableComponent';

interface Props {
    name: string;
    label?: string;
    variant?: 'filled' | 'outlined' | 'standard';
    // Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {muiName: string;}
    icon?: JSX.Element;
    iconPosition?: 'start' | 'end';
    [key: string]: any;
}

export const MyTextField = ({ name, label, variant = "outlined", icon, iconPosition, ...rest }: Props) => {

    const { register } = useFormContext()
    const { errors } = useFormState()

    return (
        <TextField
            {...register(name)}
            autoComplete="off"
            label={label}
            variant={variant}
            error={!!errors[name]}
            helperText={errors[name]?.message}
            InputProps={{
                startAdornment: (
                    <InputAdornment position={iconPosition || "start"}>
                        {icon}
                    </InputAdornment>
                ),
                sx:{
                    borderRadius: '8px',
                }
            }}
            {...rest}
        />
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