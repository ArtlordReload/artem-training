import styled from "@emotion/styled"
import CustomImage from "../custom-image/custom-image.component.jsx"

export const  Image = styled(CustomImage)`
  width: 100%;
  height: 100%;
  margin:2rem;
  width: 330px;
  height:330px;
  img {
    object-fit: contain !important;
  }
  z-index: 2;
`