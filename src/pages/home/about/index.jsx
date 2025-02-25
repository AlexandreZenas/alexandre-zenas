import { LinkButton } from "../../../components/buttons/linkButton";
import { SocialMedias } from "../../../components/social-medias";
import { useEffect, useRef, useState } from "react";


export function About(){
    const rootRef = useRef(null);
    const [boolean, setBoolean] = useState(true);

    useEffect(() => {
        window.addEventListener('scroll', (ev) => {
            const positionElementY = rootRef.current?.getBoundingClientRect().top; 
            if(positionElementY < screen.height * 0.7 ){
                setBoolean(true);  
            }else if(positionElementY > screen.height * 0.7){
                setBoolean(false);            
            }            
        }, {'capture': true})
        
    }, []);  
    return(
        <section id="About" className=" py-24 px-[2%]" ref={rootRef}>
            <div className={`max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center`}>
                <img className={` ${ boolean ? 'animate-slideLeft1 ' : 'opacity-0'} xl:h-[480px] lg:h-[400px]`} src="images/about/image.png" alt="" />
                <div className="flex flex-col items-start gap-4">
                    <h2 className={`${ boolean ? 'animate-slideTop1 ' : 'opacity-0'}  text-black md:text-5xl text-4xl text-center md:text-start`}>O desenvolvedor ideal para o seu projeto web</h2>
                    <div className={`${ boolean ? 'animate-slideTop2 ' : 'opacity-0'}  flex gap-8 py-4 lg:max-w-[640px] `}>
                        <div className="h-2/2 w-2 bg-blue"></div>
                        <h3 className="font-extrabold text-lg md:text-xl text-black leading-5">Com estratégias digitais inovadoras e personalizadas, construímos uma história de crescimento e realização ao longo dos anos.</h3>
                    </div>
                    <div className={`${ boolean ? 'animate-slideTop3 ' : 'opacity-0'} flex gap-4 `}>
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
                    <p className={`${ boolean ? 'animate-slideTop4 ' : 'opacity-0'} text-black `}>Sou desenvolvedor independente com ampla experiência em projetos personalizados para empresas no Rio de Janeiro, atuando na criação de soluções digitais que atendem às necessidades específicas de cada cliente.</p>
                    <p className={`${ boolean ? 'animate-slideTop5 ' : 'opacity-0'} text-black `}>Engenheiro de software instusiasta por tecnologia com familiaridade em Java, Spring, Javascript, Typescript, Node, React, Tailwind, SQL, MySQL e PostgreSQL. Sou apaixonado por trabalhar em projetos significativos que tenham um impacto positivo na vida das pessoas. Tenho experiência prática trabalhando no desenvolvimento de aplicações web e na criação e integração de APIs.</p>
                    <div className={`${ boolean ? 'animate-slideTop6 ' : 'opacity-0'}`}>
                        <LinkButton
                            target={'_blank'}
                            link={'https://wa.me/5521995983041'} 
                            textLink={'Entre em contato'}
                        />
                    </div>                    
                </div>
            </div>
        </section>
    )
}