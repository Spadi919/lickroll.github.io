<!DOCTYPE html>
<html>
<head>
    <title>Przykładowa Strona z JavaScript</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
        }
        button {
            padding: 10px 20px;
            font-size: 16px;
            background-color: #007bff;
            color: white;
            border: none;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <h1>Witaj na Przykładowej Stronie z JavaScript</h1>
    
    <button id="myButton">Kliknij mnie</button>
    
    <p id="message"></p>
    
    <script>
        // Pobieramy referencje do przycisku i elementu p
        const button = document.getElementById('myButton');
        const messageElement = document.getElementById('message');
        
        // Dodajemy obsługę zdarzenia kliknięcia przycisku
        button.addEventListener('click', function() {
            messageElement.textContent = 'Kliknięto przycisk!';
        });
    </script>
</body>
</html>