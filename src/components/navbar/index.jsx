import { useEffect, useRef, useState } from "react";
import { MainButton } from "../buttons/main-button";
import './index.css'
export function Navbar(){
    const [menuOpen, setmenuOpen] = useState(false);

    function toggleMenu() {
        setmenuOpen(!menuOpen);
        if (!menuOpen) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }
    }

    const navbarRef = useRef(null)
    const [boolean, setBoolean] = useState(true);

    useEffect(() => {
        let lastScrollY = window.scrollY;
        
        function handleScroll(){
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY) {
                setBoolean(false)
                
            } else if (currentScrollY < lastScrollY) {
                setBoolean(true)                
            }
            lastScrollY = currentScrollY;
        }

        window.addEventListener('scroll', () => {   
            handleScroll()
        })        
    }, []);  

    return(
        <nav id="navbar" className={` shadow-lg  w-full  transition-all duration-500  z-50 bg-white ${boolean ? 'fixed translate-y-0' : 'fixed -translate-y-96' } `} ref={navbarRef}>
            <div className="max-w-[1280px] relative mx-auto flex py-4  px-[2%] w-full justify-between  items-center ">
                <a href="#Hero">
                    <img src="icons/Logo.svg" alt="" />
                </a>
                <div className="lg:flex  hidden gap-8 items-center">
                    <a className="text-lg text-black font-medium" href="#About">Sobre mim</a>
                    <a className="text-lg text-black font-medium" href="#Portfolio">Projetos</a>
                    <a className="text-lg text-black font-medium" href="#Contact">Contato</a>
                    <MainButton 
                        target={'_blank'}
                        textButton={'Fazer um orçamento'}
                        linkButton={'https://wa.me/5521995983041'}
                    />
                </div>
                <div className="flex lg:hidden gap-4 ">
                    <img src="icons/navbar/menu.svg" alt="" onClick={toggleMenu}/>
                    <div className={`${menuOpen ? '-left-[0]  duration-[.75s] ' : '-left-[200vw] duration-[1s] delay-500'} fixed h-screen  w-[100vw] bg-[rgba(15,15,15,0.4)] top-0 `} >
                        <div className={`${menuOpen ? ' -left-[0]  duration-[1s] delay-500' : ' -left-[200vw] duration-[1s] '} absolute h-full w-5/6 bg-black items-center flex flex-col px-8 py-8 gap-8`}>
                            <div className="flex justify-between w-full">
                                <img className="w-1/3" src="icons/Logo-light.svg" alt="" />
                                <img src="icons/navbar/close.svg" alt="" onClick={toggleMenu}/>
                            </div>
                            <div className="w-full h-[2px] bg-blue"></div>
                            <div className="flex flex-col w-full h-auto gap-6  py-8">
                                <a className="text-lg text-white font-medium" href="#About" onClick={toggleMenu}>SOBRE MIM</a>
                                <a className="text-lg text-white font-medium" href="#Portfolio" onClick={toggleMenu}>PROJETOS</a>
                                <a className="text-lg text-white font-medium pb-4" href="#Contact" onClick={toggleMenu}>CONTATO</a>
                                <div onClick={toggleMenu}>
                                    <MainButton                                         
                                        styleButton={'py-4 px-6 rounded-md text-center'}
                                        textButton={'Fazer um orçamento'}
                                        linkButton={'https://wa.me/5521995983041'}
                                    />
                                </div>
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