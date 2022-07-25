import React, {useState, useEffect} from 'react'
import { createRoot } from "react-dom/client"

const ContactCollaborators = () => {
    return (
<>
        <div class="h-auto w-screen flex justify-center">

<div className="borde flex-col  text-center md:gap-[50px] sm: gap-8 flex py-[25px] sm: md: lg:py-[25px] container  bg-colorBlack text-colorWhite font-sansita text-3xl md:text-4xl ">

            
                        <section className="flex-col border self-center flex gap-5    ">
                            <div className="border text-left text-colorPink">
                                <p className="border">
                                    Bopart S.L 
                                </p>
                                <a href=""  
                                    className="hover:text-colorTourq || hover:animate-pulse   "> 
                                    Bopart@bopmail.es 
                                </a>
                            </div>
                            
                            <div className="text-lg sm:text-xl md:text-2xl">
                                <p>
                                Carrer de Barnola, 5B · 08030 Barcelona · (+34) 934 198 864
                                </p>
                            </div>
                        </section>
                
                    
                

                
                        <form className="border-colorWhite border justify-center sm:gap-4 gap-8 space flex-wrap sm:flex flex ">
                            <a className="flex sm:m-4 bg-cover bg-no-repeat bg-center w-full lg:w-1/4 md:w-2/5 sm:w-1/3 h-40 " style={{ backgroundImage: `url(https://i.postimg.cc/4xWZvqTV/702A6299.jpg)`}} ></a>
                            <a className="flex sm:m-4 bg-cover bg-no-repeat bg-center w-full lg:w-1/4 md:w-2/5 sm:w-1/3 h-40 " style={{ backgroundImage: `url(https://i.postimg.cc/4xWZvqTV/702A6299.jpg)`}} ></a>
                            <a className="flex sm:m-4 bg-cover bg-no-repeat bg-center w-full lg:w-1/4 md:w-2/5 sm:w-1/3 h-40 " style={{ backgroundImage: `url(https://i.postimg.cc/4xWZvqTV/702A6299.jpg)`}} ></a>
                            <a className="flex sm:m-4 bg-cover bg-no-repeat bg-center w-full lg:w-1/4 md:w-2/5 sm:w-1/3 h-40 " style={{ backgroundImage: `url(https://i.postimg.cc/4xWZvqTV/702A6299.jpg)`}} ></a>
                            <a className="flex sm:m-4 bg-cover bg-no-repeat bg-center w-full lg:w-1/4 md:w-2/5 sm:w-1/3 h-40 " style={{ backgroundImage: `url(https://i.postimg.cc/4xWZvqTV/702A6299.jpg)`}} ></a>

                        </form>
                
</div>
</div>


</>
    )
}

export default ContactCollaborators
if (document.getElementById('contact-collaborators')) {
    const root = createRoot(document.getElementById("contact-collaborators"));
    root.render(<ContactCollaborators />);
}