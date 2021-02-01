function Verify() {
    let enterName = document.getElementById("name").value;
    const refnames = ["Ester", "Ernesto", "Rafael", "Gabriel"];
    if (refnames.includes(enterName)) {
        document.getElementById("permission").innerHTML = "You can enter";
    } else {
        document.getElementById("permission").innerHTML = "You cannot enter";
    }
}
