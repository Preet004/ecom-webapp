
import React, { useContext, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Store from '../store';
import axios from 'axios';
import MessageBox from '../components/MessageBox';

function CartScreen() {
    const navigate = useNavigate();
    const { id } = useParams();
    const { state, dispatch } = useContext(Store);
    const { cart: { cartItems } } = state;

    useEffect(() => {
        if (id) {
            const fetchProduct = async () => {
                const { data } = await axios.get(`/api/products/${id}`);
                dispatch({
                    type: 'CART_ADD_ITEM',
                    payload: {
                        ...data,
                        qty: 1,
                    },
                });
            };
            fetchProduct();
        }
    }, [dispatch, id]);

    const removeFromCartHandler = (item) => {
        dispatch({
            type: 'CART_REMOVE_ITEM',
            payload: item,
        });
    };

    const checkoutHandler = () => {
        navigate('/signin?redirect=shipping');
    };

    return (
        <div className="row top">
            <div className="col-2">
                <h1>Shopping Cart</h1>
                {cartItems.length === 0 ? (
                    <MessageBox>
                        Cart is empty. <Link to="/">Go Shopping</Link>
                    </MessageBox>
                ) : (
                    <ul>
                        {cartItems.map((item) => (
                            <li key={item._id}>
                                <div className="row">
                                    <div>
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="small"
                                        />
                                    </div>
                                    <div className="min-30">
                                        <Link to={`/product/${item._id}`}>{item.name}</Link>
                                    </div>
                                    <div>
                                        <button
                                            type="button"
                                            onClick={() =>
                                                dispatch({
                                                    type: 'CART_UPDATE_ITEM',
                                                    payload: {
                                                        ...item,
                                                        qty: item.qty + 1,
                                                    },
                                                })
                                            }
                                        >
                                            +
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() =>
                                                dispatch({
                                                    type: 'CART_UPDATE_ITEM',
                                                    payload: {
                                                        ...item,
                                                        qty: item.qty - 1,
                                                    },
                                                })
                                            }
                                        >
                                            -
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => removeFromCartHandler(item)}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                    <div>${item.price}</div>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <div className="col-1">
                <div className="card card-body">
                    <ul>
                        <li>
                            <h2>
                                Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)} items) : $
                                {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
                            </h2>
                        </li>
                        <li>
                            <button
                                type="button"
                                onClick={checkoutHandler}
                                className="primary block"
                                disabled={cartItems.length === 0}
                            >
                                Proceed to Checkout
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default CartScreen;
