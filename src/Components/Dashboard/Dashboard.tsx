import React from 'react'
import {Link}  from 'react-router-dom';

const Dashboard = () => {
  return (
    <section className='text-center h-full w-full flex bg-gray-100  border-2 border-t-border-gray'>
      <div className='bg-gray-none w-1/6 h-[100%] text-gray-600 mx-[1.5] flex flex-col'>
        <span className='h-[1.25rem] text-gray-600 text-center flex justify-left gap-4 my-[3rem] mx-[1.5rem]'> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <g clip-path="url(#clip0_7297_579)">
    <path d="M3.5 10.1333C3.33431 10.1333 3.2 9.99902 3.2 9.83333V3.5C3.2 3.33431 3.33431 3.2 3.5 3.2H8.16667C8.33235 3.2 8.46667 3.33431 8.46667 3.5V9.83333C8.46667 9.99902 8.33235 10.1333 8.16667 10.1333H3.5ZM3.5 16.8C3.33431 16.8 3.2 16.6657 3.2 16.5V13.5C3.2 13.3343 3.33431 13.2 3.5 13.2H8.16667C8.33235 13.2 8.46667 13.3343 8.46667 13.5V16.5C8.46667 16.6657 8.33235 16.8 8.16667 16.8H3.5ZM11.8333 16.8C11.6676 16.8 11.5333 16.6657 11.5333 16.5V10.1667C11.5333 10.001 11.6676 9.86667 11.8333 9.86667H16.5C16.6657 9.86667 16.8 10.001 16.8 10.1667V16.5C16.8 16.6657 16.6657 16.8 16.5 16.8H11.8333ZM11.5333 3.5C11.5333 3.33431 11.6676 3.2 11.8333 3.2H16.5C16.6657 3.2 16.8 3.33431 16.8 3.5V6.5C16.8 6.66569 16.6657 6.8 16.5 6.8H11.8333C11.6676 6.8 11.5333 6.66569 11.5333 6.5V3.5Z" stroke="rgb(73 81 111 / var(--tw-text-opacity))" stroke-width="1.4"/>
  </g>
  <defs>
    <clipPath id="clip0_7297_579">
      <rect width="20" height="20" fill="white"/>
    </clipPath>
  </defs>
</svg>

<Link to= "#"> <p className='font-bold'>Dashboard</p></Link></span>

<div> 
  
  <p className='font-[600] text-left mx-[1.5rem] my opacity-[0.8] text-sm'>ACTIVE LISTS</p></div>

<span className='h-[1.25rem] text-center flex justify-left mx-[1.5rem] align-middle gap-4 my-5'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
</svg>

<Link to= "#"> <p className=''>Users</p></Link></span>

<span className='h-[1.25rem] text-center flex justify-left mx-[1.5rem] gap-4 my-5'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
</svg>

<Link to= "#"> <p className=''>Bridal</p></Link></span>

<span className='h-[1.25rem] text-center flex justify-left mx-[1.5rem] align-middle gap-4 my-5'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
</svg>

<Link to= "#"> <p className=''>Item 7</p></Link></span>


<div> <p className='font-[600] text-left mx-[1.5rem] my opacity-[0.8] text-sm mt-7'>ITEMS</p></div>

<div className='flex flex-col justify-left mx-[1.5rem]'>
<span className='h-[1.25rem] text-center w-full flex align-middle gap-4 my-5'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
</svg>

<Link to= "#"> <p className=''>Catalogue</p></Link></span>

<span className='h-[1.25rem]  text-center flex  align-middle gap-4 my-5'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
</svg>

<Link to= "#"> <p className=''>Bridal</p></Link></span>

<span className='h-[1.25rem] text-center flex  align-middle gap-4 my-5'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
</svg>

<Link to= "#"> <p className=''>Item 7</p></Link></span>
</div>


</div>

      <div className=' w-5/6 h-[100%] text-black '>
        This is dashboard
      </div>
    </section>
  )
}

export default Dashboard