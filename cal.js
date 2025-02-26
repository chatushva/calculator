const display=document.getElementById("display");
function displays(input)
{
    display.value +=input;
}
function calculate()
{
    try{
   display.value=eval(display.value);
    }
    catch(input)
    {
        display.value="error";
    }
}
function clearDisplay()
{
    display.value ="";
}