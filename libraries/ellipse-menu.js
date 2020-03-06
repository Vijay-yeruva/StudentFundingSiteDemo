let ellipsemenu = document.getElementById('ellipse-menu');
let pic = ellipsemenu.getElementsByTagName("image")[0];
let button1 = document.getElementById("embutton1");
let button2 = document.getElementById("embutton2");
let button3 = document.getElementById("embutton3");
let button4 = document.getElementById("embutton4");
let button5 = document.getElementById("embutton5");
let button6 = document.getElementById("embutton6");
let desc = document.getElementById("ellipse-item-desc");

function displayDesc(button)
{
    button.classList.toggle("clicked");
    switch(button.id){
        case "embutton1":
            desc.innerHTML = "Fellowships provide unique opportunities to conduct novel research,"+
                             "teach in a classroom, provide community service, or even work in "+
                             "a public or private sector organization positioning you for future success";
            break;
        case "embutton2":
            desc.innerHTML = "Mentorship will provide important opportunities strengthen your" + 
                             "skills and knowledge, while providing  professional socialization and networking"+
                             " and personal support";
            break;
        case "embutton3":
            desc.innerHTML = "These awards shine a light on your talents and abilities, while"+
                             " enabling you to establish new connections, build confidence, and create new "+
                             "opportunities for future growth";
            break;
        case "embutton4":
            desc.innerHTML = "Opportunity to acquire new knowledge and skills to enhance your transition"+
                             " from to further your education or to pursue a future profession";
            break;
        case "embutton5":
            desc.innerHTML = "Fellowships/assistantships provide opportunities for first-hand experience "+
                             "in research, training, service or work in a real-life setting";
            break;
        case "embutton6":
             desc.innerHTML = "Winning an award provides significant financial support, tuition, travel "+
                              "support and/or more";
             break;
        default:
            desc.innerHTML = "";
    }
    pic.style.visibility = "hidden";
}

clear = function()
{
    desc.innerHTML = "";
    pic.style.visibility = "visible";
}

button1.onmousedown = function() {displayDesc(this)};
button2.onmousedown = function() {displayDesc(this)};
button3.onmousedown = function() {displayDesc(this)};
button4.onmousedown = function() {displayDesc(this)};
button5.onmousedown = function() {displayDesc(this)};
button6.onmousedown = function() {displayDesc(this)};