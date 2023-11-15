const ApiKey='e9da46f53405ea3fb5d435f3e25f568e'

// acccessing all the html elements


const input= document.getElementById('inputval')
const btnele=document.getElementById('btn')
const discription=document.getElementById('description')
const tempele=document.getElementById('temp')
const Location=document.getElementById('location')

// adding the event listeners to button ele
btnele.addEventListener('click',(e)=>{
    // condition for checking weather user entered  a locatoin
    if(input.value==''){
        alert('enter the location')
    }else{
        // store the location entered by user
        let Loc=input.value
    
    // store the location entered by user
    // let loc=input.value
    // api url 
    url=`https://api.openweathermap.org/data/2.5/weather?q=${Loc}&appid=${ApiKey}`
    fetch(url)

    // fetch method to fetch the location weather details
    // fetch(url)

    .then((data)=>data.json())
    .then(da=>{
        console.log(da)
        // object distructuring
        const {name}=da;
        const {feels_like}=da.main;
        const {description}=da.weather[0];

        // assigning the values to html elements
        Location.innerText=name
        tempele.innerText=Math.round(feels_like-273)
        discription.innerText=description

    
    })
    .catch(()=>{
           alert('Enter Proper Location Area')
    })
}
})
