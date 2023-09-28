fetch('https://restcountries.com/v3.1/all')
.then(response => response.json())
.then(data => {
    const countries = data.map(country => country.name.common);

    countries.sort();

    populateDropdown('departure-country', countries);
    populateDropdown('destination-country', countries);
})
.catch(error => {
    console.error('Error fetching countries:', error);
});

function populateDropdown(elementId, countries) {
const selectElement = document.getElementById(elementId);

countries.forEach(country => {
    const option = document.createElement('option');
    option.text = country;
    selectElement.appendChild(option);
});
}

document.getElementById('booking-form').addEventListener('submit', function(event) {
event.preventDefault();

const departureCountry = document.getElementById('departure-country').value;
const destinationCountry = document.getElementById('destination-country').value;
// const departureDate = document.getElementById('departure-date').value;
const arrivalDate = document.getElementById('arrival-date').value;
const classType = document.getElementById('class-type').value;

// alert(Booking details:
//     Departure Country: ${departureCountry}
//     Destination Country: ${destinationCountry}
//     Departure Date: ${departureDate}
//     Arrival Date: ${arrivalDate}
//     Class Type: ${classType});

const myModal = new bootstrap.Modal('#myModal', {
    keyboard: false
  })
  document.getElementById("content").innerHTML=`Booking details:
  Departure Country: ${departureCountry}</br>
  Destination Country: ${destinationCountry}</br>
  Arrival Date: ${arrivalDate}</br>
  Class Type: ${classType}`;
  myModal.show(); 
}
);

const dateSelected = document.getElementById("arrival-date");

dateSelected.addEventListener('change', (e) => {
    const sd = new Date(e.target.value);
    const cd = new Date();
    const nd = new Date()
    nd.setMonth(nd.getMonth() + 3);
    if (sd<cd || sd > nd) {
        alert("not a proper date")
        e.target.value = null;
    }
})