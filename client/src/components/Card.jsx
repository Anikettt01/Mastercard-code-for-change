import React from 'react'
import {Link } from 'react-router-dom'
const Card = (props) => {
  return (
    <div>
           <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
           <a href="#">
               <img className="rounded-t-lg" src="" alt="" />
           </a>
           <div className="p-5">
               <a href="#">
                   <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.name}</h5>
               </a>
               <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.description}</p>
               <p className="mb-3 font-normal text-xs text-blue-500 dark:text-gray-400">{props.requirements}</p>
               <p className="mb-3 font-bold text-xs text-black dark:text-gray-400">{props.type}</p>
              
                <div>
                    <Link to='/projectpage'>
                   Know More
                   </Link>
                   </div>
                   <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                       <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                   </svg>
               
           </div>
       </div>
    </div>
  )
}

export default Card