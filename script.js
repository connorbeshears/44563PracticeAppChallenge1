function doCalc(){
    const string1 = document.querySelector("#string1").value
    const string2 = document.querySelector("#string2").value
    const string3 = document.querySelector("#string3").value
    max = string1

    if(string2.length < max.length){
        max = string2
    }
    if(string3.length < max.length){
        max = string3
    }


    document.querySelector('#shortString').innerHTML =  max
}

document.querySelector('#calcButton').addEventListener('click', doCalc)