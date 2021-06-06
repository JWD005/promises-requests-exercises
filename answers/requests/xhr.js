// Selecting page elements
const getBtn = document.getElementById("get-btn");
const postBtn = document.getElementById("post-btn");

// AJAX funtion
const getData = () => {
  const xhr = new XMLHttpRequest();
  const url = "https://reqres.in/api/users?page=2";

  xhr.responseType = "json";
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      console.log(xhr.response);
      return xhr.response;
    }
  };

  xhr.open("GET", url);
  xhr.send();
};

const sendData = () => {
  const xhr = new XMLHttpRequest();
  const url = "https://reqres.in/api/users";
  const data = JSON.stringify({ name: "morpheus", job: "leader" });

  xhr.responseType = "json";
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      console.log(xhr.response);
      return xhr.response;
    }
  };

  xhr.open("POST", url);
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.send(data);
};

getBtn.addEventListener("click", getData);
postBtn.addEventListener("click", sendData);
