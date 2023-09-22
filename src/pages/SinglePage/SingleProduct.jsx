import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeftOutlined } from '@ant-design/icons'
import apiService from '../../service/api/dummyapi.js'
import { Rate, Button, Modal } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import ImgCheck from '../../assets/images/checkmark.svg'
import imgPerson from '../../assets/images/person.svg'
import imgMastercard from '../../assets/images/mastercard.svg'
import imgVisa from '../../assets/images/visa.svg'
import imgRupay from '../../assets/images/rupay.svg'



const SingleProduct = () => {

    const dispatch = useDispatch()

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const params = useParams()
    const [product, setProduct] = useState([])
    const [image, setImage] = useState()
    let id = params.id

    useEffect(() => {
        getSingleProduct()
    }, [id]);

    async function getSingleProduct() {
        let res = await apiService.getSingleProduct(id)
        setProduct(res?.data)
        setImage(res?.data?.images[0])
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
                        <div>
                            <Button className='px-10 flex items-center text-base font-medium leading-[24px]
                            text-white rounded-lg py-1 bg-btn_bg me-3' type="primary" onClick={showModal}>
                                Buy it now
                            </Button>
                            <Modal width={450} open={isModalOpen} onCancel={handleCancel}>
                                <div className='px-4'>
                                    <div className='flex justify-between items-center '>
                                        <h1 className='text-[28px] font-semibold leading-[33px]'>Card Details</h1>
                                        <img className='w-[60px] ' src={imgPerson} alt="person" />
                                    </div >

                                    <div className='mb-3'>
                                        <h3 className='text-base font-medium leading-[22px] mb-2'>Card type</h3>
                                        <div className='flex justify-between items-center'>
                                            <img className='w-[80px]' src={imgMastercard} alt="mastercard" />
                                            <img className='w-[80px]' src={imgVisa} alt="visa" />
                                            <img className='w-[80px]' src={imgRupay} alt="rupay" />
                                            <div className='w-[80px] h-[55px] bg-bg_grey rounded-lg flex justify-center items-center'>
                                                <p className='text-[14px] font-bold leading-[17px]'>See all</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='border-b-2 border-btn_bg pb-4 mb-3'>
                                        <label className='text-[14px] mb-2 font-medium leading-[21px]'>Name on card</label> <br />
                                        <input className='w-[100%] px-4 py-2 rounded-lg outline-none
                                         bg-bginput_color placeholder:text-black placeholder:text-[12px] placeholder:font-medium
                                         placeholder:leading-[18px] mb-3' type="text" placeholder='Name' />

                                        <label className='text-[14px] mb-2 font-medium leading-[21px]'>Card Number</label> <br />
                                        <input className='w-[100%] px-4 py-2 rounded-lg outline-none
                                         bg-bginput_color placeholder:text-black placeholder:text-[12px] placeholder:font-medium
                                         placeholder:leading-[18px] mb-3' type="number" placeholder='1111 2222 3333 4444' />

                                        <div className='flex  items-center'>
                                            <div className='me-4'>
                                                <label className='text-[14px] mb-2 font-medium leading-[21px]'>Expiration date</label> <br />
                                                <input className='w-[100%] px-4 py-2 rounded-lg outline-none
                                                bg-bginput_color placeholder:text-black placeholder:text-[12px] placeholder:font-medium
                                                placeholder:leading-[18px]' type="text" placeholder='mm/yy' />
                                            </div>
                                            <div>
                                                <label className='text-[14px] mb-2 font-medium leading-[21px]'>CVV</label> <br />
                                                <input className='w-[100%] px-4 py-2 rounded-lg outline-none
                                                bg-bginput_color placeholder:text-black placeholder:text-[12px] placeholder:font-medium
                                                placeholder:leading-[18px]' type="number" placeholder='123' />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='mb-3'>
                                        <div className='flex justify-between mb-1 items-center text-base font-medium leading-[21px] text-black'>
                                            <p>Subtotal</p>
                                            <p>$1,668</p>
                                        </div>
                                        <div className='flex  justify-between mb-1 items-center text-base font-medium leading-[21px] text-black'>
                                            <p>Shipping</p>
                                            <p>$4</p>
                                        </div>
                                        <div className='flex justify-between items-center text-base font-medium leading-[21px] text-black'>
                                            <p>Total (Tax incl.)</p>
                                            <p>$1,672</p>
                                        </div>
                                    </div>

                                    <button className='w-[100%] bg-btn_bg flex justify-between px-[50px]
                                    py-3 rounded-xl text-[16px] font-medium leading-[24px] text-white'>
                                        <span>$1,672</span>
                                        <span>Checkout</span>
                                    </button>
                                </div>
                            </Modal>
                        </div>

                        <button onClick={() => { dispatch({ type: 'increment' }) }} className='px-10 py-1 bg-bginput_color rounded-lg first-letter:text-base 
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
