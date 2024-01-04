





document.querySelector('.button').onclick = f;
async function f () {
  
  

    let res = document.querySelector('.out-4');
    let cat = document.querySelector('.out-5');
   
    
    let a = document.querySelectorAll('.container, .out-4, .out-5');
    a.forEach(aa => {
        
        aa.classList.toggle('hide');
        
    })


    setTimeout(() => {
            cat.classList.toggle('show');
    
    }, 500)
    
    
    

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
    
    
   
    let t = Math.round(data.main.temp);
    let wd = data.weather[0].description;
    // let wind = Math.round(data.wind.speed);
    


    if (t > 8) {
        res.innerHTML = `<img src='./img/above8.jpg'>`;
    } 

    else if (t >= 5 && t <= 8 && wd === 'overcast clouds') {
        res.innerHTML = `<img src='./img/5to8brokenclouds.jpg'>`;
    }
        else if (t >= 5 && t <= 8) {
        res.innerHTML = `<img src='./img/5to8.jpg'>`;
    }
        
    else if (t >= 0 && t <= 4) {
        res.innerHTML = `<img src='./img/0to4.jpg'>`;
    }
    else if (t >= -6 && t <= -1) {
        res.innerHTML = `<img src='./img/-1to-6.jpg'>`;
    }
    else if (t <= -6) {
        res.innerHTML = `<img src='./img/below-6.jpg'>`;
    }
    
    if (wd === 'light rain') {
        cat.innerHTML = `<img src='./img/cat-smiles.jpg'> <p>Can you imagine: people run in this weather)))</p>`;
    }
    else if (t>=0 && t<=5 && wd === 'overcast clouds') {
        cat.innerHTML = `<p>These clouds frighten me &#x1F408</p>`;

    }
    else if (wd === 'clear sky' && t >= 0 && t <= 13) {
        cat.innerHTML = `<img src='./img/cat-blue-sky.jpg'> <p>Great day to watch people run</p>`;
    }
    else if (t >= 6 && t <= 13) {
        cat.innerHTML = `<img src='./img/cat-smiles.jpg'> <p>Activity brings happiness)))</p>`;
        }
    else if (t >= -1 && t <= 4) {
        cat.innerHTML = `<p> It is getting colder, cats settle down on heaters</p><img src='./img/cat-heater.jpg'> `;
    }
    else if (t >= -6 && t <= -1 && wd === 'light snow' || wd==='snow') {
        cat.innerHTML = `<img src='./img/cat-unacceptable.jpg'><p>This is unacceptable!</p>`;
        }
        else if (t >= -6 && t <= -1) {
        cat.innerHTML = `<p>It is cold for running, isn't it? &#x1F408</p>`;
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
