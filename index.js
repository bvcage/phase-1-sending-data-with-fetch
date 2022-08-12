const postUserData = (userName, userEmail) => {
    return {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
            "Accept" : "application/json"
        },
        body: JSON.stringify({
            "name": userName,
            "email": userEmail
        }),
    }
};

function submitData (userName, userEmail) {
    fetch("http://localhost:3000/users", postUserData(userName, userEmail))
    .then(function (response) {
        return response.json();
    })
    .then(function (object) {
        console.log(object);
    });
}

submitData("test", "test2");





// const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle",
//   };
  
//   const configurationObject = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json",
//     },
//     body: JSON.stringify(formData),
//   };
  
//   fetch("http://localhost:3000/dogs", configurationObject)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (object) {
//     console.log(object);
//   });