const url = `https://api.openweathermap.org/data/2.5/weather?q=${process.argv[2]}&lang=ja&units=metric&appid=f8dad39aafa40612f1f1ac1b5040ae25`;
fetch(url)
.then(async (res) => {
    const data = await res.json();
    console.log(`現在の${data.name}の気温は${Math.floor(data.main.temp * 10) / 10}度、${data.weather[0].description}です。`);
})