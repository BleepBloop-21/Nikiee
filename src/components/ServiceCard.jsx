import React from 'react'

const ServiceCard = (props) => {
  return (
    <div className='flex-1 w-full rounded-xl shadow-3xl shadow-slate-400 px-10 py-16 sm:min-w-[350px]'>
      <div className='w-11 h-11 flex justify-center items-center bg-coral-red rounded-full'>
        <img src={props.imgURL} alt={props.label} width={24} height={24} />
      </div>
      <h3 className='mt-4 font-palanquin text-3xl leading-normal font-bold'> {props.label} </h3>
      <p className='mt-2 break-words font-montserrat leading-normal text-slate-gray'> {props.subtext} </p>
    </div>
  )
}

export default ServiceCard
