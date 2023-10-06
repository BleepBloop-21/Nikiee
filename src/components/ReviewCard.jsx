import React from 'react'
import { star } from '../assets/icons'

const ReviewCard = (props) => {
  return (
    <div className='flex justify-center items-center flex-col'>
      <img src={props.imgURL} alt="image for review" className='rounded-full object-cover w-[120px] h-[120px]' />
      <p className='mt-6 max-w-sm text-center info-text'> {props.feedback} </p>
      <div className='flex mt-4 justify-center items-center gap-3'>
        <img src= {star} alt="rating star" width={24} height={24} className='object-contain'/>
        <p className='text-xl font-montserrat text-slate-gray'> ({props.rating}) </p>
      </div>
      <h3 className='mt-4 text-3xl font-palanquin text-clip font-bold'> {props.customerName} </h3>
    </div>
  )
}

export default ReviewCard
