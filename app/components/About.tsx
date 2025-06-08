"use client"
import Image from "next/image"
import profile from "../images/hero2.png"
import React from "react"

interface Skill {
  name: string
  level: "Basic" | "Intermediate" | "Advanced"
}

const About: React.FC = () => {
  const skills: Skill[] = [
    { name: "React JS", level: "Intermediate" },
    { name: "Next JS", level: "Intermediate" },
    { name: "Java", level: "Intermediate" },
    { name: "Node JS", level: "Basic" },
    { name: "Mongo DB", level: "Intermediate" },
    { name: "Python", level: "Basic" },
  ]

  const getPercentage = (level: Skill["level"]): number => {
    const map: Record<Skill["level"], number> = {
      Basic: 30,
      Intermediate: 60,
      Advanced: 90,
    }
    return map[level] || 0
  }

  const getSkillColor = (level: Skill["level"]): string => {
    const colorMap: Record<Skill["level"], string> = {
      Basic: "bg-blue-500",
      Intermediate: "bg-green-500",
      Advanced: "bg-purple-500",
    }
    return colorMap[level] || "bg-gray-500"
  }

  return (
    <div id="about" className="min-h-screen" style={{ background: "var(--color-gray-900)" }}>
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image Section */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl border-8 border-white">
                <Image
                  src={profile}
                  alt="Profile"
                  width={320}
                  height={320}
                  className="object-cover w-full h-full"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 rounded-full opacity-60 -z-10"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-green-200 rounded-full opacity-40 -z-10"></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              About <span className="text-blue-600">Me</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              I'm a passionate full-stack developer with a love for creating innovative web solutions. With experience
              in modern technologies like React, Next.js, and Node.js, I enjoy building applications that make a
              difference. I'm always eager to learn new technologies and take on challenging projects that push the
              boundaries of what's possible.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <div className="bg-gray-800 px-6 py-3 rounded-full shadow-md">
                <span className="text-blue-400 font-semibold">🚀 Full Stack Developer</span>
              </div>
              <div className="bg-gray-800 px-6 py-3 rounded-full shadow-md">
                <span className="text-green-400 font-semibold">💡 Problem Solver</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
