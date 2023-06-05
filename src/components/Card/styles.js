import styled from 'styled-components'

export const Container = styled.div`
  width: 45vw;

  & + & {
    margin-left: .5rem;
  }

  button {
    height: 100%;
    cursor: pointer;
    transition: transform ease 200ms;

    :hover {
      transform: scale(1.1);
    }
  }

  img {
    max-width: 100%;
    min-height: 100%;
    object-fit: cover;
  }


`