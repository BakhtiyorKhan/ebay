import React from 'react';
import ImgLogo from '../../assets/images/ebay.svg'
import ImgPayment from '../../assets/images/Payment.svg'

const Footer = () => {
    return (
        <div className='py-[80px]'>
            <div className='w-[90%] mx-auto  flex justify-between items-start  py-[60px] border-y-2'>
                <div>
                    <img  src={ImgLogo} alt="Logo" />
                </div>
                <div>
                    <ul className='text-base font-normal leading-[20px] '>
                        <p className='text-[24px] leading-[36px] font-medium mb-5'>Account</p>
                        <li className='mb-4'>Wishlist</li>
                        <li className='mb-4'>Cart</li>
                        <li className='mb-4'>Track Order</li>
                        <li className='mb-4'>Shipping Details</li>
                    </ul>
                </div>
                <div>
                    <ul className='text-base font-normal leading-[20px]'>
                        <p className='text-[24px] leading-[36px] font-medium mb-5'>Useful links</p>
                        <li className='mb-4'>About Us</li>
                        <li className='mb-4'>Conact</li>
                        <li className='mb-4'>Hot deals</li>
                        <li className='mb-4'>Promotions</li>
                        <li className='mb-4'>New products</li>
                    </ul>
                </div>
                <div>
                    <ul className='text-base font-normal leading-[20px]'>
                        <p className='text-[24px] leading-[36px] font-medium mb-5'>Help Center</p>
                        <li className='mb-4'>Payments</li>
                        <li className='mb-4'>Refund</li>
                        <li className='mb-4'>Checkout</li>
                        <li className='mb-4'>Shipping</li>
                        <li className='mb-4'>Q&A</li>
                        <li className='mb-4'>Privacy Policy</li>
                    </ul>
                </div>
                
            </div>
            <div className='w-[90%] mx-auto flex justify-between items-center py-2'>
                <p className='text-base font-medium leading-[24px]'>
                    © 2022, All rights reserved
                </p>
                <img src={ImgPayment} alt="Payment" />
            </div>
        </div>
    );
}

export default Footer;
