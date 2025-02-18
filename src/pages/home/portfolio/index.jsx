import { LinkButton } from "../../../components/buttons/linkButton";
import { Projects } from "../../../components/projects";

export function Portfolio(){
    return(
        <section id="Portfolio" className="px-[2%]">
            <div className="max-w-[1280px] mx-auto flex flex-col w-full py-24 gap-4">
                <h1 className="text-black md:text-5xl text-4xl font-medium">Meus Projetos</h1>
                <div className="w-full h-[2px] bg-[#DBDBDB]"></div>
                <Projects 
                    imagesPath={'images/projects/fbchaves.svg'}
                >
                    <h4 className="text-xl font-medium text-black">FB Chaves Construções</h4>
                    <span className="font-medium text-sm text-black">Desenvolvimento Web, Design.</span>
                    <span className="font-medium text-sm text-black">2025</span>
                    <p className="font-medium text-sm text-[#575757] pt-4">Este projeto foi desenvolvido para a construtora FB Chaves Construções.</p>
                    <p className="font-medium text-sm text-[#575757] pt-4">O site conta com mais de 10 páginas, incluindo Home, Portfólio, Sobre nós e serviços. </p>
                    <p className="font-medium text-sm text-[#575757] py-4">Eu criei todo o design e desenvolvi o site utilizando react e tailwindcss como principais tecnologias</p>
                    <LinkButton 
                        textLink={'fbchaves.com.br'}
                        link={'https://fb-chaves.vercel.app/'}
                    />
                </Projects>
                <Projects 
                    styleProjects={'lg:flex-row-reverse'}
                    imagesPath={'images/projects/impulseon.svg'}
                >
                    <h4 className="text-xl font-medium text-black">ImpulseOn agency</h4>
                    <span className="font-medium text-sm text-black">Desenvolvimento Web, Design.</span>
                    <span className="font-medium text-sm text-black">2024</span>
                    <p className="font-medium text-sm text-[#575757] pt-4">Está é a agência digital ImpulseOn, da qual eu faço parte como desenvolvedor web e design UX.</p>
                    <p className="font-medium text-sm text-[#575757] pt-4">Oferecemos serviços digitais como desenvolvimento de landing pages, websites, criação e gestão de anúncios e  campanhas.</p>
                    <p className="font-medium text-sm text-[#575757] py-4">Este é um projeto completo, que inclue animações suaves, design personalizado e formulário para envio de dados. </p>
                    <LinkButton 
                        textLink={'ImpulseOnAgency.com'}
                        link={'https://www.ImpulseOnAgency.com'}
                    />
                </Projects>
                <Projects 
                    imagesPath={'images/projects/silverglass.svg'}
                >
                    <h4 className="text-xl font-medium text-black">Vidraçaria Silver Glass </h4>
                    <span className="font-medium text-sm text-black">Landing page, design.</span>
                    <span className="font-medium text-sm text-black">2024</span>
                    <p className="font-medium text-sm text-[#575757] pt-4">Esta é uma landing page de conversão que fiz para uma vidraçaria do Rio de Janeiro.</p>
                    <p className="font-medium text-sm text-[#575757] pt-4">A silver glass é uma vidraçaria com mais de 10 anos de mercado.  Seus principais serviços são: Envidraçamento de sacadas, blindex, espelhos personalizados e box para banheiro. </p>
                    <p className="font-medium text-sm text-[#575757] py-4">Criei todo o design da página focado na conversão de leads, e desenvolvi todo o projeto usando tecnologicas como react e vite.</p>
                    <LinkButton 
                        textLink={'vidraçariasilverglass.com.br'}
                        link={'https://xn--vidraariasilverglass-70b.com.br/'}
                    />
                </Projects>
            </div>
        </section>
    )
}