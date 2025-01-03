import React from "react";
import BlogCard from "../components/BlogCard";
import { title } from "process";

export default function Mega() {
  const posts = [
    {
      id: "1",
      title: "Why Gardening is the Ultimate Stress Reliever",
      description:
        "Connecting with nature for mental well-being.Gardening is more than a hobby—it’s therapy. Spending time nurturing plants has been proven to reduce stress,.",
      date: "01-01-2025",
      imageURL: "/images/mega1.jpeg",
    },
    {
      id: "2",
      title: " Exploring the World of Minimalist Travel",
      description:
        "Exploring the World of Minimalist Travel How to travel light and experience more.Minimalist travel is about ditching excess baggage and focusing on the journey itself.",
      date: "01-01-2025",
      imageURL: "/images/mega2.jpeg",
    },
    {
      id: "3",
      title: " The Rise of Artificial Intelligence in Everyday Life",
      description:
        "Exploring how AI is reshaping our world.   Artificial Intelligence (AI) is no longer confined to futuristic fantasies; it’s a part of our daily lives. .",
      date: "01-01-2025",
      imageURL: "/images/mega3.jpeg",
    },
    {
      id: "4",
      title: " The Science of Happiness: How to Cultivate a Positive Mindset",
      description:
        "Understand the psychology of happiness and simple steps to live a joyful life.Key Points:Gratitude and its impact on mental health.The role of mindfulness and meditation.Building strong social connections.Image Suggestion:A vibrant sunrise with people meditating outdoors.",
      date: "01-01-2025",
      imageURL: "/images/mega4.jpeg",
    },
    {
      id: "5",
      title: "Sustainable Fashion: How to Build an Eco-Friendly Wardrobe",
      description:
        "Learn how to embrace fashion that’s both stylish and sustainable.Key Points:Benefits of thrifting and upcycling.Supporting brands committed to sustainability.Capsule wardrobes: Fewer pieces, endless combinations.Image Suggestion:A stylish wardrobe with neutral tones and eco-friendly tags.",
      date: "01-01-2025",
      imageURL: "/images/mega5.jpeg",
    },
    {
      id: "6",
      title: "How to Start a Side Hustle While Working Full-Time",
      description:
        "Turn your passion into a source of income without quitting your day job.Key Points:Choosing the right side hustle.Managing your time effectively.Real success stories for inspiration.Image Suggestion:A laptop with a creative workspace setup, surrounded by coffee mugs.",
      date: "01-01-2025",
      imageURL: "/images/mega6.jpeg",
    },
    {
      id: "7",
      title: " Exploring the Power of Morning Routines",
      description:
        "How adopting a structured morning routine can set the tone for a productive day.Key Points:Popular routines: Journaling, exercise, and meditation.Science behind morning habits and productivity.Steps to design your personalized routine.Image Suggestion:A journal .",
      date: "01-01-2025",
      imageURL: "/images/mega7.jpeg",
    },
    {
      id: "8",
      title: "The Intersection of Art and Technology",
      description:
        "Explore how technology is revolutionizing the art world, from digital painting to AI-generated masterpieces.Key Points:AI tools like DALL·E and MidJourney creating art.",
      date: "01-01-2025",
      imageURL: "/images/mega8.jpeg",
    },
    {
      id: "9",
      title: " A Beginner’s Guide to Minimalist Living",
      description:
        " Dive into the world of minimalism and discover how less is more in life.Key Points:Tips to declutter your living space.",
      date: "01-01-2025",
      imageURL: "/images/mega9.jpeg",
    },
  ];
  return (
    <div className="my-8">
      <h1 className="text-3xl font-bold text-center my-8 text-red-500 animate-color-change ">
      The Intersection of Art and Technology
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <div className="fade-in" key={post.id}>
            <div className="blog-card">
              <BlogCard post={post} isLightBackground={index % 2 === 0}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
