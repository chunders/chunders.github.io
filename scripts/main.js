let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    let imPath1 = 'images/firefox2.png';
    let imPath2 = 'images/firefox_invert.png';
    if(mySrc === imPath1) {
      myImage.setAttribute('src', imPath2);
    } else {
      myImage.setAttribute('src',imPath1);
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
}

if(!localStorage.getItem('name')) { // Is there a name to get?
    // If no name, set one.
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
    // On a click of the button run the following.
    setUserName();
  }
