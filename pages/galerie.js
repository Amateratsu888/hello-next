import React from 'react'
import Image from 'next/image'
import image1 from '../public/assets/images/meg.jpg'
import image2 from '../public/assets/images/albina.jpg'
import image3 from '../public/assets/images/oleksandr.jpg'
import image4 from '../public/assets/images/sharan.jpg'
import image5 from '../public/assets/images/tai-bui.jpg'
export default function galerie() {
  return (
    <>
        <div className="galerie">
            <Image placeholder='blur' src={image1} height='2667' width='4000' alt='galerie' />
            <Image placeholder='blur' src={image2} height='6000' width='4000' alt='galerie' />
            <Image placeholder='blur' src={image3} height='2172' width='3257' alt='galerie' />
            <Image placeholder='blur' src={image4} height='5000' width='5000' alt='galerie' />
            <Image placeholder='blur' src={image5} height='6000' width='4000' alt='galerie' />
        </div>
    </>
  )
}
