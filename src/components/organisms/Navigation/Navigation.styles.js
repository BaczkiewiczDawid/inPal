import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const AppearAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Logo = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 2rem;
  cursor: pointer;
`;

export const Nav = styled.nav`
    display: ${({isNavigationOpen}) => isNavigationOpen ? 'block' : 'none'};
    width: 100%;
    height: 100vh;
    background-color: white;
    position: fixed;
    overflow-y: hidden;
    left: 0;
    top: 0;
    animation: 0.3s ease-in-out 1 forwards ${AppearAnimation};
    z-index: 999;

    @media screen and (min-width: 768px) {
      position: static;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        height: 4rem;
        background-color: ${({ theme }) => theme.colors.white};
        border-bottom: 1px solid black;
    }
`;

export const Wrapper = styled.li`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    position: relative;
  
    &:nth-child(n+1) {
      margin-left: 2.5rem;
    }

    &:nth-child(n+2) {
      margin-left: 50px;
    }
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
        align-items: center;
        margin-left: 2rem;
    }
`;


export const LinkItem = styled(Link)`
    text-decoration: none;
    color: #2a2a2a;
    font-size: 1.5rem;
    cursor: pointer;

    &:nth-child(n+2) {
        margin-top: 2rem;
    }

    @media screen and (min-width: 768px) {
        font-size: .9rem;
        margin: 0;

        &:nth-child(n+2) {
            margin-top: 0;
            margin-left: 1.5rem;
        }
    }

    @media screen and (min-width: 1024px) {
        font-size: 1rem;

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
    display: flex;
    align-items: center;
    top: 1.8rem;
    right: 1.8rem;

    @media screen and (min-width: 768px) {
      position: inherit;
      display: flex;
      margin-right: 4rem;
    }
`;

export const CartIcon = styled.img`
    margin-right: 1rem;
    width: 20px;
    height: auto;

    @media screen and (min-width: 768px) {
        margin-right: 1rem;
    }
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
  background-color: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.black};
  cursor: pointer;
  /* transition: .2s; */

  span:first-child {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transform: translateX(${({isNavigationOpen}) => isNavigationOpen ? 'calc(-100% - 2px)' : 0});
    transition: transform ease-in-out 0.3s;

    &::before, &::after {
      position: absolute;
      content: '';
      width: 17px;
      height: 3px;
      background-color: ${({ theme }) => theme.colors.black};
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
    transform: translateX(${({isNavigationOpen}) => isNavigationOpen ? 'calc(-100% - 2px)' : 0});
    transition: transform ease-in-out 0.3s;

    &::before, &::after {
      position: absolute;
      content: '';
      width: 25px;
      height: 3px;
      background-color: ${({ theme }) => theme.colors.black};
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