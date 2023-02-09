function getdata()
{
    let n=parseInt(prompt("Enter number: ","Number A"));
    let m=prompt("Enter number b: ");
    m=parseInt(m);
    let sum=m+n;
    document.getElementById("h1").innerHTML="Value is: "+sum;
}
function get()
{
    let n=parseInt(prompt("Enter number: ","Number A"));
    let m=prompt("Enter number b: ");
    m=parseInt(m);
    let sum=n-m;
    document.getElementById("h1").innerHTML="Value is: "+sum;
}
function ge()
{
    let n=parseInt(prompt("Enter number: ","Number A"));
    let m=prompt("Enter number b: ");
    m=parseInt(m);
    let sum=n*m;
    document.getElementById("h1").innerHTML="Value is: "+sum;
}
function gete()
{
    let n=parseInt(prompt("Enter number: ","Number A"));
    let m=prompt("Enter number b: ");
    m=parseInt(m);
    let sum=n/m;
    document.getElementById("h1").innerHTML="Value is: "+sum;
}
function getea()
{
    let n=parseInt(prompt("Enter number: ","Number A"));
    let m=prompt("Enter number b: ");
    m=parseInt(m);
    let sum=n%m;
    document.getElementById("h1").innerHTML="Value is: "+sum;
}
function backv()
{
    document.body.style.backgroundColor="violet";
}
function backi()
{
    document.body.style.backgroundColor="indigo";
}
function backb()
{
    document.body.style.backgroundColor="blue";
}
function backg()
{
    document.body.style.backgroundColor="green";
}
function backy()
{
    document.body.style.backgroundColor="yellow";
}
function backo()
{
    document.body.style.backgroundColor="orange";
}
function backr()
{
    document.body.style.backgroundColor="red";
}