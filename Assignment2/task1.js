// to computer total price of single product
function calc(pric,qty,totl)
{
    var total= 0.0;
    var quantity = document.getElementById(qty).value;
    var price = parseFloat(document.getElementById(pric).value);
    total = quantity * price;
    document.getElementById(totl).innerHTML = (total);
    
}

function totalprices()
{
    const tbody = document.getElementById('tbody').children;
    var sum = 0.0;
    var i =0;

    while(tbody.item(i))
    {
        var tr = tbody.item(i).children;
        var td = tr.item(4).children;
        var span = td.item(0).children;
        console.log(span.item(0).innerHTML);
        
        sum += parseFloat(span.item(0).innerHTML);
   

        i++;
    }

    console.log(sum);


    document.getElementById('sub-total').innerHTML = '$' + sum;

} 

function closeall()
{ 
    const maindiv = document.getElementById("maindiv");
    

    while(maindiv.firstChild)
    {
    maindiv.removeChild(maindiv.firstChild);
    }


    const heading = document.createElement("h3");
    const text = document.createTextNode("No items are in the cart");

    heading.appendChild(text);

    maindiv.appendChild(heading);

}

function btnclose(e)
{
    const parent = e.parentNode.parentNode.parentNode;

    parent.removeChild(e.parentNode.parentNode);

    if(parent.childElementCount<=0)
    {
        closeall();
    }

    

}