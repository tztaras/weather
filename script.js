
document.querySelector('.button').onclick = f;

async function f() {
  
    let cat = document.querySelector('.out-4');
    let res = document.querySelector('.out-5');
    
    let a = document.querySelectorAll('.container, .out-4, .out-5');
    a.forEach(aa => {
        aa.classList.toggle('hide');
    })

    setTimeout(() => {
        cat.classList.toggle('show');
    }, 500);
    
    let b = await fetch('https://api.openweathermap.org/data/2.5/weather?id=687021&appid=d41328ff78cb8042706bf7398821ba7d&temp=cel&units=metric');
    console.log(b);
    let data = await b.json();
    console.log(data);

    document.querySelector('.city').textContent = data.name;
    document.querySelector('.airtemp').innerHTML = Math.round(data.main.temp) + '&deg;C';
   
    document.querySelector('.w_icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
   
    document.querySelector('.w_descr').textContent = data.weather[0].description;
    document.querySelector('.wind').textContent = 'wind: ' + Math.round(data.wind.speed) + ' m/s';
    document.querySelector('.tempfeel').innerHTML = 'feels like: ' + Math.round(data.main.feels_like) + '&deg;C';
    
    
    let t = Math.round(data.main.temp);
    let wd = data.weather[0].description;

    // t
    // t
    res.innerHTML = '';
    let adv = document.createElement('div');
    res.appendChild(adv);
    adv.style.display = 'flex';
    adv.style.flexDirection = 'row';
    adv.innerHTML = `<p>Going for a run? <br>Consider dressing like this </p>`;
    let ad_arr = document.createElement('img');
    adv.appendChild(ad_arr);
    ad_arr.src = './img/arrow.png';
    ad_arr.style.position = 'relative';
    ad_arr.style.height = '33px';
    ad_arr.style.bottom = '-43px';
    ad_arr.style.right = '-3px';
    

    if (t > 9) {
        res.innerHTML = `<img src='./img/above8.jpg'>`;
    }

    if (t >= 5 && t <= 8 && wd === 'overcast clouds') {
        res.innerHTML += `<img src='./img/5to8brokenclouds.jpg'>`;
    } else if (t >= 5 && t <= 8 && wd === 'fog') {
        res.innerHTML += `<img src='./img/5to8-fog.jpg'>`;
    } else if (t >= 5 && t <= 8) {
        res.innerHTML += `<img src='./img/5to8.jpg'>`;
    }

    if (t >= 0 && t <= 4) {
        res.innerHTML += `<img src='./img/0to4.jpg'>`;
    }
    if (t >= -6 && t <= -1) {
        res.innerHTML += `<img src='./img/-1to-6.jpg'>`;
    }
    if (t <= -6) {
        res.innerHTML += `<img src='./img/below-6.jpg'>`;
    }

    // wd
    // wd
    if (t >= 0 && t <= 5 && wd === 'overcast clouds') {
        cat.innerHTML = `<p>These clouds frighten me &#x1F408</p>`;
    }
    if (wd === 'clear sky' && t >= 0 && t <= 13) {
        cat.innerHTML = `<img src='./img/cat-blue-sky.jpg'> <p>Great day to watch people run</p>`;
    }

    if (t >= 5 && t <= 13) {
        if (wd === 'light rain' || wd === 'rain') {
            cat.innerHTML = `<img src='./img/cat-smiles.jpg'> <p>Can you imagine: people run in this weather &#128568 </p>`;
        } else { cat.innerHTML = `<img src='./img/cat-smiles.jpg'> <p>Activity brings happiness &#128568</p>`; }
    }
    if (t >= -1 && t <= 4) {
        cat.innerHTML = `<p>It is getting colder, cats settle down on heaters</p><img src='./img/cat-heater.jpg'> `;
    }

    if (t >= -6 && t <= -1 && wd === 'light snow' || wd==='snow') {
        cat.innerHTML = `<img src='./img/cat-unacceptable.jpg'><p>This is unacceptable!</p>`;
        } else if (t >= -6 && t <= -1) {
        cat.innerHTML = `<p>It is cold for running, isn't it?</p><img src='./img/cat-rugsack.jpg'>`;
    }
    
    if (t <= -7) {
        cat.innerHTML = `<p> I'm gonna need more fur</p> <img src='./img/cat-fur.jpg'>`;
    }
        
    
}





