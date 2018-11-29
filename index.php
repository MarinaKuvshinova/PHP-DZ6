<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>16.11</title>
    <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
</head>
<body>

<div class="container">
    <div class="form-group form-inline">
        <label for="countryText">Country Name</label>
        <input type="text" class="form-control"  id="countryText" placeholder="Enter country">
<!--        onfocusout="Process()"-->
        <button type="submit" name="countryButton"  onclick="Process()" class="btn btn-primary">Submit</button>
        <div class="form-group form-inline" id="result"></div>
    </div>
</div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<script src="//netdna.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
<script src="script.js"></script>
</body>
</html>