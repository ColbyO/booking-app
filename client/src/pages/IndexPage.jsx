import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import Image from "../Image.jsx";

export default function IndexPage() {
  const [places,setPlaces] = useState([]);
  useEffect(() => {
    axios.get('/places').then(response => {
      setPlaces(response.data);
    });
  }, []);
  return (
    <div className="grid grid-cols-2 p-10 mt-8 -mt-3 gap-x-6 gap-y-8 md:grid-cols-3 lg:grid-cols-3">
      {places.length > 0 && places.map((place, key) => (
        <Link key={key} to={'/place/'+place._id}>
          <div className="flex mb-2 rounded-2xl">
            {place.photos?.[0] && (
              <Image className="object-cover rounded-2xl aspect-square" src={place.photos?.[0]} alt=""/>
            )}
          </div>
          <h2 className="font-bold">{place.address}</h2>
          <h3 className="text-sm text-gray-500">{place.title}</h3>
          <div className="mt-1">
            <span className="font-bold">${place.price}</span> per night
          </div>
        </Link>
      ))}
    </div>
  );
}