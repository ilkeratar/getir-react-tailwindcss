import React from 'react'

function MobileApp() {
  return (
    <div className='bg-primary-brand-color flex justify-between items-center bg-mobile-app rounded-lg text-white'>
      <div className='flex flex-col gap-y-3 p-10'>
        <h3 className='text-3xl font-bold tracking-tighter'>Getir'i indirin!</h3>
        <p className='font-semibold'>İstediğiniz ürünleri dakikalar içinde kapınıza <br /> getirelim.</p>
        <div className='mt-5 flex gap-x-2'>
          <a href="#">
							<img
								src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"/>
						</a>
						<a href="#">
							<img
								src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"/>
						</a>
						<a href="#">
							<img
								src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"/>
						</a>
        </div>
      </div>
      <picture className='self-end mt-4'>
      <img src="https://cdn.getir.com/getirweb-images/common/landing/phoneLanding.png"/>
      </picture>
    </div>
  )
}

export default MobileApp