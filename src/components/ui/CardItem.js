import React from 'react'

function CardItem({card}) {
  return (
    <div className='bg-white p-14 rounded-lg shadow-sm flex flex-col items-center justify-center text-center'>
        <img className='w-[150px] h-[150px] mb-6' src={card.image} alt={card.title} />
        <h6 className='font-semibold text-lg text-primary-brand-color'>{card.title}</h6>
        <p className='mt-2 text-sm text-gray-700'>{card.description}</p>
    </div>
  )
}

export default CardItem