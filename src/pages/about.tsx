import Layout from "../components/layout"
import * as React from 'react';
import { Link, useStaticQuery, graphql } from "gatsby";
import Seo from "../components/seo";

const AboutPage: React.FC = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site{
          siteMetadata{
            author,
            description
          }
        }
      }
    `
  )
  return (
    <Layout>
      <Seo title="About me" />
      <h1>I'm alan</h1>
      <p>
        This site is a built with Gatsby template by <strong>{data.site.siteMetadata.author}</strong>
      </p>
      <p>
        {data.site.siteMetadata.description}
      </p>
      <Link to="/">Back to home page</Link>
    </Layout>
  )
}

export default AboutPage
