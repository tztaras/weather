





document.querySelector('.button').onclick = f;
async function f () {
    // let a = document.querySelectorAll('.container .out-4');
    // a.forEach( (aa)=> {
    //     aa.classList.toggle('hide');
    // });
    let a = document.querySelector('.container');
    a.classList.toggle('hide');
    
    

    let b = await fetch('https://api.openweathermap.org/data/2.5/weather?id=687021&appid=d41328ff78cb8042706bf7398821ba7d&temp=cel&units=metric');
    console.log(b);
    let data = await b.json();
    console.log(data);

    document.querySelector('.city').textContent = data.name;
    document.querySelector('.airtemp').innerHTML = Math.round(data.main.temp) + '&deg;C';
   //масраунд - округление градусов, ссылка на нужную инфо + код градуса
    // http://openweathermap.org/img/wn/04d@2x.png
  
    document.querySelector('.w_icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
   
    document.querySelector('.w_descr').textContent = data.weather[0].description;
    document.querySelector('.wind').textContent='wind: '+Math.round(data.wind.speed)+' m/s';
    document.querySelector('.tempfeel').innerHTML = 'feels like: ' + Math.round(data.main.feels_like) + '&deg;C';
    
    
    let res = document.querySelector('.out-4');
    let d = Math.round(data.main.temp);

    if (d >= 5 && d <= 8) {
        res.innerHTML = `good weather to run <img src='./img/5to8.jpg'>`;
    } else if (d >= 0 && d <= 4) {
        res.innerHTML = `normal weather to run <img src='./img/0to4.jpg'>`;
    }
}


// let res = document.querySelector('.airtemp');

    







// ===================
//   fetch('https://api.openweathermap.org/data/2.5/weather?id=687021&appid=d41328ff78cb8042706bf7398821ba7d&temp=cel&units=metric')
// .then(function (resp) { return resp.json() }) //convert data to json
// .then(function (data) {
// console.log(data);
//     document.querySelector('.city').textContent = data.name;
   
//     document.querySelector('.airtemp').innerHTML = Math.round(data.main.temp) + '&deg;C';
//    //масраунд - округление градусов, ссылка на нужную инфо + код градуса
//     // http://openweathermap.org/img/wn/04d@2x.png
  
//     document.querySelector('.w_icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
   
//     document.querySelector('.w_descr').textContent = data.weather[0].description;
//     document.querySelector('.wind').textContent='wind: '+Math.round(data.wind.speed)+' m/s';
//     document.querySelector('.tempfeel').innerHTML='feels like: '+Math.round(data.main.feels_like) + '&deg;C';
