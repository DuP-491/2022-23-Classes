async function load(url) {
  try {
    const data = await ajax_loader(url);
    document.getElementById("disp").innerHTML = data;
  } catch (error) {
    alert("error with error code : " + errCode);
  }
}

function ajax_loader(url) {
  // Creating Our XMLHttpRequest object
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();

    // Making our connection
    xhr.open("GET", url, true);

    // function execute after request is successful
    xhr.onload = function () {
      resolve(this.responseText);
    };
    xhr.onerror = function () {
      reject(this.status);
    };
    // Sending our request
    xhr.send();
  });
}

function clearScreen() {
  document.getElementById("disp").innerText = "";
}
