import { LinkButton } from "../../../components/buttons/linkButton";
import { SocialMedias } from "../../../components/social-medias";
import { useEffect, useRef, useState } from "react";


export function About(){
    const rootRef = useRef(null);
    const [boolean, setBoolean] = useState(true);

    useEffect(() => {
        window.addEventListener('scroll', (ev) => {
            const positionElementY = rootRef.current?.getBoundingClientRect().top; 
            if(positionElementY < screen.height * 0.7){
                setBoolean(true);  
            }else if(positionElementY > screen.height * 0.7){
                setBoolean(false);            
            }            
        }, {'capture': true})
        
    }, []);  
    return(
        <section id="About" className="min-h-screen py-24 px-[2%]" ref={rootRef}>
            <div className={` ${ boolean ? 'flex' : ' hidden'} max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center`}>
                <img className="xl:h-[480px] lg:h-[400px] animate-slideLeft1" src="images/about/image.png" alt="" />
                <div className="flex flex-col items-start gap-4">
                    <h2 className="animate-slideTop1 text-black md:text-5xl text-4xl text-center md:text-start">O desenvolvedor ideal para o seu projeto web</h2>
                    <div className="animate-slideTop2 flex gap-8 py-4 lg:max-w-[640px] ">
                        <div className="h-2/2 w-2 bg-blue"></div>
                        <h3 className="font-extrabold text-lg md:text-xl text-black leading-5">Com estratégias digitais inovadoras e personalizadas, construímos uma história de crescimento e realização ao longo dos anos.</h3>
                    </div>
                    <div className="flex gap-4 animate-slideTop3">
                        <SocialMedias 
                            imagePath={'icons/about/email.svg'}
                            link={'mailto:contato@alexandrezenas.com'}
                        />
                        <SocialMedias 
                            imagePath={'icons/about/whatsapp.svg'}
                            link={'https://wa.me/5521995983041'}
                        />
                        <SocialMedias 
                            imagePath={'icons/about/linkedin.svg'}
                            link={'https://www.linkedin.com/in/alexandre-zenas-819b3163/'}
                        />
                        <SocialMedias 
                            imagePath={'icons/about/github.svg'}
                            link={'https://github.com/AlexandreZenas'}
                        />
                    </div>
                    <p className="text-black animate-slideTop4">Sou desenvolvedor independente com ampla experiência em projetos personalizados para empresas no Rio de Janeiro, atuando na criação de soluções digitais que atendem às necessidades específicas de cada cliente.</p>
                    <p className="text-black animate-slideTop5">Engenheiro de software instusiasta por tecnologia com familiaridade em Java, Spring, Javascript, Typescript, Node, React, Tailwind, SQL, MySQL e PostgreSQL. Sou apaixonado por trabalhar em projetos significativos que tenham um impacto positivo na vida das pessoas. Tenho experiência prática trabalhando no desenvolvimento de aplicações web e na criação e integração de APIs.</p>
                    <LinkButton buttonStyle={'animate-slideTop6'} link={'#Contact'} textLink={'Entre em contato'}/>
                </div>
            </div>
        </section>
    )
}