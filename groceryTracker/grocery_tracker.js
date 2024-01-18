let grocery1;
let grocery2;

function calculateTotal() {
    grocery1 = parseFloat(document.getElementById('grocery1').value);
    grocery2 = parseFloat(document.getElementById('grocery2').value);
   
   let total = grocery1 + grocery2;
   document.getElementById('result').innerText = `The total amount is: ${total}`;
   }