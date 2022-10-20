const studentObject = {
    Name: "Abhishek",
    Roll: 06,
    CGPA: 9.62,
    Address: {
        city: "Prayagraj",
        state: "Uttar Pradesh",
        country: "India",
    },
    "Favourite Hobby": "Sports",
}

console.log(studentObject.Name, studentObject.CGPA, studentObject.Address.city, studentObject.Address.state);
console.log(studentObject["Favourite Hobby"]);