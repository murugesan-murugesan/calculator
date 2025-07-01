function getinput(value) {
    document.getElementById('display').value += value;
}

function input(value) {
    document.getElementById('display').value += value;
}

function del() {
    let display=document.getElementById('display');
    display.value=display.value.slice(0,-1)
}

function deletevalue(){
    document.getElementById('display').value ='';
}

function calculate(){
    let result=eval(document.getElementById('display').value);
    document.getElementById('display').value =result;
}
