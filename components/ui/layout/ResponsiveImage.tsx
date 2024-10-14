// components/ResponsiveImage.tsx
import React from 'react'
import Image from 'next/image'

interface ResponsiveImageProps {
  src: string
  alt: string
  className?: string
  width?: number
  height?: number
}


export const ResponsiveImage: React.FC<ResponsiveImageProps> = ({ src, alt, className, width, height }) => {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image
          src={src}
          alt={alt}
          layout="responsive"
          width={width || 16}
          height={height || 9}
          className="object-cover"
        />
      </div>
    )
  }