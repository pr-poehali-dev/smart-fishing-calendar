import MarkerMap from "@/components/MarkerMap";
import Navigation from "@/components/Navigation";

const MarkerMapPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-water-light to-water-dark">
      <MarkerMap />
      <Navigation />
    </div>
  );
};

export default MarkerMapPage;
