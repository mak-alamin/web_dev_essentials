<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP JS Ajax</title>
</head>

<body>
    <h3>Search Name</h3>
    <form action="" method="get">
        <input type="text" name="search" id="search" onkeyup="showName(this.value)" onkeydown="clearSuggestion()" autocomplete="off">
        <p>Suggetions: <strong id="suggetions"></strong></p>
    </form>

    <br><br>

    <h3>Add Name</h3>
    <form action="" method="post">
        <p id="msg"></p>
        <label for="Your Name">Your Name</label>
        <input type="text" name="your_name" id="your_name">
        <br><br>

        <input type="submit" value="Save" id="save" name="save">
    </form>

    <script src="ajax.js"></script>
</body>

</html>