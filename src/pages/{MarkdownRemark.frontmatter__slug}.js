import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <div className="blog-post-container" 
      style={{
          padding:'5% 0px 0px 0px',
          width:'100%',
          display:'flex',
          justifyContent:'space-around'
      }}
    >
      <div className="blog-post" style={{width:'40%'}}>
        <h1>{frontmatter.title}</h1>
        <h6>Last updated <small>{frontmatter.date}</small></h6>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      <Link  to="/">Back home</Link>
      <footer
          style={{
            width:'100%',
            display:'flex',
            marginTop:'3em',
            justifyContent:'space-around'
          }}
        >
          <p>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
          </p>
        </footer>
      </div>
    </div>
  )
}
export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        description
        title
      }
    }
  }
`
