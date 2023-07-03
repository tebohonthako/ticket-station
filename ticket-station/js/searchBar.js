

const searchButton = document.querySelector('#search-button');
const searchText = document.querySelector('#search-text');
const searchDate = document.querySelector('#search-date');
const searchResults = document.querySelector('#search-results');

eventsArray=["Johannesburg Music Festival","Cape Town Music Festival", "Durban Music Festival", "Bloemfontein Music Festival", "Pretoria Music Festival", "Polokwane Music Festival", "Pietermaritzburg Music Festival", "Johannesburg Jazz Concert", "Cape Town Jazz Concert", "Durban Jazz Concert", "Bloemfontein Jazz Concert", "Pretoria Jazz Concert","Polokwane Jazz Concert","Pietermaritzburg Jazz Concert","Johannesburg Rock Concert","Cape Town Rock Concert", "Durban Rock Concert","Bloemfontein Rock Concert", "Pretoria Rock Concert", "Polokwane Rock Concert", "Pietermaritzburg Rock Concert"];


// Event object constructor
class MusicEvent{

    constructor(name, date, price, img, id, dateFormat){

        this.name = name;
        this.date = date;
        this.price = price;
        this.img=img;
        this.id =id;
        this.dateFormat= dateFormat;


    }
}

let johannesburgMusicFestival = new MusicEvent("Johannesburg Music Festival", "11-13 November", 699.99, "images/R (2).jpg" , "johannesburgMusicFestival", '2023-11-11'); 
let johannesburgMusicFestivalPopular = new MusicEvent("Johannesburg Music Festival", "11-13 November", 699.99, "images/R (2).jpg" , "johannesburgMusicFestivalPopular", '2023-11-11'); 
let capeTownMusicFestival =new MusicEvent("Cape Town Music Festival", "10-17 October", 599.99, "images/tomorrowland-youredm.jpg", "capeTownMusicFestival", '2023-10-17'  );
let capeTownMusicFestivalPopular =new MusicEvent("Cape Town Music Festival", "10-17 October", 599.99, "images/tomorrowland-youredm.jpg", "capeTownMusicFestivalPopular", '2023-10-17'  );
let durbanMusicFestival =new MusicEvent("Durban Music Festival", "9-17 September",799.99,"images/maxresdefault.jpg","durbanMusicFestival",'2023-09-09');
let bloemfonteinMusicFestival = new MusicEvent("Bloemfontein Music Festival", "8-14 March", 499.99, "images/sunburn-fest.jpg", "bloemfonteinMusicFestival", '2023-03-14');
let pretoriaMusicFestival = new MusicEvent("Pretoria Music Festival", "15-17 May", 599.99, "images/Imagesplash01.jpg", "pretoriaMusicFestival", '2023-05-15');
let polokwaneMusicFestival = new MusicEvent("Polokwane Music Festival", "16-22 July", 799.99, "images/R (6).jpg", "polokwaneMusicFestival", '2023-07-16');
let pietermaritzburgFestival = new MusicEvent("Pietermaritzburg Music Festival", "24-27 August", 599.99, "images/abstral-official-bdlMO9z5yco-unsplash.jpg", "pietermaritzburgFestival", '2023-08-24');
let johannesburgJazzConcert = new MusicEvent("Johannesburg Jazz Concert", "15-19 September", 699.99, "images/R.png", "johannesburgJazzConcert", '2023-09-15' );
let johannesburgJazzConcertPopular = new MusicEvent("Johannesburg Jazz Concert", "15-19 September", 699.99, "images/R.png", "johannesburgJazzConcertPopular", '2023-09-15' );
let capeTownJazzConcert = new MusicEvent("Cape Town Jazz Concert", "18-21 April", 599.99, "images/R (4).jpg", "capeTownJazzConcert", '2023-04-18');
let capeTownJazzConcertPopular = new MusicEvent("Cape Town Jazz Concert", "18-21 April", 599.99, "images/R (4).jpg", "capeTownJazzConcertPopular", '2023-04-18');
let durbanJazzConcert = new MusicEvent("Durban Jazz Concert", "8-12 June", 499.99, "images/maxresdefault (1).jpg", "durbanJazzConcert", '2023-06-08');
let bloemfonteinJazzConcert = new MusicEvent("Bloemfontein Jazz Concert", "5-9 November" , 499.99, "images/The-Jazz-Experience-A-Fine-Smooth-Jazz-Session-cover.jpg", "bloemfonteinJazzConcert", '2023-11-05');
let pretoriaJazzConcert = new MusicEvent("Pretoria Jazz Concert","20-24 December", 699.99, "images/R (7).jpg", "pretoriaJazzConcert",'2023-12-20' );
let polokwaneJazzConcert = new MusicEvent("Polokwane Jazz Concert", "16-20 February", 399.99, "images/OIP (7).jpg", "polokwaneJazzConcert", '2023-02-16');
let pietermaritzburgJazzConcert = new MusicEvent("Pietermaritzburg Jazz Concert", "27-31 October", 499.99, "images/jazz-image-3.jpg", "pietermaritzburgJazzConcert", '2023-10-27');
let johannesburgRockConcert = new MusicEvent("Johannesburg Rock Concert", "22-25 January", 399.99, "images/R.jpg", "johannesburgRockConcert", '2023-01-22');
let johannesburgRockConcertPopular = new MusicEvent("Johannesburg Rock Concert", "22-25 January", 399.99, "images/R.jpg", "johannesburgRockConcertPopular", '2023-01-22');
let capeTownRockConcert = new MusicEvent("Cape Town Rock Concert", "10-14 August", 399.99, "images/OIP (1).jpg", "capeTownRockConcert",  '2023-08-23');
let capeTownRockConcertPopular = new MusicEvent("Cape Town Rock Concert", "10-14 August", 399.99, "images/OIP (1).jpg", "capeTownRockConcertPopular",  '2023-08-23');
let durbanRockConcert = new MusicEvent("Durban Rock Concert", "2-5 July", 599.99, "images/R (1).jpg", "durbanRockConcert", '2023-07-02');
let bloemfonteinRockConcert = new MusicEvent("Bloemfontein Rock Concert", "24-28 May" , 499.99, "images/OIP (2).jpg", "bloemfonteinRockConcert", '2023-05-24');
let pretoriaRockConcert = new MusicEvent("Pretoria Rock Concert", "28-31 March", 599.99, "images/OIP (9).jpg", "pretoriaRockConcert", '2023-03-28');
let polokwaneRockConcert= new MusicEvent("Polokwane Rock Concert", "24-28 June",  499.99, "images/R (1).png", "polokwaneRockConcert", '2023-06-24');
let pietermaritzburgRockConcert = new MusicEvent("Pietermaritzburg Rock Concert", "10-14 December", 499.99, "images/OIP (3).jpg", "pietermaritzburgRockConcert", '2023-12-10');
let eventObjects = [johannesburgMusicFestival, capeTownMusicFestival, durbanMusicFestival, bloemfonteinMusicFestival, pretoriaMusicFestival, polokwaneMusicFestival, pietermaritzburgFestival, johannesburgJazzConcert, capeTownJazzConcert, durbanJazzConcert, bloemfonteinJazzConcert, pretoriaJazzConcert, polokwaneJazzConcert, pietermaritzburgJazzConcert, johannesburgRockConcert, capeTownRockConcert, durbanRockConcert, bloemfonteinRockConcert, pretoriaRockConcert, polokwaneRockConcert, pietermaritzburgRockConcert, johannesburgMusicFestivalPopular,johannesburgJazzConcertPopular,johannesburgRockConcertPopular,capeTownMusicFestivalPopular,capeTownRockConcertPopular,capeTownJazzConcertPopular];


//function to display search output
function searchOutput(item){
    let eventObject = item;
    searchResults.innerHTML =`
    <div class="col-lg-5 col-12" >
                                              <div class="about-text-wrap">
                                                  <img src="${eventObject.img}" class="about-image img-fluid">
                      
                                                  <div class="about-text-info d-flex">
                      
                                                      <div class="event-info">
                                                          <h6 class="event-name"> ${eventObject.name}</h6>
                      
                                                          <p class="mb-0 event-date">📅 ${eventObject.date}</p>
                                                                  
                                                      </div>
                      
                                                      <div class="buy-button-container ">
                                                          <a class="link-fx-1 color-contrast-higher mt-4" href="bookings.html">
                                                              <span class="buy-button"><strong>Buy  Ticket </strong></span>
                                                              <svg class="icon" viewBox="0 0 32 32" aria-hidden="true">
                                                                  <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                                                                      <circle cx="16" cy="16" r="15.5"></circle>
                                                                      <line x1="10" y1="18" x2="16" y2="12"></line>
                                                                      <line x1="16" y1="12" x2="22" y2="18"></line>
                                                                  </g>
                                                              </svg>
                                                          </a>
                                                      </div>
                      
                                                  </div>
                                              </div>
                                          </div>`

}

//function to match user input to  an event
function performSearch(text) {
 
    const filteredEvents = eventsArray.filter(function(item) {
     return  item.toLowerCase().includes(text.toLowerCase());
    });
   
    return filteredEvents;
   }
   
//Event Search
searchButton.addEventListener('click', function() {
    
  const text = searchText.value;


 // Clear previous search results
 searchResults.innerHTML = '';

 // search results
 const results = performSearch(text); // call function to match user input with an event
 results.forEach(function(result) {
  
//loop over each event object to find a match
 for(const item of eventObjects){
    if(item.name.includes(result)){
        console.log('yes');

        
        searchResults.appendChild(document.createElement('br'));
        //output result 
        searchOutput(item);
       
    }
 }

 });
});



// Event Listing
// Sort the event objectsArray in descending order based on the date property
eventObjects.sort((a, b) => new Date(b.dateFormat) - new Date(a.dateFormat));

// Create a select element to hold the dropdown list
const select = document.createElement('select');

const  defaultOption = document.createElement("option");
    defaultOption.textContent ="Event List - Select Event ➡"
    select.appendChild(defaultOption);

// Iterate over the sorted event objectsArray
eventObjects.forEach(object => {
    // Create an option element for each object's name property
    const option = document.createElement('option');

    // Set the value of the option to the object's name property
  option.value = object.name;
  // Set the text content of the option to the object's name property
  option.textContent = object.name + " --- " +object.dateFormat;
  // Append the option to the select element
  select.appendChild(option);

  select.style.backgroundColor ="transparent";
  select.style.border="none";
  select.style.outline="none";
});

// Append the select element to an existing div or the document body
let eventList = document.querySelector('#event-list')
eventList.appendChild(select);

// Add event listener to the select element
select.addEventListener('change', function() {
    // Retrieve the selected value and store it in the selectedEvent variable
    const selectedEvent = select.value;
  
    // Use the selectedEvent variable as needed
    console.log(selectedEvent);

    // Clear previous search results
 searchResults.innerHTML = '';

 //  search results
 const results = performSearch(selectedEvent); // call function to match user input with an event
 results.forEach(function(result) {
  
//loop over each event object to find a match
 for(const item of eventObjects){
    if(item.name.includes(result)){
        
        searchResults.appendChild(document.createElement('br'));
        //output result
        searchOutput(item);
    }
 }

 })
});

// Date Filter
const monthSelect = document.querySelector("#monthSelect");
const nameSelect = document.querySelector("#nameSelect");

//Add an event listener to the main select list to handle the change event:

monthSelect.addEventListener("change", function() {
    const selectedMonth = parseInt(monthSelect.value);
    const filteredData = eventObjects.filter(function(item) {
      const month = new Date(item.dateFormat).getMonth()+1;
      return month == selectedMonth;
      
    });

     // Clear previous options
  nameSelect.innerHTML = "";

   // Populate the sub select list with the filtered names
   const  defaultOption = document.createElement("option");
    defaultOption.textContent ="Select Event"
    nameSelect.appendChild(defaultOption);

   filteredData.forEach(function(item) {

    const option = document.createElement("option");
    option.value = item.name;
    option.textContent = item.name;
    nameSelect.appendChild(option);
    
  });
});

nameSelect.addEventListener('change', function() {
    // Retrieve the selected value and store it in the selectedEvent variable
    const selectedOption= nameSelect.value;
   console.log(selectedOption)
    
    // Clear previous search results
 searchResults.innerHTML = '';

 // Display search results
 const results = performSearch(selectedOption) // call function to match user input with an event
 results.forEach(function(result) {
  
//loop over each event object to find a match
 for(const item of eventObjects){
    if(item.name.includes(result)){
        console.log('yes');

        
        searchResults.appendChild(document.createElement('br'));
        //output result
        searchOutput(item);
    }
 }



 })
});

// Location Filter
const locationSelect = document.querySelector("#search-select-location");
const locationSubSelect = document.querySelector("#locationSelect");

//Add an event listener to the main select list to handle the change event:

locationSelect.addEventListener("change", function() {
    const selectedLocation = locationSelect.value;
    console.log(selectedLocation)
    const filteredData = eventObjects.filter(function(item) {
        return  item.name.toLowerCase().includes(selectedLocation.toLowerCase());
     
     } );
    console.log(filteredData)
     // Clear previous options
  locationSubSelect.innerHTML = "";

   // Populate the sub select list with the filtered names
    const  defaultOption = document.createElement("option");
    defaultOption.textContent ="Select Event"
    locationSubSelect.appendChild(defaultOption);

   filteredData.forEach(function(item) {
    const option = document.createElement("option");
    option.value = item.name;
    option.textContent = item.name;
    locationSubSelect.appendChild(option); 

  });
});

locationSubSelect.addEventListener('change', function() {
    // Retrieve the selected value and store it in the selectedEvent variable
    const selectedOption= locationSubSelect.value;
   console.log(selectedOption)
    
    // Clear previous search results
 searchResults.innerHTML = '';

 //  search results
 const results = performSearch(selectedOption) // call function to match user input with an event
 results.forEach(function(result) {
  
//loop over each event object to find a match
 for(const item of eventObjects){
    if(item.name.includes(result)){

        searchResults.appendChild(document.createElement('br'));
        //output result
        searchOutput(item);
    }
 }

 })
});

//adding events  to webpage
let events =  [ johannesburgMusicFestivalPopular,johannesburgJazzConcertPopular,johannesburgRockConcertPopular,capeTownMusicFestivalPopular,capeTownRockConcertPopular,capeTownJazzConcertPopular,johannesburgMusicFestival, capeTownMusicFestival, durbanMusicFestival, bloemfonteinMusicFestival, pretoriaMusicFestival, polokwaneMusicFestival, pietermaritzburgFestival, johannesburgJazzConcert, capeTownJazzConcert, durbanJazzConcert, bloemfonteinJazzConcert, pretoriaJazzConcert, polokwaneJazzConcert, pietermaritzburgJazzConcert, johannesburgRockConcert, capeTownRockConcert, durbanRockConcert, bloemfonteinRockConcert, pretoriaRockConcert, polokwaneRockConcert,pietermaritzburgRockConcert];

// Iterate over the objectsArray
 for(const object of events){
    // Get the existing div with the matching id
    const existingDiv = document.getElementById(object.id);
  
    // Generate the HTML content for the object using its properties
    const objectHtml =
      `<div class="about-text-wrap">
      <img src="${object.img}" class="about-image img-fluid">

      <div class="about-text-info d-flex">

          <div class="event-info">
              <h6 class="event-name"> ${object.name}</h6>

              <p class="mb-0 event-date">📅 ${object.date}</p>
                      
          </div>

          <div class="buy-button-container ">
              <a class="link-fx-1 color-contrast-higher mt-4" href="bookings.html">
                  <span class="buy-button"><strong>Buy  Ticket </strong></span>
                  <svg class="icon" viewBox="0 0 32 32" aria-hidden="true">
                      <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                          <circle cx="16" cy="16" r="15.5"></circle>
                          <line x1="10" y1="18" x2="16" y2="12"></line>
                          <line x1="16" y1="12" x2="22" y2="18"></line>
                      </g>
                  </svg>
              </a>
          </div>

      </div>
  </div>`
    ;
  
    // Append the HTML content to the existing div
    existingDiv.innerHTML += objectHtml;
  };
