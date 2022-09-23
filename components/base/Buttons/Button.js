import {React,useState,useEffect} from 'react'

export default function Button( { type='button', onClick, children,size='px-10 py-3',variant='contained',color='success'} ) {
  
  const [_color , setColor] = useState("");
  const [_variant,setVariant] = useState("");

  function colorHandler(){
    let colors = {
      'success':'accent',
      'danger':'danger',
      'blue':'blue-accent',
    };
    setColor(colors[color]);
    console.log(_color);
  }
  function varaintHandler(){
    let variants = {
      'contained':`bg-${_color}`,
      'outlined':`border border-${_color} text-${_color} transition-colors hover:bg-${_color}`,
      'gradiant':`bg-gradient-to-r from-${_color} to-${_color}-desat`,
    };
    setVariant(variants[variant]);
  }
  useEffect(() => {
    colorHandler();
    varaintHandler();
  },[]);

  return (
    <button  
      type={type} 
      onClick={onClick} 
      className={`rounded-lg ${_variant} ${size} font-bold`}
    >
      {children}
    </button>
  )
}
