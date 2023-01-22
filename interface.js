// User // 
const ENDPOINT = "https://localhost:7015/User/GetAllUsers";
const ENDPOINT1 = "https://localhost:7015/User/DeleteUser";
const ENDPOINT2 = "https://localhost:7015/User/AddNewUser";
const ENDPOINT3 = "https://localhost:7015/User/UpdateUser";

//Person //



// Place //



function drawTableUsers(users) {
  let table = "";
  users.forEach((user) => {
    table +=
      "<tr><td>" +
      user.id +
      "</td><td>" +
      user.name +
      "</td><td>" +
      user.password +
      "</td><td>" +
      user.role +
      "</td><td>" +
      "<button onclick='DeleteData(" +
      user.id +
      ")'>DELETE</button>" +
      "</td><td>" +
      "<button onclick='UpdateData(" +
      user.id +
      ")'>PUT</button>" +
      "</td></tr>";
  });
  table += "</table>";
  document.getElementById("data_table").innerHTML += table;
}

function DeleteDataUser(id) {
  fetch(ENDPOINT1 + "/id?id=" + id, {
    method: "DELETE",
  }).then(() => {
    GetData();
  });
}

function GetDataUser() {
  let table =
    "<tr><td>ID</td><td>Name</td><td>Password</td><td>Role</td><td></td></tr>";
  document.getElementById("data_table").innerHTML = table;
  fetch(ENDPOINT)
    .then((Response) => Response.json())
    .then((users) => {
      drawTableUsers(users);
    });
}

function AddDataUser() {
  let name = document.getElementById("name").value;
  let password = document.getElementById("pasword").value;
  let role = document.getElementById("role").value;
  fetch(ENDPOINT2, {
    method: "POST",
    body: JSON.stringify({
      id: id,
      name: name,
      password: password,
      role: role,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(GetDataUser());
}

async function UpdateDataUser(id) {
  let name = document.getElementById("name").value;
  let password = document.getElementById("pasword").value;
  let role = document.getElementById("role").value;
  fetch(ENDPOINT3, {
    method: "PUT",
    body: JSON.stringify({
      id: id,
      name: name,
      password: password,
      role: role,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(GetDataUser());
}


async function UpdateDataUserName(id) {
  let name = document.getElementById("name").value;
  fetch(ENDPOINT3, {
    method: "PUT",
    body: JSON.stringify({
      id: id,
      name: name,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(GetDataUser());
}


async function UpdateDataUserPassword(id) {
  let password = document.getElementById("password").value;
  fetch(ENDPOINT3, {
    method: "PUT",
    body: JSON.stringify({
      id: id,
      password: password,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(GetDataUser());
}


async function UpdateDataUserRole(id) {
  let role = document.getElementById("role").value;
  fetch(ENDPOINT3, {
    method: "PUT",
    body: JSON.stringify({
      id: id,
      role: role,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(GetDataUser());
}



async function UpdateDataUserId(id) {
  let id = document.getElementById("id").value;
  fetch(ENDPOINT3, {
    method: "PUT",
    body: JSON.stringify({
      id: id,
    
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(GetDataUser());
}

//Person //

const ENDPOINT10 = "https://localhost:7015/Person/DeletePerson";
const ENDPOINT11 = "https://localhost:7015/Person/AddNewPerson";
const ENDPOINT12 = "https://localhost:7015/Person/GetPersonById";
const ENDPOINT13 = "https://localhost:7015/Person/UpdatePerson";
const ENDPOINT14 = "https://localhost:7015/Person/UpdatePersonUserid";
const ENDPOINT15 = "https://localhost:7015/Person/UpdatePersonName";
const ENDPOINT16 = "https://localhost:7015/Person/UpdatePersonSurname";
const ENDPOINT17 = "https://localhost:7015/Person/UpdatePersonIdCode";
const ENDPOINT18 =  "https://localhost:7015/Person/UpdatePersonPhoneNumber";
const ENDPOINT19 =  "https://localhost:7015/Person/UpdatePersonEmail";
const ENDPOINT20 = "https://localhost:7015/Person/UpdatePersonPicture";

function drawTablePerson(persons) {
  let table = "";
  persons.forEach((person) => {
    table +=
      "<tr><td>" +
      person.userid +
      "</td><td>" +
      person.name +
      "</td><td>" +
      person.surname +
      "</td><td>" +
      person.personIdCoce +
      "</td><td>" +
      person.phoneNr +
      "</td><td>" +
      person.email +
      "</td><td>" +
      person.picture +
      "</td><td>" +
      "<button onclick='DeleteData(" +
      user.id +
      ")'>DELETE</button>" +
      "</td><td>" +
      "<button onclick='UpdateData(" +
      user.id +
      ")'>PUT</button>" +
      "</td></tr>";
  });
  table += "</table>";
  document.getElementById("data_table").innerHTML += table;
}

function DeleteDataPerson(id) {
  fetch(ENDPOINT10 + "/id?id=" + id, {
    method: "DELETE",
  }).then(() => {
    GetDataPerson();
  });
}

function GetDataPerson() {
  let table =
    "<tr><td>ID</td><td>Name</td><td>Password</td><td>Role</td><td></td></tr>";
  document.getElementById("data_table").innerHTML = table;
  fetch(ENDPOINT12)
    .then((Response) => Response.json())
    .then((persons) => {
      drawTablePerson(persons);
    });
}

function AddDataPerson() {
  let userId = document.getElementById("userId").value;
  let personName = document.getElementById("personName").value;
  let personSurname = document.getElementById("personSurname").value;
  let personIdCode = document.getElementById("personIdCode").value;
  let personPhoneNumber = document.getElementById("personPhoneNumber").value;
  let personEmail = document.getElementById("personEmail").value;
  let personPicture = document.getElementById("personPicture").value;
  fetch(ENDPOINT11, {
    method: "POST",
    body: JSON.stringify({
            userId : userId ,
            personName: personName,
            personSurname : personSurname ,
            personIdCode : personIdCode ,
            personPhoneNumber : personPhoneNumber ,
            personEmail: personEmail ,
            personPicture: personPicture ,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(GetDataPerson());
}

async function UpdateDataPerson(id) {
  let userId = document.getElementById("userId").value;
  let personName = document.getElementById("personName").value;
  let personSurname = document.getElementById("personSurname").value;
  let personIdCode = document.getElementById("personIdCode").value;
  let personPhoneNumber = document.getElementById("personPhoneNumber").value;
  let personEmail = document.getElementById("personEmail").value;
  let personPicture = document.getElementById("personPicture").value;
  fetch(ENDPOINT13, {
    method: "PUT",
    body: JSON.stringify({
            id : id,
            userId : userId ,
            personName: personName,
            personSurname : personSurname ,
            personIdCode : personIdCode ,
            personPhoneNumber : personPhoneNumber ,
            personEmail: personEmail ,
            personPicture: personPicture ,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(GetDataPerson());
}




async function UpdateDataPersonUserId(id) {
  let userId = document.getElementById("userId").value;
  fetch(ENDPOINT14, {
    method: "PUT",
    body: JSON.stringify({
            id : id,
            userId : userId ,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(GetDataPerson());
}


async function UpdateDataPersonName(id) {
  let personName = document.getElementById("personName").value;
  fetch(ENDPOINT15, {
    method: "PUT",
    body: JSON.stringify({
            id : id,
            personName: personName,

    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(GetDataPerson());
}


async function UpdateDataPersonSurname(id) {
  let personSurname = document.getElementById("personSurname").value;
  fetch(ENDPOINT16, {
    method: "PUT",
    body: JSON.stringify({
            id : id,
            personSurname : personSurname ,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(GetDataPerson());
}




async function UpdateDataPersonIdCode(id) {
  let personIdCode = document.getElementById("personIdCode").value;
  fetch(ENDPOINT17, {
    method: "PUT",
    body: JSON.stringify({
            id : id,
            personIdCode : personIdCode ,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(GetDataPerson());
}



async function UpdateDataPersonPhoneNumber(id) {
  let personPhoneNumber = document.getElementById("personPhoneNumber").value;
  fetch(ENDPOINT18, {
    method: "PUT",
    body: JSON.stringify({
            id : id,
            personPhoneNumber : personPhoneNumber ,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(GetDataPerson());
}


async function UpdateDataPersonEmail(id) {
  let personEmail = document.getElementById("personEmail").value;
  fetch(ENDPOINT19, {
    method: "PUT",
    body: JSON.stringify({
            id : id,
            personEmail: personEmail ,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(GetDataPerson());
}



async function UpdateDataPersonPicture(id) {
  let personPicture = document.getElementById("personPicture").value;
  fetch(ENDPOINT20, {
    method: "PUT",
    body: JSON.stringify({
            id : id,
            personPicture: personPicture ,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(GetDataPerson());
}

// Place //



const ENDPOINT21 = "https://localhost:7015/Place/GetAllPlaces";
const ENDPOINT22 = "https://localhost:7015/Place/GetPlaceById";
const ENDPOINT23 = "https://localhost:7015/Place/AddNewPlace";
const ENDPOINT24  = "https://localhost:7015/Place/UpdatePlace";
const ENDPOINT25 = "https://localhost:7015/Place/DeletePlace";  
const ENDPOINT26 = "https://localhost:7015/Place/UpdatePlaceCity"; 
const ENDPOINT27 = "https://localhost:7015/Place/UpdatePlaceStreet"; 
const ENDPOINT28 = "https://localhost:7015/Place/UpdatePlaceHomeNr"; 
const ENDPOINT39 = "https://localhost:7015/Place/UpdatePlaceFlatNr"; 



function drawTablePlace(places) {
  let table = "";
  places.forEach((place) => {
    table +=
      "<tr><td>" +
      place.personId +
      "</td><td>" +
      place.city +
      "</td><td>" +
      place.street +
      "</td><td>" +
      place.homeNr +
      "</td><td>" +
      "<button onclick='DeleteData(" +
      user.id +
      ")'>DELETE</button>" +
      "</td><td>" +
      "<button onclick='UpdateData(" +
      user.id +
      ")'>PUT</button>" +
      "</td></tr>";
  });
  table += "</table>";
  document.getElementById("data_table").innerHTML += table;
}

function DeleteDataPlace(id) {
  fetch(ENDPOINT25 + "/id?id=" + id, {
    method: "DELETE",
  }).then(() => {
    GetDataPlace();
  });
}

function GetDataPlace() {
  let table =
    "<tr><td>ID</td><td>Name</td><td>Password</td><td>Role</td><td></td></tr>";
  document.getElementById("data_table").innerHTML = table;
  fetch(ENDPOINT21)
    .then((Response) => Response.json())
    .then((places) => {
      drawTablePlace(places);
    });
}

function AddDataPlace() {
  const personId = document.getElementById("personId").value;
  const city = document.getElementById("city").value;
  const street = document.getElementById("street").value;
  const homeNr = document.getElementById("homeNr").value;
  const flatNr = document.getElementById("flatNr").value;
  fetch(ENDPOINT23, {
    method: "POST",
    body: JSON.stringify({
      personId : personId ,
      city: city,
      street : street ,
      homeNr : homeNr ,
      flatNr : flatNr ,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(GetDataPlace());
}

async function UpdateDataPlace(id) {
  const personId = document.getElementById("personId").value;
  const city = document.getElementById("city").value;
  const street = document.getElementById("street").value;
  const homeNr = document.getElementById("homeNr").value;
  const flatNr = document.getElementById("flatNr").value;
  fetch(ENDPOINT24, {
    method: "PUT",
    body: JSON.stringify({
            id : id,
            personId : personId ,
            city: city,
            street : street ,
            homeNr : homeNr ,
            flatNr : flatNr ,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(GetDataPlace());
}




async function UpdateDataPlaceCity(id) {
  const city = document.getElementById("city").value;
  fetch(ENDPOINT26, {
    method: "PUT",
    body: JSON.stringify({
            id : id,
            city: city,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(GetDataPerson());
}


async function UpdateDataPlaceStreet(id) {
  const street = document.getElementById("street").value;
  fetch(ENDPOINT27, {
    method: "PUT",
    body: JSON.stringify({
            id : id,
            street : street ,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(GetDataPlace());
}

async function UpdateDataPlaceHomeNr(id) {
  const homeNr = document.getElementById("homeNr").value;
  fetch(ENDPOINT28, {
    method: "PUT",
    body: JSON.stringify({
            id : id,
            homeNr : homeNr ,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(GetDataPlace());
}

async function UpdateDataFlatNr(id) {

  const flatNr = document.getElementById("flatNr").value;
  fetch(ENDPOINT29, {
    method: "PUT",
    body: JSON.stringify({
            id : id,
            flatNr : flatNr ,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(GetDataPlace());
}