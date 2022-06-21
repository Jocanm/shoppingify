import React from 'react';
import { FieldValues, FormProvider, UseFormReturn } from 'react-hook-form';

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
                onSubmit={methods.handleSubmit(onSubmit || (() => { }))}
                className={className}
            >
                {children}
            </form>
        </FormProvider>
    )
}
