import React from 'react'
import img_banner from '../../assets/images/img_banner.webp'
const Banner = () => {
    return (
        <section className="relative overflow-hidden">
            <img className="w-full h-auto object-cover animate-zoomIn" src={img_banner} alt="" />
            <div className="absolute w-full top-10 sm:top-1/2 sm:-translate-y-1/2 left-4 sm:left-10 text-left pr-6">
                <h2 className="text-base sm:text-xl md:text-2xl lg:text-4xl font-bold text-white leading-snug sm:leading-normal lg:leading-10 animate-slideInLeft">
                    Harmony in Design: <br />
                    Blending Form and Function
                </h2>
                <a
                    style={{ animationDelay: '0.3s' }}
                    href="#none"
                    className="animate-slideInLeft mt-4 sm:mt-6 lg:mt-8 h-9 border border-white px-6 sm:px-7 inline-flex items-center font-semibold text-white rounded-full text-sm sm:text-[15px] hover:bg-white hover:text-black transition-all duration-300">
                    Shop now
                </a>
            </div>
        </section>
    )
}

export default Banner
