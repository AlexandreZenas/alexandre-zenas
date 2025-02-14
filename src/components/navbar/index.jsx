import { useState } from "react";
import { MainButton } from "../buttons/main-button";

export function Navbar(){
    const [menuOpen, setmenuOpen] = useState(false);

    function toggleMenu() {
        setmenuOpen(!menuOpen);
        console.log("click");
        
    }
    return(
        <nav id="navbar" className="w-full ">
            <div className="max-w-[1280px] mx-auto flex py-4  px-[2%] w-full justify-between items-center">
                <div>
                    <img src="icons/Logo.svg" alt="" />
                </div>
                <div className="md:flex  hidden gap-8 ">
                    <a className="text-lg text-black font-medium" href="">Sobre mim</a>
                    <a className="text-lg text-black font-medium" href="">Projetos</a>
                    <MainButton 
                        textButton={'Fazer um orçamento'}
                        // linkButton={'https://wa.me/5521995983041'}
                    />
                </div>
                <div className="block  md:hidden gap-4 ">
                    <img src="icons/navbar/menu.svg" alt="" onClick={toggleMenu}/>
                    <div className={`fixed h-screen w-[100vw] bg-[rgba(15,15,15,0.4)] top-0 ${menuOpen ? '-left-[0]  duration-[.75s] ' : '-left-[200vw] duration-[1s] delay-500'} `} onClick={toggleMenu}>
                        <div className={`${menuOpen ? ' -left-[0]  duration-[1s] delay-500' : ' -left-[200vw] duration-[1s] '} absolute h-full w-5/6 bg-black items-center flex flex-col px-8 py-8 gap-8`}>
                            <div className="flex justify-between w-full">
                                <img className="w-1/3" src="icons/Logo-light.svg" alt="" />
                                <img src="icons/navbar/close.svg" alt="" onClick={toggleMenu}/>
                            </div>
                            <div className="w-full h-[2px] bg-blue"></div>
                            <div className="flex flex-col w-full h-auto gap-4 justify-center items-center py-8">
                                <a className="text-lg text-white font-medium" href="">SOBRE MIM</a>
                                <a className="text-lg text-white font-medium" href="">PROJETOS</a>
                            </div>
                            <MainButton 
                                    textButton={'Fazer um orçamento'}
                                    // linkButton={'https://wa.me/5521995983041'}
                                />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}