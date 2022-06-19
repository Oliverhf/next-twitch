import React from 'react'
import Categories from './Categories'
import Hero from './Hero'
import IconBar from './IconBar'
import LiveChannels from './LiveChannels'

const Main = () => {
  return (
    <div className='absolute left-[62px] xl:left-[240px] pt-14 md:pt-9'>
        <Hero />
        <LiveChannels />
        <IconBar />
        <Categories/>
    </div>
  )
}

export default Main