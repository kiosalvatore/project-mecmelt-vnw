import Card from "./Card"
import * as S from "./main_styled"
import sofa from "../../assets/sofa.png"
import loja from "../../assets/loja.png"
import bigmac from "../../assets/bigmac.png"
import bateufome from "../../assets/bateufome.png"
import sorvete from "../../assets/sorvete.png"
import batata from "../../assets/batata.png"
import { useState } from "react"

export default function Main() {

    const [lanche, setLanche] = useState(bigmac);


  return (
    <main>
        <S.Banner>
            
            <S.Outdoor>
                <S.Bigmac> <img src={lanche} alt="" /> </S.Bigmac>
                <S.Bateufome> <img src={bateufome} alt=""/> </S.Bateufome>
            </S.Outdoor>
            <S.MenuSelect>
                <img onClick={()=>{setLanche(bigmac)}} src={bigmac} alt="" />
                <img onClick={()=>{setLanche(sorvete)}} src={sorvete} alt="" />
                <img onClick={()=>{setLanche(batata)}} src={batata} alt="" />
            </S.MenuSelect>
    
        </S.Banner>
        <S.Promocao>
            <h2>Promoção</h2>
            <S.Center>
           <Card imagem={sofa} texto={"Que tal um #MéquiNoSofá"} />
           <Card imagem={loja} texto={"Venha conhecer nossa nova loja"} />
           <Card imagem={sofa} texto={"Que tal um #MéquiNoSofá"} />
            </S.Center>
        </S.Promocao>
    </main>
  )
}