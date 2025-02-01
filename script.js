console.log("Script loaded!");

function sumOfTripledEvens1(array){
    let sum = 0;
   for(let i = 0; i < array.length; i++){
    if(array.at(i) % 2 == 0){
      sum += array.at(i)*3;
    }
   }
  
   return sum;
  }
  
  function sumOfTripledEvensMap(array){

    if(!Array.isArray(array)){
      console.error("Error: Input is not an array");
      return 0;
    }

    return array
      .filter(num => num % 2 == 0) //keep only even
      .map(num => num * 3) //triple theme
      .reduce((sum, num) => sum + num, 0) //sum up, sum is the 
      //accumulator and 2,4,6 are the things getting tripled and sum
  }
  
  const arr = [1,2,3,4,5];
  const arr2 = [2,3,4,5,6];
  
  function submitText(){
    console.log("submitText function triggered")
    const input = document.querySelector("#textInput").value;
    const output = document.querySelector(".output");

    //convert string input into array of numbers
    
const numbersArray = input.split(",")
  .map(num => {
    let parsed = parseInt(num.trim(), 10);
    if (isNaN(parsed)){
      return null;
    }
      return parsed;
  })

  .filter(num => num !== null)

      // Ensure input is valid
      if (numbersArray.length === 0) {  
        output.textContent = "Invalid input. Enter numbers separated by commas.";
        return;
    }

    output.textContent = `Sum of the tripled evens: ${sumOfTripledEvensMap(numbersArray)}`;
  }
