import React from 'react'

const Hero = () => {
  return (
    <div id="hero" className='p-2 md:p-8'>
        <div className='relative overflow-hidden w-full pt-[56.25%]'>
            <iframe 
                className='absolute inset-0 w-full h-full'
                src='https://www.youtube.com/embed/fJje8GEHrsU'
                title='youtube video player'
                allowFullScreen

            />
        </div>
    </div>
  )
}

export default Hero

