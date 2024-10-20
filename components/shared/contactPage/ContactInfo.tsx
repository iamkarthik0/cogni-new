import React from 'react'
import Image from 'next/image'
import { FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from 'lucide-react'
import Link from 'next/link'

const ContactInfo = () => {
  return (
    <div className="max-w-md mx-auto p-6 space-y-10">
      <div className="flex items-center space-x-4 space-y-4">
        <div>
          <Image src="/call.png" alt="Call Us" width={64} height={64} className="text-white" />
        </div>
        <div className='space-y-1'>
          <h3 className="font-bold h4">Customer Support</h3>
          <p className="paragraph text-[#7D7D7D] font-bold">sales@cogninest.ai</p>
        </div>
      </div>
      
      <div className="flex items-center space-x-4 space-y-4">
        <div>
          <Image src="/customer.png" alt="Customer Support" width={64} height={64} className="text-white" />
        </div>
        <div className='space-y-1'>
          <h3 className="font-bold h4">Customer Support</h3>
          <p className="paragraph text-[#7D7D7D] font-bold">sales@cogninest.ai</p>
        </div>
      </div>
      
      <div className="flex items-start space-x-4 space-y-4">
        <div>
          <Image src="/follow.png" alt="Follow us on" width={64} height={64} className="text-white" />
        </div>
        <div>
          <h3 className="font-bold h4">Follow Us</h3>
          <div className='py-4 flex space-x-4'>
            {/* <FacebookIcon className="text-white" /> */}
            <Link href="https://www.linkedin.com/company/cogninest-ai/"><LinkedinIcon height={25} width={25}  className=' cursor-pointer text-gray-500 hover:scale-110'/></Link>
          
            {/* <YoutubeIcon className="text-white" />
            <InstagramIcon className="text-white" /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo