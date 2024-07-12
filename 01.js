const buttons = document.querySelectorAll(".button");
//console.log(buttons)
const body = document.querySelector("body");

buttons.forEach(function (button) {
  console.log(button);
  //ab haar button pr event listener lgaenge

  button.addEventListener("click", function (e) {
    console.log(e); //mouse event aaya on click
    console.log(e.target); //kis target se ye event aaya

    if (e.target.id === "grey") {
      body.style.backgroundColor = e.target.id; //yaha prr e.target.id ki place prr hardcoded value bhi de skte hai jese 'colorName' issme id m colorka naam hai isliye esa likhe diya
    }

    if (e.target.id === "white") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    }

    if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
    }

    if (e.target.id === "pink") {
      body.style.backgroundColor = e.target.id;
    }       
  });
});
