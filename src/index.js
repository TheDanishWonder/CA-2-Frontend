import 'bootstrap/dist/css/bootstrap.css'
import { SSL_OP_NETSCAPE_CHALLENGE_BUG } from 'constants';

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

function makeMyTable(array) {
    function makeTable(Obj) {
        return "<tr><td>" + Obj.firstName + "</td><td>" + Obj.lastName + 
               "</td><td>" + Obj.email + "</td><td>" + Obj.phones[0].number + 
               "</td><td>" + Obj.hobbies + "</td><td>" + Obj.address.street + "</td></tr>\n"
    }
    var table = array.map(makeTable)
    table.unshift("<table><tr><th>Firstname</th><th>Lastname</th><th>Email</th><th>Phone</th><th>Hobbies</th><th>Address</tr>")
    table.push("</table>")
    return table
}

//Get a list of all persons
document.getElementById("getAllPersonsButton").onclick = function() {
    fetch("https://kodebanditterne.dk/CA-2-Backend/api/person/all")
        .then(resonse => resonse.json())
        .then(data => {
            document.getElementById("resultAllPersons").innerHTML = makeMyTable(data).join(" ")
        })
}

