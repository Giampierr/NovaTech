import Hero from "../components/Hero"
import VideoSection from "../components/VideoSection"
import Features from "../components/Features"
import Products from "../components/Products"
import Brands from "../components/Brands"

export function HomePage() {
  return (
    <main>
      <Hero />
      <VideoSection />
      <Features />
      <Products />
      <Brands />
    </main>
  )
}