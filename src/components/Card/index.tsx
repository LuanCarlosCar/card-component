import imagem from '../../images/image-header-mobile.jpg'
import { Container,ContainerPlus,TextSimples,DestaqueText,Lista,ItemLista,TextMain, ImgCard,ContainerMain,CorFloat, Title, DifTitle  } from './styles'


export default function Card(){
    return(
        <Container>
            <ContainerPlus>
                <CorFloat></CorFloat>
                <ImgCard src={imagem} alt="" />
            </ContainerPlus>
            <ContainerMain>
                <Title>Get  <DifTitle>insights</DifTitle> that help your business grow</Title>
                <TextMain>Discover the benefits of data analytics and make better decisions 
                    regarding revenue, customer experience, and overall efficiency
                </TextMain>
                <Lista>
                    <ItemLista>
                        <DestaqueText> 10k+</DestaqueText>
                        <TextSimples>companies</TextSimples>
                    </ItemLista>
                    <ItemLista>
                        <DestaqueText>314</DestaqueText>
                        <TextSimples>templates</TextSimples>
                    </ItemLista>
                    <ItemLista>
                        <DestaqueText>12M+</DestaqueText>
                        <TextSimples>queries</TextSimples>
                    </ItemLista>
                </Lista>
            </ContainerMain>
        </Container>
    )
}