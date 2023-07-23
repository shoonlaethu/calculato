let userInput = '';

function number(no) {
  userInput += no;
  document.getElementById('output').value = userInput;
}

function clearr() {
  userInput = '';
  document.getElementById('output').value = '';
}

function deleteOne() {
  userInput = userInput.slice(0, -1);
  document.getElementById('output').value = userInput;
}

function sign(operator) {
  userInput += operator;
  document.getElementById('output').value = userInput;
}

function calculate() {
  try {
    const result = eval(userInput);
    document.getElementById('output').value = result;
    userInput = String(result);
  } catch (error) {
    document.getElementById('output').value = 'Wrong ';
  }
}

  
  function randomBgColor() {
    const hiddenColor = ["#00FF00", "#FF00FF"]; // Green and pink RGB values
    let color;
    do {
      color = `#${Math.floor(Math.random() * 16777).toString(10).padStart(2, '0')}`;
    } while (hiddenColor.includes(color));

    return color;
  }

  function bg() {
    document.body.style.backgroundColor = randomBgColor();
  }

  // Call the function initially to set a random background color
  bg();
