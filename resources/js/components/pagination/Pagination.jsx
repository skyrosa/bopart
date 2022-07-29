import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'

const Pagination = ({page, max, next, previous}) => {

  return (
  <>
    <div className='flex flex-row w-full justify-center gap-6 items-center'>
      <button className='p-2 bg-colorYellow rounded hover:bg-[#dca955]' onClick={previous}>
        <FontAwesomeIcon icon={faArrowLeft} className='text-colorWhite text-3xl' />
      </button>
      
      <p className='text-2xl font-extrabold font-sansita'>Pagina {page} de {max}</p>

      <button className='p-2 bg-colorYellow rounded hover:bg-[#dca955]' onClick={next}>
        <FontAwesomeIcon icon={faArrowRight} className='text-colorWhite text-3xl' />
      </button>
    </div>
  </>
  )
}

export default Pagination
