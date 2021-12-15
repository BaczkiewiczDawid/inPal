import { Header, Subtitle, Paragraph } from './BuyerInformation.style';

const BuyerInformation = ({ inputValues }) => {
    return ( 
        <>
        <Header>Order summary</Header>
        <Subtitle>Delivery address</Subtitle>
        <div>
            <Paragraph>{inputValues.name}</Paragraph>
            <Paragraph>{inputValues.address}</Paragraph>
            <Paragraph>{inputValues.postcode}</Paragraph>
            <Paragraph>{inputValues.phone}</Paragraph>
            <Paragraph>{inputValues.email}</Paragraph>
        </div>
        </>
     );
}
 
export default BuyerInformation;