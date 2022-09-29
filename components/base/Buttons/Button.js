import {React,useState,useEffect} from 'react'

export default function Button( { type='button', onClick, children,size='normal',variant='contained',color='success'} ) {
  // useEffect(() => {
    
  // },[]);

  return (
    <button  
      type={type} 
      onClick={onClick} 
      className={`rounded-lg btn-${variant} btn-${variant}-${color} btn-${size} font-bold`}
    >
      {children}
    </button>
  )
}