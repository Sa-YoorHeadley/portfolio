import React from 'react'
import data from '../data.js'
import IllustrationLarge from '../assets/Illustration Large.png';
import { Icon } from '@iconify/react';

export default function Hero() {
  return (
    <main id='home' className='bg-hero-light dark:bg-hero-dark bg-cover transition-all h-[100vh] relative pb-12 flex items-center bg-veryLightGray text-veryDarkGray dark:bg-veryDarkGray dark:text-white  text-center md:h-auto md:py-36 md:pl-24 md:items-center md:text-left'>
        {/* Info Section */}
        <div className='w-4/5 mx-auto flex flex-col items-center space-y-6 justify-start md:items-start md:pl-6 md:w-5/6'>
            <section className='flex flex-col space-y-3 md:space-y-0'>
                <h2 className='text-superDarkGray dark:text-lightGray font-medium uppercase tracking-widest'>Frontend Developer</h2>
                <h1 className='text-4xl lg:text-5xl xl:text-6xl font-bold'>Solving problems with <span className='underline'>creative</span> solutions</h1>
            </section>

            {/* CTAs*/}
            <div className='flex flex-col space-y-3 justify-center items-center md:space-y-0 md:space-x-4 md:justify-start md:flex-row font-bold'>
                {/* Projects */}
                <a className='py-1 px-4 text-white bg-lightBlue rounded-full transition-all hover:text-lightBlue hover:bg-white' href='#projects'>See Projects</a>
                <a className='text-lightBlue underline text-sm transition-all hover:text-veryDarkGray dark:hover:text-white' href={data.websites.resume}>View Resume</a>
            </div>
        </div>

        {/* Illustration */}
        <div className=''>
            <img className='hidden md:block' src={IllustrationLarge} alt='Illustration representing of a Web Developer'/>
        </div>
            
        {/* Scroll */}
        <a href='#projects' className='absolute bottom-16 left-1/2 -translate-x-1/2 md:bottom-24 md:-pl-24'>
            <Icon icon="gg:mouse" className='w-12 h-12'/>
        </a>

    </main>
  )
}
