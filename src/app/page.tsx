import AuthoreCard from "@/components/AuthoreCard";
import CommentSection from "@/components/CommentSection";
import Feature from "@/components/Feature";
import Menu from "@/components/Menu";
import Mega from "@/components/Mega";


import React from "react";

export default function Home() {
  return(
    <div>
      <Mega/>
      <AuthoreCard/>
      <Feature/>
    <Menu/>
    
     
    <CommentSection postId={""}/>
    
    </div>
  );
}
