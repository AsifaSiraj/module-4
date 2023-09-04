
    var names = ["John", "Jane", "Oizawa"];

for (var i = 0; i < names.length; i++) {
  if (names[i].charAt(0).toLowerCase() === 'j' || names[i].charAt(0).toUpperCase() === 'J' ) {
    console.log("Goodbye " + names[i]);
  } 
  else {
    console.log("Hello " + names[i]);
  }
}