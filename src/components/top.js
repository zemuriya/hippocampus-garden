import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'
import Navbar from './navbar'

const BackgroundSection = ({ className }) => (
    <StaticQuery
      query={graphql`
        query {
          desktop: file(relativePath: { eq: "background.jpg" }) {
            childImageSharp {
              fluid(quality: 90, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      `}
      render={data => {
        // Set ImageData.
        const imageData = data.desktop.childImageSharp.fluid
        return (
          <BackgroundImage
            Tag="section"
            className={className}
            fluid={imageData}
            backgroundColor={`#040e18`}
          >
            <div
                className={`header`}
                style={{
                textAlign: `center`,
                color: `#FFFFFF`,
                }}
            >
                <h1
                    style={{
                    paddingTop: `3rem`,
                    paddingBottom: `1rem`,
                    marginBottom: 0,
                    marginTop: 0,
                    fontStyle: `bold`,
                    fontSize: `42px`
                    }}
                >
                    <Link
                    style={{
                        boxShadow: `none`,
                        textDecoration: `none`,
                        color: `inherit`,
                    }}
                    to={`/`}
                    >
                    {`Hippocampus's Garden`}
                    </Link>
                </h1>
                <p
                style={{
                    margin: 0,
                    fontStyle: `italic`,
                }}>
                    {`Under the sea, in the hippocampus's garden...`}
                    </p>
                <Navbar></Navbar>
            </div>
          </BackgroundImage>
        )
      }}
    />
  )
  
  const StyledBackgroundSection = styled(BackgroundSection)`
    width: 100%;
    background-position: bottom center;
    background-repeat: repeat-y;
    background-size: cover;
  `
  
  export default StyledBackgroundSection