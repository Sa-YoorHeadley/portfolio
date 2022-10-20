import React from 'react'
import { Icon } from '@iconify/react';

export default function Tile({ name, icon, height, width }) {
  return (
    <div className={`w-${width} h-${height} space-y-1 rounded-xl flex flex-col justify-start items-center`}>
        {name !== 'Apps Script' && <Icon className='transition-all w-8 h-8 rounded-lg p-1 hover:bg-darkGray text-white bg-lightBlue dark:hover:bg-darkGray' icon={icon} />}
        {name === 'Apps Script' &&
            <svg className='transition-all w-8 h-8 rounded-lg p-1 bg-lightBlue fill-lightBlue hover:bg-darkGray hover:fill-darkGray' viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.4448 16.0596H4.45654C3.01381 16.0596 1.84424 17.2291 1.84424 18.6719C1.84424 20.1146 3.01381 21.2842 4.45654 21.2842H17.4448C18.8876 21.2842 20.0571 20.1146 20.0571 18.6719C20.0571 17.2291 18.8876 16.0596 17.4448 16.0596Z" fill="white"/>
                <path d="M4.47266 19.9854C5.19268 19.9854 5.77637 19.4017 5.77637 18.6816C5.77637 17.9616 5.19268 17.3779 4.47266 17.3779C3.75264 17.3779 3.16895 17.9616 3.16895 18.6816C3.16895 19.4017 3.75264 19.9854 4.47266 19.9854Z" fill="inherit"/>
                <path d="M5.4211 13.1622L15.9288 20.7966C17.096 21.6446 18.7297 21.3858 19.5777 20.2186C20.4257 19.0514 20.167 17.4178 18.9998 16.5698L8.49205 8.93544C7.32485 8.08742 5.69119 8.34617 4.84317 9.51336C3.99515 10.6806 4.2539 12.3142 5.4211 13.1622Z" fill="white"/>
                <path d="M6.91797 12.3115C7.63799 12.3115 8.22168 11.7278 8.22168 11.0078C8.22168 10.2878 7.63799 9.7041 6.91797 9.7041C6.19795 9.7041 5.61426 10.2878 5.61426 11.0078C5.61426 11.7278 6.19795 12.3115 6.91797 12.3115Z" fill="inherit"/>
                <path d="M19.9827 17.8395L15.9691 5.48689C15.5233 4.11477 14.0495 3.36386 12.6774 3.80969C11.3053 4.25552 10.5544 5.72926 11.0002 7.10138L15.0138 19.454C15.4596 20.8261 16.9334 21.577 18.3055 21.1312C19.6776 20.6853 20.4285 19.2116 19.9827 17.8395Z" fill="white"/>
                <path d="M13.4805 7.61621C14.2005 7.61621 14.7842 7.03252 14.7842 6.3125C14.7842 5.59248 14.2005 5.00879 13.4805 5.00879C12.7604 5.00879 12.1768 5.59248 12.1768 6.3125C12.1768 7.03252 12.7604 7.61621 13.4805 7.61621Z" fill="inherit"/>
                <path d="M19.0184 5.48693L15.0048 17.8395C14.5589 19.2116 15.3098 20.6854 16.682 21.1312C18.0541 21.5771 19.5278 20.8261 19.9737 19.454L23.9873 7.10143C24.4331 5.7293 23.6822 4.25556 22.3101 3.80973C20.9379 3.3639 19.4642 4.11481 19.0184 5.48693Z" fill="white"/>
                <path d="M17.5029 19.9385C18.2229 19.9385 18.8066 19.3548 18.8066 18.6348C18.8066 17.9147 18.2229 17.3311 17.5029 17.3311C16.7829 17.3311 16.1992 17.9147 16.1992 18.6348C16.1992 19.3548 16.7829 19.9385 17.5029 19.9385Z" fill="inherit"/>
                <path d="M21.5288 7.54834C22.2488 7.54834 22.8325 6.96465 22.8325 6.24463C22.8325 5.52461 22.2488 4.94092 21.5288 4.94092C20.8088 4.94092 20.2251 5.52461 20.2251 6.24463C20.2251 6.96465 20.8088 7.54834 21.5288 7.54834Z" fill="inherit"/>
            </svg>
        }
        <p className='word-wrap text-center text-xs'>{name}</p>
    </div>
  )
}
