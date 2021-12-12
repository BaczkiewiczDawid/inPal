import { useState } from 'react';
import { Form, Input, Button, Label } from './ShippingInformations.style';

const ShippingInformations = ({getInputValue, nextCart}) => {


    const requiredInformations = [
        {
            label: 'Name',
            type: 'text',
            name: 'name'
        },
        {
            label: 'Address',
            type: 'text',
            name: 'address'
        },
        {
            label: 'Post code',
            type: 'code',
            name: 'postcode'
        },
        {
            label: 'Phone number',
            type: 'number',
            name: 'phone'
        },
        {
            label: 'E-Mail',
            type: 'text',
            name: 'email'
        }
    ]

    return ( 
        <>
        {requiredInformations.map((el) => (
            <>
                <Label>{el.label}</Label>
                <Input type={el.type} name={el.name} required onChange={getInputValue} />
            </>
        ))}
        <Button onClick={nextCart}>Next</Button>    
    </>
     );
}
 
export default ShippingInformations;