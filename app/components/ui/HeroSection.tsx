import Link from 'next/link'
import React from 'react'
import { Button } from './moving-border'
import { WavyBackground } from './wavy-background'

const HeroSection = () => {
  return (
    <div className='h-auto md:h-[40rem] min-h-screen w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0'>
      <WavyBackground className='p-4 relative z-10 w-full text-center'>
        <h1 className='mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'>ViewAI Assessment</h1>
        <p className='mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis saepe explicabo atque tempore esse, vero delectus nemo enim veniam, iure </p>
        <div className='mt-4'>
          <Link href={"#TableSection"}>
            <Button borderRadius='1.75rem' className='bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800'>Get Started</Button>
          </Link>
        </div>
      </WavyBackground>
    </div>
  )
}

export default HeroSection