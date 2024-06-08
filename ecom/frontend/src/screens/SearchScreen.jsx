
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Product from '../components/Product';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function SearchScreen() {
    const query = useQuery();
    const searchQuery = query.get('query') || '';
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await axios.get(`/api/products?query=${searchQuery}`);
            setProducts(data);
        };
        fetchProducts();
    }, [searchQuery]);

    return (
        <div>
            <h2>Search Results for "{searchQuery}"</h2>
            <div className="products">
                {products.length === 0 ? (
                    <div>No products found</div>
                ) : (
                    products.map((product) => <Product key={product._id} product={product} />)
                )}
            </div>
        </div>
    );
}

export default SearchScreen;
