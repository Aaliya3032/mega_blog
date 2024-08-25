import React, { useEffect, useState } from "react";
import appwriteService from '../../appwrite/config'
import { PostCard , Container } from '../index'

const AllPosts = () => {

     const [posts,setPosts] = useState([])

     useEffect(()=>{
      const fetchPosts = async() => {
       await appwriteService.getPosts([]).then((posts)=>{
        if(posts){
          setPosts(posts.documents)
          console.log("nkn",posts);
        }  
      })
      }
    fetchPosts();
     },[])

    return (
        <div className="w-full">
            <Container>
                <div className="flex flex-wrap">
                {posts.map((post)=>(
                    <div key={post.$id} className="p-2 w-1/4">
                       <PostCard post={post}/>
                    </div>    
              ))}
                </div>
            </Container>
        </div>
    )
}
export default AllPosts;