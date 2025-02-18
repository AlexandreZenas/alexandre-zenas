import { FooterStructure } from "./footer-structure";


export function Footer(){
    return(
        <FooterStructure.Root>
            <div className="flex lg:flex-row gap-16 flex-col justify-between items-center">
                <FooterStructure.Links>
                    <FooterStructure.Link link={'#About'} textLink={'Sobre mim'} />
                    <FooterStructure.Link link={'#Portfolio'} textLink={'Projetos'} />
                </FooterStructure.Links>
                <FooterStructure.Logo image={'icons/Logo-light.svg'} linkLogo={'#'}/>
                <FooterStructure.Medias>
                    <FooterStructure.Media image={'icons/footer/email.svg'} mediaLink={'mailto:contato@alexandrezenas.com'} />
                    <FooterStructure.Media image={'icons/footer/whatsapp.svg'} mediaLink={''} />
                    <FooterStructure.Media image={'icons/footer/linkedin.svg'} mediaLink={'https://www.linkedin.com/in/alexandre-zenas-819b3163/'} />
                    <FooterStructure.Media image={'icons/footer/github.svg'} mediaLink={'https://github.com/AlexandreZenas'} />
                </FooterStructure.Medias>
            </div>
            <div className="bg-blue w-[100%] mx-auto h-[2px]"></div>
            <FooterStructure.Content>
                <span className="text-lg text-white" href="">© 2025 <strong>Alexandre zenas</strong> - Todos os direitos reservados</span>
                <a className="text-lg text-white" href="mailto:contato@alexandrezenas.com">contato@alexandrezenas.com</a>
                {/* <FooterStructure.Text textStyle={'text-white lg:w-1/2 text-center'} text={'© 2024 ImpulseOn Agency - Todos os direitos reservados'} />
                <FooterStructure.Text textStyle={'text-white lg:w-1/2 text-center'} text={'contato@impulseonagency.com'} /> */}
            </FooterStructure.Content>
        </FooterStructure.Root>
    )
}