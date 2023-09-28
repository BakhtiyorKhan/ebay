import React, {useRef} from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space, } from 'antd';
import { useNavigate } from 'react-router-dom';

const SearchComponents = () => {

    const searchQuery = useRef()
    const navigate = useNavigate()

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

    function searchHandle() {
        navigate(`/search/${searchQuery.current.value}`)

    }
    return (
        <div>
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
                    <input ref={searchQuery} className='w-[450px] h-[45px] bg-transparent border-0 outline-0 
                        font-normal leading-[21px] text-[21px]' placeholder="Search for items..." />
                </Space>

                <button onClick={searchHandle} className='w-[55px] h-[45px] flex items-center justify-center text-white font-bold 
                    rounded-r-lg bg-btn_bg border-0 outline-none'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default SearchComponents;
