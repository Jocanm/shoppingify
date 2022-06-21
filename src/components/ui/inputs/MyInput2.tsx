import React from 'react'
import { Box } from '../..'
import { useFormContext, useFormState } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import * as S from './Inputs.styles';

interface Props {
    name: string
    label?: string
    textarea?: boolean
    [key: string]: any
}

export const MyInput = ({ name, label, textarea, ...rest }: Props) => {

    const { register } = useFormContext()
    const error = !!useFormState().errors[name]

    return (
        <S.CustomInputBox error={error}>
            <label>{label}</label>

            {
                textarea
                    ? (
                        <textarea
                            {...register(name, {
                                setValueAs: (value) => typeof value === 'string' ? value.trim() : value
                            })}
                            {...rest}
                        />
                    )
                    : (
                        <input
                            {...register(name, {
                                setValueAs: (value) => typeof value === 'string' ? value.trim() : value
                            })}
                            {...rest}
                        />
                    )
            }

            <ErrorMessage
                name={name}
                render={({ message }) => <span>{message}</span>}
            />
        </S.CustomInputBox>
    )
}
