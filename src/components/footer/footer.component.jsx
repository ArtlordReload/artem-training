import React from "react"

import * as S from "./footer.styles"

import InstagramIcon from "@mui/icons-material/Instagram"
import FacebookIcon from "@mui/icons-material/Facebook"
import TwitterIcon from "@mui/icons-material/Twitter"

import { graphql, useStaticQuery } from "gatsby"
import { Container } from "@mui/system"

const Footer = ({ className }) => {
  const staticQuery = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "footer-logo.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      palm: file(relativePath: { eq: "footer-palm-logo.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `)

  return (
    <S.Wrapper className={className}>
      <S.LeftWrapper>
        {" "}
        <S.LogoImage img={staticQuery.logo} />
        <S.LogoText>Veteran Owned Buisiness</S.LogoText>
      </S.LeftWrapper>
        <S.LogoPalmImage img={staticQuery.palm}/>
      <S.RightWrapper>
        <S.Link>Privacy & Terms</S.Link>
        <S.Link>INSTAGRAM</S.Link>
        <S.Link>FACEBOOK</S.Link>
        <S.Link>TIKTOK</S.Link>
      </S.RightWrapper>
    </S.Wrapper>
  )
}

export default Footer
