import React, { useState } from 'react'
import Card from './Card'
import {    FiChevronLeft,FiChevronRight } from 'react-icons/fi'


const  Testimonial = (props) => {
    let reviews = props.reviews;
    const[index , setIndex]= useState(0);

   function leftHandler(){
      if(index-1 < 0){
        setIndex(reviews.length-1)
      }
      else 
    setIndex(index-1)
   }
   function rightHandler(){
    if(index+1 > reviews.length-1){
      setIndex(0)
        }
      else 
  setIndex(index+1)
   }
   function surpriseHandler(){
    // setIndex(index-1)
    setIndex((Math.floor(Math.random()*reviews.length)))
   }


  return (
    <div className='w-[85v] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl'>
      <Card  review = {reviews[index]}/>

      <div className='text-3xl mt-8 gap-3 text-violet-500 font-bold'>
            <button onClick={leftHandler} className='cursor-pointer hover:text-violet-400'>
                <FiChevronLeft/>
            </button>
            <button onClick={rightHandler} className='cursor-pointer hover:text-violet-400'>
               <FiChevronRight/>
            </button>
        </div>
        <div className='mt-6'>
            <button  onClick={surpriseHandler} className='bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg'>Surprise Me</button>
        </div>
    </div>
  )
}

export default Testimonial