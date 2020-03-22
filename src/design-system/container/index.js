import styled from 'styled-components'

export const Container = styled.div`
  ${({ margin }) =>
    margin &&
    `
    margin : ${margin};
  `}

  ${({ padding }) =>
    padding &&
    `
    padding : ${padding};
  `}
  
  ${({ maxWidth }) =>
    maxWidth &&
    `
    max-width : ${maxWidth}px;
  `}

  ${({ width }) =>
    width &&
    `
    width : ${width}px;
  `}
  
  ${({ height }) =>
    height &&
    `
    height : ${height}px;
  `}
  
  ${({ position }) =>
    position &&
    `
    position : ${position};
  `}
  
  ${({ display }) =>
    display &&
    `
    display : ${display};
  `}
  
  ${({ centered }) =>
    centered &&
    `
    margin : 0 auto;
  `}
  
  ${({ textAlign }) =>
    textAlign &&
    `
    text-align: ${textAlign};
  `}
  
`
