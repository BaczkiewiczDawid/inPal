import { useState } from 'react';
import Navigation from 'components/organisms/Navigation/Navigation';
import styled from 'styled-components';
import Payments from 'components/organisms/Payments/Payments';
import ShippingInformations from 'components/organisms/ShippingInformations/ShippingInformations';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media screen and (min-width: 768px) {
        justify-content: flex-start;
        align-items: flex-start;
    }
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-top: 7rem;
    margin-bottom: 15vh;

    @media screen and (min-width: 768px) {
        align-items: flex-start;
        justify-content: flex-start;
        margin-left: 2rem;
        margin-top: 3rem;
    }
`;

const Checkout = () => {
    const [inputValues, setInputValues] = useState({
        name: '',
        address: '',
        postcode: '',
        phone: '',
        email: '',
    })

    const [currentPage, setCurrentPage] = useState(1)

    const getInputValue = (e) => {
        setInputValues({
            ...inputValues,
            [e.target.name]: e.target.value
        })
    }

    const nextCart = () => {
        if (inputValues.name !== '' && inputValues.address !== '' && inputValues.postcode !== '' && inputValues.phone !== '' && inputValues.email !== '') {
            setCurrentPage(currentPage + 1);
        } else {
            alert('Uzupełnij wszystkie pola')
        }
    }

    return ( 
        <>
            <Navigation />
            <Wrapper>
                <Form>
                    {currentPage === 1 ? 
                        <ShippingInformations getInputValue={getInputValue} nextCart={nextCart} />
                    : null}
                    {currentPage === 2 ?
                        <Payments />
                    : null}
                </Form>
            </Wrapper>
        </>
     );
}
 
export default Checkout;