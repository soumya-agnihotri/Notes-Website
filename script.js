const containerelement = document.getElementsByClassName("notes")[0];
const btn =  document.getElementsByClassName("btn")[0];
const save=  document.getElementsByClassName("save")[0];
function showNotes(){
    containerelement.innerHTML = localStorage.getItem("notes");
}
showNotes();
function updateStorage(){
localStorage.setItem("notes",containerelement.innerHTML);
}


function addNotes(){
    let newElement = document.createElement("div");
    newElement.setAttribute("class","inp hvr");
    newElement.setAttribute("contenteditable","true");
    let img = document.createElement("img");
    img.src="delete.png";
    img.setAttribute("class","inpimg hvr")
    containerelement.appendChild(newElement).appendChild(img);
    updateStorage();
}

btn.addEventListener("click",addNotes);

containerelement.addEventListener("click",(e)=>{
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "DIV"){
        notes = document.querySelectorAll(".inp");
        notee.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();
            }
        });
    }
    else{
        updateStorage();
    }
})
updateStorage();

save.addEventListener("click",()=>{
    updateStorage();
})