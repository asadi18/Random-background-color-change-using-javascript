const button = document.getElementById('btn');
const rgbaEl = document.getElementById('rgba');
const changeColor = document.getElementById('changeColor')
let color = 'rgba'

changeColor.addEventListener("change", (e) => {
  color = e.target.value
  console.log(color)
})

button.addEventListener('click', () => {
  
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const alpha = Math.random().toFixed(2); 
  
  const hue = Math.floor(Math.random() * 361); 
  const saturation = Math.floor(Math.random() * 101); 
  const lightness = Math.floor(Math.random() * 101); 

  const rgba = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
  const hsla = `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`;

  const randomColor = color === 'rgba' ? rgba : hsla;
  document.body.style.backgroundColor = randomColor;
  document.getElementById('color-code').textContent = 'The Color code is : ' + randomColor;
});