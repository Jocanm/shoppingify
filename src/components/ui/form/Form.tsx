import React from 'react';
import { FormProvider, UseFormReturn } from 'react-hook-form';

interface Props {
    methods: UseFormReturn<any, any>
    children: React.ReactNode
    onSubmit?: (data: any) => void
    className?: string
}

export const Form = ({ methods, children, onSubmit, className }: Props) => {

    return (
        <FormProvider
            {...methods}
        >
            <form
                onSubmit={onSubmit}
                className={className}
            >
                {children}
            </form>
        </FormProvider>
    )
}
