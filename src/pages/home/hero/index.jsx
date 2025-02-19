import { MainButton } from "../../../components/buttons/main-button";

export function Hero(){
    return(
        <section id="Hero" className="py-28">
            <div className="max-w-[1280px] mx-auto px-[2%] flex flex-col-reverse lg:flex-row lg:justify-between justify-center items-center  gap-8">
                <div className="lg:w-3/5 flex flex-col lg:justify-start justify-center lg:items-start items-center gap-8">
                    <h1 className="animate-slideTop1 lg:text-start text-center font-medium xl:text-5xl md:text-4xl text-3xl">Quer ter um site  personalizado  desenvolvido por um <strong className="font-bold">programador profissional</strong> ?</h1>
                    <p className="animate-slideTop2  lg:text-start text-center text-[#828282]">Tenha um site adaptado às necessidades da sua empresa – feito sob medida por um desenvolvedor web e destaque o seu negócio na internet!</p>
                    <MainButton 
                        styleButton={'animate-slideTop3'}
                        textButton={'Fazer um orçamento'}
                        linkButton={'#Contact'}
                    />
                </div>
                <div className="lg:w-2/5 animate-slideRight1">
                    <img src="icons/hero/hero-image.svg" alt="" />
                </div>
            </div>
        </section>
    )
}