document.addEventListener('DOMContentLoaded', event => {
  const cube = document.forms.roll;
  let die = document.querySelector('#die-container');

  cube.addEventListener('submit', async (event) => {
    event.preventDefault();
    const { sides } = event.target;
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
    die.innerHTML =  `
    <div class="die">
    <span class="roll">
    ${data.roll} 
    </span>
    </div>
    `;
    
    console.log('---------', die.innerHTML);
    //     if (responce.status === 500) return alert('Error: Status 500'); // обработка ошибок
      
    //     data = await responce.json(); // извлечение данных из body
      
    //   } catch (error) {
    //     alert(`Что то пошло не так - ${error.message}`);
    //   }
  });
      
      //   let li = document.createElement('li');
      //   li.innerHTML = `<a href="/posts/${data.id}">${postTitle.value}</a>`;
      //   list.appendChild(li);
      

  // 4 - когда сообщение AJAX готово, отображаем новый бросок кубика

});




// из лекции
// const newPost = document.forms.newPost;
// const list = document.querySelector('.postlist');

// newPost.addEventListener('submit', async (event) => {
//   event.preventDefault();
//   const { postTitle, postText, tags } = event.target;
//   let data, responce;
//   const action = '/posts/createPost';
//   const method = 'POST';
//   try {
//       //запрос на сервер по адресу action с пом ф-ии fetch
//     responce = await fetch(action, { // в responce прилетает ответ от сервера
//       method: method,
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({       //json
//         postTitle: postTitle.value,
//         postText: postText.value,
//         tags: tags.value,
//       }), 
//     });
//     console.log(responce);
    
//     if(responce.status === 500) return alert('Error: Status 500'); // обработка ошибок

//     data = await responce.json(); // извлечение данных из body

//   } catch (error) {
//       alert(`Что то пошло не так - ${errorr.message}`);
//   }

//   let li = document.createElement('li');
//   li.innerHTML = `<a href="/posts/${data.id}">${postTitle.value}</a>`;
//   list.appendChild(li);

//   //очищаем поля ввода
//   newPost.postTitle.value = '';
//   newPost.postText.value = '';
//   newPost.tags.value = '';
// });






// было
// document.addEventListener('DOMContentLoaded', event => {

//   // PSEUDO-код:
//   // 1 - перехватить событие отправки формы
//   // 2 - предотвратить действие по умолчанию для этого события
//   // 3 - отправить AJAX-сообщение на сервер
//   // 4 - когда сообщение AJAX готово, отображаем новый бросок кубика

// });
