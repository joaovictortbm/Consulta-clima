
const bandeira= document.querySelector("#bandeira");
bandeira.src="https://flagsapi.com/BR/flat/64.png";
const submit = document.querySelector('input[type="submit"]')
const apikey= "2b93e6ffc8cd71909ae106b2d51fce79"
const resultado= document.querySelector("#resultado");
const h2= document.querySelector("h2");
const p= document.querySelector("p");
const h3= document.querySelector("h3");
const ceu= document.querySelector(".ceu");



const getData = async (valor) => {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${valor}&units=metric&appid=${apikey}&lang=pt_br`
        );
        if (!response.ok) {
            throw new Error('Erro ao obter os dados do clima');
        }
        const data = await response.json();
        console.log(data);
        alteracao(data);
        return data;
    } catch (error) {
        console.log(error);
    }
};


submit.addEventListener("click",(e)=>{
    e.preventDefault();
    const inputValor= document.querySelector('input[type="text"]')
    const valor= inputValor.value;
    dadosTempo(valor);
})

const dadosTempo= (valor)=>{
    getData(valor);
}

const alteracao= (data)=>{
    resultado.style.display="flex";

        bandeira.src=`https://flagsapi.com/${data.sys.country}/flat/64.png`
        h2.textContent= data.name;
        p.textContent= `${data.main.temp} °C`
        h3.textContent= data.weather[0].description;
        ceu.src= `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`


}


