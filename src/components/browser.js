import { useNavigate } from "react-router-dom";
import "../css/browser.css";
import "../css/front.css";
import useFetch from "./useFetch";
import Nav from "./nav";
import CityList from "./cityList";

//This is browser page
function Browser() {
  //Run useFetch function, return data of db and is loading state,
  const { data, isLoading } = useFetch(`http://localhost:8000/dataCities`);
  let navigate = useNavigate();
  function clickHandler() {
    let userInput = document.getElementById("search").value;
    //Checks user input and displays correct spots
    for (let i = 0; i < data.length; i++) {
      let element = data[i];
      //If input matches
      if (element.name.toUpperCase() == userInput.toUpperCase()) {
        localStorage.setItem("objId", element.cityId);
        let path = `../citySpots`;

        navigate(path);
        location.reload();

        console.log(element);
        console.log(element.cityId);
      } else {
        console.log("Cannot find what you are looking");
        document.getElementById(
          "body"
        ).innerHTML = `<div class="mismatch">Cannot find what you are looking for</div>`;
      }
    }
    // console.log(userInput)
  }

  // console.log('Check data')
  // console.log(data)
  return (
    <>
      {/* Call nav componenet */}
      <Nav />
      <div id="search-wrapper">
        <div id="search-container">
          <input placeholder="Search" type="text" id="search"></input>
          <button id="btn-search" onClick={clickHandler}>
            Search
          </button>
        </div>
      </div>

      {/* If data fetched is not showing, show is loading message state */}
      {isLoading && (
        <div className="loading-wrapper">
          <div className="loading">Loading...</div>
        </div>
      )}
      {/* Get data and pass to CityList component */}
      <div id="body">
        {data && <CityList cities={data} />}
        
        
        </div>
    </>
  );
}

export default Browser;
