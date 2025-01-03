import React from 'react'
import {Card, CardContent, CardTitle} from "../components/ui/card";

interface  BlogCardProps{
 
  post : {
    id : string;
    title: string;
    description :string;
    date : string;
    imageURL : string;

  };
  isLightBackground :Boolean;
}
 

export default function BlogCard({post,isLightBackground} :BlogCardProps) {
  return (
     <Card
     className= {`p-4 ${isLightBackground?
      "bg-yellow-300 text-black" : "text-slate-700"
     } rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300`} >

     <img
     src={post.imageURL}
     alt={post.title}
     className='w-full h-48 object-cover rounded-t-lg'
     />

     <CardTitle className='text-xl font-normal mt-4 text-center '>
     {post.title}
     </CardTitle>
     <br />

     <CardContent className='text-center'>
      <p>{post.description}</p>

     </CardContent>

     <div className='flex flex-col items-center mt-4'>
      <p className={`text-sm mb-2 ${isLightBackground?
        "text-slate-400" : "text-slate-600"
      }`}>
     {/* published on : {new.Date(post.date).toLocalDateString()} */}
      </p>
      <a href={`/posts/${post.id}`}
      className={`w-full px-6 py-2 text-white text-center bg-purple-500 rounded hover:bg-purple-800
        ${isLightBackground? "bg-black hover:bg-purple-800" : "bg-black hover:bg-purple-800"}
      `}>
        Read More
      </a>

     </div>
     </Card>
  )
}
