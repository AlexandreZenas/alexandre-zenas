
import { Card } from "../../../components/cards";

export function Benefits(){


    return(
        <section id="Benefits" className=" min-h-screen py-24" >
            <div className={`max-w-[1280px] mx-auto px-[2%]  flex-col lg:flex-row lg:flex-nowrap flex-wrap flex   gap-8 `}>
                <Card 
                    animateCard={'animate-elementIn'}
                    imgPath={"icons/cards/web.svg"}
                    title={'Seu negócio online'}
                    text={'Ter um site permite que você tenha presença na internet. Isso é crucial para os dias de hoje, já que muitas pessoas procuram por produtos e serviços online antes de  fazer uma compra.'}
                />
                <Card 
                    animateCard={'lg:animate-elementInLow  animate-elementIn'}
                    imgPath={"icons/cards/search.svg"}
                    title={'No topo das pesquisas'}
                    text={'Utilizando técnicas de SEO e anúncios para aumentar a visibilidade nos mecanismos de busca, o fluxo de usuários e a taxa de conversão do site aumente exponencialmente.'}
                />
                                    <Card 
                    animateCard={'lg:animate-elementInVeryLow animate-elementIn'}
                    imgPath={"icons/cards/laptop.svg"}
                    title={'Um programador ao seu dispor'}
                    text={'Em nossa consultoria juntos Desenvolvemos  estratégias eficazes e personalizadas identificando oportunidades até a execução de campanhas eficazes.'}
                />
            </div>
        </section>
    )
}