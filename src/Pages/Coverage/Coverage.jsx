import React, { useRef, useState } from "react";
import { Marker, Popup } from "react-leaflet";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { useMap,  } from "react-leaflet/hooks";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";

const Coverage = () => {
    const [location, setLocation] = useState("");
    const mapRef = useRef(null);
  const data = useLoaderData();
  console.log(data);

  const handleSearch = (e) => {
    e.preventDefault();
    
    const district = data.find(c =>
      c?.district.toLowerCase().includes(location.toLowerCase())
    );

    if (district) {
      const coordinates = [district.latitude, district.longitude];
      console.log(district, coordinates);
      mapRef.current.flyTo(coordinates,14);
    }
  };

  return (
    <div className="px-20 h-278 pt-15 bg-white my-6 rounded-2xl shadow-sm">
      <h2 className="text-5xl font-bold ">We are available in 64 districts</h2>
      <div className="mt-10">
        <div className="flex w-2/6 bg-[#E6F2F3]/60 rounded-3xl shadow-md overflow-hidden">
          <input
            type="text"
            placeholder="🔍 search here "
            name="location"
            className="grow px-4 py-2 h-12 focus:outline-none"
                      onChange={(e) => {
                          setLocation(e.target.value);
                          handleSearch(e)
            } }
          />
          <button
           
            className="bg-primary text-black px-4 flex items-center rounded-3xl text-lg justify-center"
          >
            Search
          </button>
        </div>
      </div>

      <div className="h-200 pt-5">
        <h2 className="text-3xl font-bold my-7 ">
          We deliver almost all over Bangladesh
        </h2>

        <MapContainer
          center={[23.685, 90.3563]}
          zoom={8}
          scrollWheelZoom={false}
          className="h-180"
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {data.map((warehouse) => (
            <Marker position={[warehouse.latitude, warehouse.longitude]}>
              <Popup className="bg-green-500">
                <strong>{warehouse.district}</strong> <br />
                Service area: {warehouse.covered_area.join(",")}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
