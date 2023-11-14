// card.component.jsx

import React from "react"
import * as S from "./card.styles.jsx"

import { useStaticQuery, graphql } from "gatsby"
import Img from "../../components/custom-image/custom-image.component"

const CardsComponent = ({ activeLink }) => {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "veteran-owned-img.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      image2: file(relativePath: { eq: "veteran-owned-img.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      image3: file(relativePath: { eq: "veteran-owned-img.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      image4: file(relativePath: { eq: "veteran-owned-img.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `)

  const cardContents = [
    { image: data.image1, text: "PREROLLS" },
    { image: data.image2, text: "CARTRIDGES" },
    { image: data.image3, text: "FLOWER" },
    { image: data.image4, text: "EDIBLES" },
  ]

  return (
    <div>
      <div>
        {cardContents.map((content, index) => (
          <div
            key={index}
            style={{ display: activeLink === index + 1 ? "block" : "none" }}
          >
            <S.Images img={content.image} alt={`Image ${index + 1}`} />
            <p>{content.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CardsComponent
