import styled, { keyframes } from 'styled-components';

const AppearAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Nav = styled.nav`
    display: ${({isOpen}) => isOpen ? 'block' : 'none'};
    width: 100%;
    height: 100%;
    background-color: white;
    position: fixed;
    overflow-y: hidden;
    left: 0;
    top: 0;
    animation: 0.3s ease-in-out 1 forwards ${AppearAnimation};
    z-index: 999;

    @media screen and (min-width: 768px) {
        position: relative;
        display: flex;
        flex-direction: row;
        height: auto;
        justify-content: space-between;
        width: 90vw;
        margin: auto;
    }
`;

export const NavList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    height: 100%;
    margin-left: 10vw;

    @media screen and (min-width: 768px) {
        flex-direction: row;
        margin: 0;
        margin-top: 2rem;
    }
`;


export const Link = styled.a`
    text-decoration: none;
    color: #2a2a2a;
    font-size: 1.5rem;
    cursor: pointer;

    &:nth-child(n+2) {
        margin-top: 2rem;
    }

    @media screen and (min-width: 768px) {
        font-size: .9rem;

        &:nth-child(n+2) {
            margin-top: 0;
            margin-left: 1.5rem;
        }
    }

    @media screen and (min-width: 1024px) {
        font-size: 1.2rem;

        &:nth-child(n+2) {
            margin-left: 3rem;
        }
    }
`;

export const Icon = styled.img`
    width: 10px;
    height: auto;
    margin-left: 1rem;
`;

export const Container = styled.div`
    position: absolute;
    top: 1.8rem;
    right: 1.8rem;

    @media screen and (min-width: 768px) {
        position: relative;
        top: 0;
        right: 0;
        margin-top: 2rem;
    }
`;

export const CartIcon = styled.img`
    margin-right: 3rem;
    width: 20px;
    height: auto;

    @media screen and (min-width: 768px) {
        margin-right: 1rem;
    }
`;

export const Line = styled.div`
    width: 100vw;
    height: 1px;
    background-color: #B0B0B0;
    margin-top: 1.5rem;
`;

export const NavButton = styled.button`
    width: 40px;
    height: 40px;
    background-color: #eee;
    border: none;
    position: absolute;
    left: -40px;
`;

export const MenuToggleButton = styled.button`
  width: 40px;
  height: 40px;
  z-index: 9999;
  position: fixed;
  top: 20px;
  left: 20px;
  overflow-x: hidden;
  background-color: white;
  border: 2px solid black;
  cursor: pointer;
  /* transition: .2s; */

  span:first-child {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transform: translateX(${({isOpen}) => isOpen ? 'calc(-100% - 2px)' : 0});
    transition: transform ease-in-out 0.3s;

    &::before, &::after {
      position: absolute;
      content: '';
      width: 17px;
      height: 3px;
      background-color: black;
      left: 50%;
    }

    &::before {
      top: 13px;
      transform: translate(-50%, -50%) rotate(45deg);
    }

    &::after {
      bottom: 13px;
      transform: translate(-50%, 50%) rotate(-45deg);
    }
  }

  span:last-child {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: calc(100% + 2px);
    transform: translateX(${({isOpen}) => isOpen ? 'calc(-100% - 2px)' : 0});
    transition: transform ease-in-out 0.3s;

    &::before, &::after {
      position: absolute;
      content: '';
      width: 25px;
      height: 3px;
      background-color: black;
      top: 50%;
      left: 50%;
    }

    &::before {
      transform: translate(-50%, -50%) rotate(45deg);
    }

    &::after {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  }
`;