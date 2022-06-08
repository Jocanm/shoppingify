import React from 'react'
import { TextField } from '@mui/material';
import { useFormContext, useFormState } from 'react-hook-form';

interface Props {
    name: string;
    label?: string;
    variant?: 'filled' | 'outlined' | 'standard';
    [key: string]: any;
}

export const MyTextField = ({ name, label, variant = "outlined", ...rest }: Props) => {

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
            {...rest}
        />
    )
}
