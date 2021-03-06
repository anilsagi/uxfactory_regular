function allowDrop(ev) {
    ev.preventDefault(); //to prevent browser not slow when dropping
}

function drag(ev) {
 ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData('text');
    ev.target.appendChild(document.getElementById(data));
}