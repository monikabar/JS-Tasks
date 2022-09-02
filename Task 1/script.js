/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
const btn = document.getElementById('submit-btn');
const output = document.getElementById('output');

let form = document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault();

   let input =  document.getElementById("search").value;
   let lb = input * 2.2046;
   let g = input / 0.001;
   let oz = input * 35.274;

   function convertWeight(){
      let output = document.getElementById('output')

      output.style.textAlign = 'center';
      output.style.fontSize = '40px';
      output.style.fontWeight = '700';
      
      output.innerHTML=`
      Įvesti kg atitinka: <br>
      ${lb} lb <br>
      ${g} g <br>
      ${oz} oz`
   
   }
   convertWeight();
})