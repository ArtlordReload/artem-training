import React from "react"
import * as S from "./promo-card.styles.jsx"
import PropTypes from "prop-types"

const PromoCard = ({ title, description, image, shopLinkText,shopLinkUrl }) => {
  return (
    <S.Wrapper>
      <S.Image img={image}></S.Image>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Link href={shopLinkUrl}>{shopLinkText}</S.Link>
    </S.Wrapper>
  )
}

PromoCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  shopLink: PropTypes.string,
}
export default PromoCard
