import React from 'react'

const Button = ({link, ...otherProps}) => {
  return (
    <>
        <a href={link} className='p-2.5 bg-colorPink text-colorWhite hover:text-colorWhite font-sansita text-[14px] lg:text-2xl font-extrabold rounded-md self-center max-w-max uppercase'
          {...otherProps}
        />
    </>
  )
}

export default Button
