function saveRequest() {
  let req = {
    description: document.getElementById("desc").value,
    wood: document.getElementById("wood").value,
    date: new Date().toLocaleString()
  };

  let list = JSON.parse(localStorage.getItem("requests")) || [];
  list.push(req);
  localStorage.setItem("requests", JSON.stringify(list));

  alert("Your request is saved!");
}
