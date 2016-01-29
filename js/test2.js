var person = prompt("Please enter your name", "Harry Potter");
if (person != null) {
    document.getElementById("result").innerHTML = 
    "Hello " + person + "! How are you today?";
}