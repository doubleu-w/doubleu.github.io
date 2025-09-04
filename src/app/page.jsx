import Hero from "../components/Hero.jsx";
import CategoryGrid from "../components/CategoryGrid.jsx";
import CTA from "../components/CTA.jsx";

export default function HomePage(){
  return (
    <>
      <Hero/>
      <div className="divider"></div>
      <CategoryGrid/>
      <CTA/>
    </>
  )
}
