import React, {useRef, useState} from 'react';
import { Input } from 'antd';
import {useNavigate} from 'react-router-dom'
import '../Login/login.css'
import apiService from '../../service/api/dummyapi.js'
import imgSingin from '../../assets/images/singin.png'
import imgLogin from '../../assets/images/ebay.svg'
import imgArrow from '../../assets/images/arrowleft.svg'

const Login = () => {

    const username = useRef()
    const password = useRef()
    const [isUsername,setIsUsername] = useState(false)
    const [isPassword,setIsPassword] = useState(false)
    const navigate = useNavigate()

    const loginHandle = async ()=>{
        if(!!username.current.input.value || !!password.current.input.value){
            if(!!username.current.input.value){
                setIsUsername(false)
                if(!!password.current.input.value){
                    setIsPassword(false)
                    let res = await apiService.login({
                        username: 'kminchelle',
                        password: '0lelplR',
                    })
                    if(res?.status === 200){
                        navigate('/root')
                    }
                }
                else{
                    setIsPassword(true)
                }
            }
            else{
                setIsUsername(true) 
            }
           
        }
        else{
            setIsUsername(true)
            setIsPassword(true)
        }
    }

    return (
        <div className=''>
           <div className='flex justify-between items-center'>
                <div className='w-[760px] login_left'>
                    <div className='w-[400px] mx-auto'>
                        <img className='mb-4' src={imgLogin} alt="ebay" />
                        <p className='text-base font-normal text-color_login '>Welcome back!!!</p>
                        <h2 className='text-[56px] font-semibold leading-[84px] mb-2 text-black_color'>Sing in</h2>
                        <label className='text-[16px] font-normal text-black_color '>Username</label> <br />
                        
                        <div className='mb-4'>
                            <Input ref={username} className='w-[400px] min-h-[40px] bg-bginput_color 
                                placeholder-black_color border-0 '
                                placeholder='username'   
                                />
                                {
                                isUsername && <label className='text-red-600'>Username to'ldirilmadi!</label>
                                }
                        </div>
                        <div className='flex justify-between'>
                            <label >Password</label>
                            <label >Forgot Password?</label>
                        </div>

                        <div className='b-password mb-6'>
                            <Input.Password ref={password} className='bg-bginput_color w-[400px] min-h-[40px] 
                                placeholder-black_color border-0'
                                placeholder="password"
                            />
                            {
                            isPassword && <label className='text-red-600'>Password to'ldirilmadi!</label>
                            }
                        </div>
                        
                        <div className='w-[150px] flex justify-center mb-6 bg-btn_bg mx-auto rounded-3xl min-h-[46px]'>
                            <button onClick={loginHandle} className=' me-4 text-white text-base font-semibold'>SING IN</button>
                            <img  src={imgArrow} alt="arrow"/>
                        </div>
                        <p className='text-center text-grey_text text-base'>I don’t have an account?  
                        <span className='text-btn_bg ms-2 font-semibold'>Sign up</span></p>
                    </div>
                </div>
                <div className="w-[600px] login_right bg-bg_login min-h-screen relative">
                    <div className='absolute left-[-50px]'>
                        <img className='w-[450px]'  src={imgSingin} alt="Singin" />
                    </div>
                </div>
           </div>
        </div>
    );
}

export default Login;
