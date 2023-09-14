import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom'
import apiService from '../../service/api/dummyapi.js'
import { Rate } from 'antd';
import ImgLike from '../../assets/images/like.svg'
import ImgSwap from '../../assets/images/swap-left-outlined.svg'

const AllProducts = () => {

    const [count, setCount] = useState(18)

    const [products, setProducts] = useState([])
    useEffect(() => {
        getProducts()
    }, [count]);

    async function getProducts(){
        let res = await apiService.getAllProducts(count)
        setProducts(res?.data?.products)
    }

    return (
        <div>
            <div className='w-[92%] mx-auto pt-8 flex justify-between mb-[80px]'>
                <ul className='flex justify-start items-center font-normal text-[12px] leading-[16px]'>
                    <li className='me-3'>SALE</li>
                    <li className='me-3'>NEW IN</li>
                    <li className='me-3'>CLOTHING</li>
                    <li className='me-3'>SHOES</li>
                    <li className='me-3'>ACCESSORIES</li>
                    <li>BRANDS</li>
                </ul>
                <div className='w-[350px] border-2 py-1 flex justify-between items-center'>
                    <input className='w-[280px] outline-0 px-2' type="text" placeholder='Search products, articles, faq,...' />
                    <button className='px-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </button>
                </div>
            </div>

            <div className='w-[90%] mx-auto grid grid-cols-3  gap-3  mb-12'>
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

           <div className='w-[150px] bg-btn_bg mx-auto rounded-3xl flex justify-center items-center py-3'>
             <button  className='text-white text-[18px] font-semibold leading-[24px]'
             onClick={()=> {setCount(prev => prev + 3 )}}>More</button>
           </div>
        </div>
    );
}

export default AllProducts;
