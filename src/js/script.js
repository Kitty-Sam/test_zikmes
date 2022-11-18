const sendPhone = (phone) => {
    fetch("http://www.foo.com", {
        mode: 'no-cors',
        method: "post",
        body: phone,
    }).then((response) => {
        return response.json().then(() => alert("Success!")).catch(() => alert("Something goes wrong :(") );
    })
};


const form = document.getElementById("contact-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let phone = new FormData(form);
    sendPhone(phone);
})



