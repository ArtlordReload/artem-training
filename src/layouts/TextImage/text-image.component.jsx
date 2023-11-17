import React from "react"
import * as S from "./text-image.styles.jsx"
import PropTypes from "prop-types"

const TextImage = ({ description, image }) => {
  return (
    <S.Wrapper>
      <S.Title>Opening Day</S.Title>
      <S.Descritpion>ASDadsasdf</S.Descritpion>
      <S.Link href="https://www.google.com/">Shop Now</S.Link>
      <S.Image />
    </S.Wrapper>
  )
}

TextImage.propTypes = {
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

export default TextImage
