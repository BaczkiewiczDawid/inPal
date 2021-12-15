import styled from 'styled-components';

export const Filter = styled.div`
    margin-left: 1.5rem;
    margin-top: 2rem;
    min-width: 200px;

    @media screen and (min-width: 768px) {
        min-width: 15%;
        margin-left: 3rem;
        max-width: 10vw;
    }
`;

export const StyledList = styled.ul`
    display: flex;
    flex-direction: column;
    margin-top: 4rem;
`;

export const FiltersWrapper = styled.div`
display: flex;
flex-direction: column;
position: fixed;
background-color: ${({ theme }) => theme.colors.white};
top: 0;
left: 0;
width: 100vw;
height: 100vh;
border: none;
box-shadow: 1px black;
z-index: 9999;
`;

export const Button = styled.button`
width: 90%;
height: 5rem;
background-color: ${({ theme }) => theme.colors.black};
position: absolute;
bottom: 1rem;
margin-left: 50%;
transform: translateX(-50%);
border: none;
color: ${({ theme }) => theme.colors.white};
font-weight: 700;
cursor: pointer;
font-size: 2rem;
`;

export const FiltersContainer = styled.div`
margin-left: 3rem;

&:nth-child(n+1) {
    margin-top: 1rem;
}
`;