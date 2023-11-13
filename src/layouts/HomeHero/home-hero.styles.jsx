import styled from "@emotion/styled"
import CustomBgImage from "../../components/custom-bg-image/custom-bg-image.component.jsx"
import CustomImage from "../../components/custom-image/custom-image.component.jsx"
import CustomButton from "../../components/custom-button/custom-button.component.jsx"
import { GatsbyImage } from "gatsby-plugin-image"
export const BgImage = styled(CustomBgImage)`
  width: 100%;
  height: 100%;
  align-items: center;
  align-content: center;
  justify-content: center;
  position: relative;
  z-index: 1;
`

export const BgImgWrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
`

export const GradientBox = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 113px;
  background: linear-gradient(
    to bottom,
    rgba(223, 220, 221, 0.5),
    rgba(255, 255, 255, 1)
  );
  z-index: -100;
`
///////////////////////////

export const Wrapper = styled.div`
  padding-top: 58px;
  padding-left: 68px;
  width: 100%;
  color: yellow;
  position: relative;
`

export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const MidWrapper = styled.div`
display: flex;
  width: 100%;
  height: 100%;
  max-height: 300px;
  max-width: 300px;
  align-items: center;
`

export const RightWrapper = styled.div`
  grid-column-start: 3;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: space-between;
  padding-left: 2.2rem;
`
export const Button = styled(CustomButton)`
  background-color: Green;
  border-radius: 40px;
  gap: 122px;
  align-items: center;
  align-content: center;
  padding: 1rem 2rem !important;
  align-self: flex-start;
`

export const SoeHelveticaBigText = styled.div`
  -webkit-text-stroke: 2px #00ae00;
  color: #ffffff;
  font-family: "Soe-Regular", Helvetica;
  font-size: 84.5px;
  font-weight: 400;
  left: 0;
  letter-spacing: 1.69px;
  line-height: 79.5px;
  position: relative;
`

export const HeeboText = styled.div`
  color: var(--neutralwhite);
  font-family: "Heebo-Medium", Helvetica;
  font-size: 24px;
  font-weight: 500;
  left: 0;
  letter-spacing: 0;
  line-height: 26px;
  top: 0;
  width: 343px;
  color: white;
  position: relative;
  align-self: flex-start;
`

export const VeteranOwnedImg = styled(CustomImage)`
  width: 100%;
  height: 100%;
  max-width:87px;
  img{object-fit: contain !important;};
`;