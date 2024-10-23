import React from "react";

function UserPosts(){

    const posts = [
        {
          id: 1,
          title: "Post 1",
          content: "This is the first post.",
          image: "https://via.placeholder.com/150"
        },
        {
          id: 2,
          title: "Post 2",
          content: "This is the second post.",
          image: "https://via.placeholder.com/150"
        },
        {
          id: 3,
          title: "Post 3",
          content: "This is the third post.",
          // No image for this post
        }
      ];
      

return(
    <div className="posts">
        <h3>User posts</h3>
        <ul>
            {posts.map(post => {
                return(
                <li key={post.id}>
                    <h4>{post.title}</h4>
                       <p>{post.content}</p>
                       {post.image && <img src={post.image} alt={post.title} style={{ width: '200px', height: 'auto' }} />}
                </li>
                )
            })}
        </ul>
    </div>
)


}

export default UserPosts