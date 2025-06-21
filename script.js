function insert(clik){
    document.getElementById('display').value += clik
}

function clean(){
    document.getElementById('display').value = ""
}

function limpar(){
    const display = document.getElementById('display')
    display.value = display.value.slice(0, -1)
}

function porcento(){
     let num = document.getElementById('display').value;
     document.getElementById('display').value = num / 100
     
}

function result(){
    const display = document.getElementById('display')
    try {
        display.value = eval(display.value)
    } catch {
        display.value = 'Error'
    }
}