import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeftOutlined } from '@ant-design/icons'
import apiService from '../../service/api/dummyapi.js'
import { Rate } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import ImgCheck from '../../assets/images/checkmark.svg'



const SingleProduct = () => {

    const selector = useSelector(state => state.CounterReduce)
    const dispatch = useDispatch()

    const params = useParams()
    const [product, setProduct] = useState([])
    const [products, setProducts] = useState([])
    const [image, setImage] = useState()
    let id = params.id

    useEffect(() => {
        getSingleProduct()
        getProducts()
    }, [id]);

    async function getSingleProduct() {
        let res = await apiService.getSingleProduct(id)
        setProduct(res?.data)
        setImage(res?.data?.images[0])
    }

    async function getProducts() {
        let res = await apiService.getAllProducts(15)
        setProducts(res?.data?.products)
    }
    return (
        <div>
            <div className='w-[90%] mx-auto flex items-center mb-[20px]'>
                <ArrowLeftOutlined className='w-[40px] h-[40px] bg-bginput_color text-btn_bg
                font-medium text-[20px] flex justify-center items-center rounded-[50px] me-4'/>
                <p className='text-base font-medium leading-[20px]'>Back to previous page | Listed in category:
                    <span className='ms-1 text-btn_bg border-b-2 border-bginput_color'>Cell Phones & Accessories</span>
                    <span className='ms-4 text-btn_bg border-b-2 border-bginput_color'>Cell Phones & Smartphones</span>
                </p>
            </div>

            <div className='border-t-2 mb-[60px]'>
            </div>

            <div className='w-[90%] mx-auto flex mb-[60px]'>
                <div >
                    <div className='w-[500px] h-[400px] bg-bginput_color flex justify-center items-center
                         me-[50px] rounded-2xl mb-[40px]'>
                        <img className='w-[350px] h-[250px] hover:scale-125 rounded-2xl' src={product.thumbnail} alt={product.title} />
                    </div>

                </div>
                <div>
                    <div className='flex justify-around items-center'>
                        <h1 className='text-[32px] font-medium leading-[48px] me-3'>{product.title}</h1>
                        <button className='px-5 py-1 text-btn_bg text-[20px] font-medium leading-[30px] rounded-xl bg-bginput_color'>Starlight</button>
                    </div>
                    <p className='text-base font-normal leading-[24px] text-text_gray mb-3'>Free 2 Days Shipping | 1 Year Warranty</p>
                    <Rate className='mb-4' allowHalf defaultValue={product.rating} />
                    <p className='text-[44px] font-medium leading-[66px]'><sup className='text-text_gray text-[24px] font-medium leading-[36px] me-1'>$</sup>{product.price}</p>

                    <ul className='mb-6'>
                        <li className='flex  mb-4 items-center'>
                            <img src={ImgCheck} alt="checkmark" />
                            <span className='ms-3 text-base font-normal leading-[24px] text-main_color'>Free Return</span>
                        </li>
                        <li className='flex mb-4 items-center'>
                            <img src={ImgCheck} alt="checkmark" />
                            <span className='ms-3 text-base font-normal leading-[24px] text-main_color'>Chat with us 24 hours</span>
                        </li>
                        <li className='flex mb-4 items-center'>
                            <img src={ImgCheck} alt="checkmark" />
                            <span className='ms-3 text-base font-normal leading-[24px] text-main_color'>Comes with a Package</span>
                        </li>
                        <li className='flex  items-center'>
                            <img src={ImgCheck} alt="checkmark" />
                            <span className='ms-3 text-base font-normal leading-[24px] text-main_color'>Comes with a Package</span>
                        </li>
                    </ul>

                    <div className='flex '>
                        <Link>
                            <button className='px-10 text-base font-medium leading-[24px]
                            text-white rounded-lg py-1 bg-btn_bg me-3'>Buy it now</button>
                        </Link>
                        <button onClick={()=> {dispatch({type: 'increment'}) }} className='px-10 py-1 bg-bginput_color rounded-lg first-letter:text-base 
                        font-medium leading-[24px] text-btn_bg'>Add to Cart</button>
                    </div>
                </div>
            </div>

            <div className=' bg-bginput_color'>
                <ul className='w-[90%] mx-auto flex items-center py-4 text-base font-semibold
                leading[19px] text-text_gray'>
                    <li className='me-6 border-b-2 border-b-transparent hover:text-black hover:border-b-2 hover:border-black'>
                        About
                    </li>
                    <li className='me-6 border-b-2 border-b-transparent hover:text-black hover:border-b-2 hover:border-black'>
                        Shipping
                    </li>
                    <li className='me-6 border-b-2 border-b-transparent hover:text-black hover:border-b-2 hover:border-black'>
                        Reviews
                    </li>
                    <li className=' border-b-2 border-b-transparent hover:text-black hover:border-b-2 hover:border-black'>
                        Returns
                    </li>
                </ul>
            </div>

            <div className='w-[90%] mx-auto flex py-[80px]'>
                <div className='w-[380px] h-[300px] rounded-3xl bg-bginput_color me-[90px] flex justify-center items-center'>
                    <img className='w-[380px] h-[300px] rounded-3xl' src={image} alt="smartphone" />
                </div>
                <div>
                    <ul className='list-disc text-[14px] font-medium leading-[21px]'>
                        <li className='mb-2'>15 cm (6.1-inch) Super Retina XDR display</li>
                        <li className='mb-2'>Cinematic mode adds shallow depth of field and shifts focus automatically in your videos</li>
                        <li className='mb-2'>Advanded dual-camera system with 12MP Wide and Ultra Wide cameras; Photographic Styles, Smart HDR 4, <br />
                            Night mode, 4K Dalby Vision HDR recording</li>
                        <li className='mb-2'>12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording</li>
                        <li className='mb-2'>A15 Bionic chip for lightning-fast performance</li>
                        <li className='mb-2'>Up to 19 hours of video playback</li>
                        <li className='mb-2'>Durable design with Ceramic Shield</li>
                        <li className='mb-2'>Industry-leading IP68 water resistance</li>
                        <li className='mb-2'>IOS 15 packs new features to do more with iPhone than ever before </li>
                        <li className='mb-2'>Supports MagSafe accessories for easy attachment and faster wireless charging</li>
                    </ul>
                </div>
            </div>


        </div>
    );
}

export default SingleProduct;
