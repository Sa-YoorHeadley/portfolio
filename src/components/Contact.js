import React, { useEffect, useState } from 'react'
import emailjs from '@emailjs/browser';
import data from '../data.js';

export default function Contact() {
    const [message, setMessage] = useState({type: 'none', messages: []})
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    })
    const [formErrors, setFormErrors] = useState({})

    function getFormData (event){
        const {name, value} = event.target
        setFormData(prevFormData => 
            {
                return {
                    ...prevFormData,
                    [name] : value
                }
            }
        )
    }

    function checkValues(values){
        const errors = []
        const invalidFields = {}
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i

        if(values.firstName.trim().length === 0){
            invalidFields.firstName = 'invalid'
            errors.push("First Name is required!")
        }
        if(values.lastName.trim().length === 0){
            invalidFields.lastName = 'invalid'
            errors.push("Last Name is required!")
        }
        if(values.email.trim().length === 0){
            invalidFields.email = 'invalid'
            errors.push("Email is required!")
        }
        else if(!regex.test(values.email)){
            invalidFields.email = 'invalid'
            errors.push("Invalid email address!")
        }
        if(values.message.trim().length === 0){
            invalidFields.message = 'invalid'
            errors.push("Message is required!")
        }
        
        if(errors.length === 0){
            setMessage({
                type: 'valid',
                messages: []
            })
            return
        }
        setMessage({
            type: 'invalid',
            messages: [...errors]
        })

        setFormErrors(invalidFields)
        
        return 
    }

    useEffect(() => {
        if(message.type === 'valid'){
            emailjs.send('service_x28qjgf', 'template_vqngpmr', formData, 'DcFhZg0Pza5xSGGmp')
                .then((result) => {
                    const resultArray = []
                    resultArray.push('Message Sent!')
                    setMessage({type: 'success', messages: resultArray})
                    setFormData({
                        firstName: '',
                        lastName: '',
                        email: '',
                        message: ''
                    })
                }, (error) => {
                    const errorArray = []
                    errorArray.push('Message Failed To Send!')
                    setMessage({type: 'error', messages: errorArray})
                });
            setFormErrors({})
        }
        else{
            console.log('Resolve Errors')
        }
    }, [message.type, formData])

  
  return (
    <section id='contact' className='transition-all bg-contact-light dark:bg-contact-dark bg-cover h-[100vh] pt-28 pb-16 text-superDarkGray bg-superLightGray dark:bg-superDarkGray dark:text-white flex flex-col justify-center items-center lg:py-28 md:h-auto'>

        {/* Section Title */}
        <h1 className='font-bold text-4xl text-center uppercase tracking-widest'>Contact</h1>

        {/* Section Subtitle */}
        <h2 className='mt-12 text-lg'>Send Me A Message</h2>

        {/* Form */}
        <div className='w-4/5 sm:w-2/3 md:w-1/2 lg:w-1/3 grid grid-cols-2 gap-2 py-4 '>
            <input className={`bg-superLightGray dark:bg-superDarkGray py-1 indent-4 bg-transparent placeholder:text-superDarkGray dark:placeholder:text-lightGray border-2 rounded-lg ${!formErrors.firstName ? 'border-lightGray dark:border-darkGray hover:border-veryDarkGray focus:border-veryDarkGray dark:hover:border-lightGray dark:focus:border-lightGray' : 'border-rose-600' }`} type='text' name='firstName' value={formData.firstName} onChange={getFormData} placeholder='First Name'/>
            <input className={`bg-superLightGray dark:bg-superDarkGray py-1 indent-4 bg-transparent placeholder:text-superDarkGray dark:placeholder:text-lightGray border-2 rounded-lg ${!formErrors.lastName ? 'border-lightGray dark:border-darkGray hover:border-veryDarkGray focus:border-veryDarkGray dark:hover:border-lightGray dark:focus:border-lightGray' : 'border-rose-600' }`} type='text' name='lastName' value={formData.lastName} onChange={getFormData} placeholder='Last Name'/>
            <input className={`bg-superLightGray dark:bg-superDarkGray py-1 indent-4 bg-transparent placeholder:text-superDarkGray dark:placeholder:text-lightGray border-2 rounded-lg ${!formErrors.email ? 'border-lightGray dark:border-darkGray hover:border-veryDarkGray focus:border-veryDarkGray dark:hover:border-lightGray dark:focus:border-lightGray' : 'border-rose-600' } col-span-2`} type='email' name='email' value={formData.email} onChange={getFormData} placeholder='Email'/>
            <textarea className={`bg-superLightGray dark:bg-superDarkGray py-2 indent-4 min-h-[10rem] bg-transparent placeholder:text-superDarkGray dark:placeholder:text-lightGray col-span-2 border-2 rounded-lg ${!formErrors.message ? 'border-lightGray dark:border-darkGray hover:border-veryDarkGray focus:border-veryDarkGray dark:hover:border-lightGray dark:focus:border-lightGray' : 'border-rose-600' }`} type='text' name='message' value={formData.message} onChange={getFormData} placeholder='Message'></textarea>
            <button onClick={() => {checkValues(formData)}} className='text-white py-1 rounded-lg font-semibold bg-lightBlue hover:text-white hover:bg-superDarkGray dark:hover:text-lightBlue dark:hover:bg-white col-span-2'>Send</button>
        </div>
        
        {/* Error or Success Message */}
        {message.messages && <div className={`my-2 justify-center ${message.type === 'none' ? 'hidden' : message.type === 'error' || message.type === 'invalid' ? 'flex flex-col text-red-500' : message.type === 'success' ? 'flex flex-col text-green-500': ''}`}>{message.messages.map((message) => {
            return(
                <small key={message} className='my-1'>{message}</small>
            )
        })}</div>}

        {/* CTA */}
        <a className='my-6 text-superDarkGray py-1 px-4 font-bold rounded-full bg-white hover:text-lightBlue' href={data.websites.linkedIn} target='_blank' rel='noreferrer'>View LinkedIn</a>
    </section>
  )
}
