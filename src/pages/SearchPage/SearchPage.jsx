import React,{useEffect,useState} from 'react';
import {useParams,Link} from 'react-router-dom'
import { Rate } from 'antd';
import apiService from '../../service/api/dummyapi.js'
import ImgLike from '../../assets/images/like.svg'
import ImgSwap from '../../assets/images/swap-left-outlined.svg'

const SearchPage = () => {

    const params = useParams()
    const [products, setProducts] = useState([])

    useEffect(() => {
        aloneModel()
    }, [params]);
    
    async function aloneModel(){
        let res = await apiService.getAloneModel(params.query)
        setProducts(res?.data?.products)        
    }
    return (
        <div>
            <div className='w-[90%] mx-auto grid grid-cols-3  gap-3  mb-6'>
                {
                    products.map((item,index) => (
                        <div key={index} className='col-span-1 px-5 mb-6 shadow-2xl py-6 rounded-2xl'>
                            <div className='w-[350px] h-[250px]  flex justify-center items-center 
                             bg-bginput_color py-6 rounded-2xl mb-3'>
                                <img className='w-[250px] h-[180px] rounded-2xl hover:scale-125' src={item.thumbnail} alt={item.title} />
                            </div>
                            <p className='text-base font-semibold mb-3 text-main_color'>{item.title}...</p>
                            <p className='text-base font-semibold text-main_color mb-3'>{item.brand}</p>
                            <div className='flex justify-between items-center mb-4 pe-3'>
                                <p className='text-[24px] leading-[28px] font-semibold'>{item.price}$</p>
                                <div className='flex items-center'>
                                    <Rate allowHalf defaultValue={item.rating} />
                                    <span className='ms-2 text-[24px] font-semibold leading-[36px]'>{item.rating}</span>   
                                </div>                             
                            </div>
                            <div className='flex justify-between items-center pe-3'> 
                                <img className='w-[46px] h-[46px]' src={ImgLike} alt="like" />
                                <div className='flex items-center bg-btn_bg py-2 px-4 rounded-[50px]'>
                                    <Link to={`/product/${item.id}`}>
                                    <button  className='text-white text-base font-semibold leading-[24px]'>BATAFSIL </button>
                                    </Link>
                                    <img src={ImgSwap} alt="swap" />
                                </div>
                                
                            </div>
                        </div>
                        
                    ))
                }
           </div>
        </div>
    );
}

export default SearchPage;
