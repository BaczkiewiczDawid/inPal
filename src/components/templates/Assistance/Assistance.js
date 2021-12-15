import Navigation from 'components/organisms/Navigation/Navigation';
import Question from 'components/organisms/Question/Question';
import styled from 'styled-components';

const QuestionsListContainer = styled.section`
    margin-top: 5rem;
`;

const Title = styled.h1`
    margin-left: 1rem;
    margin-top: 7rem;

    @media screen and (min-width: 768px) {
        margin-top: 4rem;
    }
`;


const Assistance = () => {
    return ( 
        <>
            <Navigation />
            <Title>Most asked questions</Title>
            <QuestionsListContainer>
                <Question />
            </QuestionsListContainer>
        </>
     );
}
 
export default Assistance;