import 'bootstrap/dist/css/bootstrap.css'

//When pressing search, fetch person from api and make table
document.getElementById("searchButton").onclick = function() {
    var personId = document.getElementById("searchInput").value;
    fetch("https://kodebanditterne.dk/CA-2-Backend/api/person/" + personId)
        .then(response => response.json())
        .then(data => {
                document.getElementById("searchResult").innerHTML = makeTableforPerson(data)
        }) 
   
}

//Make table for found person
function makeTableforPerson(data) {
    var table = ("<table><tr><th>Firstname</th><th>Lastname</th><th>Email</th><th>Phone</th></tr>")
    table += "<tr><td>" + data.firstName + "</td><td>" + data.lastName + "</td><td>" +
    data.email + "</td><td>" + data.phones[0].number + "</td></tr>"
    table += ("</table>")
    return table
}
