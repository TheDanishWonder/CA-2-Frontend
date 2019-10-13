import 'bootstrap/dist/css/bootstrap.css'

document.getElementById("searchButton").onclick = function() {
    var personId = document.getElementById("searchInput").value;
    fetch("http://kodebanditterne/CA-2-Backend/api/person/" + personId)
        .then(response => response.json())
        .then(data => {
                document.getElementById("searchResult").innerHTML = data.name
        }) 
   
}