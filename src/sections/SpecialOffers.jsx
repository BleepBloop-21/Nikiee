import React from 'react'
import { offer } from '../assets/images'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'

const SpecialOffers = () => {
  return (
    <section className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>
       <div className='flex-1'>
        <img src={offer} alt="specialOffer" width={773} height={690} className='object-contain w-full' />
       </div>
       <div className='flex flex-1 flex-col'>
        <h2 className='mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
          <span className='text-coral-red '> Special </span> Offer
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          Embark on a shopping journey that redefines your experience with unbeatable deals. From premier sections to incredible savings, we offer unparalleled value that sets us apart.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the  loftiest expectations. Your journey with us is nothing short of exceptional.</p>
        <div className='flex flex-wrap gap-4 mt-12 hover:underline hover:text-white-400 '>
          <Button label='View Details' iconURL={arrowRight}/>
          <Button label='Learn More' backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray" />
        </div>
      </div>
    </section>
  )
}

export default SpecialOffers