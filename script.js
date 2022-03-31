


/*

document.querySelector("#test-form").addEventListener("submit", function (e) {
    e.preventDefault();
    // console.log(e.target.elements.firstName.value);

    let para = document.createElement("p");
    para.textContent = e.target.elements.firstName.value;

    document.querySelector("#from-form").appendChild(para);

    e.target.elements.firstName.value = "";
})



document.querySelector("#challenge-form").addEventListener("submit", function (e) {

    e.preventDefault();

    let firstName = e.target.elements.firstName.value;
    let secondName = e.target.elements.secondName.value;
    let email = e.target.elements.email.value;



    let para = document.createElement("p");

    para.innerHTML = `Meno: ${firstName} <br> Priezvisko: ${secondName} <br> Emial: ${email}`;

    document.querySelector('#from-form').appendChild(para);

    //vymazat obsah inputu

    e.target.elements.firstName.value = "";
    e.target.elements.secondName.value = "";
    e.target.elements.email.value = "";


});

let myCheckbox = document.querySelector("#checkbox");
myCheckbox.addEventListener("change", function (e) {
    console.log(e.target.checked);
})




const getData = function (elements) {
    if (!elements || !elements.length)
        return;

    let result = {};

    for (let index in elements) {

        index = parseInt(index);

        if (!isNaN(index)) {
            let name = elements[index].name;
            if (name) {
                result[name] = elements[index].value;
            }
        }
    }

    return result;
}


// chytenie formulara
document.querySelector("#first").addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(e);

    const elements = e.target.elements;

    let data = getData(elements);

    console.log(data);

    // vytvorenie odtavca + pridanie textu s policka/formulara

})



//chod do DOM pre id a ked nastane odoslanie - submit


//danie do DOM
//document.createElement("#from-form")



//  addEventListener("click", function () {ue = "";




document.querySelector("#challenge-form").addEventListener("submit", function (e) {
    e.preventDefault();

    //nacitanie hodnot z policka

    let first = e.target.elements.firstName.value
    let second = e.target.elements.secondName.value
    let email = e.target.elements.email.value


    //vytvor odtavec + nacitanie z inputu

    let para = document.createElement("p");
    para.innerHTML = `Meno: ${first},<br> Priezvisko: ${second},<br> jeho email: ${email}`;

    document.querySelector("#from-form").appendChild(para);


    e.target.elements.firstName.value = '';
    e.target.elements.secondName.value = '';
    e.target.elements.email.value = "";
});

let checbox = document.querySelector("#my-check-box")
checbox.addEventListener("change", function (e) {
    if (!e.target.checked) {
        console.log("False")
    }

})



let formMy = document.querySelector("#myForm")
let count = 0;


formMy.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(e.target.elements.taskoo.value);

    count++;


    //predtym sme creovali "p"
    let input = document.createElement("input");
    //input musi mat type input
    input.type = "checkbox";
    input.id = `testovaci-${count}`;
    console.log(input);
    document.querySelector("#results").appendChild(input);

    let label = document.createElement("label")
    label.textContent = e.target.elements.taskoo.value;
    //label.for = `testovaci ${count}`;
    label.setAttribute("for", `testovaci-${count}`);
    document.querySelector("#results").appendChild(label)
    console.log(label);


    e.target.elements.taskoo.value = "";

});

let count = 0;

let myForm = document.querySelector("#myForm").addEventListener("submit", function (e) {
    e.preventDefault();

    count++;
    console.log(count);


    let input = document.createElement("input");
    input.type = "checkbox";
    input.id = `testovaci-${count}`
    console.log(input);
    document.querySelector("#results").appendChild(input);

    let inputLabel = document.createElement("label");
    inputLabel.textContent = e.target.elements.taskoo.value;
    inputLabel.setAttribute("for", `testovaci-${count}`);
    console.log(inputLabel);

    document.querySelector('#results').appendChild(inputLabel);
    e.target.elements.taskoo.value = '';
})


let mySelect = document.querySelector("#my-select");
//console.log(mySelect);

mySelect.addEventListener("change", function (e) {
    console.log(e.target.value);
})


let button = document.querySelector("button");
//console.log('button');

button.addEventListener('keyup', function (e) {
    console.log(e.key)
})



// chytenie square v DOMku
let myDiv = document.querySelector(".square")
myDiv.style.top = '50px';
myDiv.style.left = "50px";



let newLeft = null;
let newTop = null;

document.querySelector("body").addEventListener('keydown', function (e) {
    if (e.key === "ArrowLeft") {
        newLeft = newLeft - 5;
        myDiv.style.left = newLeft + "px";
    } else if (e.key === 'ArrowRight') {
        newLeft = newLeft + 5;
        myDiv.style.left = newLeft + 'px';
    } else if (e.key === 'ArrowUp') {
        newTop = newTop - 5
        myDiv.style.top = newTop + 'px';
    } else if (e.key === "ArrowDown") {
        newTop = newTop + 5;
        myDiv.style.top = newTop + 'px';
    }
})



let heading = document.querySelector('h1');

let style = getComputedStyle(heading);

console.log(style.color);
console.log(style.background);


let myBody = document.querySelector("body")

document.querySelector("#myForm").addEventListener('submit', function (e) {
    e.preventDefault();


    let inputColor = e.target.elements.color.value;


    myBody.style.background = inputColor;


    e.target.elements.color.value = "";
})


window.addEventListener("scroll", function () {
    let scrolled = window.scrollY;
    let scrollable = document.documentElement.scrollHeight - window.innerHeight;
    //console.log(scrollable);
    //console.log(scrolled);

    if (Math.floor(scrolled) === scrollable) {
        alert("Si na konci Webu");
    } else if (Math.ceil(scrolled) === scrollable) {
        alert("Aj teraz si na konci Webbu");
    }

})


let heading = document.querySelector("h1");
let style = getComputedStyle(heading);

console.log(style.color);
console.log(style.background);
console.log(style);



window.addEventListener("scroll", function () {
    let scrollable = document.documentElement.scrollHeight - window.innerHeight;
    let scrolled = window.scrollY;

    if (Math.ceil(scrolled) === scrollable) {
        let toTop = document.querySelector(".topPage");
        toTop.style.display = "block";


        toTop.addEventListener("click", function () {
            toTop.style.display = "none";
        })
    }

})



let firstItemMenu = document.querySelector(".first-item-menu");


let secondItemMenu = document.querySelector(".second-item-menu")

//kam chcem doscrollovat
let scrollH2 = document.querySelector(".scroll-h2").offsetTop;

let scrollH3 = document.querySelector(".scroll-h3").offsetTop;

//console.log(scrollH2);

firstItemMenu.addEventListener("click", function () {
    window.scrollTo({
        top: scrollH2,
        behavior: "smooth"
    });
});



secondItemMenu.addEventListener("click", function () {
    window.scrollTo({
        top: scrollH3,
        behavior: "smooth"
    });
})


//pridanie polozky do local storage
localStorage.setItem("location", "Presov");
localStorage.setItem("firstName", "Janoo");


//update polozky
localStorage.setItem("location", "Zapad");

//ziskanie polozky
console.log(localStorage.getItem("location"));

console.log(localStorage.getItem("firstName"));

//zmazanie polozky
localStorage.removeItem("firstName");

//zmazanie vsetkeho
localStorage.clear();



let user = {
    firstname: "David",
    age: 27
}

//prevedenie na text ()
let userJSON = JSON.stringify(user);
//console.log(userJSON)
localStorage.setItem("user", userJSON);



let userFromLS = localStorage.getItem("user");

let myUser = JSON.parse(userFromLS);

//console.log(myUser)

console.log(`Ahoj, ja som ${myUser.firstname} a je mi ${myUser.age} lietkov`);


//Video 103


if (localStorage.getItem('novyZ') === null) {
    var myArray = [];

} else {
    myArray = JSON.parse(localStorage.getItem('novyZ'))
}



let myForm = document.querySelector('#testForm');

myForm.addEventListener("submit", function (e) {
    e.preventDefault();

    myArray.push(e.target.elements.firstName.value);

    ArrayToLS = JSON.stringify(myArray);

    localStorage.setItem("novyZ", ArrayToLS);

    e.target.elements.firstName.value = "";

    //vytiahnutie so skladu VON
    let myArrayFromLS = localStorage.getItem('novyZ');
    //cez vratnicu
    let myArrayFromLSJSON = JSON.parse(myArrayFromLS);


    //vypisovanie do DOM

    let para = document.createElement("p");
    para.textContent = myArrayFromLSJSON[myArrayFromLSJSON.length - 1];

    document.querySelector('#myUsers').appendChild(para);

})


//vziat users z LS (so skladu)
let myPresentArray = localStorage.getItem('novyZ');
//cez vratnicu; pase je vonku
let myPresentArrayJ = JSON.parse(myPresentArray);
if (myPresentArrayJ !== null) {
    //dat to do DOMka
    myPresentArrayJ.forEach(function (oneUser) {
        let para = document.createElement('p');
        para.textContent = oneUser
        //chyt si IDsko + ostavec
        document.querySelector('#myUsers').appendChild(para);
    })


}



//ulozenie formulara
let myForm = document.querySelector("#testForm");

if (localStorage.getItem('criminals') == null) {
    var myArray = [];
} else {
    myArray = JSON.parse(localStorage.getItem("criminals"));
}

//odoslanie formulara
myForm.addEventListener('submit', function (e) {
    e.preventDefault();

    //ulozenie hodnot napr.do pola
    myArray.push({
        id: "",
        firstName: e.target.elements.firstName.value,
        secondName: e.target.elements.secondName.value,
        crime: e.target.elements.crime.value
    });


    e.target.elements.firstName.value = '';
    e.target.elements.secondName.value = '';
    e.target.elements.crime.value = '';

    //chcem ist do LS a musim ist cez vratnicu
    //stryngify - previest na string
    myArrayJSON = JSON.stringify(myArray)
    //console.log(myArrayJSON);
    localStorage.setItem("criminals", myArrayJSON);
});

//vypisovanie spat do stranky
let toList = document.querySelector(".to-list");

toList.addEventListener("click", function () {
    //vytiahnut data z LS

    if (localStorage.getItem("criminals") == null) {
        //ak je prazdna - null
        let para = document.createElement("p");
        para.textContent = "Databaza zlocincov je prazdna";
        document.querySelector(".list-criminals").appendChild(para)

    } else {
        // vypisuje sa to ak je to v LS
        let myStorage = localStorage.getItem("criminals");
        //vytiehnute so skladu (vid. hore)
        //cez vratnicu
        let myStorageJSON = JSON.parse(myStorage);
        document.querySelector(".list-criminals").innerHTML = '';
        //console.log(myStorageJSON);
        //ak nie je prazdna, cize nie je null
        myStorageJSON.forEach(function (ulozTu) {
            let para = document.createElement('p');

            para.innerHTML = `
            Meno: ${ulozTu.firstName}, <br>
            Priezvisko: ${ulozTu.secondName}, <br>
            Nazov cinu: ${ulozTu.crime}`


            para.classList.add("basic-styles");

            document.querySelector(".list-criminals").appendChild(para);

        })
    }
});



//109 video FILTROVANIE

//zistit input, co tam pise

let nameFilter = document.querySelector(".name-filter");

//console.log(nameFilter);
//vytiahnut data, aby som vedal co tam uz je
let myStorage = localStorage.getItem("criminals");
//hore myStorage - vytiahnli sme string
//teraz je potrebne to vytiahnut cez vratnicu
let myStorageJSON = JSON.parse(myStorage);
//v myStorageJSON su data z LS
//console.log(myStorageJSON);


//zistit co tam pise - co hlada
nameFilter.addEventListener("input", function (e) {
    let whatWeSearch = e.target.value;

    //potrebujem zobrat obsah LS cize co je v myStorageJSON
    let ourResults = myStorageJSON.filter(function (oneC) {
        return oneC.firstName.toLowerCase().includes(whatWeSearch.toLowerCase())
    });


    // console.log(ourResults);
    document.querySelector(".filter-name").innerHTML = '';
    document.querySelector(".list-criminals").innerHTML = '';

    ourResults.forEach(function (oneC) {

        let para = document.createElement("p");
        para.innerHTML =
            `Meno ${oneC.firstName},<br>
        Priezvisko: ${oneC.secondName}<br>,
        Zlocin: ${oneC.crime}`;

        document.querySelector(".filter-name").appendChild(para);

    })

});



//Resume Video 100 - 110


//21. Nove pole, podmienka, aby sa neprepisal LS
//21. LS ziskaj mi polozku (getItem) a ak nie je tam nic ziaden zaznam (null)
//21. je tam prazdne pole - cize null, vytvor mi prazdne pole myArray
if (localStorage.getItem("users") == null) {
    //24. prepis z let na var
    var myArray = [];
    //22. Pokial tam nie je prazdne pole. Zober myArray, z vratnice
    //vytiahni z vratnice LS ....
} else {
    myArray = JSON.parse(localStorage.getItem('users'));
}

//3. 'urobenie pola 'aby sa mal kde ukladat text z inputu.
//let myArray = [];

//1. chytime si nas formular
let myForm = document.querySelector("#test-form");
//2. zober formular a prilep eventListener, sleduje 'udalost' submit, odoslanie formulara
myForm.addEventListener("submit", function (e) {
    e.preventDefault();
    //4. vlozim do pola hodnotu z inputu
    //5. nemozem let myArray z dovodu steleho prepisovania
    //5.preto pouzijem push() - prida vzdy ako poslednu polozku do pola
    myArray.push(e.target.elements.firstName.value);
    //6. Ulozenie 'do skladu' musime ist najprv cez vratnicu - JSON, preved vsetko na stringy (stringify)
    myArrayToLS = JSON.stringify(myArray);
    //7. Preslo to cez vratnicu a je to v myArrayToJS
    //7. Z 'vratnice' musim ulozit do skladu
    //7.Vytvor/updatni usera a hod tam (do myArrayToLS) napr. davida
    localStorage.setItem("users", myArrayToLS);

    //8. Vymazanie inputu v DOMku
    e.target.elements.firstName.value = '';

    //9. Dostat data z LS getItem - data sme vytiahli Vonku z LS!!!
    let myArrayFromLS = localStorage.getItem("users");

    //10. Musime prejst cez vratnicu
    let myArrayFromLSJSON = JSON.parse(myArrayFromLS);

    //11. Za 'vratnicou'
    let para = document.createElement("p");
    //12. vypis do DOM, posledneho prvku
    //myArrayFromLSJSON - co sme preniesli cez 'vratnicu'
    //zistime ten posledny prvok
    para.textContent = myArrayFromLSJSON[myArrayFromLSJSON.length - 1];
    //13. V HTML urobim div s #my-users
    //14. vyberam si ten div co som urobil v 13.
    document.querySelector('#my-users').appendChild(para);

})

//15. Bez ohladu na Odoslanie
//16. getItem ziskat polozku (users vytahujem vonku)
let myPresentArray = localStorage.getItem("users");
//17. Cez vratnicu
myPresentArrayJSON = JSON.parse(myPresentArray);
//console.log(myPresentArrayJSON);

//23. problem pri LS ak je uplne prazdny (hodnota je null)
//23. preto musim da podmienku, rob to vtedy, ked tam nieco je resp.nie je
if (myPresentArrayJSON !== null) {
    //18. Vyberiem z pola a damvam do DOM odstavcov
    //18. Prechadza polom a v oneU je ulozene jeden user
    myPresentArrayJSON.forEach(function (oneU) {
        let para = document.createElement('p');
        //19. Ukladame tam usera
        para.textContent = oneU;
        //20. Budeme chciet vypisovat do div, takze cez jeho ID
        document.querySelector("#myUsers").appendChild(para);
    })

}

*-*-*-***-*--*-*-*-*-*-*-*-*-*-*-*


//Videa 104 - 110

// Pridanie v domku, nadpis h1, a inputy

// 1. Premenna form (myForm), vyberieme id formulara 
let myForm = document.querySelector("#test-form");

//7. Kvoli vymazaniu polozky z browseru, usime dat podmienku
//7.skus z LS vybrat criminals(getItem), ak tam nic nie je (null), vytvor mi pole
if (localStorage.getItem('criminals') == null) {
    var myArray = [];
    //8. Ale ak uz su tam 'criminals' potom, vytiahnem to z LS
    //8. a musi to prejst cez 'vratnicu' (-JSON....), vytahujeme to vonku (parse)
} else {
    myArray = JSON.parse(localStorage.getItem("criminals"));
}

//4. vytvorenie pola, bude sa plnit z bodu 3.
//let myArray = [];



//2. pridame event listener, ak dojte k submite/odoslat, spust funkciu
myForm.addEventListener("submit", function (e) {
    e.preventDefault();

    //3. Hodnoty z inputov je potrebne ulozit do premennej. dame objekt
    //3.Push - pridanie na koniec pola
    myArray.push({
        //3.hodnoty z inputov
        id: "",
        firstName: e.target.elements.firstName.value,
        secondName: e.target.elements.secondName.value,
        crime: e.target.elements.crime.value

    })

    //20. vymazanie policka - inputu po stlaceni bttn Vypis
    e.target.elements.firstName.value = '';
    e.target.elements.secondName.value = '';
    e.target.elements.crime.value = '';

    //5. Ulozenie do LS
    //5. Idem do LS musim ist cez vratnicu - JSON, previest na string (cize text)
    myArrayJSON = JSON.stringify(myArray);
    //6. V LS nastav/updatuj polozku setItem napr. criminals, uloz to myArrayJSON
    localStorage.setItem("criminals", myArrayJSON);

})
//vypisovanie spat do stranky
//9. DO domka som doplnil button a divko
//10. Vybratie clasy to-List z DOMka
let toList = document.querySelector(".to-list");
//11. toListu pridame event Listener, aby sa po klikniti zacalo vypisovat
toList.addEventListener("click", function () {

    //24. Pri uplne novej stranke kde v LS nic nie je klikneme na bttn Vypis
    //24. nezobrazi sa mi nic. a preto je potrebne:
    //24. ak sa v LS v criminals = nic (null) prebehne kod "Nic tam..."
    //24. Ak LS ma obsah, vykona sa kod za else

    if (localStorage.getItem('criminals') == null) {
        //22. Ak v Ls nie su data 
        let para = document.createElement('p');
        para.textContent = "Nic tam nie je.";
        //23.Treba to vypisat na DOMko, chytime si 'list-criminals
        document.querySelector('.list-criminals').appendChild(para);
    } else {

        //12. Vytiahnut data z LS do premennej myStorage...
        //vytiahli sme to so skladu
        let myStorage = localStorage.getItem("criminals");
        //13. Nutne previes cez vratnicu
        myStorageJSON = JSON.parse(myStorage);

        //19. Vymazanie predchadzajuceho zaznamu v DOMku po stlaceni tlacitka 'Vypis'
        //19. Vyberiem div kde su criminals
        document.querySelector(".list-criminals").innerHTML = "";



        //14. myStorageJSON je pole objektov
        //15. forEach zoberie cele pole teda 0-teho a ulozi ho do premennej (oneCriminal)
        myStorageJSON.forEach(function (oneCriminal) {
            //16. Vytvorime odstavec
            let para = document.createElement('p');
            //17. Zoberiem si novy p a pridam innerHTML (co chcem vypisat)
            para.innerHTML = `Meno: ${oneCriminal.firstName}, Druhe meno: ${oneCriminal.secondName}`;

            //21. Pridanie stylu z style css
            //Dame paragraf, pozri sa (pridaj) clasu
            para.classList.add("basic-style")

            //18. Odstavec zoberieme a dame ho do div-ka v DOM 
            document.querySelector(".list-criminals").appendChild(para);
        });

    }

});

//25. Filtrovanie
//26. Pridane do DOMka input name filter a div-ko s klasom 'filter-name'
//27. Musime chytit input name-filter - musime zistit, co ten clovek tam pise
//28. premenna a potom vyber 
let nameFilter = document.querySelector('.name-filter');
//29. Vytiahnut data z LS aby sme vedeli co tam je pre vyhladavanie....
//29. Vytahujeme najprv string
let myStorage = localStorage.getItem("criminals");
//30. Prechadzat cez vratnicu ..
let myStorageJSON = JSON.parse(myStorage);
//31. Musime zistit, co ten clovek vyhladava/zadava
nameFilter.addEventListener("input", function (e) {
    //32. Tu piseme co sa ma spustit/vykonat, ked tam niekto zacne pisat (containt)
    let whatWeSearch = e.target.value;

    //33. Tu si potrebujem ulozit co je v LS, ale uz je to vyfiltrovane 'whatWeSearch
    //33. Potrebujem si 'zobrat' to co je v LS (vysledky) cize v 'myStorageJSON' podla mena
    let ourResults = myStorageJSON.filter(function (oneC) {
        //34. Vytiahni z LS krstne meno - first name z oneC; preved ho na male pismena
        //34. A potom ci zahrna clov. co pise do policka?
        return oneC.firstName.toLowerCase().includes(whatWeSearch.toLowerCase());
    });

    //console.log(ourResults);

    //35. v ourResult mame vypisane vysledky (do div s class filter-name), ktore musime zobrat a vypisat v DOMku
    //36. ourResults je pole objektov, kore chcem PRECHADZAT si
    ourResults.forEach(function (oneCriminal) {
        //37. vytvorime paragraf, aby sme mali kde ukladat oneCriminal data z pola
        let para = document.createElement('p');
        //38. musime to potom do toho odstavca pridat
        para.innerHTML = `meno: ${oneCriminal.firstName},<br> priezvisko: ${oneCriminal.secondName}<br>, zlocin: ${oneCriminal.crime}`;
        document.querySelector('.filter-name').appendChild(para)


    });
});
*--*-*-*-*-*

*/




