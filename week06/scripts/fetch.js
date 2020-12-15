function GetBookings() {
    let url = 'https://api.sheety.co/d741133a721b5c2f6f35fbbf9539a8b6/bookingApp/bookings';
    fetch(url)
        .then((response) => response.json())
        .then(json => {
            // Do something with the data
            console.log(json.bookings);
        });
}