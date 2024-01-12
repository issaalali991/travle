import { useState, useEffect } from "react";
import { createClient } from "contentful";
import DetailView from "./components/DetailView/DetailView";
import FeaturedTrips from "./components/LandingPage/FeaturedTrips";
import NavBar from "./components/Global/Navbar";
import Hero from "./components/LandingPage/Hero";
import Footer from "./components/Global/Footer";
import { useGettripByNameQuery } from "./Redux/trip";
import { BrowserRouter,Routes,Route } from "react-router-dom"
const client = createClient({
  space: import.meta.env.VITE_SPACE,
  accessToken: import.meta.env.VITE_ACCESSTOKEN,
});

function App() {
  const [entries, setEntries] = useState([]);
  const [trip, setTrip] = useState(1);

  useEffect(() => {
    client
      .getEntries()
      .then((response) => {
        console.log(response);
        setEntries(response.items);
      })
      .catch(console.error);
  }, []);

  if (entries == []) return <p>Loading...</p>;
  const { data, error, isLoading } = useGettripByNameQuery("trips?populate=*");
  if (isLoading) return <p>Loading...</p>;
  else console.log(data.data[0].attributes.title);
  const handleButtonClick = (val) => {
    setTrip(val)
  };
  console.log(trip)
  return (
    <div className="bg-gray-950">
      <div className="max-w-screen-xl mx-auto">
        <NavBar />
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero trip={data.data} handleButtonClick={handleButtonClick} />} />
          <Route path="/trip" element={<DetailView trip={data.data[trip]} />} />
        </Routes>
        </BrowserRouter>
        {/* <Hero trip={data.data} handleButtonClick={handleButtonClick} /> */}

        <FeaturedTrips items={entries} />
        {/* <DetailView trip={data.data[trip]} /> */}
        <Footer />
      </div>
    </div>
  );
}
export default App;
