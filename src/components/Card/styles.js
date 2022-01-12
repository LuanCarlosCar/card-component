import styled from 'styled-components';




export const Container = styled.div`
width: 80%;
text-align: center;
margin: 0 auto;
margin-top: 25%;
box-sizing: border-box;
border-radius: 0.625rem;
background-color: hsl(244, 38%, 16%);
position: relative;
margin-bottom: 6.25rem;
@media (min-width: 890px) {
    margin-bottom: 0;
    width: 80vw;
    margin:20px auto 0 auto;
    display: flex;
    position: absolute;
    top: 50px;
    right: 100px;
    
    
    
}

`;

export const ImgCard = styled.img`
width: 100%;
height: 100%;
border-radius: 0.625rem;

`;

export const CorFloat = styled.div`
height: 100%;
width: 100%;
border-radius: 0.625rem;
background-color: hsl(277, 64%, 61%);
position: absolute;
z-index: 99;
opacity: 0.7;

`;
export const ContainerPlus= styled.div`
width: 100%;
border-radius: 0.625rem;
position: relative;
`;

export const ContainerMain= styled.div`
padding: 0.7rem;
@media (min-width: 890px) {
    padding: 3rem;
    
}

`;

export const Title= styled.h1`

line-height: 1.875rem;
font-size: 1.875rem;
color: hsl(0, 0%, 100%) ;
@media (min-width: 890px) {
        text-align: left;
    
}

`;
export const DifTitle= styled.span`
color:  hsl(277, 64%, 61%);
`;

export const TextMain= styled.p`
    line-height: 1,625rem;
    color: hsla(0, 0%, 100%, 0.75);
    @media (min-width: 890px) {
        text-align: left;
    
}

`;

export const Lista = styled.ul`
    display: inline-block;
    
    margin: 0;
    padding: 0;
    @media (min-width: 890px) {
      
        display: flex;
     
}


`;
export const ItemLista= styled.li`
    list-style-type: none;
    flex-direction: column;
    margin:10px;
    @media (min-width: 890px) {
        display: inline-block;
        margin-left: 3.125rem;
    
}
    
`;

export const DestaqueText= styled.p`
  font-size: 20px;
  font-weight: 700;
  color: hsl(0, 0%, 100%) ;
  margin-bottom: 0;
  padding: 0;
`;

export const TextSimples=styled.p`
padding: 0;
margin: 0;
color:hsla(0, 0%, 100%, 0.75); 
&:last-child {
        margin-bottom:10px;
    }

`;