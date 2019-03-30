/* Bond Price to Tick conversion
$1 = 32 ticks

Input - 90.0
Output - 90-0

Input - 90.03125
Output - 90-1

Input - 90.06250
Output - 90-2

Input - 90.03125 + 0.015625
Output - 90-1+

Input - 90.03125 + 0.015620
Output - 90-1

*/


/* Note : Half tick  = 1/64 = 0.015625
  So we have to make sure we do upto six decimal precision in this code.
*/


// Price to Tick format conversion
function priceToTick(price){
  // Error handling for a valid number
  if(isNaN(price)){
    console.info("Not a valid price !!");
    return;
  }
  
  price = Number(price).toFixed(6);
  let numToString = String(price);
  let prices = numToString.split('.');
  
  let tick = Number(price - prices[0]).toFixed(6) * 32;
  let roundTick = Math.round(tick);
  let floorTick = Math.floor(tick);
  
  return prices[0] + '-' + ((roundTick > tick) ? floorTick + '+' : floorTick);
}

console.info(priceToTick(90.0)); //90-0
console.info(priceToTick(90.03125)); //90-1
console.info(priceToTick(90.06250)); //90-2

// Exact half way between 1 and 2 tick
console.info(priceToTick(Number(90.031250 + 0.015625))); // 90-1+

// Less than half way between 1 and 2 tick
console.info(priceToTick(Number(90.031250 + 0.015620))); // 90-1


