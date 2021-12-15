import styled from 'styled-components';

export const Dropdown = styled.div`
  overflow: hidden;
  margin-left: 2rem;
`;

export const DropdownButton = styled.button`
  cursor: pointer;
  font-size: 16px;  
  border: none;
  outline: none;
  color: black;
  background-color: transparent;
  font-family: inherit;

  @media screen and (max-width: 767px) {
    margin-top: 1rem;
  }
`;

export const DropdownContent = styled.div`
  display: ${({isOpen}) => isOpen ? 'none' : 'block'};
  position: relative;

  @media screen and (min-width: 768px) {
    position: absolute;
    background-color: ${({ theme }) => theme.colors.white};
    min-width: 128px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
  }
`;

export const DropdownLink = styled.a`
  @media screen and (min-width: 768px) {
    float: none;
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme.colors.lightgrey};
      transition: .2s;
    }
  }
`;

export const ArrowDownIcon = styled.img`
    margin-left: 1rem;
`;