// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

const parentContainer = document.querySelector('.header-container');

function Header() {
    //This function will create elements, establish a hierarchy by appending them appropriately, and establish content within them..
    
    //creating the elements;
    const header = document.createElement('div');
    const date = document.createElement('span');
    const title = document.createElement('h1');
    const temperature = document.createElement('span');

    //Hierarchy; parent.appendChild('thing to append')
   
    header.appendChild(title);
    header.appendChild(temperature);
    header.appendChild(date);
    //Creating content for the elements
    date.textContent='MARCH 28,2020';
    title.textContent='Lambda Times';
    temperature.textContent='98 deg.';

    //return the header...
    return header;
}
const lambdaTimesHeader = Header();
// console.log(lambdaTimesHeader);
parentContainer.appendChild(lambdaTimesHeader);
