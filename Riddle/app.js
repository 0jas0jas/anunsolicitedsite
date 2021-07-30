function submit() 
{
    const riddle1 = document.querySelector('#riddle1').value;
    const riddle2 = document.querySelector('#riddle2').value;
    const riddle3 = document.querySelector('#riddle3').value;

    console.log(riddle1);
    console.log(riddle2);
    console.log(riddle3);
    if (riddle1 == "12111" && (riddle2 == "seven" || riddle2 == "Seven" || riddle2 == "7") && riddle3 == "194" )
    {
        console.log("PASSED");
        window.location.href = "https://unsolicitedsite.co.in/riddle/unlocked.html";
    }
    else
    {
        console.log("FAILED");
    }
}
