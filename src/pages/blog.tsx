import * as React from "react"
import Layout from "../components/layout"

type BlogProps = {}

const Blog: React.FC<BlogProps> = ({}: BlogProps) => {
  return (
    <Layout>
      <p>This is my blog page</p>
    </Layout>
  )
}

export default Blog
