import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import resumePDF from "../assets/Sa-Yoor Headley's Resume.pdf"
import data from '../data.js'

export default function Header({ theme, themeToggle }) {
    
    const [menu, setMenu] = useState('closed')

    function menuToggle(){
        setMenu(menu === 'open' ? 'closed' : 'open')
    }

  return (
    <header id='header' className='transition-all z-[999] fixed top-0 left-0 w-full p-6 text-darkGray bg-white dark:bg-darkGray dark:text-white'>
        {/* Navigation */}
        <nav className='hidden lg:flex justify-around items-center'>
            {/* Title */}
            <a className='text-3xl font-bold text-center' href='#home'>Sa-Yoor Headley</a>

            {/* Page Links */}
            <div className='flex gap-x-4 font-medium text-lg items-center h-8'>
                <a className='transition-all hover:underline focus:underline' href='#home'>Home</a>
                <a className='transition-all hover:underline focus:underline' href='#projects'>Projects</a>
                <a className='transition-all hover:underline focus:underline' href='#skills'>Skills</a>
                <a className='transition-all hover:underline focus:underline' href='#contact'>Contact</a>
            </div>

            {/* Social Links */}
            <div className='flex gap-x-4'>

                {/* Github */}
                <a href={data.websites.github} target='_blank' rel='noreferrer' className='group flex flex-col items-center relative transition-all hover:bg-fill-white'>
                    <svg className='transition-all w-6 h-6 fill-lightBlue group-hover:fill-black dark:group-hover:fill-white' viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_210_5)">
                        <path className='fill-inherit' d="M16.5297 0.123703C7.43512 0.123703 0.0602722 7.62286 0.0602722 16.8743C0.0602722 24.2753 4.77927 30.5543 11.3231 32.7692C12.1462 32.9243 12.4484 32.4059 12.4484 31.9634C12.4484 31.5639 12.4331 30.2444 12.426 28.8447C7.84418 29.8581 6.87735 26.8683 6.87735 26.8683C6.12818 24.9322 5.04873 24.4173 5.04873 24.4173C3.55445 23.3777 5.16137 23.3991 5.16137 23.3991C6.81518 23.517 7.68599 25.1252 7.68599 25.1252C9.1549 27.6861 11.5388 26.9457 12.4786 26.5177C12.6264 25.4354 13.0533 24.6958 13.5242 24.2778C9.86619 23.8543 6.02073 22.4179 6.02073 15.9994C6.02073 14.1706 6.66409 12.6763 7.71762 11.5032C7.54663 11.0811 6.98288 9.37764 7.87718 7.07032C7.87718 7.07032 9.26016 6.62013 12.4075 8.78735C13.7212 8.41624 15.1301 8.23006 16.5297 8.22374C17.9294 8.23006 19.3394 8.41624 20.6555 8.78735C23.799 6.62013 25.1801 7.07032 25.1801 7.07032C26.0765 9.37764 25.5125 11.0811 25.3415 11.5032C26.3975 12.6763 27.0366 14.1706 27.0366 15.9994C27.0366 22.4332 23.1838 23.8498 19.5164 24.2645C20.1071 24.7843 20.6335 25.8037 20.6335 27.3666C20.6335 29.6075 20.6144 31.4114 20.6144 31.9634C20.6144 32.4092 20.9108 32.9315 21.7456 32.767C28.2859 30.5495 32.9989 24.2728 32.9989 16.8743C32.9989 7.62286 25.6252 0.123703 16.5297 0.123703Z" />
                        <path className='fill-inherit' d="M6.29807 24.1741C6.2618 24.2576 6.13307 24.2823 6.0158 24.2252C5.89634 24.1705 5.82925 24.0571 5.86798 23.9735C5.90343 23.8879 6.03243 23.8643 6.15161 23.9211C6.27134 23.9761 6.33953 24.0906 6.29807 24.1741Z"/>
                        <path className='fill-inherit' d="M6.96505 24.9308C6.88654 25.0049 6.73299 24.9705 6.62881 24.8534C6.52108 24.7367 6.5009 24.5805 6.58054 24.5053C6.66154 24.4312 6.81044 24.4659 6.91844 24.5827C7.02617 24.7008 7.0472 24.8559 6.96505 24.9308Z"/>
                        <path className='fill-inherit' d="M7.61454 25.8955C7.51368 25.9668 7.34868 25.8999 7.24665 25.751C7.14573 25.602 7.14573 25.4234 7.24886 25.3518C7.35109 25.2803 7.51368 25.3446 7.61701 25.4924C7.71766 25.6436 7.71766 25.8226 7.61454 25.8955Z"/>
                        <path className='fill-inherit' d="M8.50426 26.8275C8.41399 26.9288 8.22169 26.9017 8.08096 26.7635C7.93693 26.6284 7.89685 26.4367 7.98739 26.3355C8.07876 26.234 8.27216 26.2626 8.41399 26.3996C8.55685 26.5344 8.60051 26.7274 8.50426 26.8275Z"/>
                        <path className='fill-inherit' d="M9.73148 27.3688C9.69167 27.5 9.50646 27.5596 9.31994 27.5038C9.13363 27.4464 9.01173 27.2928 9.04941 27.1602C9.08812 27.0282 9.27408 26.966 9.46205 27.0256C9.64801 27.0828 9.77018 27.2354 9.73148 27.3688Z"/>
                        <path className='fill-inherit' d="M11.0793 27.4691C11.0839 27.6073 10.9257 27.7219 10.7299 27.7241C10.533 27.7287 10.3738 27.6169 10.3716 27.481C10.3716 27.3415 10.5262 27.2281 10.7231 27.2247C10.9189 27.2209 11.0793 27.3318 11.0793 27.4691Z"/>
                        <path className='fill-inherit' d="M12.3335 27.2519C12.3569 27.3868 12.2208 27.5252 12.0264 27.5618C11.8352 27.5976 11.6582 27.5144 11.634 27.3806C11.6102 27.2425 11.7488 27.1041 11.9397 27.0683C12.1344 27.0339 12.3087 27.1149 12.3335 27.2519Z"/>
                        </g>
                    </svg>
                    <p className='hidden text-center absolute -bottom-5 text-xs transition-all group-hover:block'>Github</p>
                </a>

                {/* LinkedIn */}
                <a href={data.websites.linkedIn} target='_blank' rel='noreferrer' className='group flex flex-col items-center relative transition-all hover:bg-fill-white'>
                    <svg className='transition-all w-6 h-6 fill-lightBlue group-hover:fill-black dark:group-hover:fill-white' viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_210_6)">
                            <path className='fill-inherit' fillRule="evenodd" clipRule="evenodd" d="M16.5 0C7.38733 0 0 7.38733 0 16.5C0 25.6127 7.38733 33 16.5 33C25.6127 33 33 25.6127 33 16.5C33 7.38733 25.6127 0 16.5 0ZM7.9211 13.666H11.6603V24.901H7.9211V13.666ZM11.9067 10.1906C11.8824 9.08902 11.0947 8.25 9.81544 8.25C8.53627 8.25 7.7 9.08902 7.7 10.1906C7.7 11.2694 8.51159 12.1325 9.7669 12.1325H9.79082C11.0947 12.1325 11.9067 11.2694 11.9067 10.1906ZM20.8403 13.4022C23.3009 13.4022 25.1456 15.0083 25.1456 18.4592L25.1454 24.901H21.4063V18.8902C21.4063 17.3805 20.8652 16.3503 19.5116 16.3503C18.4786 16.3503 17.8632 17.0448 17.593 17.7156C17.4941 17.956 17.4699 18.2909 17.4699 18.6267V24.9013H13.7301C13.7301 24.9013 13.7794 14.7205 13.7301 13.6663H17.4699V15.2576C17.9661 14.4926 18.855 13.4022 20.8403 13.4022Z" />
                        </g>
                    </svg>
                    <p className='hidden text-center absolute -bottom-5 text-xs transition-all group-hover:block'>LinkedIn</p>
                </a>

                {/* Resume Download */}
                <a href={resumePDF} download target='_blank' rel='noreferrer' className='group flex flex-col items-center relative transition-all hover:bg-fill-white'>
                    <svg className='transition-all w-6 h-6 fill-lightBlue group-hover:fill-black dark:group-hover:fill-white' viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className='fill-inherit' fillRule="evenodd" clipRule="evenodd" d="M12.0559 1.71875H17.875C18.1485 1.71875 18.4108 1.8274 18.6042 2.0208L28.2292 11.6458C28.4226 11.8392 28.5312 12.1015 28.5312 12.375V23.6941C28.5312 24.8119 28.5312 25.7133 28.4716 26.4433C28.4102 27.1949 28.2804 27.855 27.9693 28.4659C27.475 29.4361 26.6861 30.2248 25.7159 30.7193C25.105 31.0304 24.4449 31.1602 23.6933 31.2216C22.9633 31.2812 22.0619 31.2812 20.9441 31.2812H12.0558C10.9382 31.2812 10.0367 31.2812 9.30673 31.2216C8.55511 31.1602 7.89491 31.0304 7.28412 30.7193C6.3139 30.2248 5.52509 29.4361 5.03075 28.4659C4.71954 27.855 4.58979 27.1949 4.52837 26.4433C4.46874 25.7133 4.46874 24.8117 4.46875 23.6941V9.30586C4.46874 8.18821 4.46874 7.28673 4.52837 6.55673C4.58979 5.80511 4.71954 5.14491 5.03075 4.53412C5.52509 3.5639 6.3139 2.77509 7.28412 2.28075C7.89491 1.96954 8.55511 1.83979 9.30673 1.77837C10.0367 1.71874 10.9382 1.71874 12.0559 1.71875ZM9.47469 3.83402C8.8506 3.88502 8.49206 3.98008 8.22047 4.11846C7.63835 4.41506 7.16506 4.88835 6.86846 5.47047C6.73008 5.74206 6.63502 6.1006 6.58402 6.72469C6.53205 7.3608 6.53125 8.17788 6.53125 9.35V23.65C6.53125 24.8222 6.53205 25.6392 6.58402 26.2753C6.63502 26.8994 6.73008 27.258 6.86846 27.5296C7.16506 28.1116 7.63835 28.5849 8.22047 28.8816C8.49206 29.0199 8.8506 29.1149 9.47469 29.1659C10.1108 29.2179 10.9279 29.2188 12.1 29.2188H20.9C22.0722 29.2188 22.8892 29.2179 23.5253 29.1659C24.1494 29.1149 24.508 29.0199 24.7796 28.8816C25.3616 28.5849 25.8349 28.1116 26.1316 27.5296C26.2699 27.258 26.3649 26.8994 26.4159 26.2753C26.4679 25.6392 26.4688 24.8222 26.4688 23.65V13.4062H20.039C19.6849 13.4063 19.3597 13.4063 19.0879 13.3841C18.7949 13.3601 18.4742 13.3053 18.1576 13.144C17.7048 12.9133 17.3367 12.5452 17.106 12.0924C16.9447 11.7757 16.8898 11.4551 16.8659 11.1621C16.8438 10.8903 16.8438 10.5651 16.8438 10.2111V3.78125H12.1C10.9279 3.78125 10.1108 3.78205 9.47469 3.83402ZM18.9062 5.23966L25.0103 11.3438H20.075C19.673 11.3438 19.4334 11.343 19.2559 11.3284C19.1476 11.3196 19.1019 11.3079 19.0898 11.3041C19.0283 11.2718 18.9782 11.2216 18.9459 11.1602C18.9421 11.148 18.9304 11.1025 18.9215 10.9941C18.9071 10.8166 18.9062 10.5771 18.9062 10.175V5.23966ZM18.9471 11.1638L18.9464 11.1618L18.9471 11.1638ZM19.0862 11.3029L19.0883 11.3036L19.0862 11.3029Z" />
                        <path className='fill-inherit' fillRule="evenodd" clipRule="evenodd" d="M16.5 15.4688C15.9305 15.4688 15.4687 15.9305 15.4687 16.5V23.6353L13.1042 21.2708C12.7015 20.8681 12.0485 20.8681 11.6458 21.2708C11.2431 21.6736 11.2431 22.3264 11.6458 22.7292L15.7708 26.8542C16.1736 27.2569 16.8264 27.2569 17.2292 26.8542L21.3542 22.7292C21.7569 22.3264 21.7569 21.6736 21.3542 21.2708C20.9514 20.8681 20.2986 20.8681 19.8958 21.2708L17.5312 23.6353V16.5C17.5312 15.9305 17.0695 15.4688 16.5 15.4688Z" />
                    </svg>
                    <p className='hidden text-center absolute w-max -bottom-5 text-xs transition-all group-hover:block'>Resume Download</p>
                </a>
                
                {/* Resume Link */}
                <a href={data.websites.resume} target='_blank' rel='noreferrer' className='group flex flex-col items-center relative transition-all hover:bg-fill-white'>
                    <svg className='transition-all w-6 h-6 fill-lightBlue group-hover:fill-black dark:group-hover:fill-white' viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className='fill-inherit' fillRule="evenodd" clipRule="evenodd" d="M1.71875 16.5C1.71875 12.1335 5.25849 8.59375 9.625 8.59375H12.375C12.9445 8.59375 13.4062 9.05546 13.4062 9.625C13.4062 10.1945 12.9445 10.6562 12.375 10.6562H9.625C6.39759 10.6562 3.78125 13.2726 3.78125 16.5C3.78125 19.7274 6.39759 22.3437 9.625 22.3437H12.375C12.9445 22.3437 13.4062 22.8055 13.4062 23.375C13.4062 23.9445 12.9445 24.4062 12.375 24.4062H9.625C5.25849 24.4062 1.71875 20.8664 1.71875 16.5ZM19.5938 9.625C19.5938 9.05546 20.0555 8.59375 20.625 8.59375H23.375C27.7414 8.59375 31.2812 12.1335 31.2812 16.5C31.2812 20.8664 27.7414 24.4062 23.375 24.4062H20.625C20.0555 24.4062 19.5938 23.9445 19.5938 23.375C19.5938 22.8055 20.0555 22.3437 20.625 22.3437H23.375C26.6024 22.3437 29.2188 19.7274 29.2188 16.5C29.2188 13.2726 26.6024 10.6562 23.375 10.6562H20.625C20.0555 10.6562 19.5938 10.1945 19.5938 9.625ZM9.96875 16.5C9.96875 15.9305 10.4305 15.4687 11 15.4687H22C22.5695 15.4687 23.0312 15.9305 23.0312 16.5C23.0312 17.0695 22.5695 17.5312 22 17.5312H11C10.4305 17.5312 9.96875 17.0695 9.96875 16.5Z" />
                    </svg>
                    <p className='hidden text-center absolute w-max -bottom-5 text-xs transition-all group-hover:block'>Resume Link</p>
                </a>

            </div>

            {/* Dark/Light Mode Icon */}
            <button onClick={themeToggle}>
                {theme === 'dark' ? <Icon className={`${theme === "light" ? '-rotate-360 scale-0' : 'rotate-360 scale-1'} transition-all w-8 h-8`}  icon="ic:baseline-dark-mode" /> : <Icon className={`${theme === "dark" ? 'rotate-180 scale-0' : '-rotate-180 scale-1'} transition-all w-8 h-8`} icon="ic:baseline-light-mode" />}
            </button>
        </nav>

        {/* Mobile Nav */}
        <nav className='relative flex flex-col lg:hidden'>
            <div className='flex justify-around gap-x-2 items-center'>
                {/* Dark/Light Mode Icon */}
                <button onClick={themeToggle}>
                    {theme === 'dark' ? <Icon className={`${theme === "light" ? '-rotate-360 scale-0' : 'rotate-360 scale-1'} transition-all w-8 h-8`}  icon="ic:baseline-dark-mode" /> : <Icon className={`${theme === "dark" ? 'rotate-180 scale-0' : '-rotate-180 scale-1'} transition-all w-8 h-8`} icon="ic:baseline-light-mode" />}
                </button>

                {/* Title */}
                <a className='text-2xl sm:text-3xl font-bold text-center' href='home'>Sa-Yoor Headley</a>
                
                {/*Hamburger */}
                <button onClick={menuToggle} className='relative'>
                    {menu === 'closed' ? <Icon icon="charm:menu-hamburger" className={`${menu === "open" ? '-rotate-180 scale-0' : 'rotate-180 scale-1'} transition-all w-8 h-8`} /> : <Icon icon="ep:close-bold" className={`${menu === "closed" ? 'rotate-180 scale-0' : '-rotate-180 scale-1'} transition-all w-8 h-8`} />}
                </button>
            </div>

            {/* Menu */}
            <div className={`${menu === 'closed' ? '-translate-y-96 opacity-0' : 'translate-y-6 opacity-1'} transition-all border-b border-x border-superDarkGray dark:border-lightGray border-3 absolute top-full left-1/2 translate-y-6 -translate-x-1/2 bg-white dark:bg-superDarkGray p-6 gap-3 flex flex-col items-center rounded-b-lg`}>
                {/* Page Links */}
                <div className='flex gap-x-8 text-lg font-medium items-center h-8'>
                    <a onClick={menuToggle} className='transition-all hover:underline focus:underline' href='#home'>Home</a>
                    <a onClick={menuToggle} className='transition-all hover:underline focus:underline' href='#projects'>Projects</a>
                    <a onClick={menuToggle} className='transition-all hover:underline focus:underline' href='#skills'>Skills</a>
                    <a onClick={menuToggle} className='transition-all hover:underline focus:underline' href='#contact'>Contact</a>
                </div>

                {/* Social Links */}
                <div className='flex gap-x-4'>

                    {/* Github */}
                    <a href={data.websites.github} target='_blank' rel='noreferrer' className='group flex flex-col items-center relative transition-all hover:bg-fill-white'>
                        <svg className='transition-all w-6 h-6 fill-lightBlue group-hover:fill-white' viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_210_5)">
                            <path className='fill-inherit' d="M16.5297 0.123703C7.43512 0.123703 0.0602722 7.62286 0.0602722 16.8743C0.0602722 24.2753 4.77927 30.5543 11.3231 32.7692C12.1462 32.9243 12.4484 32.4059 12.4484 31.9634C12.4484 31.5639 12.4331 30.2444 12.426 28.8447C7.84418 29.8581 6.87735 26.8683 6.87735 26.8683C6.12818 24.9322 5.04873 24.4173 5.04873 24.4173C3.55445 23.3777 5.16137 23.3991 5.16137 23.3991C6.81518 23.517 7.68599 25.1252 7.68599 25.1252C9.1549 27.6861 11.5388 26.9457 12.4786 26.5177C12.6264 25.4354 13.0533 24.6958 13.5242 24.2778C9.86619 23.8543 6.02073 22.4179 6.02073 15.9994C6.02073 14.1706 6.66409 12.6763 7.71762 11.5032C7.54663 11.0811 6.98288 9.37764 7.87718 7.07032C7.87718 7.07032 9.26016 6.62013 12.4075 8.78735C13.7212 8.41624 15.1301 8.23006 16.5297 8.22374C17.9294 8.23006 19.3394 8.41624 20.6555 8.78735C23.799 6.62013 25.1801 7.07032 25.1801 7.07032C26.0765 9.37764 25.5125 11.0811 25.3415 11.5032C26.3975 12.6763 27.0366 14.1706 27.0366 15.9994C27.0366 22.4332 23.1838 23.8498 19.5164 24.2645C20.1071 24.7843 20.6335 25.8037 20.6335 27.3666C20.6335 29.6075 20.6144 31.4114 20.6144 31.9634C20.6144 32.4092 20.9108 32.9315 21.7456 32.767C28.2859 30.5495 32.9989 24.2728 32.9989 16.8743C32.9989 7.62286 25.6252 0.123703 16.5297 0.123703Z" />
                            <path className='fill-inherit' d="M6.29807 24.1741C6.2618 24.2576 6.13307 24.2823 6.0158 24.2252C5.89634 24.1705 5.82925 24.0571 5.86798 23.9735C5.90343 23.8879 6.03243 23.8643 6.15161 23.9211C6.27134 23.9761 6.33953 24.0906 6.29807 24.1741Z"/>
                            <path className='fill-inherit' d="M6.96505 24.9308C6.88654 25.0049 6.73299 24.9705 6.62881 24.8534C6.52108 24.7367 6.5009 24.5805 6.58054 24.5053C6.66154 24.4312 6.81044 24.4659 6.91844 24.5827C7.02617 24.7008 7.0472 24.8559 6.96505 24.9308Z"/>
                            <path className='fill-inherit' d="M7.61454 25.8955C7.51368 25.9668 7.34868 25.8999 7.24665 25.751C7.14573 25.602 7.14573 25.4234 7.24886 25.3518C7.35109 25.2803 7.51368 25.3446 7.61701 25.4924C7.71766 25.6436 7.71766 25.8226 7.61454 25.8955Z"/>
                            <path className='fill-inherit' d="M8.50426 26.8275C8.41399 26.9288 8.22169 26.9017 8.08096 26.7635C7.93693 26.6284 7.89685 26.4367 7.98739 26.3355C8.07876 26.234 8.27216 26.2626 8.41399 26.3996C8.55685 26.5344 8.60051 26.7274 8.50426 26.8275Z"/>
                            <path className='fill-inherit' d="M9.73148 27.3688C9.69167 27.5 9.50646 27.5596 9.31994 27.5038C9.13363 27.4464 9.01173 27.2928 9.04941 27.1602C9.08812 27.0282 9.27408 26.966 9.46205 27.0256C9.64801 27.0828 9.77018 27.2354 9.73148 27.3688Z"/>
                            <path className='fill-inherit' d="M11.0793 27.4691C11.0839 27.6073 10.9257 27.7219 10.7299 27.7241C10.533 27.7287 10.3738 27.6169 10.3716 27.481C10.3716 27.3415 10.5262 27.2281 10.7231 27.2247C10.9189 27.2209 11.0793 27.3318 11.0793 27.4691Z"/>
                            <path className='fill-inherit' d="M12.3335 27.2519C12.3569 27.3868 12.2208 27.5252 12.0264 27.5618C11.8352 27.5976 11.6582 27.5144 11.634 27.3806C11.6102 27.2425 11.7488 27.1041 11.9397 27.0683C12.1344 27.0339 12.3087 27.1149 12.3335 27.2519Z"/>
                            </g>
                        </svg>
                        <p className='hidden text-center absolute -bottom-5 text-xs transition-all group-hover:block'>Github</p>
                    </a>

                    {/* LinkedIn */}
                    <a href={data.websites.linkedIn} target='_blank' rel='noreferrer' className='group flex flex-col items-center relative transition-all hover:bg-fill-white'>
                        <svg className='transition-all w-6 h-6 fill-lightBlue group-hover:fill-black dark:group-hover:fill-white' viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_210_6)">
                                <path className='fill-inherit' fillRule="evenodd" clipRule="evenodd" d="M16.5 0C7.38733 0 0 7.38733 0 16.5C0 25.6127 7.38733 33 16.5 33C25.6127 33 33 25.6127 33 16.5C33 7.38733 25.6127 0 16.5 0ZM7.9211 13.666H11.6603V24.901H7.9211V13.666ZM11.9067 10.1906C11.8824 9.08902 11.0947 8.25 9.81544 8.25C8.53627 8.25 7.7 9.08902 7.7 10.1906C7.7 11.2694 8.51159 12.1325 9.7669 12.1325H9.79082C11.0947 12.1325 11.9067 11.2694 11.9067 10.1906ZM20.8403 13.4022C23.3009 13.4022 25.1456 15.0083 25.1456 18.4592L25.1454 24.901H21.4063V18.8902C21.4063 17.3805 20.8652 16.3503 19.5116 16.3503C18.4786 16.3503 17.8632 17.0448 17.593 17.7156C17.4941 17.956 17.4699 18.2909 17.4699 18.6267V24.9013H13.7301C13.7301 24.9013 13.7794 14.7205 13.7301 13.6663H17.4699V15.2576C17.9661 14.4926 18.855 13.4022 20.8403 13.4022Z" />
                            </g>
                        </svg>
                        <p className='hidden text-center absolute -bottom-5 text-xs transition-all group-hover:block'>LinkedIn</p>
                    </a>

                    {/* Resume Download */}
                    <a href={resumePDF} download target='_blank' rel='noreferrer' className='group flex flex-col items-center relative transition-all hover:bg-fill-white'>
                        <svg className='transition-all w-6 h-6 fill-lightBlue group-hover:fill-black dark:group-hover:fill-white' viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className='fill-inherit' fillRule="evenodd" clipRule="evenodd" d="M12.0559 1.71875H17.875C18.1485 1.71875 18.4108 1.8274 18.6042 2.0208L28.2292 11.6458C28.4226 11.8392 28.5312 12.1015 28.5312 12.375V23.6941C28.5312 24.8119 28.5312 25.7133 28.4716 26.4433C28.4102 27.1949 28.2804 27.855 27.9693 28.4659C27.475 29.4361 26.6861 30.2248 25.7159 30.7193C25.105 31.0304 24.4449 31.1602 23.6933 31.2216C22.9633 31.2812 22.0619 31.2812 20.9441 31.2812H12.0558C10.9382 31.2812 10.0367 31.2812 9.30673 31.2216C8.55511 31.1602 7.89491 31.0304 7.28412 30.7193C6.3139 30.2248 5.52509 29.4361 5.03075 28.4659C4.71954 27.855 4.58979 27.1949 4.52837 26.4433C4.46874 25.7133 4.46874 24.8117 4.46875 23.6941V9.30586C4.46874 8.18821 4.46874 7.28673 4.52837 6.55673C4.58979 5.80511 4.71954 5.14491 5.03075 4.53412C5.52509 3.5639 6.3139 2.77509 7.28412 2.28075C7.89491 1.96954 8.55511 1.83979 9.30673 1.77837C10.0367 1.71874 10.9382 1.71874 12.0559 1.71875ZM9.47469 3.83402C8.8506 3.88502 8.49206 3.98008 8.22047 4.11846C7.63835 4.41506 7.16506 4.88835 6.86846 5.47047C6.73008 5.74206 6.63502 6.1006 6.58402 6.72469C6.53205 7.3608 6.53125 8.17788 6.53125 9.35V23.65C6.53125 24.8222 6.53205 25.6392 6.58402 26.2753C6.63502 26.8994 6.73008 27.258 6.86846 27.5296C7.16506 28.1116 7.63835 28.5849 8.22047 28.8816C8.49206 29.0199 8.8506 29.1149 9.47469 29.1659C10.1108 29.2179 10.9279 29.2188 12.1 29.2188H20.9C22.0722 29.2188 22.8892 29.2179 23.5253 29.1659C24.1494 29.1149 24.508 29.0199 24.7796 28.8816C25.3616 28.5849 25.8349 28.1116 26.1316 27.5296C26.2699 27.258 26.3649 26.8994 26.4159 26.2753C26.4679 25.6392 26.4688 24.8222 26.4688 23.65V13.4062H20.039C19.6849 13.4063 19.3597 13.4063 19.0879 13.3841C18.7949 13.3601 18.4742 13.3053 18.1576 13.144C17.7048 12.9133 17.3367 12.5452 17.106 12.0924C16.9447 11.7757 16.8898 11.4551 16.8659 11.1621C16.8438 10.8903 16.8438 10.5651 16.8438 10.2111V3.78125H12.1C10.9279 3.78125 10.1108 3.78205 9.47469 3.83402ZM18.9062 5.23966L25.0103 11.3438H20.075C19.673 11.3438 19.4334 11.343 19.2559 11.3284C19.1476 11.3196 19.1019 11.3079 19.0898 11.3041C19.0283 11.2718 18.9782 11.2216 18.9459 11.1602C18.9421 11.148 18.9304 11.1025 18.9215 10.9941C18.9071 10.8166 18.9062 10.5771 18.9062 10.175V5.23966ZM18.9471 11.1638L18.9464 11.1618L18.9471 11.1638ZM19.0862 11.3029L19.0883 11.3036L19.0862 11.3029Z" />
                            <path className='fill-inherit' fillRule="evenodd" clipRule="evenodd" d="M16.5 15.4688C15.9305 15.4688 15.4687 15.9305 15.4687 16.5V23.6353L13.1042 21.2708C12.7015 20.8681 12.0485 20.8681 11.6458 21.2708C11.2431 21.6736 11.2431 22.3264 11.6458 22.7292L15.7708 26.8542C16.1736 27.2569 16.8264 27.2569 17.2292 26.8542L21.3542 22.7292C21.7569 22.3264 21.7569 21.6736 21.3542 21.2708C20.9514 20.8681 20.2986 20.8681 19.8958 21.2708L17.5312 23.6353V16.5C17.5312 15.9305 17.0695 15.4688 16.5 15.4688Z" />
                        </svg>
                        <p className='hidden text-center absolute w-max -bottom-5 text-xs transition-all group-hover:block'>Resume Download</p>
                    </a>
                    
                    {/* Resume Link */}
                    <a href={data.websites.resume} target='_blank' rel='noreferrer' className='group flex flex-col items-center relative transition-all hover:bg-fill-white'>
                        <svg className='transition-all w-6 h-6 fill-lightBlue group-hover:fill-black dark:group-hover:fill-white' viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className='fill-inherit' fillRule="evenodd" clipRule="evenodd" d="M1.71875 16.5C1.71875 12.1335 5.25849 8.59375 9.625 8.59375H12.375C12.9445 8.59375 13.4062 9.05546 13.4062 9.625C13.4062 10.1945 12.9445 10.6562 12.375 10.6562H9.625C6.39759 10.6562 3.78125 13.2726 3.78125 16.5C3.78125 19.7274 6.39759 22.3437 9.625 22.3437H12.375C12.9445 22.3437 13.4062 22.8055 13.4062 23.375C13.4062 23.9445 12.9445 24.4062 12.375 24.4062H9.625C5.25849 24.4062 1.71875 20.8664 1.71875 16.5ZM19.5938 9.625C19.5938 9.05546 20.0555 8.59375 20.625 8.59375H23.375C27.7414 8.59375 31.2812 12.1335 31.2812 16.5C31.2812 20.8664 27.7414 24.4062 23.375 24.4062H20.625C20.0555 24.4062 19.5938 23.9445 19.5938 23.375C19.5938 22.8055 20.0555 22.3437 20.625 22.3437H23.375C26.6024 22.3437 29.2188 19.7274 29.2188 16.5C29.2188 13.2726 26.6024 10.6562 23.375 10.6562H20.625C20.0555 10.6562 19.5938 10.1945 19.5938 9.625ZM9.96875 16.5C9.96875 15.9305 10.4305 15.4687 11 15.4687H22C22.5695 15.4687 23.0312 15.9305 23.0312 16.5C23.0312 17.0695 22.5695 17.5312 22 17.5312H11C10.4305 17.5312 9.96875 17.0695 9.96875 16.5Z" />
                        </svg>
                        <p className='hidden text-center absolute w-max -bottom-5 text-xs transition-all group-hover:block'>Resume Link</p>
                    </a>
                </div>

            </div>

        </nav>
    </header>
  )
}
