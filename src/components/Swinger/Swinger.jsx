import React from 'react';
import ImgSwinger from '../../assets/images/swinger.svg'
import ImgPromo from '../../assets/images/promoMarquee.svg'
import ImgDslr from '../../assets/images/dslrcamera.svg'
import ImgLens from '../../assets/images/lensmikrophone.svg'
import ImgOutline from '../../assets/images/outlinekabel.svg'
import ImgAdobestock from '../../assets/images/adobestock.svg'
import ImgPromoiphone from '../../assets/images/promo.svg' 
import ImgChip from '../../assets/images/Chip.svg'
import ImgSutter from '../../assets/images/SutterSpeed.svg'
import ImgStability from '../../assets/images/Stability.svg'

const Swinger = () => {
    return (
        <div className='mb-[50px]'>
            <div className=''>
                <img src={ImgSwinger} alt="swinger" />
            </div>
            <div className='my-[50px]'>
                <img src={ImgPromo} alt="Promo Marquee" />
            </div>
            <div className='mb-[60px]'>
                <h2 className='text-center mb-10 text-[34px] leading-[40px] font-semibold'>What’s included</h2>
                <div className="included w-[850px] mx-auto flex justify-between items-center">
                    <div>
                        <img className='mb-5 mx-auto' src={ImgDslr} alt="dslr Camera" />
                        <p className='text-center text-[17.5px] font-medium leading-[21px]'>Nikon Z5</p>
                    </div>
                    <div>
                        <img className='mb-5 mx-auto' src={ImgLens} alt="dslr Camera" />
                        <p className='text-center text-[17.5px] font-medium leading-[21px]'>20mm Lens</p>
                    </div>
                    <div>
                        <img className='mb-5 mx-auto' src={ImgOutline} alt="dslr Camera" />
                        <p className='text-center text-[17.5px] font-medium leading-[21px]'>Chaging Cable</p>
                    </div>
                    <div>
                        <img className='mb-5 mx-auto' src={ImgAdobestock} alt="dslr Camera" />
                        <p className='text-center text-[17.5px] font-medium leading-[21px]'>Adobe Stock Subscription</p>
                    </div>
                </div>
            </div>

            <div className='w-[1200px] mx-auto mb-[60px]'>
                <img className='w-[1200px] rounded-3xl' src={ImgPromoiphone} alt="Creative Iphone" />
            </div>

            <div className='w-[1200px] mx-auto flex justify-between '>
                <div className='w-[390px]'>
                    <img className='w-[390px] mb-3 min-h-[200px]' src={ImgChip} alt="chip" />
                    <h2 className='text-[27px] leading-[32px] font-semibold mb-3'>Super powered.</h2>
                    <p className='text-[17px] font-normal leading-[25px]'>Z 5 is powered by Nikon’s fast, comprehensive EXPEED 6 
                        image processing system. It’s the secret behind the camera’s 
                        sensational photo and video quality, autofocus performance, 
                        low-light capabilities, distortion control, image clarity, color 
                        reproduction and more.
                    </p>
                </div>
                <div className='w-[390px]'>
                    <img className='w-[390px] mb-3 min-h-[200px]' src={ImgSutter} alt="Sutter" />
                    <h2 className='text-[27px] leading-[32px] font-semibold mb-3'>The stabilityyou crave.</h2>
                    <p className='text-[17px] font-normal leading-[25px]'>
                        Sharpness starts with stability, and Z 5 has one of
                         the best in-camera image stabilization systems available.
                          NIKKOR Z lenses activate 5-axis VR image stabilization—up 
                          to five stops* of stabilization in up to five directions
                    </p>
                </div>
                <div className='w-[390px]'>
                    <img className='w-[390px] mb-3 min-h-[200px]' src={ImgStability} alt="Sutter" />
                    <h2 className='text-[27px] leading-[32px] font-semibold mb-3'>In the blink of an iris.</h2>
                    <p className='text-[17px] font-normal leading-[25px]'>
                        Freeze time with shutter speeds as fast as 1/8000 of a second—fast
                        enough to capture moments invisible to the naked eye. When shooting 
                        with wide aperture settings for shallow depth-of-field and blurred 
                        backgrounds, that speed can also be used to control your shot’s 
                        brightness.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Swinger;
