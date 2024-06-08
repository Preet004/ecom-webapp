
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { Store } from '../store';

function ShippingScreen() {
    const navigate = useNavigate();
    const { state, dispatch } = useContext(Store);
    const {
        userInfo,
        cart: { shippingAddress },
    } = state;

    const [fullName, setFullName] = useState(shippingAddress.fullName || '');
    const [address, setAddress] = useState(shippingAddress.address || '');
    const [city, setCity] = useState(shippingAddress.city || '');
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode || '');
    const [country, setCountry] = useState(shippingAddress.country || '');

    if (!userInfo) {
        navigate('/signin');
    }

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch({
            type: 'SAVE_SHIPPING_ADDRESS',
            payload: { fullName, address, city, postalCode, country },
        });
        localStorage.setItem(
            'shippingAddress',
            JSON.stringify({ fullName, address, city, postalCode, country })
        );
        navigate('/payment');
    };

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input
                    type="text"
                    placeholder="Full Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Postal Code"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    required
                />
                <button type="submit">Continue</button>
            </form>
        </div>
    );
}

export default ShippingScreen;
