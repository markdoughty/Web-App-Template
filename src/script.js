//This is the UI logic

 function greetUser() {
    const input = document.getElementById('userInput').value;

    const message = generateGreeting(input);

    document.getElementById('output').innerText = message;

  }
