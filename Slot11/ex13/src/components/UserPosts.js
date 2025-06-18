import React, { useState, useEffect } from "react";

const UserPosts = ({ userId }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        if (!res.ok) throw new Error("Error fetching data");
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [userId]);

  return (
    <div>
      <h3>Posts by User ID {userId}</h3>
      {posts.length > 0 ? posts.map((post) => (
        <div key={post.id} className="mb-3">
          <h5>{post.title}</h5>
          <p>{post.body}</p>
        </div>
      )) : <p>Loading posts...</p>}
    </div>
  );
};

export default UserPosts;
