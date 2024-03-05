var idcreate = 1;
let id_being_edited = "";
function data() {
  let btn_status = document.getElementById("submit").innerHTML;
  if (btn_status == "submit") {
    let inputValue = document.getElementById("additem").value;
    let showTask = document.getElementById("tasklist");
    //create elements
    let newTasksElement = document.createElement("p");
    let newElement = document.createElement("p");
    let element = document.createElement("span");
    let close = document.createElement("button");
    let edit = document.createElement("button");
    // create class in element
    newTasksElement.classList.add("paragraph1");
    newElement.classList.add("paragraph2");
    element.classList.add("span1");
    close.classList.add("closebtn");
    edit.classList.add("editbtn");

    // value put in inner html
    newElement.innerHTML = inputValue;
    edit.innerHTML = "EDIT";
    close.innerHTML = "Delete";
    //set attributes
    newTasksElement.setAttribute("id", idcreate);
    var Delete = "a" + idcreate;
    close.setAttribute("id", Delete);
    var editid = "A" + idcreate;
    edit.setAttribute("id", editid);
    var elementid = "B" + idcreate;
    newElement.setAttribute("id", elementid);

    idcreate++;

    //appendchild element
    showTask.appendChild(newTasksElement);
    newTasksElement.appendChild(newElement);
    newTasksElement.appendChild(element);
    element.appendChild(edit);
    element.appendChild(close);
    // close and edit ...
    close.addEventListener("click", function () {
      Removetask(newTasksElement.id);
    });

    edit.addEventListener("click", function () {
      console.log("newElement ===> 1", newElement, newElement.id);
      document.getElementById("additem").value = newElement.innerHTML;
      document.getElementById("submit").innerHTML = "EDIT"; // submitbtn chng ==> edit
      id_being_edited = newElement.id;
      console.log(id_being_edited);
    });

    document.getElementById("additem").value = "";
  } else {
    EditElement();
  }
}
function Removetask(taskId) {
  if (confirm("are you sure")) {
    document.getElementById(taskId).remove();
  }
}

function EditElement() {
  let input_element = document.getElementById("additem");
  let edited_value = input_element.value;
  input_element.value = "";
  document.getElementById("submit").innerHTML = "submit";

  if (id_being_edited !== "") {
    let editedElement = document.getElementById(id_being_edited);
    editedElement.innerHTML = edited_value;
    console.log("Edited Value: " + edited_value);
  }
  id_being_edited = ""; // Reset id_being_edited
}
