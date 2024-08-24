function displayContent(options) {
  let content = document.querySelector(".box2");
  switch (options) {
    case "flight":
      content.innerHTML = ` 
      
      <div class="in-box1">
      <div class="in-box1-half1">
        <input type="radio" value="One Way" id="one-way" />
        <label for="one-way">One Way</label>

        <input type="radio" value="Round Trip" id="round-trip" />
        <label for="round-trip">Round Trip</label>

        <input type="radio" value="Multi City" id="multi-city" />
        <label for="one-way">Multi City</label>
      </div>

      <div class="in-box1-half2">
        <p>Book International and Domestic Flights</p>
      </div>
    </div>



    <div class="flight-info">


      <div class="from">

        <span class="label">From</span>

        <div class="location">
          <span class="city">Delhi</span>
          <span class="s-font3">DEL, Delhi Airport India</span>
        </div>
      </div>


      <div class="swap-icon">
        <span>⇄</span>
      </div>
      <div class="to">
        <span class="label">To</span>
        <div class="location">
          <span class="city">Bengaluru</span>
          <span class="s-font3"
            >BLR, Bengaluru International Airport...</span
          >
        </div>
      </div>
      <div class="departure">
        <span class="label">Departure</span>
        <div>
          <span class=" s-font">12 </span>
          <span class="s-font2">Aug'24</span>
        </div>
       
        <span class="s-font3">Monday</span>
      </div>
      <div class="return">
        <span class="label">Return</span>
        <span class="placeholder"
          >Tap to add a return date for bigger discounts</span
        >
      </div>
      <div class="travellers-class">
        <span class="label">Travellers & Class</span>
        <div>
          <span class="s-font">1</span>
          <span class="s-font2"> Traveller</span>
        </div>
       
        <span class="s-font3">Economy/Premium Economy</span>
      </div>
    </div>

    <div class="fare-info">

    <div class="offer">
      <span>Select a special fare</span>
      <div class="extra-saving">EXTRA SAVING</div>
    </div>

    <div class="fares">

      <label>
        <input type="radio" name="fare" checked> Regular
        
      <span class="xfont">Regular Fares</span>
    
      </label>
      <label><input type="radio" name="fare"> Student <span class="xfont">Extra discounts/baggage</span></label>
      <label><input type="radio" name="fare"> Senior Citizen <span class="xfont">up to ₹600 off</span></label>
      <label><input type="radio" name="fare"> Armed Forces <span class="xfont">up to ₹600 off</span></label>
      <label><input type="radio" name="fare"> Doctor and Nurses <span class="xfont">up to ₹600 off</span></label>
  </div>
</div>

<button class="search-button">SEARCH</button>


  </div>
      
      
      `;
      break;
    case "hotels":
      content.innerHTML = `
      
      <div class="in-box1">
      <div class="in-box1-half1-hotel">
        <input type="radio" checked id="rooms" />
        <label for="rooms">Upto 4 Rooms</label>

        <input type="radio"  id="group-deals" />
        <label for="group-deals">Group Deals</label>
       
         <span class="new">NEW</span>
       

        <div></div>

     </div>

      <div class="in-box1-half2-hotel">
        <p>Book Domestic and International Property Online. To list your property.</p>
        <span >Click here</span>
      </div>
    </div>

    <div class="div-info">
      <div class="div1">
        <span class="label">City, Property name or Location</span>

        <div class="location">
          <span class="city">Goa</span>
          <span class="s-font3">India</span>
        </div>
      </div>

    
      <div class="div2">
        <span class="label">Check-in</span>
        <div>
          <span class="s-font">12 </span>
          <span class="s-font2">Aug'24</span>
        </div>

        <span class="s-font3">Monday</span>
      </div>
      <div class="div3">
        <span class="label">Check-out</span>
        <div>
          <span class="s-font">12 </span>
          <span class="s-font2">Aug'24</span>
        </div>

        <span class="s-font3">Monday</span>
      </div>


      <div class="div4">
        <span class="label">Rooms & Guests
        </span>
        <span class="s-font">1 </span>
        <span class="s-font2">Rooms</span>
        <span class="s-font">2 </span>
          <span class="s-font2">Adults</span>
      </div>


      <div class="div5">
        <span class="label">Price per Night</span>
        <div>
         ₹0-₹1500, ₹1500-₹2500,...
          
        </div>

        
      </div>
    </div>

    <div class="trend">
      <div>Trending Searches:</div>
      <div class="trend-box">
      <span class="trend-in">Dubai, United Arab Emirates</span>
      <span class="trend-in">New York, United States</span>
      <span class="trend-in">London, United Kingdom</span>
    </div>
    </div>
     

    <button class="search-button">SEARCH</button>
      
      
      `;
      break;

    default:
      contentBox.innerHTML = `<p>Select an option to view content.</p>`;
  }
}
