"use client";
import React from "react";
import CommentSection from "@/components/CommentSection";
import AuthoreCard from "@/components/AuthoreCard";
import {title} from "process"
import { DiCreativecommons } from "react-icons/di";
const posts = [
  {
    id: "1",
    title: "Why Gardening is the Ultimate Stress Reliever",
    description:
      "Connecting with nature for mental well-being.Gardening is more than a hobby—it’s therapy. Spending time nurturing plants has been proven to reduce stress, boost mood, and improve overall health.Physical Activity: Gardening is a great form of low-impact exercise.Mindfulness Practice: Focus on planting, watering, and tending to plants to stay present.Sense of Accomplishment: Watching your plants grow gives a sense of pride and joy. Whether you have a large backyard or just a few pots on a windowsill, gardening can transform your life.",

      image: "/images/mega1.jpeg",
  },
  {
    id: "2",
    title: " Exploring the World of Minimalist Travel",
    description:
      "Exploring the World of Minimalist Travel How to travel light and experience more.Minimalist travel is about ditching excess baggage and focusing on the journey itself. Traveling light not only reduces stress but also helps you enjoy the moment fully.Pack the Essentials: Choose versatile clothing and multi-purpose items.Plan Ahead: Research your destination to avoid overpacking unnecessary items.Embrace Local Experiences: Focus on the culture and people rather than material souvenirs.Traveling minimally teaches you that less truly is more.",
   
      image: "/images/mega2.jpeg",
  },
  {
    id: "3",
    title: " The Rise of Artificial Intelligence in Everyday Life",
    description:
      "Exploring how AI is reshaping our world.   Artificial Intelligence (AI) is no longer confined to futuristic fantasies; it’s a part of our daily lives. From personal assistants like Siri and Alexa to recommendation systems on Netflix and YouTube, AI has become an indispensable tool.      Smart Homes: AI-powered devices like smart thermostats and lighting systems enhance comfort and efficiency.Healthcare Revolution: AI aids in disease diagnosis, drug discovery, and even robotic surgeries.Education Transformation: Personalized learning platforms adapt to individual student needs.AI is not just a technology—it’s a revolution that’s changing how we live, work, and interact with the world.",
 
      image : "/images/mega3.jpeg",
  },
  {
    id: "4",
    title: " The Science of Happiness: How to Cultivate a Positive Mindset",
    description:
      "Understand the psychology of happiness and simple steps to live a joyful life.Key Points:Gratitude and its impact on mental health.The role of mindfulness and meditation.Building strong social connections.Image Suggestion:A vibrant sunrise with people meditating outdoors.",
   
      image : "/images/mega4.jpeg",
  },
  {
    id: "5",
    title: "Sustainable Fashion: How to Build an Eco-Friendly Wardrobe",
    description:
      "Learn how to embrace fashion that’s both stylish and sustainable.Key Points:Benefits of thrifting and upcycling.Supporting brands committed to sustainability.Capsule wardrobes: Fewer pieces, endless combinations.Image Suggestion:A stylish wardrobe with neutral tones and eco-friendly tags.",
  
      image: "/images/mega5.jpeg",
  },
  {
    id: "6",
    title: "How to Start a Side Hustle While Working Full-Time",
    description:
      "To start a side hustle while working full-time, identify a skill or passion you can monetize, set realistic time boundaries, leverage online platforms to find clients, start small, prioritize your schedule effectively, and ensure you comply with any company policies regarding outside work; consider options like freelance writing, virtual assisting, online tutoring, selling crafts, or utilizing your existing skills in a new way.Turn your passion into a source of income without quitting your day job.Key Points:Choosing the right side hustle.Managing your time effectively.Real success stories for inspiration.Image Suggestion:A laptop with a creative workspace setup, surrounded by coffee mugs.",
  
      image: "/images/mega6.jpeg",
  },
  {
    id: "7",
    title: " Exploring the Power of Morning Routines",
    description:
      "How adopting a structured morning routine can set the tone for a productive day.Key Points:Popular routines: Journaling, exercise, and meditation.Science behind morning habits and productivity.Steps to design your personalized routine.Image Suggestion:A journal, cup of coffee, and sunrise in the background.The importance of a morning routine cannot be overstated. It sets the rhythm for your day, helps manage stress, boosts productivity, and promotes better mental health. Starting your day with established habits can reduce decision fatigue and free up mental energy for more critical tasks.",
  
      image: "/images/mega7.jpeg",
  },
  {
    id: "8",
    title: "The Intersection of Art and Technology",
    description:
      "Explore how technology is revolutionizing the art world, from digital painting to AI-generated masterpieces.Key Points:AI tools like DALL·E and MidJourney creating art.Virtual reality galleries redefining how we experience exhibitions.Blockchain technology enabling digital art ownership.Image Suggestion:A futuristic painting blending human creativity with AI patterns.The relationship between technology and art has led to discoveries and discoveries that have changed the way we see, create and experience art. Artists today have access to tools and media that were once unimaginable. Digital art, VR, AR, and AI have become an integral part of the modern art world.",
  
    image: "/images/mega8.jpeg",
  },
  {
    id: "9",
    title: " A Beginner’s Guide to Minimalist Living",
    description:
      " Dive into the world of minimalism and discover how less is more in life.Key Points:Tips to declutter your living space.Mental health benefits of minimalism.Choosing quality over quantity.Image Suggestion:A serene, clutter-free workspace with natural light.",
   
    image: "/images/mega9.jpeg",
  },
];

export default function Post({params} :{params : {id:string}}) {

  const  {id} = params ;
  const post = posts.find((p) => p.id === id)

  if(!post) {
    return (
    <h2 className="font-semibold text-6xl text-center mt-20 mb-80">Post Not found</h2>

    )
  };

  const renderParagraghs = (description : string) =>{
    return description.split("/n") .map((para,index) =>(
      <p key={index} className="mt-4 text-justify">
        {para.trim()}
      </p>

    ));
  };
  return (
    <div className="max-w-3xl mx-auto p-5">
      <h1 className="md:text-4xl text-3xl font-bold text-black text-center ">{post.title}</h1>

      {post.image && (
        <img src={post.image} alt={post.title} className="w-full h-auto rounded-md mt-4" />
      )}

      <div className="mt-6 text-lg text-slate-700">
        {renderParagraghs(post.description)}
      </div>
      <CommentSection postId={post.id}/>
      <AuthoreCard/>
    </div>



  )

}