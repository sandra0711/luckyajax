document.addEventListener('DOMContentLoaded', event => {
  const cube = document.forms.roll;
  let die = document.querySelector('#die-container');

  cube.addEventListener('submit', async (event) => {
    event.preventDefault();
    const { sides } = event.target;
    console.log(sides);
    console.log(sides.value);
    const action = '/rolls';
    const method = 'POST';
    responce = await fetch(action, { // в responce прилетает ответ от сервера
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({       //json
        sides: sides.value,
      }),
      
    });
    console.log(responce);
    const data = await responce.json();
    console.log(data);
    die.innerHTML =  `
    <div class="die">
    <span class="roll">
    ${data.roll} 
    </span>
    </div>
    `;
  });
      
});

