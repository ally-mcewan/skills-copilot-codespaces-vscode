function skillsMember() {
    var member = {
        name: "John Doe",
        age: 34,
        skills: ["JavaScript", "HTML", "CSS"],
        address: {
            street: "40 Main St.",
            city: "Boston",
            state: "MA"
        },
        getBirthYear: function() {
            return 2017 - this.age;
        }
    }
    var output = "";
    for (var i = 0; i < member.skills.length; i++) {
        output += "<li>" + member.skills[i] + "</li>";
    }
    document.getElementById("skills").innerHTML = output;
    document.getElementById("member").innerHTML = member.name + " is " + member.age + " years old.";
    document.getElementById("address").innerHTML = member.name + " lives at " + member.address.street + ", " + member.address.city + ", " + member.address.state;
    document.getElementById("birthYear").innerHTML = member.name + " was born in " + member.getBirthYear();
}