import * as S from "./footer_styled"
import logo from "../../assets/logo.png"
// import mcdonalds from "../../assets/mcdonalds.png"
import appstore from "../../assets/appstore.png"
import googleplay from "../../assets/googleplay.png"

export default function Footer() {
  return (
    <>
      <S.Footer>
            <S.CopyRight>
                <img src={logo} alt="" />
                <p>Ⓒ McDonald's 2024</p>
            </S.CopyRight>
            <S.Appstore>
                <img src={appstore} alt="" />
                <img src={googleplay} alt="" />
            </S.Appstore>
      </S.Footer>
    </>
  )
}
