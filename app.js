let btn = document.getElementById('button');
btn.addEventListener('click', makeAPI);
function makeAPI() {
    let xhr = new XMLHttpRequest();
    let city = document.getElementById('city');
    let temp=document.getElementById("temp");
    let name=document.getElementById("name");
    let humd=document.getElementById("humd");
    let press=document.getElementById("press");
    let cont=document.getElementById("cont");
    let cityname = city.value;
    xhr.open("GET", 'https://api.openweathermap.org/data/2.5/weather?q=' + cityname + '&appid=d7d77cc449e649753517ff70e0244de4', true);
    xhr.onload = function () {
        if (this.status === 200) {
            let data = JSON.parse(this.responseText);
            console.log(data);
            temp.innerText=data["main"]["temp"];  
            name.innerText=data["name"];
            press.innerText=data["main"]["pressure"]
            humd.innerText=data["main"]["humidity"];
            cont.innerText=data["sys"]["country"]
        } else {
            console.log("error occured");
        }
    }
    xhr.send();
}
