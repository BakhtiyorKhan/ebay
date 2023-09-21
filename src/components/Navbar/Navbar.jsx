import React, { useState } from 'react';
import {DownOutlined,AppstoreOutlined } from '@ant-design/icons';
import { Dropdown, Input, Space, } from 'antd';
import {useSelector} from 'react-redux'
import '../Navbar/Navbar.css'
import imgLogo from '../../assets/images/ebay.svg'
import imgPerson from '../../assets/images/person.svg'



const Navbar = () => {

    const selector = useSelector(state => state.CounterReduce)
    

    const items = [
        {
          label: '1st menu item',
          key: '1',
        },
        {
          label: '2nd menu item',
          key: '2',
        },
        {
          label: '3rd menu item',
          key: '3',
        },
      ];

    return (
        <div className='px-10 py-4  rounded-b-3xl shadow-xl mb-4'>
            <div className='flex justify-between items-center'>
                <div className="logo">
                    <img className='w-[100px]' src={imgLogo} alt="ebaylogo" />
                </div>
                <div className="search flex justify-between items-center bg-search_bg pl-3 rounded-lg">
                    <Dropdown className='me-2 text-[15px] font-medium leading-[21px] 
                    text-rgba(47, 41, 77, 1) '
                            menu={{
                            items,
                            }}
                        >
                        <Space>
                            All Categories
                            <DownOutlined />
                        </Space>
                    </Dropdown>
                    <span className='me-2 text-stone-400'> | </span>
                    <Space>
                        <input className='w-[450px] h-[45px] bg-transparent border-0 outline-0 
                        font-normal leading-[21px] text-[21px]' placeholder="Search for items..." />
                    </Space>

                    <div className='w-[55px] h-[45px] flex items-center justify-center text-white font-bold 
                    rounded-r-lg bg-btn_bg '>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </div>
                </div>

                <div className='flex justify-between items-center'>
                    <div className='heart-text flex  items-center me-3'>
                        <div className="heart">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                        <span>4</span>
                        </div>
                        <p className='text-[12px] font-medium leading-[18px] ms-[5px]'>Wishlist</p>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className="shop flex items-center">
                        <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                            <span>{selector}</span>
                        </div>
                        <div className="cart me-3 text-[12px] font-medium leading-[18px]">
                            <p>My cart</p> 
                            <span className='text-btn_bg font-medium leading-[15px]'>$21</span>
                        </div>
                        <div className="person flex items-center me-3">
                            <img className='w-[35px] me-1' src={imgPerson} alt="Person" />
                            <DownOutlined className='w-[15px]' />
                        </div>
                        <div className="drows h-[45px] flex justify-center items-center bg-btn_bg px-2 py-1 rounded-lg text-[14px] text-white ">
                         <AppstoreOutlined className='me-1 '/>
                         <button className='font-semibold leading-[18px]'>Brows All Categories</button>
                        </div>
                    </div>
                </div>
            </div>   
        </div>
    );
                        
}

export default Navbar;
