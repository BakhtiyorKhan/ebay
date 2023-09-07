import React,{useEffect,useState} from 'react';
import apiService from '../../service/api/dummyapi.js'

const RootPage = () => {

    const [products, setProducts] = useState([])
    useEffect(() => {
        getProducts()
    }, []);

    async function getProducts(){
        let res = await apiService.getProducts()
        console.log(res);
    }


    return (
        <div>
           <h1>
                RootPage
           </h1>
        </div>
    );
}

export default RootPage;
