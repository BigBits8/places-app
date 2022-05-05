import Create from './create'

// Get saved city object id from browser page and save in variabel
let cityKey = localStorage.getItem('objId');
//Function/component - To get spots in each city
function Spots({spots}) {
    
    //Check if its not an array if so set prop to a singel element array. (For singel objects)
    if (!Array.isArray(spots)){
        spots = [spots];
    }

    let cityData = spots[0].data;
    let arr = [];
    
    
    //Chek if cityKey matches spots reference key
    for (let i = 0; i < cityData.length; i++) {

        //Key do not match
        if(cityKey != cityData[i].cityRefId){
            // console.log('no match')
           //Key matches, create an array with matching objects 
        }else{arr.push(cityData[i]);
            console.log(arr);}
    
    }

    let output = `  <div class="card create-card">
            <div class="card-image"></div>
          <div class="card-text card-text-area">
              
              <h2>Create new spot</h2>
              <form>
              <label>Spot title</label>
              <input 
              type="text" 
              required>
              </input>
              <br>
              <label>Description</label>
              <textarea 
              required>
              </textarea>
              <br>
              <label>Choose City the spot belongs to</label>
              <br>
              <select>
                <option value="Stockholm">Stockholm</option>
                <option value="Göteborg">Göteborg</option>
                <option value="Malmö">Malmö</option>
              </select>
              <button>Add card</button>
          </div>
          <div className="card-stats"></div>
          </div>`;
    
return(
    <>
    

          
         {arr.forEach(spot => {
            //  console.log(spot)
             output +=`
       <div class="card">
            <div class="card-image" style="background: url(${spot.image})"></div>
          <div class="card-text">
              <span class="date">4 days</span>
              <h2>${spot.name}</h2>
              <p>${spot.description}</p>
          </div>
          <div class="card-stats"></div>
          </div>`;
             
          document.getElementById('body').innerHTML = output;
         })}
        
          
     
    </>
    
)
 

 
}

export default Spots;
