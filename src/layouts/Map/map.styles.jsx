import styled from "@emotion/styled"
import CustomBgImage from "../../components/custom-bg-image/custom-bg-image.component"
import CustomImage from "../../components/custom-image/custom-image.component"

export const Wrapper = styled.div`
  width: 100%;
  height: 800px;
  position: relative;
`

export const BgImage = styled(CustomImage)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`
export const FilterColor = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0,255,0,0.5);
  top: 0;
  left: 0;
`