// write your code here
// 1. Create div variable to append the ramen objects to 
// 2. Create a get fetch request
// 3. Append the fetched objects to the div
// 4. Make to do list but with ramen

// const body = document.getElementById('ramen-menu')

// // console.log(div)
// function grabRamens () {
//     return fetch('http://localhost:3000/ramens')
//     .then(resp => resp.json())
//     .then(data =>  console.log(data))
// }
// // console.log(grabRamens())
// grabRamens()
// const createImg = () => {
//     const tag = document.createElement('img')
//     body.append(tag)
//     tag.id = 'HERE'
//     tag.textContent = grabRamens
// }
// createImg();



const ramenDiv = document.getElementById('ramen-menu')
function findForm (){
    const form = document.getElementById('new-ramen')
    form.addEventListener('submit',(e) => {
    e.preventDefault()
    // console.log(e.target.getElementById)
    const name = e.target['new-name'].value
    const restaurant =e.target['new-restaurant'].value
    const image =e.target['new-image'].value
    const rating =e.target['new-rating'].value
    const comment =e.target['new-comment'].value
    makeNew(name,restaurant,image,rating,comment)
})
}
// make list
const makeNew = (str1,str2,img1,num1,str3) => {
    let p = document.createElement('p')
    let obj = {
        name: str1,
        restaurant: str2,
        image: img1,
        rating: num1,
        comment:str3,
    }
    console.log(obj)
    p.textContent = obj
    ramenDiv.append(p)
}

// "id": 5,
//       "name": "Kojiro Red Ramen",
//       "restaurant": "Ramen-Ya",
//       "image": "./assets/ramen/kojiro.jpg",
//       "rating": 6,
//       "comment": "Perfect for a cold night."

findForm()
