import { FC } from "react"
import { FullScreenContainer, VanillaLoaderStyles } from "./Loaders.styles"

interface Props {
    size?: string
    color?: string
}

export const VanillaLoader: FC<Props> = ({ color, size }) => {
    return (
        <div
            style={{
                display: 'flex',
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
        </div>
    )
}

export const FullScreenVanillaLoder: FC<Props> = ({ color, size }) => {
    return (
        <FullScreenContainer>
            <VanillaLoaderStyles
                width={size}
                height={size}
                color={color}
            />
        </FullScreenContainer>
    )
}