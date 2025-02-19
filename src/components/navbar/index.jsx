import { useState } from "react";
import { MainButton } from "../buttons/main-button";

export function Navbar(){
    const [menuOpen, setmenuOpen] = useState(false);

    function toggleMenu() {
        setmenuOpen(!menuOpen);
        console.log("click");
        
    }
    return(
        <nav id="navbar" className="w-full fixed shadow-lg animate-slideTop1 ">
            <div className="max-w-[1280px] relative mx-auto flex py-4  px-[2%] w-full justify-between  items-center ">
                <div>
                    <img src="icons/Logo.svg" alt="" />
                </div>
                <div className="md:flex  hidden gap-8 items-center">
                    <a className="text-lg text-black font-medium" href="#About">Sobre mim</a>
                    <a className="text-lg text-black font-medium" href="#Portfolio">Projetos</a>
                    <MainButton 
                        textButton={'Fazer um orçamento'}
                        linkButton={'#Contact'}
                    />
                </div>
                <div className="flex md:hidden gap-4 ">
                    <img src="icons/navbar/menu.svg" alt="" onClick={toggleMenu}/>
                    <div className={`${menuOpen ? '-left-[0]  duration-[.75s] ' : '-left-[200vw] duration-[1s] delay-500'} fixed h-screen  w-[100vw] bg-[rgba(15,15,15,0.4)] top-0 `} >
                        <div className={`${menuOpen ? ' -left-[0]  duration-[1s] delay-500' : ' -left-[200vw] duration-[1s] '} absolute h-full w-5/6 bg-black items-center flex flex-col px-8 py-8 gap-8`}>
                            <div className="flex justify-between w-full">
                                <img className="w-1/3" src="icons/Logo-light.svg" alt="" />
                                <img src="icons/navbar/close.svg" alt="" onClick={toggleMenu}/>
                            </div>
                            <div className="w-full h-[2px] bg-blue"></div>
                            <div className="flex flex-col w-full h-auto gap-6  py-8">
                                <a className="text-lg text-white font-medium" href="">SOBRE MIM</a>
                                <a className="text-lg text-white font-medium" href="">PROJETOS</a>
                                <MainButton 
                                    styleButton={'my-4 py-4 px-6 rounded-md text-center'}
                                    textButton={'Fazer um orçamento'}
                                    linkButton={'#Contact'}
                                />
                            </div>
                        </div>
                        <div className='absolute h-full w-1/6 right-0' onClick={toggleMenu}>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}