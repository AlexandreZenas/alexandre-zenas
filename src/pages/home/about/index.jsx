import { LinkButton } from "../../../components/buttons/linkButton";

export function About(){
    return(
        <section id="About" className="">
            <div className="max-w-[1280px] mx-auto px-[2%] pb-24 flex flex-col lg:flex-row items-center">
                <img className="xl:h-[480px] lg:h-[400px] " src="images/about/image.png" alt="" />
                <div className="flex flex-col items-start gap-4">
                    <h2 className="text-black md:text-5xl text-4xl text-center md:text-start">O desenvolvedor ideal para o seu projeto web</h2>
                    <div className="flex gap-8 py-4 lg:max-w-[640px] ">
                        <div className="h-2/2 w-2 bg-blue"></div>
                        <h3 className="font-extrabold text-lg md:text-xl text-black leading-5">Com estratégias digitais inovadoras e personalizadas, construímos uma história de crescimento e realização ao longo dos anos.</h3>
                    </div>
                    <p className="text-black">Sou desenvolvedor independente com ampla experiência em projetos personalizados para empresas no Rio de Janeiro, atuando na criação de soluções digitais que atendem às necessidades específicas de cada cliente.</p>
                    <p className="text-black">Engenheiro de software instusiasta por tecnologia com familiaridade em Java, Spring, Javascript, Typescript, Node, React, Tailwind, SQL, MySQL e PostgreSQL. Sou apaixonado por trabalhar em projetos significativos que tenham um impacto positivo na vida das pessoas. Tenho experiência prática trabalhando no desenvolvimento de aplicações web e na criação e integração de APIs.</p>
                    <LinkButton  link={'#Contact'} textLink={'Entre em contato'}/>
                </div>
            </div>
        </section>
    )
}