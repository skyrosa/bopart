import React, {useState, useEffect} from 'react'
import Button from '../Button'

const SmallCard = () => {
    return (
<>
<section class=" flex flex-col gap-[10px] font-extrabold font-sansita text-colorBlack bg-colorWhite rounded-[10px]   ">
    
    <div class="max-w-fit mb-2.5 hidden md:block sm:block  " >
        <img class="rounded-t-[10px] " src="https://hogueras.com/wp-content/uploads/2020/09/noche-de-san-juan-768x432.jpg.webp" alt=""/>
    </div>

    <div class="flex flex-col text-center gap-[40px] py-[20px]  ">
        <p class="text-[26px]">San Juan </p>
        <p class="text-[20px] text-colorPink">Jueves, 23 de Junio</p>
        <p class="font-bold">CARRER DE BARNOLA, 08030 BARCELONA.</p>
    </div>

    <button class=" tracking-[0.20em] h-fit py-4 px-[93px] font-librefranklin font-bold text-[24px] bg-colorGreen rounded-bl-[10px] rounded-br-[10px]  text-colorWhite text-2xl">
        APUNTATE
    </button>
</section>
        </>
    )
}

export default SmallCard