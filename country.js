class Country {
    constructor(name, lang, greeting, colors, flag) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
        this.flag = flag;
    }

    displayColors() {
        let colorNode1 = document.querySelector("#Color1");
        let colorNode2 = document.querySelector("#Color2");
        let colorNode3 = document.querySelector("#Color3");

        if (this.colors.length == 2) {
            colorNode1.style.backgroundColor = this.colors[0];
            colorNode2.style.backgroundColor = this.colors[1];
            colorNode3.style.backgroundColor = this.colors[1];
        } else if (this.colors.length == 3) {
            colorNode1.style.backgroundColor = this.colors[0];
            colorNode2.style.backgroundColor = this.colors[1];
            colorNode3.style.backgroundColor = this.colors[2];
        }    
    }
}

let usa = new Country("USA", "Murican", "Why Hello there world! Have some McDonalds", ["red", "white", "blue"], "https://i.ebayimg.com/images/g/0~gAAMXQ9qpRTk04/s-l1200.jpg");
let mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"], "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/1200px-Flag_of_Mexico.svg.png");
let algeria = new Country("Algeria", "Arabic and Berber", "Sup", ["blue", "yellow", "red"], "https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Algeria.svg");
let china = new Country("China", "Mandarin", "Ni hao shijie", ["red", "yellow"], "https://cdn.britannica.com/90/7490-050-5D33348F/Flag-China.jpg");
let germany = new Country("Germany", "German", "Hallo Welt", ["black", "red", "gold"], "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png");
let ireland = new Country("Ireland", "Gaeilge and English", "Dia dhuit", ["green", "white", "orange"], "https://upload.wikimedia.org/wikipedia/commons/4/45/Flag_of_Ireland.svg");

function SwitchCountry() {
    let nameNode = document.querySelector("#CountryName");
    let langNode = document.querySelector("#OfficialLanguage");
    let greetingNode = document.querySelector("#HelloWorld");

    let countryNode = document.querySelector("#CountryList").value;
    let country;

    if (countryNode === "USA") {
        //set country to usa 
        country = usa;

        nameNode.innerText = country.name;
        document.querySelector("#CountryFlag").src = country.flag;
        langNode.innerText = country.lang;
        greetingNode.innerText = country.greeting; 

        country.displayColors();
    }
    else if (countryNode === "Mexico") {
        country = mexico;

        nameNode.innerText = country.name;
        document.querySelector("#CountryFlag").src = country.flag;
        langNode.innerText = country.lang;
        greetingNode.innerText = country.greeting;

        country.displayColors();
    }
    else if (countryNode === "Algeria") {
        country = algeria;

        nameNode.innerText = country.name;
        document.querySelector("#CountryFlag").src = country.flag;
        langNode.innerText = country.lang;
        greetingNode.innerText = country.greeting;

        country.displayColors();
    }
    else if (countryNode === "China") {
        country = china;

        nameNode.innerText = country.name;
        document.querySelector("#CountryFlag").src = country.flag;
        langNode.innerText = country.lang;
        greetingNode.innerText = country.greeting;

        country.displayColors();
    }
    else if (countryNode === "Germany") {
        country = germany;

        nameNode.innerText = country.name;
        document.querySelector("#CountryFlag").src = country.flag;
        langNode.innerText = country.lang;
        greetingNode.innerText = country.greeting;

        country.displayColors();
    } else if (countryNode === "Ireland") {
        country = ireland;

        nameNode.innerText = country.name;
        document.querySelector("#CountryFlag").src = country.flag;
        langNode.innerText = country.lang;
        greetingNode.innerText = country.greeting;

        country.displayColors();
    }
}



