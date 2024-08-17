function Start()
{//I'm going to get this out of the way, I had some of this typed out monday so there's no possible way that I copied your code.
    document.getElementById("Start").disabled = true;
    document.getElementById("Stop").disabled =false;
    intervalStart();
}
function Stop()
{
    document.getElementById("Start").disabled = false;
    document.getElementById("Stop").disabled = true;//All the way down here was typed already
    intervalStop();
}
function intervalStart()
{
    var image = document.getElementById("memeImage");
    var change = 50;
    intervalID = setInterval(function()
    {
        image.style.left = change+"px";
        image.style.top = change+"px";
        change+=10;
    },100);
}
function intervalStop()
{
    clearInterval(intervalID)
    clearInterval
}