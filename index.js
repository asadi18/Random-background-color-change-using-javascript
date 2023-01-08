
const button = document.getElementById('btn');
const rgbaEl = document.getElementById('rgba');



button.addEventListener('click', function() {
  
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const alpha = Math.random(); 

  
  const hue = Math.floor(Math.random() * 361); 
  const saturation = Math.floor(Math.random() * 101); 
  const lightness = Math.floor(Math.random() * 101); 

  //Work with this line 
  const format = Math.random() < 0 ? 'hsl':'rgba' ;

  let randomColor;
    

  if (format === 'rgba') {
    
    randomColor = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
  } else {
    
    randomColor = `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`;
  }

  
  document.body.style.backgroundColor = randomColor;

  
  document.getElementById('color-code').textContent = 'The Color code is : ' + randomColor;
});































// const button = document.getElementById('btn');


// button.addEventListener('click', function() {
 
//   const red = Math.floor(Math.random() * 256);
//   const green = Math.floor(Math.random() * 256);
//   const blue = Math.floor(Math.random() * 256);
//   const alpha = Math.random(); 


//   const randomColor = `rgba(${red}, ${green}, ${blue}, ${alpha})`;

  
//   document.body.style.backgroundColor = randomColor;

// });






