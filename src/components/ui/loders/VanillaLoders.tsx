import { FC } from "react"
import { FullScreenContainer, VanillaLoaderStyles } from "./Loaders.styles"

interface Props {
    size?: string
    color?: string
    isOpaque?: boolean
    message?: string
}

export const VanillaLoader: FC<Props> = ({ color, size, message }) => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                width: '100%',
            }}
        >
            <VanillaLoaderStyles
                width={size}
                height={size}
                color={color}
            />
            {message && <p>{message}</p>}
        </div>
    )
}

export const FullScreenVanillaLoder: FC<Props> = ({ color, size, isOpaque }) => {
    return (
        <FullScreenContainer
            isOpaque={isOpaque}
        >
            <VanillaLoaderStyles
                width={size}
                height={size}
                color={color}
            />
        </FullScreenContainer>
    )
}