const btn = document.querySelector('.btn')
const hexName = document.querySelector('.hexname')

function hexGenerator () {
  let hexRef = ['A','B','C','D','E','F',0,1,2,3,4,5,6,7,8,9];
  let result = "#" 
  for (let i=0; i<6; i++ ) {
  result += hexRef[Math.floor(Math.random()*hexRef.length)]
  }
  return result;
}

btn.addEventListener ('click', function (){
  document.body.style.backgroundColor = hexGenerator();
  hexName.textContent = "HEX COLOR :"+ hexGenerator();
})


