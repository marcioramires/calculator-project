function addCharacter(character){
    const displayValue = document.querySelector(".display").value

    document.querySelector(".display").value = displayValue + character
}

function clearDisplay(){
    document.querySelector(".display").value = ""
}

function calculation(){
    const displayValue = document.querySelector(".display").value

    document.querySelector(".display").value = eval(displayValue)
}

function inverterNumber(){
    const displayValue = document.querySelector(".display").value

    document.querySelector(".display").value = displayValue*(-1)
}