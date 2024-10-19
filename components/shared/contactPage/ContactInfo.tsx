import React from 'react'
import Image from 'next/image'

const ContactInfo = () => {
  return (
    <div className="max-w-md mx-auto p-6 space-y-10">
      <div className="flex items-center space-x-4 space-y-4">
        <div>
          <Image src="/call.png" alt="Call Us" width={64} height={64} className="text-white" />
        </div>
        <div className='space-y-1'>
          <h3 className="font-bold h4">Customer Support</h3>
          <p className="paragraph text-[#7D7D7D] font-bold">info@cognisest.ai</p>
        </div>
      </div>
      
      <div className="flex items-center space-x-4 space-y-4">
        <div>
          <Image src="/customer.png" alt="Customer Support" width={64} height={64} className="text-white" />
        </div>
        <div className='space-y-1'>
          <h3 className="font-bold h4">Customer Support</h3>
          <p className="paragraph text-[#7D7D7D] font-bold">info@cognisest.ai</p>
        </div>
      </div>
      
      <div className="flex items-start space-x-4 space-y-4">
        <div>
          <Image src="/follow.png" alt="Follow us on" width={64} height={64} className="text-white" />
        </div>
        <div>
          <h3 className="font-bold h4">Follow Us</h3>
          <div className='py-2'>
            <Image src="/infoicon.png" alt="Info Icon" width={200} height={34} className="text-white" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo