function toLog(){
    
    console.log("Test")
}

setTimeout(function(){
    console.log('I happened')
},2000);

setTimeout(toLog, 5000);

setTimeout(() => {
    console.log("Test 22");
}, 4000)


function fetchData(){

    const API_ENDPOINT = "https://pomber.github.io/covid19/timeseries.json";

    fetch(API_ENDPOINT)
    .then((response) => response.json())
    .then((data) => processData(data))
    .catch((err) => handleError(err));
}

function processData(data){
    // console.table(data);
    extractData(data);
}

function handleError(err){
    console.log("An error occurred");
}


function extractData(data){
    let dataMauritius = data["Mauritius"];
    // let latestMauritius = dataMauritius.slice(-1);
    let latestMauritius = dataMauritius[dataMauritius.length-1];
    // let latestMauritius = dataMauritius.pop();


   
    
    console.log(latestMauritius);

    setTimeout(() => {
        let date= document.getElementById("date");
        date.innerHTML = latestMauritius['date'];


        let confirmed= document.getElementById("confirmed");
        confirmed.innerHTML = latestMauritius['confirmed'];

        let deaths= document.getElementById("deaths");
        deaths.innerHTML = latestMauritius['deaths'];
        
        let recovered= document.getElementById("recovered");
        recovered.innerHTML = latestMauritius['recovered'];
    }, 3000)
}


fetchData();


