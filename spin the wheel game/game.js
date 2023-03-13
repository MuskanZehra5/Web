function jsbutton(){
    var elem = document.getElementById("btn");
    const myset = "";
    if(elem.value == "Spin")
    {
        elem.value="Stop";
        myset = run();
    }

    else
    {
        stop(myset);
        elem.value ="Spin";
    }    

}

function run(){
    return myset = setInterval(start,100);

}

function start()
{
   var id1 = document.getElementById('box1').value = Math.floor(Math.random()*8);
   var id2 = document.getElementById('box2').value = Math.floor(Math.random()*8);
   var id3 = document.getElementById('box3').value = Math.floor(Math.random()*8);

}

function stop(myset)
{
    clearInterval(myset);
    var id1 = document.getElementById('box1').value;
    var id2 = document.getElementById('box2').value;
    var id3 = document.getElementById('box3').value;

    if (id1 == '7' && id2 =='7' && id3=='7')
    {

        document.getElementById("win").style.display="block";
        window.alert("Congratulations!!!! You Win");
        location.reload()
       
    }

    else
    {   
        document.getElementById("lose").style.display="block";
        window.alert("Better Luck Next Time....!!!!");
        setTimeout(location.reload(),50000);
        location.reload()

    }
    

}
