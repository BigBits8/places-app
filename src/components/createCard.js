import { useState, useEffect } from "react"
import api from './Axios'
// import Nav from './nav';

// Get saved city object id from browser page and save in variabel
// let cityKey = localStorage.getItem('objId');
function createCard() {

const [name, setName] = useState("")
const [description, setDescription] = useState("")
// const [city, setCity] = useState("Stockholm")
let cityRefId = cityKey

 
 const handleChange = async (e)=>{
  // e.preventDefault();
  // const card = {name, description, cityRefId}
  // console.log(card);
  // console.log(cityKey)
 
  // fetch(`http://localhost:8000/spots`, {
  //   method: 'POST',
  //   headers: {'Content-Type': 'application/json'},
  //   body: JSON.stringify(card)
  // }).then(() =>{
  //   console.log('New spot added')
  // })

 const getSpots = async ()=>{
   const response = await api.get("/Axios");
   return response.data;
 }

  useEffect(()=>{
    const getAllSpots = ()=>{

    }
  }, [])
  const card = {name, description, cityRefId}

  const response = await api.post("/Axios", card)
  
}


  return (

   <div className="card create-card">
            <div className="card-image"></div>
          <div className="card-text card-text-area">
              
              <h2>Create new spot</h2>
              <form onSubmit={handleChange}>
              <label>Spot title</label>
              <input
              required
              value={name}
              onChange={(e) =>setName(e.target.value)}
              type="text" 
              >
              </input>
              <br></br>
              <label>Description</label>
              <textarea 
               required
              value={description}
              onChange={(e) =>setDescription(e.target.value)}
              type="text" >
              </textarea>
              <br></br>
              <label>Choose city the spot belongs to</label>
              <br></br>
              
              <button >Add card</button>
              <p>{ name }</p>
              <p>{ description }</p>
              {/* <p>{ city }</p> */}
              </form>
          </div>
    </div>
          
  )
  }

export default createCard
