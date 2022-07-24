import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'



const BigCard = () => {
    return (
<>
<main className="flex flex-col   justify-center min-w-full h-screen  || bg-gradient-to-b from-colorYellow to-colorTourq">
        
    <div className="flex flex-col rounded-[10px] gap-2.5 container p-0 self-center bg-colorWhite  pb-5">
        <section className="">
            <div className='rounded-t-[10px] h-72  hidden md:block bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(https://images.unsplash.com/photo-1630807284621-9c1e13de79ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)`}} ></div>
        </section>
        <section className=" gap-[60px] flex flex-col">
        
        <div className="gap-2.5 mx-40 flex flex-col  text-center text-2xl font-extrabold font-sansita">
            <p className=" text-[40px]">San Juan</p>
            <p className=" font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus consequat ornare porttitor aliquet semper. Habitasse lorem netus est id elit ut. Nulla adipiscing maecenas hac vulputate lectus elementum. Molestie turpis blandit fermentum leo diam praesent tellus donec.</p>

        <div className=" justify-center font-bold flex items-center  ">

            <div className="   flex space-x-5">
            
            <div>
                <p className=" text-colorPink">Jueves, 23 de Junio</p>

                <div className="font-extrabold flex gap-3 ">
                    <p className="font-bold ">Aforo</p>

                    <div className="flex gap-1">
                        <p className="text-colorGreen">20</p>
                        <p>/</p>
                        <p className="">20</p>
                    </div>
                </div>

            </div>   

            <div className="flex gap-1">
            <div className="font-bold text-right">
                <p className="">Hora Inicio -</p>
                <p className="">Finaliza -</p>
            </div>

            <div className=" font-extrabold">
                <p className="">10 : 30AM</p>
                <p className="">15 : 00PM</p>
            </div>
            </div>
            
            </div>
        </div>
            
            <p className=" text-xl font-bold">CARRER DE BARNOLA, 08030 BARCELONA.</p>
            
        </div>
            
            
            

        <div className=" text-center p-2.5 bg-colorGreen text-colorWhite">
            <a className="font-bold font-librefranklin tracking-[0.20rem] text-2xl "
            href="">APUNTATE</a>

        </div>
        </section>
    </div>

</main>
</>
    )
}

export default BigCard
if (document.getElementById('big-card')) {
    const root = createRoot(document.getElementById("big-card"));
    root.render(<BigCard />);
}
