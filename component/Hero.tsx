"use client"
import React from 'react'
import Image from 'next/image'
import { CustomButton } from '.'

const Hero= () => {
  const handleScroll = () =>{

  }

  return (
    <div className="hero">

      <div className="hero__text-container">
        <h1 className="hero__title">
          Find, See, or Join a event - quickly and easily!
        </h1>

        <p className="hero__subtitle">
          The best experience of starting point to attend tech events. provided by us
        </p>
        <CustomButton
            title="Explore"
            containerStyles='bg-primary-blue rounded-full mt-10'
            handleClick={handleScroll}
        />
      </div>

      <div className="hero__image-container">
        <div className="hero__image">
            <Image src="/undraw_developer_activity_re_39tg.svg" alt="hero" fill className="object-contain" />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  )
}

export default Hero