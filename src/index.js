import 'bootstrap/dist/css/bootstrap.css'

//When pressing search, fetch person from api and make table
document.getElementById("searchButton").onclick = function() {
    var personId = document.getElementById("searchInput").value;
    fetch("http://localhost:8080/jpareststarter/api/person/" + personId)
        .then(response => response.json())
        .then(data => {
                document.getElementById("searchResult").innerHTML = makeTableforPerson(data)
        }) 
   
}

//Make table for found person
function makeTableforPerson(data) {
    var table = ("<table><tr><th>Firstname</th><th>Lastname</th><th>Email</th></tr>")
    table += "<tr><td>" + data.firstName + "</td><td>" + data.lastName + "</td><td>" +
    data.email + "</td></tr>"
    table += ("</table>")
    return table
}
