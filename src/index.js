import 'bootstrap/dist/css/bootstrap.css'

document.getElementById("searchButton").onclick = function() {
    var input = document.getElementById("searchInput").value;
    fetch("http://localhost:8080/jpareststarter/api/person/" + input)
        .then(response => response.json())
        .then(data => {
                document.getElementById("searchResult").innerHTML = data.firstName
        }) 
}

