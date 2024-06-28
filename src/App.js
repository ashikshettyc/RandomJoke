import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [jokes, setJokes] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,explicit&type=single'
      );
      setJokes(response.data.joke);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const handleJokes = () => {
    fetchData();
  };
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-gradient-to-r from-[#a8ff78] to-[#78ffd6]">
      <div className="">
        <p className="text-white text-4xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] ">
          Random Joke Generator
        </p>
      </div>
      <div className="w-1/4">
        <img
          src="https://res.cloudinary.com/saiuttej/image/upload/v1685211242/Insta%20Share%20Project%20Assets/Smiley_face-bro_umpb2p.png"
          alt="jokesimage"
        />
      </div>
      {loading ? (
        <div className='"border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-green-500'></div>
      ) : (
        <div className="w-1/2 h-1/6 mx-auto bg-white py-4 px-8 rounded-md items-center">
          {jokes}
        </div>
      )}

      <button
        onClick={handleJokes}
        className="py-1 px-5 bg-gray-600 text-white font-bold border-none cursor-pointer mt-5 rounded-md "
      >
        New Joke
      </button>
    </div>
  );
}

export default App;
