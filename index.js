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
