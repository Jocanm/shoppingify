import { FC } from "react"
import { FullScreenContainer, VanillaLoaderStyles } from "./Loaders.styles"

interface Props {
    width?: string
    height?: string
    color?: string
}

export const VanillaLoader: FC<Props> = ({ color, height, width }) => {
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
                width={width}
                height={height}
                color={color}
            />
        </div>
    )
}

export const FullScreenVanillaLoder: FC<Props> = ({ color, height, width }) => {
    return (
        <FullScreenContainer>
            <VanillaLoaderStyles
                width={width}
                height={height}
                color={color}
            />
        </FullScreenContainer>
    )
}