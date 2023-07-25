import * as S from "./styles";
import CoinSynch from "../../../../assets/coinSynch.svg";
import Label from "../../../../components/atoms/Typography/Label";
import Button from "../../../../components/atoms/Button";

function Header() {
  return (
    <S.Container>
      <S.FirstContent>
        <img src={CoinSynch} alt="" />
        <Label color="#5D6670"> About us </Label>
        <Label color="#5D6670"> Top Cryptos </Label>
      </S.FirstContent>

      <S.SecondContent>
        <S.Carrousel>
          <div>
            <p> BIT R$ 23,62 +7,082</p>
            <p> CAS R$ 23,62 +7,082</p>
            <p> OI R$ 23,62 +7,082</p>
            <p> KKK R$ 23,62 +7,082</p>
            <p> BIT R$ 23,62 +7,082</p>
            <p> CAS R$ 23,62 +7,082</p>
            <p> OI R$ 23,62 +7,082</p>
            <p> KKK R$ 23,62 +7,082</p>
            <p> BIT R$ 23,62 +7,082</p>
            <p> CAS R$ 23,62 +7,082</p>
            <p> OI R$ 23,62 +7,082</p>
            <p> KKK R$ 23,62 +7,082</p>
            <p> BIT R$ 23,62 +7,082</p>
            <p> CAS R$ 23,62 +7,082</p>
            <p> OI R$ 23,62 +7,082</p>
            <p> KKK R$ 23,62 +7,082</p>
          </div>
        </S.Carrousel>
        <div>
          <Button variant="default">Sign In</Button>
          <Button>Sign Up</Button>
        </div>
      </S.SecondContent>
    </S.Container>
  );
}

export default Header;
