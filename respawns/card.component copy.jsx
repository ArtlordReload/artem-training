// card.component.jsx

import React from "react"
import * as S from "./card.styles.jsx"

import { useStaticQuery, graphql } from "gatsby"
import Img from "../../components/custom-image/custom-image.component.jsx"

const CardsComponent = ({ activeLink }) => {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "veteran-owned-img.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      image2: file(relativePath: { eq: "logo.png" }) {
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
      image5: file(relativePath: { eq: "veteran-owned-img.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      image6: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      image7: file(relativePath: { eq: "veteran-owned-img.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      image8: file(relativePath: { eq: "veteran-owned-img.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      image9: file(relativePath: { eq: "veteran-owned-img.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      image10: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      image11: file(relativePath: { eq: "veteran-owned-img.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      image12: file(relativePath: { eq: "veteran-owned-img.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `)

  const cardContents = [
    { images: [data.image1, data.image2, data.image3], text: "Text 1" },
    { images: [data.image4, data.image5, data.image6], text: "Text 1" },
    { images: [data.image7, data.image8, data.image9], text: "Text 1" },
    { images: [data.image10, data.image11, data.image12], text: "Text 1" },
  ]

  return (
      <S.Container>
        {cardContents.map((content, index) => (
          <S.Card
            key={index}
            active={activeLink === index + 1}
          >
            {content.images.map((image, i) => (
              <React.Fragment key={i}>
                <S.Images img={image} alt={`Image ${index * 3 + i + 1}`} />
                <S.Text>{content.text}</S.Text>
              </React.Fragment>
            ))}
          </S.Card>
        ))}
      </S.Container>
  )
}

export default CardsComponent
