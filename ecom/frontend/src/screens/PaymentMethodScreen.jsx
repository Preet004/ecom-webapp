
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import  Store  from '../store';

function PaymentMethodScreen() {
    const navigate = useNavigate();
    const { state, dispatch } = useContext(Store);
    const {
        cart: { shippingAddress },
    } = state;

    if (!shippingAddress.address) {
        navigate('/shipping');
    }

    const [paymentMethod, setPaymentMethod] = useState('PayPal');

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch({ type: 'SAVE_PAYMENT_METHOD', payload: paymentMethod });
        localStorage.setItem('paymentMethod', paymentMethod);
        navigate('/placeorder');
    };

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <input
                        type="radio"
                        id="paypal"
                        value="PayPal"
                        checked={paymentMethod === 'PayPal'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <label htmlFor="paypal">PayPal</label>
                </div>
                <div>
                    <input
                        type="radio"
                        id="stripe"
                        value="Stripe"
                        checked={paymentMethod === 'Stripe'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <label htmlFor="stripe">Stripe</label>
                </div>
                <button type="submit">Continue</button>
            </form>
        </div>
    );
}

export default PaymentMethodScreen;
