import PhotoComponent from "./components/PhotoComponent";
import {useEffect, useState} from 'react'

function App() {
  const apiKey = `Q5exGeTcvzE68bllFZ7CnLlzXqnIsMJqNbCnoa2gA-8`
  const apiUrl = `https://api.unsplash.com/photos/?client_id=${apiKey}&page=1`

  const [photos,setPhotos] = useState([])
 
  const fetchImage= async()=>{
    const response= await fetch(apiUrl)
    const data = await response.json()
    setPhotos(data)
  }
  useEffect(()=>{
    fetchImage()
  },[])

  return (
    <main>
      <h1>Infinite photo API</h1>
      <section className="photos">
        <div className="display-photo">
          {photos.map((data,index)=>{
            return <PhotoComponent key={index} {...data}/>
          })}
        </div>
      </section>
    </main>
  );
}

export default App;
