// const square = function (x) {
//   return x * x;
// };

// const square = (x) => {
//   return x * x;
// };

const square = (x) => x * x;

console.log("square of number is: " + square(2));

// const event = {
//   name: "Birthday party",
//   printGuestList: function () {
//     console.log("Guest list for " + this.name);
//   },
// };

const event = {
  name: "Birthday party",
  guestList: ["avneet", "shehbaz", "anahat"],
  printGuestList() {
    console.log("Guest list for " + this.name);

    this.guestList.forEach((guest) => {
      console.log(guest + " is attending " + this.name);
    });
  },
};

event.printGuestList();
