import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'



const BigCard = () => {
    return (
<>   
<div  className="flex flex-col    justify-center w-full    || bg-gradient-to-b from-colorYellow to-colorTourq">
    <div className="border-2  border-colorBlack flex flex-col lg:max-h-min lg:max-w-5xl md:max-w-3xl sm:max-w-2xl max-w-lg   gap-2.5 pb-5 rounded-[10px] container px-0 self-center bg-colorWhite ">
            <section className="">
                <div className='rounded-t-[10px] lg:h-72 md:h-60 sm:h-40 h-80  sm:block bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(https://images.unsplash.com/photo-1630807284621-9c1e13de79ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)`}} ></div>
            </section>
            <section className="border-2 border-colorPink gap-[60px] flex flex-col">
            
            <div className=" border-2 min-w-full self-center gap-2.5  flex flex-col  text-center md:text-2xl sm:text-xl text-lg   font-sansita">
                <p className="font-extrabold text-[40px]">San Juan</p>
                <p className=" font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus consequat ornare porttitor aliquet semper. Habitasse lorem netus est id elit ut. Nulla adipiscing maecenas hac vulputate lectus elementum. Molestie turpis blandit fermentum leo diam praesent tellus donec.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus consequat ornare porttitor aliquet semper. Habitasse lorem netus est id elit ut. Nulla adipiscing maecenas hac vulputate lectus elementum. Molestie turpis blandit fermentum leo diam praesent tellus donec.
                </p>

            <div className=" sm:text-2xl sm:flex-row text-3xl justify-center border font-bold flex-col flex items-center sm:space-x-5 sm:space-y-0 space-y-5 ">
            
                <div className="flex flex-col items-center justify-center border sm:w-auto w-full md: lg:flex-row lg:gap-4 sm:gap-1 gap-2">

                    <p className="flex text-colorPink">Jueves, 23 de Junio</p>
                    <div className="font-extrabold flex gap-2 ">

                            <p className="font-bold  ">Aforo</p>
                        <div className="flex gap-1">
                            <p className="text-colorGreen">20</p>
                            
                            <p className="">/ 20</p>
                        </div>
                    </div>

                </div>   

                <div className="flex border md:gap-5 md:flex-row flex-col    gap-1">
                    <div className=" md:flex flex text-righ gap-2">
                        <p className="border font-bold">Hora Inicio </p>
                        <p className="font-extrabold">10 : 30</p>
                    </div>

                    <div className=" md: md:flex flex justify-end  gap-2 ">
                        <p className="font-bold">Finaliza</p>
                        <p className="font-extrabold ">15 : 00</p>
                    </div>
                </div>
            </div>
                
                
                
                <p className=" text-xl font-bold">CARRER DE BARNOLA, 08030 BARCELONA.</p>
                
            </div>
                
                
                

                <a href='' className="hover:text-colorBlack hover:animate-pulse hover:bg-gradient-to-r hover:from-colorTourq hover:to-colorGreen text-center p-2.5 bg-colorGreen text-colorWhite">
                    <p className="font-bold font-librefranklin tracking-[0.20rem] text-2xl "
                    href="">APUNTATE</p>
                </a>    
            </section>
    </div>
</div>
</>
    )
}

export default BigCard
if (document.getElementById('big-card')) {
    const root = createRoot(document.getElementById("big-card"));
    root.render(<BigCard />);
}
{/* <div  class="flex flex-col    justify-center w-full    || bg-gradient-to-b from-colorYellow to-colorTourq">

<div className="border-2  border-colorBlack flex flex-col lg:max-h-min lg:max-w-5xl md:max-w-3xl sm:max-w-2xl max-w-lg   gap-2.5 pb-5 rounded-[10px] container px-0 self-center bg-colorWhite ">
        <section className="">
            <div className='rounded-t-[10px] lg:h-72 md:h-60 sm:h-40 h-80  sm:block bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(https://images.unsplash.com/photo-1630807284621-9c1e13de79ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)`}} ></div>
        </section>
        <section className="border-2 border-colorPink gap-[60px] flex flex-col">
            
            <div className="border-2 min-w-full self-center gap-2.5  flex flex-col  text-center md:text-2xl sm:text-xl text-lg   font-sansita">
                <p className="font-extrabold text-[40px]">San Juan</p>
                <p className=" font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus consequat ornare porttitor aliquet semper. Habitasse lorem netus est id elit ut. Nulla adipiscing maecenas hac vulputate lectus elementum. Molestie turpis blandit fermentum leo diam praesent tellus donec.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus consequat ornare porttitor aliquet semper. Habitasse lorem netus est id elit ut. Nulla adipiscing maecenas hac vulputate lectus elementum. Molestie turpis blandit fermentum leo diam praesent tellus donec.
                </p>

            <div className=" justify-center border font-bold flex  items-center space-x-5 ">
            
                <div className="border lg:flex gap-4">

                    <p className=" text-colorPink">Jueves, 23 de Junio</p>
                <div className="font-extrabold flex gap-2 ">

                        <p className="font-bold  ">Aforo</p>
                    <div className="flex gap-1">
                        <p className="text-colorGreen">20</p>
                        
                        <p className="">/ 20</p>
                    </div>
                </div>

                </div>   

                <div className="flex border lg:gap-5 lg:flex-row md:flex-col   gap-1">
                    <div className=" md:flex text-right">
                        <p className="font-bold">Hora Inicio </p>
                        <p className="font-extrabold">10 : 30</p>
                    </div>

                    <div className=" lg:flex-row md:flex  ">
                        <p className="font-bold">Finaliza</p>
                        <p className="font-extrabold">15 : 00</p>
                    </div>
                </div>
            </div>
                
                
                
                <p className=" text-xl font-bold">CARRER DE BARNOLA, 08030 BARCELONA.</p>
                
            </div>
                
            <a href='' className="hover:text-colorBlack hover:animate-pulse hover:bg-gradient-to-r hover:from-colorTourq hover:to-colorGreen text-center p-2.5 bg-colorGreen text-colorWhite">
                <p className="font-bold font-librefranklin tracking-[0.20rem] text-2xl "
                href="">APUNTATE</p>
            </a>    

                
        </section>
</div>

</div>
 */}
{/* <main className="flex flex-col   justify-center min-w-full h-screen  || bg-gradient-to-b from-colorYellow to-colorTourq">
        
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

</main> */}