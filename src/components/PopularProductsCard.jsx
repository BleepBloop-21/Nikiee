import React from 'react'
import { star } from '../assets/icons'

const PopularProductsCard = (props) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full hover:scale-110 cursor-pointer'>
      <img 
      src={props.imgURL} alt="shoeName"
      className='w-[280px] h-[280px] ' />
      <div className='mt-8 flex justify-start gap-2.5 '>
        <img src={star} alt="shoe ratings" />
        <p className='text-slate-gray text-xl leading-normal font-montserrat'>(4.5)</p>
      </div>
      <h3 className='mt-2 text-2xl leading-normal font-medium font-palanquin'> {props.name} </h3>
      <p className='mt-2 font-medium font-montserrat text-coral-red text-2xl leading-normal'> {props.price} </p>
    </div>
  )
}

export default PopularProductsCard
