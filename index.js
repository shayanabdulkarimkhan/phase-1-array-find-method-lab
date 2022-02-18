// code your solution here

// const record = [
//     { year: "2015", result: "W"},
//     { year: "2014", result: "N/A"},
//     { year: "2013", result: "L"},
//     //...
//   ]
//let winYear;

function winTest(element) {
    return element["result"] === "W"
}
function superbowlWin(array) {
    //console.log(element)
    
    // let jost;
    // let plcHolder = array;   
        
    // } else{
    //    undefined);
    // }

   //console.log(record)
    let jost = array.find(winTest);
    
    return jost && jost["year"]

    return !!jost ? jost["year"] : jost


    if (jost === undefined) {
        return undefined;
    } else {
        return jost["year"];
    }   
       
}






    
