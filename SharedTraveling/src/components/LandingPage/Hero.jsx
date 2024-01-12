import TripCard from "./TripCard";
import { Link } from "react-router-dom";
const Hero = (props) => {
  //  console.log(props.trip.attributes.image.data[0].attributes.url)
   
  return (
    <section className="bg-slate-950 h-svh">
      <div className="bg-[url('src/assets/beach-1751455_1280.jpg')] h-2/4 bg-no-repeat px-12 py-24 text-white relative">
        <div className="flex flex-col h-4/6 justify-between">
          <h1 className="text-4xl font-oleo">Placeholder Land *.*</h1>
          <p>Amazing travel destination of your dreams</p>
          <div className="flex gap-4">
            <button className="w-32 p-2 bg-white text-black rounded shadow-black shadow-md">View Trip</button>
            <button className="w-32 p-2 bg-slate-600 rounded shadow-slate-600 shadow-md">Share</button>
          </div>
        </div>
        <div className="flex gap-4 absolute -bottom-36 left-1/2 -translate-x-1/2">
         {props.trip.map((trip) => {
          const url = `http://localhost:1337${trip.attributes.image.data[0].attributes.url}`
           return <>
           <Link to="/trip" ><button key={trip.id} onClick={(e)=>{props.handleButtonClick(trip.id-1)}}><TripCard url={url}  /></button></Link>
           
           
           </> 
          })
        }
         
        </div>
      </div>
    </section>
  );
};

export default Hero;
