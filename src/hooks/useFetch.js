import { useState, useEffect } from 'react'
import axios from 'axios';

const useFetch = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState('');

    const API_TOKEN = '21e92b3eff44e51cf53ad9a81475ec'

    useEffect(() => {
        axios.post('https://graphql.datocms.com/', {
            query: `
            {
                allProducts {
                  id
                  title
                  price
                  description
                  image {
                    url
                  }
                }
              }`
        }, {
            headers: {
                authorization: `Bearer ${API_TOKEN}`,
            }
        })
        .then(({ data: { data } }) => {
            setProducts(data.allProducts);
        })
        .catch((err) => {
            setError(err);
        })
    }, [])

    return products;
}
 
export default useFetch;