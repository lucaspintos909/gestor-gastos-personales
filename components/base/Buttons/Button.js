import {React,useState,useEffect} from 'react'

export default function Button( { type='button', onClick, children,size='px-10 py-3',variant='contained',color='success'} ) {
  // useEffect(() => {
    
  // },[]);

  return (
    <button  
      type={type} 
      onClick={onClick} 
      className={`rounded-lg btn-${variant} btn-${variant}-${color} ${size} font-bold`}
    >
      {children}
    </button>
  )
}