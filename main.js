var lengthData
var datas
var temp
var co2
var no
var no2
var hygrom




fetch('https://data.ratp.fr/api/records/1.0/search/?dataset=qualite-de-lair-mesuree-dans-la-station-chatelet&q=&facet=dateheure')
    .then(res => res.json())
    .then(data => {
        getdata(data);
    })


function getdata(data) {
    lengthData = data.records.length;

    for (var i = 0; i < lengthData; i++) {
        datas = data.records[i].fields;
        temp = datas.tcha4;
        co2 = datas.c2cha4;
        no = datas.nocha4;
        no2 = datas.n2cha4;
        hygrom = datas.hycha4;

        createCard(temp * 4, "graph-temp")
        createCard(co2 / 8, "graph-co2")
        createCard(no * 2, "graph-no")
        createCard(no2 * 2, "graph-no2")
        createCard(hygrom, "graph-hygrom")
    }
}


function createCard(info, className) {

    var span = document.createElement('div');
    span.className = "spanTest";
    span.setAttribute("aria-label", info+"%")
    span.style.height = info + "%";
    var card = document.getElementById(className)
    card.appendChild(span)

}


var arrowUp = document.getElementById("arrow-up");
arrowUp.addEventListener("click", function(){
    // var btnAuber = document.getElementsByClassName("btn-auber")
    // var btnChatelet = document.getElementsByClassName("btn-chatelet")
    // var btnPantin = document.getElementsByClassName("btn-pantin")
    
    // btnAuber.style.display="block"
    // btnChatelet.style.display="block"
    // btnPantin.style.display="block"
    var menuToggle = document.getElementsByClassName("menu-static")
    var toggle = document.getElementsByClassName("display-btn-fixed")
    console.log(toggle)
    if(toggle.length == 0){

        menuToggle.classname="display-btn-fixed"
        console.log(menuToggle)
    }else{
        menuToggle.className.remove="display-btn-fixed"
    }
    

    // btnAuber.className="display-btn-fixed"
})