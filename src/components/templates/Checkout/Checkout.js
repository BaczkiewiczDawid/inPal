import { useState } from 'react';
import Navigation from 'components/organisms/Navigation/Navigation';
import styled from 'styled-components';
import Payments from 'components/organisms/Payments/Payments';
import ShippingInformations from 'components/organisms/ShippingInformations/ShippingInformations';
import ShoppingCartItem from 'components/molecules/ShoppingCartItem/ShoppingCartItem';

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
        align-items: center;
        justify-content: center;
        margin: 3rem auto;
    }
`;

const Item = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90vw;

    @media screen and (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
    }
`;

const Container = styled.div`
    margin-top: 3rem;
`;

const Checkout = ({ inputValues, setInputValues, setSelectedPayment, selectedPayment, finalProductsList }) => {
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
                    <Item>
                        <ShippingInformations getInputValue={getInputValue} nextCart={nextCart} />
                        <Container>
                            {finalProductsList.map((item) => (
                                <ShoppingCartItem item={item} />
                            ))}
                        </Container>
                    </Item>
                    : null}
                    {currentPage === 2 ?
                    <Item>
                        <Payments setSelectedPayment={setSelectedPayment} selectedPayment={selectedPayment} />
                        <Container>
                            {finalProductsList.map((item) => (
                                <ShoppingCartItem item={item} />
                            ))}
                        </Container>
                    </Item>
                    : null}
                </Form>
            </Wrapper>
        </>
     );
}
 
export default Checkout;