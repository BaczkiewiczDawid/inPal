import { useState } from 'react';
import arrowDown from 'assets/images/arrow-down.png';
import { Wrapper, QuestionParagraph, RotatedIcon, Icon, Content } from './Question.style';
import { QuestionsList } from 'data/QuestionsList';

const Question = () => {
    const [isOpen, setIsOpen] = useState({
        1: false,
        2: false,
    })

    const handleShowAnswear = (e) => { 
        setIsOpen({
            ...isOpen,
            [e.target.id]: !isOpen[e.target.id]
        })

        console.log(isOpen);
    }

    return ( 
        <>
            {QuestionsList.map(({ id, question, answear }) => (
                <>
                    <Wrapper id={id} onClick={(e) => handleShowAnswear(e)}>
                        <QuestionParagraph id={id} onClick={(e) => handleShowAnswear(e)}>{question}</QuestionParagraph>
                        {isOpen[id] ? <RotatedIcon id={id} onClick={(e) => handleShowAnswear(e)} src={arrowDown} /> : <Icon id={id} onClick={(e) => handleShowAnswear(e)} src={arrowDown} />}
                    </Wrapper>
                    {isOpen[id] ? <Content>{answear}</Content> : null}
                </>
            ))}
        </>
     );
}
 
export default Question;