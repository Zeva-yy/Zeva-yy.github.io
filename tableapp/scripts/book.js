function BookNow(guestName, guestEmail, guestPhoneNumber, guestRemarks) {
    let url = 'https://api.sheety.co/d741133a721b5c2f6f35fbbf9539a8b6/bookingApp/bookings';
    let body = {
        booking: {
            name: guestName,
            email: guestEmail,
            phoneNumber: guestPhoneNumber,
            remarks: guestRemarks,
            slot: guestSlot
        }
    }
    fetch(url, {
        method: 'POST', // how to change method
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then((response) => response.json())
        .then(json => {
            alert(json.booking.name + "added!");
        });
}

window.addEventListener("load", function () {
    document.getElementById("bookNow").addEventListener("click", function () {
        let userName = document.getElementById("userName").value;
        let userEmail = document.getElementById("userEmail").value;
        let userPhoneNumber = document.getElementById("userPhoneNumber").value;
        let userRemarks = document.getElementById("userRemarks").value;
        let userSlot = document.getElementById("userSlot").value;

        BookNow(userName, userEmail, userPhoneNumber, userRemarks, userSlot);
    });
});