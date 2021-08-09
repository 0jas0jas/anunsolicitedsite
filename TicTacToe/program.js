// red = #EE4B2BFF
// blue = #0096FFFF

let turn = 1
let cells_active = 0


const b1 = document.getElementsByClassName("b1")[0];
const b2 = document.getElementsByClassName("b2")[0];
const b3 = document.getElementsByClassName("b3")[0];
const b4 = document.getElementsByClassName("b4")[0];
const b5 = document.getElementsByClassName("b5")[0];
const b6 = document.getElementsByClassName("b6")[0];
const b7 = document.getElementsByClassName("b7")[0];
const b8 = document.getElementsByClassName("b8")[0];
const b9 = document.getElementsByClassName("b9")[0];
let winner;


// $( document ).ready(function() {
//     $(".b1, .b2, .b3, .b4, .b5, .b6, .b7, .b8, .b9").hover(
//         function() {
//             const clas = this.className
//             if (document.getElementsByClassName(clas)[0].classList.contains("active")){
//                 if(turn == 1){
//                     $(this).attr("fill", "#EE4B2B33");
//                 }else{
//                     $(this).attr("fill", "#0096FF33");
//                 }
//             }
//         },
//         function() {
//             $(this).attr("fill", "#00000000")
//         }
//     );
// });

function move(ele)
{
    const clas = ele.className
    if (turn == 1)
    {
        document.getElementsByClassName(clas)[1].setAttribute("fill", "#EE4B2BFF");
        document.getElementsByClassName(clas)[0].style.pointerEvents = "none";
        document.getElementsByClassName(clas)[0].classList.add("active");
        console.log("Red Placed");

        cells_active = cells_active + 1
        turn = 0;
    }
    else
    {
        const clas = ele.className
        if (turn == 0)
        {
            document.getElementsByClassName(clas)[1].setAttribute("fill", "#0096FFFF");
            document.getElementsByClassName(clas)[0].style.pointerEvents = "none";
            document.getElementsByClassName(clas)[0].classList.add("active");
            console.log("Blue Placed");

            cells_active = cells_active + 1
            turn = 1;
        }
    };
    return cells_active;
    return turn;
};

function game(elem){
    const clas = elem.className;
    const b1_active = b1.classList.contains("active");
    const b2_active = b2.classList.contains("active");
    const b3_active = b3.classList.contains("active");
    const b4_active = b4.classList.contains("active");
    const b5_active = b5.classList.contains("active");
    const b6_active = b6.classList.contains("active");
    const b7_active = b7.classList.contains("active");
    const b8_active = b8.classList.contains("active");
    const b9_active = b9.classList.contains("active");

    if(b1_active == true && b2_active == true && b3_active == true)
    {
        if (turn == 1)
        {
            console.log("RED WINSSSS");
            window.location.href = "https://tic-tac-toe.0jas0jas.repl.co/Winner/red.html";
        }
        else
        {
            console.log("BLUE WINNSSS");
            window.location.href = "https://tic-tac-toe.0jas0jas.repl.co/Winner/blue.html";
        }
    }
    else if(b4_active == true && b5_active == true && b6_active == true)
    {
        if (turn == 1)
        {
            console.log("RED WINSSSS");
            window.location.href = "https://tic-tac-toe.0jas0jas.repl.co/Winner/red.html";
        }
        else
        {
            console.log("BLUE WINNSSS");
            window.location.href = "https://tic-tac-toe.0jas0jas.repl.co/Winner/blue.html";
        }
    }
    else if(b7_active == true && b8_active == true && b9_active == true)
    {
        if (turn == 1)
        {
            console.log("RED WINSSSS");
            window.location.href = "https://tic-tac-toe.0jas0jas.repl.co/Winner/red.html";
        }
        else
        {
            console.log("BLUE WINNSSS");
            window.location.href = "https://tic-tac-toe.0jas0jas.repl.co/Winner/blue.html";
        }
    }
    else if(b1_active == true && b4_active == true && b7_active == true)
    {
        if (turn == 1)
        {
            console.log("RED WINSSSS");
            window.location.href = "https://tic-tac-toe.0jas0jas.repl.co/Winner/red.html";
        }
        else
        {
            console.log("BLUE WINNSSS");
            window.location.href = "https://tic-tac-toe.0jas0jas.repl.co/Winner/blue.html";
        }
    }
    else if(b2_active == true && b5_active == true && b8_active == true)
    {
        if (turn == 1)
        {
            console.log("RED WINSSSS");
            window.location.href = "https://tic-tac-toe.0jas0jas.repl.co/Winner/red.html";
        }
        else
        {
            console.log("BLUE WINNSSS");
            window.location.href = "https://tic-tac-toe.0jas0jas.repl.co/Winner/blue.html";
        }
    }
    else if(b3_active == true && b6_active == true && b9_active == true)
    {
        if (turn == 1)
        {
            console.log("RED WINSSSS");
            window.location.href = "https://tic-tac-toe.0jas0jas.repl.co/Winner/red.html";
        }
        else
        {
            console.log("BLUE WINNSSS");
            window.location.href = "https://tic-tac-toe.0jas0jas.repl.co/Winner/blue.html";
        }
    }
    else if(b3_active == true && b5_active == true && b7_active == true)
    {
        if (turn == 1)
        {
            console.log("RED WINSSSS");
            window.location.href = "https://tic-tac-toe.0jas0jas.repl.co/Winner/red.html";
        }
        else
        {
            console.log("BLUE WINNSSS");
            window.location.href = "https://tic-tac-toe.0jas0jas.repl.co/Winner/blue.html";
        }
    }
    else if(b1_active == true && b5_active == true && b9_active == true)
    {
        if (turn == 1)
        {
            console.log("RED WINSSSS");
            window.location.href = "https://tic-tac-toe.0jas0jas.repl.co/Winner/red.html";
        }
        else
        {
            console.log("BLUE WINNSSS");
            window.location.href = "https://tic-tac-toe.0jas0jas.repl.co/Winner/blue.html";
        }
    }
}