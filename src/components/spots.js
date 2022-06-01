// import Create from './create'
import { useState } from "react";

// Get saved city id from browser page and save in variabel
let cityKey = localStorage.getItem("objId");



//Function/component - To get spots in each city
/**
 * @function spots function takes data from useFetch and shows only matched spots for city thats clicked on

 * @param {obj} spots - Data from fetch
 * @param {string} cardName - Gets the name of the card from createCard componenet, for POST request
 * @param {string} cardDescription - Gets the description of the card from createCard componenet, for POST request
 */
function Spots({ spots, cardName, cardDescription, setErrorMessage }) {
  //Check if its not an array if so set prop to a singel element array. (For singel objects)
  const [error, setError] = useState("");
  let cityData = spots;
  let arr = [];
  let output = "";
  let message = "";
  let header = "";
  // console.log('Citydata')
  // console.log(cityData)
  
  // console.log('cityData')
  // console.log(cityData)
  //To get spots related to city
  //Chek if cityKey matches spots reference key

  for (let i = 0; i < cityData.length; i++) {
    //Key do not match
    if (cityKey != cityData[i].cityRefId) {
      // console.log('no match')
      continue;
      //Key matches, create an array with matching objects
    } else {
      console.log(cityData[i])
      arr.push(cityData[i]);
      
      
      // console.log(arr);
    }
  }
  console.log(cityKey)
 
  for (let i = 0; i < cityData.length; i++) {
    const element = cityData[i];
    if (cityKey != element.cityRefId) {
       
       continue;
    }else{
      header = cityData[i].city;
      break;
    }
   
  }

  //Make DELETE of card when delete button is clicked
  window.handleClickDel = (id) => {
    if (window.confirm("Are you sure you want to delete this spot?")) {
      fetch("http://localhost:8000/dataSpots/" + id, {
        method: "DELETE",
      }).then(() => {
        location.reload();
      });
    }
  };
  //Make an update of card when update button is clicked
  window.handleClickUpd = (id) => {
    if (cardName == "" && cardDescription == "") {
      message = "You have to input name and/-or description";
      setError(message);
      console.log("message");
    } else {
      fetch(`http://localhost:8000/dataSpots/` + id, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: cardName,
          description: cardDescription,
          cityRefId: cityKey,
        }),
      }).then(() => {
        console.log("Spot updated");
        location.reload();
      });
    }
  };
  setErrorMessage(error);
  return (
    <>
      {arr.forEach((spot) => {
        //  console.log(spot)

        output += `
       <div class="card">
            <div class="card-image" style="background: url(${spot.image})"></div>
          <div class="card-text">
              <h2>${spot.name}</h2>
              <p>${spot.description}</p>
              <button id="btn" onclick="handleClickDel(${spot.id})">Delete</button>
              <button id="btnUpd" onclick="handleClickUpd(${spot.id})">Update</button>
          </div>
          
          </div>`;
        document.getElementById("header-text").innerHTML = header;
        document.getElementById("render-objects").innerHTML = output;
      })}
    </>
  );
}

export default Spots;
