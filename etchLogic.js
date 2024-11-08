// variable here
const startBtn = document.getElementById("start");
const cont = document.getElementById("container");
// -------------

startBtn.addEventListener("click", startEtch, {once : true});

function startEtch()
{
    startBtn.remove();
    // add reset button here to start over.
    cont.style.cssText = "width: 160px; height: 160px";

    for (i = 0; i < 256; i++)
    {
        const divE = document.createElement("div");
        divE.style.cssText = 
        " background-color: white; width: 10px; height: 10px; outline: 1px solid black;";
        console.log("div created");
        cont.appendChild(divE);
    }

    testCall();
}

function testCall()
{
    console.log("this function is called");
}