import { Subtitle, Paragraph } from './PaymentInformation.style'

const PaymentInformation = ({ selectedPayment }) => {
    return ( 
        <>
            <Subtitle>Delivery information</Subtitle>
            <div>
                <Paragraph>{selectedPayment.shipping}</Paragraph>
                <Paragraph>Payment via {selectedPayment.payment}</Paragraph>
            </div>
        </>
     );
}
 
export default PaymentInformation;