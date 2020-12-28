< !DOCTYPE html >
    <html lang="en">

        <head>
            <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Bookings List - Table Booking App</title>
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
                        integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
</head>

                    <body>
                        <div class="container-fluid">
                            <!-- NavBar -->
        <div class="row">
                                <div class="col">
                                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                                        <a class="navbar-brand" href="index.html">Table Booking App</a>
                                        <button class="navbar-toggler" type="button" data-toggle="collapse"
                                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                            aria-expanded="false" aria-label="Toggle navigation">
                                            <span class="navbar-toggler-icon"></span>
                                        </button>

                                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                            <ul class="navbar-nav mr-auto">
                                                <li class="nav-item">
                                                    <a class="nav-link" href="index.html">Home</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="book.html">Book Table</a>
                                                </li>
                                                <li class="nav-item active">
                                                    <a class="nav-link" href="list.html">View Bookings</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                            </div>

                            <!-- Jumbotron -->
        <div class="row">
                                <div class="col">
                                    <div class="jumbotron">
                                        <h1 class="display-4">Here it is our booking list!</h1>
                                        <p class="lead">Call them to confirm the booking</p>
                                    </div>
                                </div>
                            </div>

                            <!-- Booking List -->
        <button id="refreshList">Refresh</button>
                            <div class="row">
                                <div class="col">
                                    <table class="table" id="booking-list">
                                        <thead class="thead-light">
                                            <tr>
                                                <th scope="col">Id</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Email</th>
                                                <th scope="col">Pax</th>
                                                <th scope="col">Remarks</th>
                                                <th scope="col">Task</th>
                                                <!--where we can delete element-->>
                        </tr>
                                        </thead>
                                        <tbody>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
                            integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
                            crossorigin="anonymous"></script>
                        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
                            integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx"
                            crossorigin="anonymous"></script>
                        <script src="scripts/list.js"></script>
                    </body>

</html>