import Image from "next/image"
import heroImage from "../images/hero.png"
import DownloadBtn from "./DownloadBtn"
import HireMeBtn from "./HireMeBtn"

const HeroSection = () => {
  return (
    <main id="home" className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 items-center gap-12 lg:gap-16">
          {/* Content Section */}
          <div className="space-y-8 lg:pl-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-emerald-400 font-medium text-lg">Hello, I'm</p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-white">Nischal</span>
                  <br />
                  <span className="text-emerald-400">Koirala</span>
                </h1>
              </div>

              <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-lg">
                Motivated frontend development student with a strong foundation in building responsive, user-friendly
                web apps. Eager to learn Next.js and grow into a skilled, impactful software engineer.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <HireMeBtn />
              <DownloadBtn />
            </div>

            {/* Stats or Additional Info */}
            <div className="flex gap-8 pt-8 border-t border-gray-700">
              <div>
                <p className="text-2xl font-bold text-emerald-400">2+</p>
                <p className="text-gray-400 text-sm">Years Learning</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-emerald-400">10+</p>
                <p className="text-gray-400 text-sm">Projects Built</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-emerald-400">100%</p>
                <p className="text-gray-400 text-sm">Dedication</p>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative lg:pl-8">
            <div className="relative z-10">
              <div className="w-80 h-80 lg:w-96 lg:h-96 mx-auto relative">
                {/* Decorative background elements */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                <div className="absolute -top-4 -right-4 w-72 h-72 bg-emerald-500/10 rounded-full"></div>
                <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-blue-500/10 rounded-full"></div>

                {/* Main image container */}
                <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden border-4 border-gray-700 shadow-2xl">
                  <Image
                    src={heroImage || "/placeholder.svg"}
                    alt="Nischal Koirala - Frontend Developer"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-emerald-400 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-ping delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-emerald-300 rounded-full animate-ping delay-500"></div>
      </div>
    </main>
  )
}

export default HeroSection
