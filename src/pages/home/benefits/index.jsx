
import { Card } from "../../../components/cards";

export function Benefits(){


    return(
        <section id="Benefits" className=" py-24" >
            <div className={`max-w-[1280px] mx-auto px-[2%]  flex-col lg:flex-row lg:flex-nowrap flex-wrap flex   gap-8 `}>
                <Card 
                    animateCard={'animate-elementIn'}
                    imgPath={"icons/cards/customization.svg"}
                    title={'Personalização Total'}
                    text={'Um programador pode criar um site 100% personalizado, com design exclusivo, sem limitações de templates genéricos ou funcionalidades pré-definidas.'}
                />
                <Card 
                    animateCard={'lg:animate-elementInLow  animate-elementIn'}
                    imgPath={"icons/cards/performance.svg"}
                    title={'Melhor Performance'}
                    text={'Sites desenvolvidos sob medida são mais rápidos, leves e otimizados, já que não carregam códigos  e funcionalidades desnecessárias.'}
                />
                    <Card 
                    animateCard={'lg:animate-elementInVeryLow animate-elementIn'}
                    imgPath={"icons/cards/security.svg"}
                    title={'Maior Segurança'}
                    text={'Sites personalizados são menos vulneráveis a ataques, pois não dependem de plugins de terceiros frequentemente explorados por hackers.'}
                />
            </div>
        </section>
    )
}