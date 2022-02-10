import React from "react"
import { Link } from "gatsby"
const PostLink = ({ post }) => (
  <div>
    <Link to={post.frontmatter.slug}>
      {post.frontmatter.title}
    </Link>
    <small style={{display:'block', color:'gray'}}>{post.frontmatter.date}</small>
    <p style={{marginTop:'1em'}}>{post.frontmatter.description}</p>
  </div>
)
export default PostLink