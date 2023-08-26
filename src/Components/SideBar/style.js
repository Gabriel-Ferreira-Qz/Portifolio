import styled, { keyframes } from "styled-components";

const slideInAnimation = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`

export const Container = styled.ul`
  position: fixed;
  inset: 0 0 0 50%;
  background: hsl(0 0% 100% / 0.1);
  backdrop-filter: blur(.5rem);
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: min(30vh, 10rem) 2rem;
  animation: ${slideInAnimation} 0.3s ease-out;

  li {
    list-style: none;

    a {
      font-size: 1.125rem;
      text-decoration: none;
      font-weight: 500;
      display: block;
      padding: .25rem .5rem;
      color: #2F2E41;
      cursor: pointer;
    }
  }

`

export const BtnContato = styled.a`
  font-size: 1.125rem;
  font-weight: 500;
  color: #FBFAFA;
  background-color: #2F2E41;
  border-radius: 8px;
  padding: .75rem 1.5rem;
  cursor: pointer;
  text-decoration: none;



  @media screen and (min-width: 768px){
    width: 40%;
  }

  @media screen and (min-width: 1000px){
    width: 30%;
  }
`
