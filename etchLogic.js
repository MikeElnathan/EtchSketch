// variable here
const startBtn = document.getElementById("start");
const cont = document.getElementById("container");
// -------------

startBtn.addEventListener("click", startEtch);

function startEtch()
{
    if (cont.childElementCount > 0)
        {
            cont.replaceChildren("");
            createGrid()
        }
    else
    {
        createGrid();
    }  
}

function createGrid()
{
    let size = sketchSize();

    while (isNaN(size) || (size <= 0) || (size > 100))
    {
            size = sketchSize();
    }

    for (let i = 0; i < size*size; i++)
    {
            const divE = document.createElement("div");
            
            divE.style.flex = "1 1 auto";
            divE.style.outline = "1px solid black";
            divE.style.aspectRatio = "1/1";
            divE.style.backgroundColor = "white";
            divE.style.width = `${500/size}px`;
            divE.style.height = `${500/size}px`;

            let a = 500/size;
            console.log(a);

            //add event listener for mouse hover
            divE.addEventListener("mouseover", () =>{
                divE.style.backgroundColor = "black";
            });
            cont.appendChild(divE);
    }

}

function sketchSize()
{
    let size = parseInt(prompt("Enter number from 1 to 100"));

    return size;
}

function testCall()
{
    console.log("this function is called");
}