let sendMessage = document.getElementById("form_send_message");
sendMessage.onsubmit = function (e) {
  e.preventDefault();
  let inputName = document.getElementById("input_name");
  let inputEmail = document.getElementById("input_email");
  let inputAddress = document.getElementById("input_address");
  let inputMessage = document.getElementById("input_message");
  fetch("http://localhost:3000", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: inputName.value,
      email: inputEmail.value,
      address: inputAddress.value,
      message: inputMessage.value,
    }),
  })
    .then((response) => {
      if (response.status == 200) {
        alert("Gửi lời chúc thành công!");
        inputAddress.value = "";
        inputName.value = "";
        inputEmail.value = "";
        inputMessage.value = "";
      } else {
        alert("Gửi lời chúc thất bại, vui lòng thử lại!");
      }
    })
    .catch((error) => {
      alert("Gửi lời chúc thất bại, vui lòng thử lại!");
    });
};
fetch("http://localhost:3000/count", {
  method: "GET",
}).then((response) => {
  console.log(response);
});
