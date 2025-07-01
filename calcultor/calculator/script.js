function getinput(value) {
    document.getElementById('res').value += value;
}

function pandi() {
    let res=document.getElementById('res');
    res.value=res.value.slice(0,-1)
}

function deletevalue() {
    document.getElementById('res').value = "";
}

function calculate() {
    let result = eval(document.getElementById('res').value);
    document.getElementById('res').value = result;

}