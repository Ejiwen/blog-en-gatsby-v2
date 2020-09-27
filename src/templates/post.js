import React from "react"
import SinglePost from "../components/SinglePost"
import Layout from "../components/Layout"
import { graphql } from "gatsby"

export const query = graphql`
  query($slugID: String!) {
    post: contentfulBlogPost(slug: { eq: $slugID }) {
      title
      slug
      dp: publishedDate
      body {
        json
      }
    }
  }
`

const Post = ({ data: { post } }) => {
  return (
    <Layout>
      <SinglePost post={post} />
    </Layout>
  )
}

export default Post
