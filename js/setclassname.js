console.log("jeg er i setclassname")

 ///2 input felter
const pbSetClassname = document.getElementById("pbSetStyle")
const inpClassname = document.getElementById("styleName")
const inpElementname = document.getElementById("elementName")

function setClassnameRuinName() { //2 værdier
    const elemname = inpElementname.value;

    console.log(elemname)
    const clsname = inpClassname.value
    const inpelement = document.querySelector("." + elemname)
    console.log(inpelement)

    inpelement.className = clsname
}

function setClassname() { //2 værdier
    const elemname = inpElementname.value;
    console.log(elemname)
    const clsname = inpClassname.value
    const inpelement = document.querySelector("." + elemname)
    console.log(inpelement)

    //classname er nu et array som tilføjer clsname og elemname vha classlist.add
    inpelement.className = " "
    inpelement.classList.add(clsname)
    inpelement.classList.add(elemname)

    console.log(inpelement.innerHTML) //udskriver hvordan ens objekt ser ud.
}
//Adder trykknap
pbSetClassname.addEventListener('click', setClassname)




