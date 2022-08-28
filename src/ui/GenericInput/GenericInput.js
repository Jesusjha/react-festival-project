import styled from 'styled-components'

export const GenericInput = styled.input`
  width: ${({ styleBuy }) => styleBuy ? '14.6rem' : '19rem'};
  height: 2.3rem;
  margin-bottom: 2rem;
  padding: 0 1rem;
  border-radius: .4rem;
  border: none;
  font-family: var(--project-font);
  outline: none;

  &:focus {
    border: 3px solid #2bb0c7;
  }
`