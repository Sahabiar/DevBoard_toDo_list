// Funsctionality code's by sahabiar are here
// Date: 2025-03-01
const completebtns = document.querySelectorAll('.outline-none');

for (let i = 0; i < completebtns.length; i++) {
  completebtns[i].addEventListener('click', function (event) {
    this.parentNode.style.textDecoration = 'line-through';
    event.target.disabled = true;
  });
}













function cBColor() {
  // Generate a random hex color
  let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
}

// get the current date and time as a string
document.getElementById('date').innerText = cTime();
function cTime() {
  const now = new Date();
  const currentDateTime = now.toLocaleString();
  console.log(currentDateTime);
}
  function showAlert() {
    var myText = "Board Updated Successfully";
    alert (myText);
  }