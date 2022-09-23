import React from 'react'

export default function Button( 
  { type = 'button', onClick, children,size='px-10 py-3'} 
  ) {

  
  return (
    <button  
      type={type} 
      onClick={onClick} 
      className={`rounded-lg ${size} font-bold bg-gradient-to-r mt-1 from-accent to-accent-desat`}
    >
      {children}
    </button>
  )
}
