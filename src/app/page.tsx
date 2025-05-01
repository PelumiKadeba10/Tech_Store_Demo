import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero";
import CategorySection from "./components/Products/CategorySection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />

      {/* Categories of Items Sections */}
      <div className="grid grid-cols-1 bg-slate-50 px-10">
        <p className="text-3xl font-bold pt-10 text-center">Products</p>
        <div className="gap-19 pt-10">
          <CategorySection id="phones" category="phones" />
          <CategorySection id="laptops" category="laptops" />
          <CategorySection id="accessories" category="accessories" />
          <CategorySection id="deals" category="deals" />
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
