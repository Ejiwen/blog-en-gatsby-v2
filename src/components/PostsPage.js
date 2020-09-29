import React from "react"
import { Text } from "theme-ui"
import { Link } from "gatsby"
import "../styles/style.css"


const PostsPage = ({ postsList }) => {

 
  return (
    <div>
      <h3> RECENT WRITING </h3>
      <div className="indexPost" id="postTitle">
        {postsList.map(post => (
          <div>
            <Text
              variant="post"
              style={{
                background: "url(" + post.introImg.file.url + ")",
                backgroundClip: "padding-box",
                backgroundSize: "cover",
              }}
            ></Text>
            <Link to={post.slug}>
              <span>{post.publishedDate}</span>
              <h3 > {post.title} </h3>
            </Link>
          </div>
        ))}
      </div>

      <h3> RECENT PROJECTS </h3>
        
      {/* <h3> SELECTED WORK </h3> */}
    </div>
  )
}

export default PostsPage
