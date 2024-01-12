import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { Marker, Popup } from "react-leaflet";
import "Leaflet/dist/leaflet.css";

import React from "react";

const DetailView = (props) => {
  if (props.trip.attributes.title) {
    console.log("Detail View Trip: ", props.trip.attributes.title);

    const trip = props.trip.attributes;
    return (
      <div className="bg-slate-800 text-white">
        <h2 className="font-bold text-xl py-6 "> {trip.title}</h2>
        <div
          className="flex w-full justify-around
        "
        >
          <div className="flex basis-full flex flex-col">
            <div className=" flex flex-col">
              From: {trip.startDate} - To: 
              {trip.endDate}
            </div>
            
            <div className="flex-start">
              <br />
              <b>From:</b> {trip.startLocation} - <b>To: </b>
              {trip.cityDestination}
            </div>
            <img
              src={`http://localhost:1337${trip.image.data[0].attributes.url}`}
              alt=""
              className="w-16 md:w-32 lg:w-72"
            />
            <div className="flex flex-col">
              <p className="font-bold">Description:</p>
              <p>{trip.description}</p>
              </div>
          </div>

          <MapContainer
            className="h-80 basis-60 flex grow-0"
            center={trip.destination}
            zoom={5}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={trip.destination}>
              <Popup>Trip Destination</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    );
  } else {
    return <p>Error: DetailView called without trip prop.</p>;
  }
};

export default DetailView;
