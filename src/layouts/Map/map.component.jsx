import React from "react"
import * as S from "./map.styles.jsx"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"

import { graphql, useStaticQuery } from "gatsby"

const Map = () => {
  const staticQuery = useStaticQuery(graphql`
    query {
      map: file(relativePath: { eq: "map.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `)

  return (
    <S.Wrapper>
      <S.BgImage img={staticQuery.map} />
      <S.FilterColor />
      <Container>
        <Grid container md={12} xl={12}>
          <Grid item md={12} xl={6}>
            <h2>Find a Store</h2>
          </Grid>
        </Grid>
      </Container>
    </S.Wrapper>
  )
}

export default Map
