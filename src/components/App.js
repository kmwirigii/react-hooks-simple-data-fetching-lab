// create your App component here
// create your App component here
import React, { useState, useEffect } from "react";

function App() {
  const [dogImage, setDogImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetching the random dog image from the API
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setDogImage(data.message); // Setting the dog image URL
        setLoading(false); // Turning off the loading state
      })
      .catch((error) => {
        console.error("Error fetching dog image:", error);
        setLoading(false); // Stop loading even if there's an error
      });
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p> 
      ) : (
        <img src={dogImage} alt="A Random Dog" /> // Display the dog image
      )}
    </div>
  );
}

export default App;