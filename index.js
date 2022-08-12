const postUserData = (userName, userEmail) => {
    return {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
            "Accept" : "application/json"
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail
        }),
    }
};

function submitData (userName, userEmail) {
    return fetch("http://localhost:3000/users", postUserData(userName, userEmail))
    .then(function (response) {
        return response.json();
    })
    .then(function (userObject) {
        document.querySelector('body').append(userObject.id);
    })
    .catch(function (error) {
        document.querySelector('body').append(error.message);
    });
}

submitData("test", "test2");