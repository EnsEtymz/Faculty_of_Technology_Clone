function bolumlerigoster(){
    document.getElementById("bolumler").style.display='block';
    }

function bolumlerikapat(){
     document.getElementById("bolumler").style.display='none';
    }

var fotolar = new Array("images/b0.jpg","images/b1.jpg","images/b2.jpg","images/b3.jpg");

var i = 1;

function oncekifoto(){
    if(i<=3){
        var s = fotolar[i];
    document.getElementById('foto').src=s;
    i--; if(i<0){i=3;}
    }
    
    else{
        i=0;
        document.getElementById('foto').src=s;
    }
}


function sonrakifoto(){
    if(i<=3){
    var s = fotolar[i];
document.getElementById('foto').src=s;
i++; if(i>3){i=0;}
}

else{
    i=0;
    document.getElementById('foto').src=s;
}
}

