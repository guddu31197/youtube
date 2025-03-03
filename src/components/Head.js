import React, { cache, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/contants";
import {cacheResults} from '../utils/searchSlice';

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if(searchCache[searchQuery]){
        setSuggestions(searchCache[searchQuery]);
      }else{
        getSearchSugestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSugestions = async () => {
    console.log("API_CALL -" + searchQuery);
    try {
      const data = await fetch(YOUTUBE_SEARCH_API + searchQuery, {
        mode: "no-cors",
      });
      const json = await data.json();
      // console.log("Request sent", json);
      setSuggestions(json[1]);
      dispatch(cacheResults({
        searchQuery: json[1],
      }))
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="flex p-5 m-2 shadow-lg justify-between">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          alt="menu"
          src="https://icon-library.com/images/hamburger-menu-icon-png/hamburger-menu-icon-png-9.jpg"
        />

        <img
          className="h-8 mx-2"
          alt="youtube"
          src="https://th.bing.com/th/id/R.d2aedc52eb143ef84f904d37b27aef66?rik=%2bDiyLWU2LhvU1A&riu=http%3a%2f%2fpngimg.com%2fuploads%2fyoutube%2fyoutube_PNG13.png&ehk=qywyUAgWwEMAZ%2b0vs49sqYw8LuzfLQMKpn3kF33PSIg%3d&risl=&pid=ImgRaw&r=0"
        />
      </div>
      <div className="col-span-10 px-10">
        <div>
          <input
            className="w-96 border border-gray-400 p-2 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => showSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
            🔍
          </button>
        </div>
        {showSuggestions && (
        <div className="fixed bg-white py-2 px-5 w-[37rem] shadow-lg rounded-lg border border-gray-100">
          <ul>
            {suggestions?.map((s) => (
              <li key={s} className="py-2 shadow-sm hover:bg-gray-100">
                Iphone
              </li>
            ))}
          </ul>
        </div>
        )}
      </div>

      <div className="col-span-1">
        <img
          className="h-8"
          alt="user icon"
          src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
        />
      </div>
    </div>
  );
};

export default Head;
