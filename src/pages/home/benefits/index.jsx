import { Children } from "react";
import { Card } from "../../../components/cards";

export function Benefits(){
    return(
        <section>
            <div className="max-w-[1280px] mx-auto px-[2%] flex flex-col lg:flex-row lg:flex-nowrap flex-wrap   py-24 gap-8">
                <Card 
                    imgPath={"icons/cards/web.svg"}
                    title={'Seu negócio online'}
                    text={'Ter um site permite que você tenha presença na internet. Isso é crucial para os dias de hoje, já que muitas pessoas procuram por produtos e serviços online antes de  fazer uma compra.'}
                />
                <Card 
                    imgPath={"icons/cards/search.svg"}
                    title={'No topo das pesquisas'}
                    text={'Utilizando técnicas de SEO e anúncios para aumentar a visibilidade nos mecanismos de busca, o fluxo de usuários e a taxa de conversão do site aumente exponencialmente.'}
                />
                <Card 
                    imgPath={"icons/cards/laptop.svg"}
                    title={'Um programador ao seu dispor'}
                    text={'Em nossa consultoria juntos Desenvolvemos  estratégias eficazes e personalizadas identificando oportunidades até a execução de campanhas eficazes.'}
                />
            </div>
        </section>
    )
}