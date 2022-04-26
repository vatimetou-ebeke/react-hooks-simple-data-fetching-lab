// create your App component here
import React, { useEffect, useState } from 'react';

const API_URL = "https://dog.ceo/api/breeds/image/random"

// when the foximage component renders (only do this once)
// make a GET https://randomfox.ca/floof/
// set the image in state

function App() {
  const [image, setImage] = useState(null)
  
  useEffect(() => {
      fetch("https://dog.ceo/api/breeds/image/random")
      .then(response => response.json())
      .then(data=>setImage(data.message))
      
  }, [])

  if(!image){
 return <p>Loading...</p>
  }
  
  return (
    <div>
      <p>Here's a lovely Dog for you:</p>
      <img src={image} alt="A Random Dog" />
    </div>
  );
}

export default App;
