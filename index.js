let test_data =[
    {
        name:"Spider Man",
        image:"https://th.bing.com/th/id/R.eb0668158bb91f5e37836a6c87ce1075?rik=S%2fy0hJeFrpj9pg&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fspider-man-transparent-background%2fspider-man-transparent-background-11.png&ehk=Oi%2fOX%2bpv8w2GwurZHI3e6gXSNSaurXYfaFjCS5OuxEg%3d&risl=&pid=ImgRaw&r=0",
        text_content:"Spider-Man is a superhero in American comic books published by Marvel Comics.Created by writer-editor Stan Lee and artist Steve Ditko."
    },
    {
        name:"Iron Man",  
        image:"https://pngfre.com/wp-content/uploads/Iron-man-63.png",
        text_content:"Iron Man is a superhero appearing in American comic books published by Marvel Comics. Co-created by writer and editor Stan Lee, developed by scripter Larry Lieber"
    },
    {
        name:"Hulk",
        image:"https://i.ebayimg.com/images/g/DCcAAOSwuAVcfDyd/s-l1200.webp",
        text_content:"The Hulk is a superhero appearing in American comic books published by Marvel Comics. Created by writer Stan Lee and artist Jack Kirby. "
    }
        

]

let data = 0
let name = document.querySelector(".name")
let image = document.querySelector(".image")
let text_content = document.querySelector(".content")

function testimonial(){
    let current =test_data[data]
    name.innerHTML = current.name
    image.src = current.image
    text_content.innerHTML = current.text_content
    data++
    
    if(data===test_data.length){
        data = 0
    }
}

setInterval(()=>{testimonial()},2000);
testimonial()