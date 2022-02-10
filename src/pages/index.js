import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Header from "../components/header";
import Installation from '../components/installation';
import { graphql } from "gatsby"
import PostLink from "../components/post-link"

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {

  const Posts = edges
  .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
  .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

return (
  <Layout>
    <Seo title="Home" />
    <div className="banner-container">
    <div className="banner-wrapper">
    <video 
     autoplay 
     loop id="myVideo"
     className="video-player"
     height="100%"
     width="100%"
     loop
     muted={false}
     autoPlay
     >
      <source src='https://res.cloudinary.com/dccwzpgnz/video/upload/v1644479263/mot-videos/bg-video_flqh4q.mp4' type="video/mp4" />
    </video>
    </div>
    <div class="nav-wrapper">
      <Header />
    </div>
    <div className="highright">
      <h1>Download your dairy motivation videos.</h1>
      <p>Would you like to see a video that motivates and inspires you? Did your day get worse and you want to cheer up? Well, now it's possible with just one click.</p>
    </div>
    </div>
    <div
     style={{
       display:'flex',
       flexDirection:'column',
       justifyContent:'space-around',
       padding:'2% 20%'
     }}
    >
      <Installation />
      <div>{Posts}</div>
    </div>
  </Layout>
)
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            description
            title
          }
        }
      }
    }
  }
`

export default IndexPage
