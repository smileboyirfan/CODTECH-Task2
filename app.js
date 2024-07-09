const inp_box = document.getElementById("inp-box");
const listcontainer = document.getElementById("list-box");
function addTask() {
  if (inp_box.value === "") {
    alert("Write your task");
  } else {
    let list = document.createElement("li");
    list.innerHTML = inp_box.value;
    listcontainer.appendChild(list);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    list.appendChild(span);
  }
  inp_box.value = "";
  SaveData();
}
listcontainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      SaveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      SaveData();
    }
  },
  false
);
function SaveData() {
  localStorage.setItem("data", listcontainer.innerHTML);
}
function ShowData() {
  listcontainer.innerHTML = localStorage.getItem("data");
}
ShowData();