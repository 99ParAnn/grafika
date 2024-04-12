document.addEventListener("DOMContentLoaded", ()=>{
    const rajzlap = document.getElementById("rajzlap");
    const rajzfelulet = rajzlap.getContext("2d");

    //téglalap
    rajzfelulet.fillStyle = "red";
    rajzfelulet.fillRect(20, 20, 150, 100);


    rajzfelulet.fillStyle = "black";
    //kezdőpont:
    rajzfelulet.moveTo(0,0);
    //végpont:
    rajzfelulet.lineTo(300,300);
    //összeköt vonallal
    rajzfelulet.stroke();

    //kör ??
    rajzfelulet.beginPath();
    rajzfelulet.strokeStyle = "yellow";
    rajzfelulet.arc(100,100,20,0,2*Math.PI);
    rajzfelulet.stroke();

    //szöveg
    rajzfelulet.font="20px Arial";
    rajzfelulet.fillText("Varázslat!!",10,20);
})