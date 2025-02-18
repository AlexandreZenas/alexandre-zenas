import { MainButton } from "../../../components/buttons/main-button";
import { Form } from "../../../components/form";


export function Contact(){
    return(
        <section id="Contact" className="px-[2%]">
            <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row py-24 gap-20 lg:gap-12 ">
                <div className="flex flex-col items-start gap-8 lg:w-1/2 w-full">
                    <h4 className="text-blue font-medium text-sm tracking-widest">Agende agora</h4>
                    <h2 className="text-black md:text-5xl text-4xl md:text-start">Preencha o formulário para receber uma consultoria gratuita</h2>
                    <p className="text-[#828282]">Basta preencher o formulário e o nosso time de experts entrará em contato com você para conversar sobre o seu negócio. Leva menos de um minuto para preencher!</p>
                    <MainButton 
                        styleButton={'font-light py-3 px-8'}
                        textButton={'contato@alexandrezenas.com'}
                    />
                </div>
                <Form.Root>
                <Form.Input name={'user_name'} inputStyle={'animate-elementInLow'}  labelTitle={`Nome completo`} placeholderInput={`Digite seu nome ...`} inputType={`text`} />
                <Form.Input name={'user_email'} inputStyle={'animate-elementInLow'}  labelTitle={`Endereço de email`} placeholderInput={`Digite seu email ...`} inputType={`text`} />
                <Form.Input name={'phone'} inputStyle={'animate-elementInLow w-1/3 '}   labelTitle={`Telefone para contato`} placeholderInput={`(99) 99999-9999`} inputType={`tel`} />
                <Form.Input name={'company_name'} inputStyle={'animate-elementInLow'}  labelTitle={`Nome da sua empresa`} placeholderInput={`Digite o nome da sua empresa ...`} inputType={`text`} />
                <Form.Select name={'company_niche'} selectStyle={'animate-elementInVeryLow'} labelTitle={`Qual o nicho do seu negócio ?`}  >
                    <Form.Option option={'Consultoria financeira'}/>
                    <Form.Option option={'Cuidados com animais'}/>
                    <Form.Option option={'Design e construção'}/>
                    <Form.Option option={'Educacional'}/>
                    <Form.Option option={'Gestão de eventos'}/>
                    <Form.Option option={'Fitness e estética'}/>
                    <Form.Option option={'Imóveis'}/>
                    <Form.Option option={'Manutenção mecânica e eletrica'}/>
                    <Form.Option option={'Mídia e fotografia'}/>
                    <Form.Option option={'Saúde e bem-estar'}/>
                    <Form.Option option={'Segurança e monitoramento'}/>
                    <Form.Option option={'Prestação de serviços especializados'}/>
                    <Form.Option option={'Serviços jurídicos'}/>
                    <Form.Option option={'Tecnologia e suporte de TI'}/>
                    <Form.Option option={'Turismo'}/>
                    <Form.Option option={'outro'}/>
                </Form.Select>
                <Form.Textarea textareaStyle={'animate-elementInVeryLow'} labelTitle={'Conte-nos um pouco sobre a sua empresa'} placeholderInput={'Digite sobre a sua empresa ...'}/>
                <Form.Select name={'revenue'} selectStyle={'animate-elementInVeryLow'} labelTitle={`Qual é o seu faturamento mensal atual?`}  >
                    <Form.Option option={'Menos que R$5.000,00'}/>
                    <Form.Option option={'Entre R$5.000,00 a R$10.000,00'}/>
                    <Form.Option option={'Entre R$10.000,00 a R$25.000,00'}/>
                    <Form.Option option={'Entre R$25.000,00 a R$50.000,00'}/>
                    <Form.Option option={'Entre R$50.000,00 a R$100.000,00'}/>
                    <Form.Option option={'Entre R$100.000,00 a R$200.000,00'}/>
                    <Form.Option option={'Acima de 200 mil reais'}/>
                    <Form.Option option={'Acima de 400 mil reais'}/>
                    <Form.Option option={'Acima de 800 mil reais'}/>
                    <Form.Option option={'Acima de 1 milhão de reais'}/>
                    <Form.Option option={'Acima de 5 milhões de reais'}/>
                </Form.Select>
            </Form.Root>
            </div>
        </section>
    )
}