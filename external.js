let i=0;
let j=0;
let a = 0;
let side = 16;

for(i=0;i<side;i++)
{
    for(j=0;j<side;j++)
    {
        const container = document.querySelector('.container');
        const div = document.createElement('div');
        div.classList.add('g');
        container.appendChild(div);
    }
}

function createNewGrid()
{
    //First remove the squares of the previous grid
    for(i=0;i<side;i++)
    {
        for(j=0;j<side;j++)
        {
            const divrem = document.querySelector('.g');
            const container = document.querySelector('.container');
            container.removeChild(divrem);
        }
    }

    side = a;
    //Now Create new grid
    const container = document.querySelector('.container');
    container.setAttribute('style', 'display: grid; grid-template-columns: repeat('+a+' , 0fr);');
    let x = 320/a;

    for(i=0;i<side;i++)
    {
        for(j=0;j<side;j++)
        {
            const div = document.createElement('div');
            div.classList.add('g');
            div.setAttribute('style', 'height: '+x+'px; width: '+x+'px;');
            container.appendChild(div);
        }
    }

    const divs = document.querySelectorAll('.g');
    divs.forEach( (div) => {

        div.addEventListener('mouseover',() => {
            div.style.backgroundColor = 'black';
        });
    })
}

const btn1 = document.querySelector('.b1');
btn1.addEventListener('click',() =>
    {
        a = prompt("Enter the number of squares per side of the grid");
        if(a<100)
            createNewGrid();
        else
            alert("Please enter a number less than 100");
    });


const divs = document.querySelectorAll('.g');
divs.forEach( (div) => {

    div.addEventListener('mouseover',() => {
        div.style.backgroundColor = 'black';
    });
})