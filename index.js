function toggleMenu() {
    const menu = document.querySelector('.side-menu');
    menu.classList.toggle('show-menu');
}

// Front-End Mentor Challenges
let test_data =[
    {
        image:"profilecard.jpg",
        text_content:"Profile-Card-Component"
    },
    {
        image:"productcard.jpg",
        text_content:"Product-preview-card-component"
    },
    {
        
        image:"3columnpreview.jpg",
        text_content:"3-column-preview-card-component"
    }
]
let data0 = 0
let image = document.querySelector(".image")
let text_content = document.querySelector(".cont")
function testimonial(){
    let current =test_data[data0]
    image.src = current.image
    text_content.innerHTML = current.text_content
    data0++
    
    if(data0===test_data.length){
        data0 = 0
    }
}
setInterval(()=>{testimonial()},2000);
testimonial()

// internship project
let test =[
    {
        image1:"port.png",
        content:"Portfolio Website",
        desc:"A personal portfolio has been created to showcase skills and projects.",
        link:"index.html",
        name:"Visit Portfolio Page.." 
    },
    {
        image1:"intern.png",
        content:"Handicap Website",
        desc:"Developed an accessible website for individuals with disabilities." ,
        link:"https://github.com/BharathKarthick/class-programs/tree/main/handycap",
        name:"Visit Handicap Page.."
    },
]

let data1 = 0
let image1 = document.querySelector(".image1")
let content = document.querySelector(".conte1")
let desc = document.querySelector(".inter")
let link = document.querySelector(".lin")
let name = document.querySelector(".linkbu1")

function testi(){
    
    let current =test[data1]
    desc.innerHTML = current.desc
    image1.src = current.image1
    content.innerHTML = current.content
    link.href = current.link
    name.innerHTML =current.name
    data1++
    
    if(data1===test.length){
        data1 = 0
    }
}

setInterval(()=>{testi()},2000);
testi()


let test1 =[
    {
        image2:"project\ 1.png",
    },
    {
        image2:"project\ 2.png",
    },
    {
        
        image2:"project\ 3.png",
    }
        

]

let data2 = 0
let image2 = document.querySelector(".image2")

function testimo(){
    let current =test1[data2]
    image2.src = current.image2
    data2++
    
    if(data2===test1.length){
        data2 = 0
    }
}

setInterval(()=>{testimo()},2000);
testimo() 



// contact form error message

function validateSubmit() {
    // Remove previous error messages
    let errorMessages = document.getElementsByClassName('error');
    while (errorMessages.length > 0) {
        errorMessages[0].remove();
    }

    let isValid = true; 
    let username = document.getElementById("name");
    let email = document.getElementById("mail");
    let number = document.getElementById("number");

    // Validate username
    if (username.value.trim() === "") {
        displayError(username, "Username is required");
        isValid = false;
    }

    // Validate email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email.value.trim() === "") {
        displayError(email, "Email is required");
        isValid = false;
    } else if (!emailPattern.test(email.value)) {
        displayError(email, "Please enter a valid email address");
        isValid = false;
    }

    // Validate phone number (must be exactly 10 digits)
    const phoneNumberPattern = /^\d{10}$/;
    if (number.value.trim() === "") {
        displayError(number, "Phone Number is required");
        isValid = false;
    } else if (!phoneNumberPattern.test(number.value)) {
        displayError(number, "Number must be exactly 10 digits");
        isValid = false;
    }
    return isValid; 

    // Display error message
    function displayError(field, message) {
        field.value = "";
        field.placeholder = message;
        field.style.borderColor = "red";
    }
}