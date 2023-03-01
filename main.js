// console.log("Testing 1, 2, working")


//  HTML Constants
const testButton = document.getElementById('test');
const myGameboard = document.getElementById('myGameboard')
const myClickables = myGameboard.querySelectorAll('div')

//functions
testButton.onclick = () => console.log(myClickables); // working

    