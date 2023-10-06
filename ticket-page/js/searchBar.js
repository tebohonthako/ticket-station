let items = document.querySelectorAll('.carousel .carousel-item')

items.forEach((el) => {
    const minPerSlide = 3
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
            next = items[0]
          }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})

const searchButton = document.querySelector('#search-button');
const searchText = document.querySelector('#search-text');
const searchDate = document.querySelector('#search-date');
// const searchSelectLocation = document.querySelector('#search-select-location');
// const searchSelectType = document.querySelector('#search-select-type');
const searchResults = document.querySelector('#search-results');

eventsArray=["Johannesburg Music Festival","Cape Town Music Festival", "Durban Music Festival", "Bloemfontein Music Festival", "Pretoria Music Festival", "Polokwane Music Festival", "Pietermaritzburg Music Festival", "Johannesburg Jazz Concert", "Cape Town Jazz Concert", "Durban Jazz Concert", "Bloemfontein Jazz Concert", "Pretoria Jazz Concert","Polokwane Jazz Concert","Pietermaritzburg Jazz Concert","Johannesburg Rock Concert","Cape Town Rock Concert", "Durban Rock Concert","Bloemfontein Rock Concert", "Pretoria Rock Concert", "Polokwane Rock Concert", "Pietermaritzburg Rock Concert"];
monthsArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
popularEvents= ["Johannesburg Music Festival","Cape Town Music Festival", "Johannesburg Jazz Concert", "Cape Town Jazz Concert","Durban Music Festival"];
// Event object constructor
class MusicEvent{

    constructor(name, date, price, img){

        this.name = name;
        this.date = date;
        this.price = price;
        this.img=img;


    }
}

let johannesburgMusicFestival = new MusicEvent("Johannesburg Music Festival", "11-13 November", 699.99, "images/R (2).jpg" ); 
let capeTownMusicFestival =new MusicEvent("Cape Town Music Festival", "10-17 October", 599.99, "images/tomorrowland-youredm.jpg" );
let durbanMusicFestival =new MusicEvent("Durban Music Festival", "9-17 September",799.99,"images/maxresdefault.jpg");
let bloemfonteinMusicFestival = new MusicEvent("Bloemfontein Music Festival", "8-14 March", 499.99, "images/sunburn-fest.jpg");
let pretoriaMusicFestival = new MusicEvent("Pretoria Music Festival", "15-17 May", 599.99, "images/Imagesplash01.jpg");
let polokwaneMusicFestival = new MusicEvent("Polokwane Music Festival", "16-22 July", 799.99, "images/R (6).jpg");
let pietermaritzburgFestival = new MusicEvent("Pietermaritzburg Music Festival", "24-27 August", 599.99, "images/abstral-official-bdlMO9z5yco-unsplash.jpg");
let johannesburgJazzConcert = new MusicEvent("Johannesburg Jazz Concert", "15-19 September", 699.99, "images/R.png" );
let capeTownJazzConcert = new MusicEvent("Cape Town Jazz Concert", "18-21 April", 599.99, "images/R (4).jpg");
let durbanJazzConcert = new MusicEvent("Durban Jazz Concert", "8-12 June", 499.99, "images/maxresdefault (1).jpg");
let bloemfonteinJazzConcert = new MusicEvent("Bloemfontein Jazz Concert", "5-9 November" , 499.99, "images/The-Jazz-Experience-A-Fine-Smooth-Jazz-Session-cover.jpg");
let pretoriaJazzConcert = new MusicEvent("Pretoria Jazz Concert","20-24 December", 699.99, "images/R (7).jpg" );
let polokwaneJazzConcert = new MusicEvent("Polokwane Jazz Concert", "16-20 February", 399.99, "images/OIP (7).jpg");
let pietermaritzburgJazzConert = new MusicEvent("Pietermaritzburg Jazz Concert", "27-31 October", 499.99, "images/jazz-image-3.jpg");
let johannesburgRockConcert = new MusicEvent("Johannesburg Rock Concert", "22-25 January", 399.99, "images/R.jpg");
let capeTownrockConcert = new MusicEvent("Cape Town Rock Concert", "10-14 August", 399.99, "images/OIP (1).jpg");
let durbanRockConcert = new MusicEvent("Durban Rock Concert", "2-5 July", 599.99, "images/R (1).jpg");
let bloemfonteinRockConcert = new MusicEvent("Bloemfontein Rock Concert", "24-28 May" , 499.99, "images/OIP (2).jpg");
let pretoriaRockConcert = new MusicEvent("Pretoria Rock Concert", "28-31 March", 599.99, "images/OIP (9).jpg");
let polokwaneRockConcert= new MusicEvent("Polokwane Rock Concert", "24-28 June",  499.99, "images/R (1).png");
let pietermaritzburgRockConert = new MusicEvent("Pietermaritzburg Rock Concert", "10-14 December", 499.99, "images/OIP (3).jpg");
let eventObjects = [johannesburgMusicFestival, capeTownMusicFestival, durbanMusicFestival, bloemfonteinMusicFestival, pretoriaMusicFestival, polokwaneMusicFestival, pietermaritzburgFestival, johannesburgJazzConcert, capeTownJazzConcert, durbanJazzConcert, bloemfonteinJazzConcert, pretoriaJazzConcert, polokwaneJazzConcert, pietermaritzburgJazzConert, johannesburgRockConcert, capeTownrockConcert, durbanRockConcert, bloemfonteinRockConcert, pretoriaRockConcert, polokwaneRockConcert, pietermaritzburgRockConert];




searchButton.addEventListener('click', function() {
    console.log('execute')
  const text = searchText.value;
//   const date = searchDate.value;
//   const selectLocation = searchSelectLocation.value;
//   const selectType = searchSelectType.value;

  // Perform your search logic here based on the provided values
 // For example, you can use an array of objects representing the search results

 // Clear previous search results
 searchResults.innerHTML = '';

 // Display search results
 const results = performSearch(text); // replace with your own search logic
 results.forEach(function(result) {
  

 for(const item of eventObjects){
    if(item.name.includes(result)){
        console.log('yes');

        // searchResults.appendChild(resultElement);
        searchResults.appendChild(document.createElement('br'));
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
                                                              <a class="link-fx-1 color-contrast-higher mt-4" href="ticket.html">
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
 }



 });
});

function performSearch(text) {
 // Perform your search logic here based on the provided values
 // Return an array of search results
 // For example, you can filter an array of objects based on the search criteria

 const filteredEvents = eventsArray.filter(function(item) {
  return  item.toLowerCase().includes(text.toLowerCase());
 });
 console.log(eventsArray)
 return filteredEvents;
}


// function performDearchDate(date){
//   const filteredDates = monthsArray.filter(function(item){
//     return item.toLowerCase().includes(date.toLowerCase())
//   })
// }



