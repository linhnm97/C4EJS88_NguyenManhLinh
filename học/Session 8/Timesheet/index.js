let add = document.getElementById("add");
let project1 = document.getElementById("project");
let task1 = document.getElementById("task");
let timespent1 = document.getElementById("timespent");
let tableSection = document.getElementById("table");
let updateIndex = '';
add.addEventListener ("click", () => {
    var x = {};
    x.Project = project1.value;
    x.Task = task1.value;
    x.Time = timespent1.value;
    timeSheetData.push (x);
    console.log (timeSheetData);
    let td1 = `<tr class = "child">
    <td>${project1.value}</td>
    <td>${task1.value}</td>
    <td>${timespent1.value}</td>
    <td class="btn btn-danger delete"><button>X</button></td>
    <td class="btn btn-success update"><button>U</button></td>
    </tr> `
    tableSection.innerHTML += td1;
})

project1.value ="";
task1.value= "";
timespent1.value="";
render();
function render () {
    tableSection.innerHTML = "";
for ( let item of timeSheetData) {
    let td2 = `<tr class = "child">
    <td>${item.Project}</td>
    <td>${item.Task}</td>
    <td>${item.Time}</td>
    <td class="btn btn-danger delete"><button>X</button></td>
    <td class="btn btn-success update"><button>U</button></td>
    </tr>`;
    tableSection.innerHTML += td2
}
}
render();

clear.onclick = () => {
    project1.value ="";
    task1.value= "";
    timespent1.value="";
}

// childSection.onclick = function(e) {
//     if (e.target.classList.contains('delete')) {
//         const removeIndex = Number(e.target.parentElement.parentElement.id);
//         timeSheetData.splice(removeIndex, 1);
//         render(timeSheetData);
//     }
//     if(e.target.classList.contains("update")){
//         updateIndex = Number(e.target.parentElement.parentElement.id);
//         project.value = timeSheetData[updateIndex].project;
//         task.value = timeSheetData[updateIndex].task;
//         timeSpent.value = timeSheetData[updateIndex].timeSpent;
//         udpateBtn.classList.remove("hidden");
//         addBtn.classList.add("hidden");
//     }
// }
childSection.onclick = () => {
    alert ("Hello world");
}