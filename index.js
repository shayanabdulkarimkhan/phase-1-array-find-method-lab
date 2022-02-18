// code your solution here

const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]
let winYear;
let jost;
function winTest(element,index,array) {
    return element["result"] === "W"
}
function superbowlWin(array) {
    //console.log(element)
    
    
    let plcHolder = array;   
        
    // } else{
    //    undefined);
    // }

   //console.log(record)
    jost = plcHolder.find(winTest);
    
    if (jost === undefined) {
        return undefined;
    } else {
        return jost["year"];
    }   
       
}






    
