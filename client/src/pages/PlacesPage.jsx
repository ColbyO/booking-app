import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import AccountNav from "../AccountNav";
import axios from "axios";
import PlaceImg from "../PlacesImg";

const PlacesPage = () => {
    const [places,setPlaces] = useState([]);
    
    useEffect(() => {
      axios.get('/user-places').then(({data}) => {
        setPlaces(data);
      });
    }, []);

  return (
    <div>
      <AccountNav />
        <div className="text-center">
          <Link className="inline-flex gap-1 px-6 py-2 text-white rounded-full bg-primary" to={'/account/places/new'}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
            </svg>
            Add new place
          </Link>
        </div>
        <div className="flex flex-col items-center gap-3 mt-4">
          {places.length > 0 && places.map((place, key) => (
            <Link key={key} to={'/account/places/'+place._id} className="flex w-1/2 gap-4 p-4 cursor-pointer bg-darkSecondary rounded-2xl">
              <div className="flex w-32 h-32 bg-darkSecondary grow shrink-0">
                <PlaceImg place={place} />
              </div>
              <div className="grow-0 shrink">
                <h2 className="text-xl">{place.title}</h2>
                <p className="mt-2 text-sm">{place.description}</p>
              </div>
            </Link>
          ))}
        </div>
    </div>
  );
};

export default PlacesPage;
