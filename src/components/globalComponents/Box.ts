import styled, { css } from 'styled-components';

interface BoxProps {
    display?: string;
    flexDirection?: string;
    flexWrap?: string;
    justifyContent?: string;
    alignItems?: string;
    alignContent?: string;
    gap?: string;

    color?: string;
    backgroundColor?: string;
    fontSize?: string;
    margin?: string;
    padding?: string;
    width?: string;
    height?: string;
    maxWidth?: string;
    maxHeight?: string;

    gridColumns?: string;
    gridRows?: string;

    position?: string;
    relative?: boolean;
    absolute?: boolean;
    fixed?: boolean;
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
    zIndex?: string;

    centerAll?: boolean;
    pointer?: boolean;

    flex?: boolean;
    grid?: boolean;

    flexColumn?: boolean;
    flexRow?: boolean;

    justifyEnd?: boolean;
    justifyCenter?: boolean;
    justifyStart?: boolean;
    justifyBetween?: boolean;
    justifyEvenly?: boolean;

    alignCenter?: boolean;
    alignStart?: boolean;
    alignEnd?: boolean;
    alignBaseline?: boolean;
    alignStretch?: boolean;

    appear?: boolean;

}

const TakeAllProps = css<BoxProps>`

    display: ${props => props.display};
    flex-direction: ${props => props.flexDirection};
    flex-wrap: ${props => props.flexWrap};
    justify-content: ${props => props.justifyContent};
    align-items: ${props => props.alignItems};
    align-content: ${props => props.alignContent};
    gap: ${props => props.gap};

    color: ${props => props.color};
    background-color: ${props => props.backgroundColor};
    font-size: ${props => props.fontSize};
    margin: ${props => props.margin};
    padding: ${props => props.padding};
    width: ${props => props.width};
    height: ${props => props.height};
    max-width: ${props => props.maxWidth};
    max-height: ${props => props.maxHeight};

    grid-template-columns: ${props => props.gridColumns};
    grid-template-rows: ${props => props.gridRows};

    position: ${props => props.position};
    ${props => props.relative && 'position: relative;'}
    ${props => props.absolute && 'position: absolute;'}
    ${props => props.fixed && 'position: fixed;'}
    top: ${props => props.top};
    left: ${props => props.left};
    right: ${props => props.right};
    bottom: ${props => props.bottom};
    z-index: ${props => props.zIndex};

    ${props => props.pointer && 'cursor: pointer;'}
    
    // Flex stuff

    ${props => props.flex && 'display: flex;'}
    ${props => props.grid && 'display: grid;'}

    ${props => props.flexColumn && 'flex-direction: column;'}
    ${props => props.flexRow && 'flex-direction: row;'}

    ${props => props.centerAll && 'display: flex; justify-content: center; align-items: center;'}
    ${props => props.justifyEnd && 'justify-content: flex-end;'}
    ${props => props.justifyCenter && 'justify-content: center;'}
    ${props => props.justifyStart && 'justify-content: flex-start;'}
    ${props => props.justifyBetween && 'justify-content: space-between;'}
    ${props => props.justifyEvenly && 'justify-content: space-evenly;'}

    ${props => props.alignCenter && 'align-items: center;'}
    ${props => props.alignStart && 'align-items: flex-start;'}
    ${props => props.alignEnd && 'align-items: flex-end;'}
    ${props => props.alignBaseline && 'align-items: baseline;'}
    ${props => props.alignStretch && 'align-items: stretch;'}


`

export const Box = styled.div<BoxProps>`

    ${TakeAllProps}

`