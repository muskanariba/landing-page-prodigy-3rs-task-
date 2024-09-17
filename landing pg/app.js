// function createstars(){
//     const starscontainer = document.getElementById('stars')
//     const windowwidth = window.innerWidth
//     const windowheight = window.innerHeight

//     for(let i = 0; i<100; i++){
//         const star = document.createElement('div')
//         star.className = 'star'
//         star.style.left = `${Math.random() * windowwidth}px`
//          star.style.top = `${Math.random() * windowheight}px`
//          starscontainer.appendChild(star)
//     }
// }
// window.addEventListener('load' ,createstars)

const burgerimages = document.querySelectorAll('.burger img')
const toggleimages = document.querySelectorAll('.burgertoggle img')
let currentindex = 0;
toggleimages[currentindex].classList.add('active');

burgerimages.forEach((img,index) =>{
    img.addEventListener('click' , ()=>{
        toggleimages.forEach((toggleimg) => toggleimg.classList.remove('active'))
        toggleimages[currentindex].classList.add('active');
        toggleimages[currentindex].src = burgerimages[index].src;
        currentindex = (currentindex+1) % toggleimages.length;
    })
})