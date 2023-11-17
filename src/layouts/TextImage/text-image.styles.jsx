import styled from "@emotion/styled"
import CustomImage from "../../components/custom-image/custom-image.component.jsx"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  border: 10px;
  height: 100vh;
`

export const Title = styled.h2`
  color: #00ae00;
  font-size: 18px;
  font-family: "Heebo";
  font-weight: 700;
  line-height: 26px;
`

export const Descritpion = styled.p`
color: #f5f5f5;
font-family: "Heebo";
font-weight: 400;
line-height: 26px;
`

export const Link = styled.a`
  color: #00ae00;
  font-size: 18px;
  font-weight: 500;
  line-height: 12px;

`

export const Image = styled(CustomImage)`
  width: 100%;
  height: 100%;
  min-width: 250px;
  img {
    object-fit: contain !important;
  }
`
