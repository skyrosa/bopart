import React, {useState, useEffect} from 'react'
import Button from '../Button'

const SmallCard_Old = () => {
    return (
<>
<section className=" h-fit  max-w-max flex flex-col gap-[10px] font-extrabold font-sansita text-colorBlack bg-colorWhite rounded-[10px]   ">
    <div className="max-w-fit mb-2.5 hidden md:block sm:block  " >
        <img className="rounded-t-[10px] w-screen max-h-56 object-cover " src="https://images.unsplash.com/photo-1658266212763-49bf8e9f8ac7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt=""/>
    </div>

    <div className="flex flex-col text-center gap-[40px] py-[20px]  ">
        <p className="text-[26px]">San Miguel </p>
        <p className="text-[20px] text-colorPink">Jueves, 23 de Junio</p>
        <p className="font-bold">CARRER DE BARNOLA, 08030 BARCELONA.</p>
    </div>

    <button className=" tracking-[0.20em] h-fit py-4   font-librefranklin font-bold text-[24px] bg-colorYellow rounded-bl-[10px] rounded-br-[10px]  text-colorWhite text-2xl">
    DESAPUNTAR
    </button>
</section>
</>
    )
}
const SmallCardA = () => {
    return (
<>
<section class=" h-fit xl:   max-w-max flex flex-col gap-[10px] font-extrabold font-sansita text-colorBlack bg-colorWhite rounded-[10px]   ">
    <div class="max-w-fit mb-2.5 hidden md:block sm:block  " >
        <img class="rounded-t-[10px] w-screen max-h-56 object-cover " src="https://images.unsplash.com/photo-1658266212763-49bf8e9f8ac7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt=""/>
    </div>

    <div class="flex flex-col  px-2 center   text-center gap-[40px] py-[20px]  ">
        <p class="text-[26px]">A </p>
        <p class="text-[20px] text-colorPink">Jueves, 23 de Junio</p>
        <p class=" font-bold">CARRER DE BARNOLA, 08030 BARCELONA.</p>
    </div>

    <button class="xl:px-5 tracking-[0.20em] h-fit py-4   font-librefranklin font-bold text-[24px] bg-colorYellow rounded-bl-[10px] rounded-br-[10px]  text-colorWhite text-2xl">
    DESAPUNTAR
    </button>
</section>
</>
    )
}

export default SmallCardA