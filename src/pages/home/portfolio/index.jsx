import { LinkButton } from "../../../components/buttons/linkButton";
import { Projects } from "../../../components/projects";
import { useEffect, useRef, useState } from "react";

export function Portfolio(){
        const rootRef = useRef(null);
        const [boolean, setBoolean] = useState(true);
    
        useEffect(() => {
            window.addEventListener('scroll', () => {
                const positionElementY = rootRef.current?.getBoundingClientRect().top; 
                if(positionElementY < screen.height * 0.7){
                    setBoolean(true);  
                }else if(positionElementY > screen.height * 0.7){
                    setBoolean(false);            
                }            
            })
        }, []);  
        
    return(
        <section id="Portfolio" className="px-[2%] py-24" ref={rootRef}>
            <div className={`${ boolean ? 'animate-elementIn' : 'opacity-0'} max-w-[1280px] mx-auto flex flex-col w-full gap-4`}>
                <h1 className="animate-elementIn text-black md:text-5xl text-4xl font-medium">Meus Projetos</h1>
                <div className="animate-elementIn w-full h-[2px] bg-[#DBDBDB]"></div>
                <Projects 
                    title={'FB Chaves Construções'}
                    subTitle={'Desenvolvimento Web, Design.'}
                    date={'2025'}
                    textOne={'Este projeto foi desenvolvido para a construtora FB Chaves Construções.'}
                    textTwo={'O site conta com mais de 10 páginas, incluindo Home, Portfólio, Sobre nós e serviços.'}
                    textTree={'Criei todo o design e desenvolvi o site utilizando react e tailwindcss como principais tecnologias'}
                    textLink={'fbchaves.com.br'}
                    link={'https://www.fbchaves.com.br'}
                    animateImage={'animate-slideRight1'}
                    imagesPath={'images/projects/fbchaves.svg'}
                />
                <Projects 
                    styleProjects={'lg:flex-row-reverse'}
                    title={'ImpulseOn agency'}
                    subTitle={'Desenvolvimento Web, Design.'}
                    date={'2024'}
                    textOne={'Está é a agência digital ImpulseOn, da qual eu faço parte como desenvolvedor web e design UX.'}
                    textTwo={'Oferecemos serviços digitais como desenvolvimento de landing pages, websites, criação e gestão de anúncios e  campanhas.'}
                    textTree={'Este é um projeto completo, que inclue animações suaves, design personalizado e formulário para envio de dados. '}
                    textLink={'impulseonagency.com'}
                    link={'https://www.impulseonagency.com'}
                    animateImage={'animate-slideLeft1'}
                    imagesPath={'images/projects/impulseon.svg'}
                />
                <Projects 
                    title={'Vidraçaria Silver Glass'}
                    subTitle={'Landing page, design.'}
                    date={'2024'}
                    textOne={'Esta é uma landing page de conversão que fiz para uma vidraçaria do Rio de Janeiro.'}
                    textTwo={'A silver glass é uma vidraçaria com mais de 10 anos de mercado.  Seus principais serviços são: Envidraçamento de sacadas, blindex, espelhos personalizados e box para banheiro.'}
                    textTree={'Criei todo o design da página focado na conversão de leads, e desenvolvi todo o projeto usando tecnologicas como react e vite.'}
                    textLink={'vidraçariasilverglass.com.br'}
                    link={'https://xn--vidraariasilverglass-70b.com.br/'}
                    animateImage={'animate-slideRight1'}
                    imagesPath={'images/projects/silverglass.svg'}
                />
{/* <Projects      
<Projects 
imagesPath={'images/projects/silverglass.svg'}
>
<h4 className={`${ boolean ? 'animate-slideTop1' : ''} animate-slideTop1 text-xl font-medium text-black`}>Vidraçaria Silver Glass </h4>
<span className="animate-slideTop2 font-medium text-sm text-black">Landing page, design.</span>
<span className="animate-slideTop2 font-medium text-sm text-black">2024</span>
<p className="animate-slideTop3 font-medium text-sm text-[#575757] pt-4">Esta é uma landing page de conversão que fiz para uma vidraçaria do Rio de Janeiro.</p>
<p className="animate-slideTop4 font-medium text-sm text-[#575757] pt-4"> </p>
<p className="animate-slideTop5 font-medium text-sm text-[#575757] py-4"></p>
<LinkButton 
buttonStyle={'animate-slideTop6'}
target={"_blanc"}
textLink={''}
link={''}
/>
</Projects> */}
            </div>
        </section>
    )
}