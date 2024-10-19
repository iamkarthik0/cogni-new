import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const FinanceHero = () => {
  return (
    <div className=' flex  flex-col  lg:flex-row gap-6'>
<div className='flex justify-center flex-col  lg:max-w-1/2  space-y-5'>
<p className='subtle-text'>Finance & Insurance</p>
<h1 className=' h1 lg:max-w-2xl'> AI Solutions for Finance & Insurance</h1>
<Link href="contact-us" > <Button className='btn'>Lets Talk</Button>  </Link>
</div>

<div className=' lg:max-w-1/2'>
<Image src="/finance.png" alt='finance' width={612} height={400}/>
</div>

    </div>
  )
}

export default FinanceHero