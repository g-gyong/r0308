import styled, { css } from 'styled-components'

export const Text = styled.div`
   ${({ fontSize }) => fontSize && `
   font-size: ${fontSize || 13}px; //기본 13
   `}

  ${({ margin }) => margin && `
    margin : ${margin};
  `}

  ${({ padding }) => padding && `
    padding : ${padding};
  `}
  
  ${({ inlineBlock }) => inlineBlock && `
    display : inline-block;
  `}
`
