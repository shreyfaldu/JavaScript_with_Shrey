# Projects related to DOM

## Project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode-t6vspd?file=index.html)

# Solution Code

## Project 5

```javascript
const insert = document.getElementById('insert')

window.addEventListener('keydown',(e) => {
  insert.innerHTML = `
  <div class='color'>
  <table>
  <tr>
    <th>key</th>
    <th>keyCode</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${e.key === ""?"Space":e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
  
</table>
  </div>
  `
})

```

## Project 6

```javascript
const randamColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let intevalId;
const startchnagingcolor = function () {
  if (!intevalId) {
    intevalId = setInterval(chnageBGColor, 1000);
  }

  function chnageBGColor() {
    document.body.style.backgroundColor = randamColor();
  }
};

const stopchnagingcolor = function () {
  clearInterval(intevalId);
  intevalId = null;
};

document.querySelector('#start').addEventListener('click', startchnagingcolor);

document.querySelector('#stop').addEventListener('click', stopchnagingcolor);


```

