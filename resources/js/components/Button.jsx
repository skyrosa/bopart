import React from 'react'

const Button = ({idEvent, event, ...otherProps}) => {
  return (
    <>
        <button onClick={() => event(idEvent)} className=' p-2 bg-colorPink text-colorWhite hover:text-colorWhite hover:bg-[#cc706f] font-sansita text-[13px] lg:text-2xl font-extrabold rounded-md self-center max-w-max uppercase'
          {...otherProps}
        />
    </>
  )
}

export default Button
