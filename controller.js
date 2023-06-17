let canvas = document.querySelector("canvas");

let ctx = canvas.getContext("2d");
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;
let str = "abdcedfghijklmnopqrstvxwzyABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
let matrix = str.split("");
const submitbtn = document.getElementById("submit-btn");

let font = 17;
let col = width / font;
let arr = [];

for(let i = 0; i < col; i++) {
    arr[i] = 1;
}
ctx.fillStyle = "rgba(0,0,0,0.1)";
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = "#00FF00";
    ctx.font = `${font}px system-ui`;
const draw = () => {
    ctx.fillStyle = "rgba(0,0,0,0.1)";
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = "#00FF00";
    ctx.font = `${font}px system-ui`;

    for(let i = 0; i < arr.length; i++) {

        let txt = matrix[Math.floor(Math.random() * matrix.length)];
        ctx.fillText(txt, i * font, arr[i] * font);

        if(arr[i] * font > height && Math.random() > 0.975) {
            arr[i] = 0;
        }
        arr[i]++;
    }
}

setInterval(draw, 20);


window.addEventListener("resize", () => location.reload());
function checkIP(){
    const iptext = document.getElementById("inputbox");
    console.log(iptext.value);
    var result = document.getElementById("result");
    console.log(isValidIPAddress(iptext.value));
    if(isValidIPAddress(iptext.value))
    {
       
        result.innerHTML = "✔️<div> Valid IP </div>";
    }else if(!(isValidIPAddress(iptext.value))){
        result.innerHTML = "⛔<div> Invalid IP </div>";
    }
}

function isValidIPAddress(ipaddress) 
{
 if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress))
  {
    return (true)
  }
return (false)
}

function clearText()
{
    const inputbx = document.getElementById("inputbox");

}






