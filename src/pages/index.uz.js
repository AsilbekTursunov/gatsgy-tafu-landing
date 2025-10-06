import React from "react"
import Navbar from "../components/Navbar"
import { graphql } from "gatsby"
import Hero from "../components/Hero"
import Development from "../components/Development"
import Goals from "../components/Goals"
import Practise from "../components/Practise"
import WhatCanDo from "../components/WhatCanDo"
import Footer from "../components/Footer"

export default function HomeUZ({ data }) {
  return (
    <div style={{ fontFamily: "sans-serif", textAlign: "center" }}>
      <Navbar data={data.page.blocks.navbar} />
      <Hero data={data.page.blocks.banner} />
      <Development data={data.page.blocks.development} unicef={data.page.blocks.unicef} />
      <Goals data={data.page.blocks.goals} />
      <Practise data={data.page.blocks.practice} />
      <WhatCanDo data={data.page.blocks.whatcando} />
      <Footer data={data.page.blocks.footer} />
    </div>
  )
}


export const query = graphql`
   query AllPosts {
    page:markdownRemark(frontmatter: {lang: {eq: "uz"}}) {
      blocks:frontmatter {
        navbar {
          name
          navlinks
          profile
          section
          logo {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          language {
            label
            value
          }
        }
        banner {
          description
          title
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        development {
          description
          title
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          ways {
            desc
            title
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        unicef {
          desc
          title
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        goals {
          title
          images {
            img {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        practice {
          desc
          title
          works {
            img {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        whatcando {
          title
          plans {
            desc
            title
            icon {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          ideas {
            desc
            title
            icon {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        footer {
          info {
            details
            title
          }
          hour {
            number
            phone
            title
            details {
              time
              week
            }
            icon {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          social {
            name
            logo {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            links {
              link
              icon {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
          address {
            title
            iframe
            location {
              title
              icon {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            metro {
              title
              icon {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`