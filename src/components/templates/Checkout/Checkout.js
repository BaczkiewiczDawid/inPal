import Navigation from 'components/organisms/Navigation/Navigation';

const Checkout = () => {
    return ( 
        <>
            <Navigation />
            <form>
                <label>Name</label>
                <input type="text" />
                <label>Address</label>
                <input type="text" />
                <label>Post Code</label>
                <input type="number" />
            </form>
        </>
     );
}
 
export default Checkout;