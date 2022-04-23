addEventListener('load', () => {
  const add = document.querySelector('.add');
 
  add.addEventListener('click', (e) => {
    const userInput = document.querySelector('.userInput');
    let inputText = userInput.value;

    if(!inputText) {
      alert('내용을 입력해주세요.');
      return;
    }

    const newLine = document.createElement('li');
    newLine.innerHTML = inputText + '<button class="del"></button>';

    const contentUl = document.querySelector('.content ul');

    contentUl.append(newLine);

    userInput.value = "";

  });

  document.addEventListener('keyup', (e) => {
    if(e.key === 'Enter' && e.target.className === 'userInput') {
      const userInput = document.querySelector('.userInput');
      let inputText = userInput.value;

      if(!inputText) {
        alert('내용을 입력해주세요.');
        return;
      }

      const newLine = document.createElement('li');
      newLine.innerHTML = inputText + '<button class="del"></button>';

      const contentUl = document.querySelector('.content ul');

      contentUl.append(newLine);

      userInput.value = "";
    }
    
  });

  document.addEventListener('click', (e) => {
    if(e.target && e.target.className === 'del') {
      e.target.parentNode.remove();
    }
  });
    
});

