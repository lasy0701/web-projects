let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

let iceCream = 'chocolate';
// if (iceCream === 'chocolate') {
//   alert('我最喜欢巧克力冰激淋了。');    
// } else {
//   alert('但是巧克力才是我的最爱呀……');    
// }

// document.querySelector('html').onclick = function() {
//     alert('别戳我，我怕疼。');
// }
document.querySelector('h1').onclick = function() {
    alert('好嗨哟，感觉人生已经到达了巅峰');
}

function setHeading(name) {
    let myHeading = document.querySelector('h1');
    myHeading.textContent = '卧槽 酷毙了，' + name + '！';
  }

  function setUserName() {
    let myName = prompt('请输入你的名字');
    localStorage.setItem('name', myName);
    setHeading(myName);
  } 

  let storedName = localStorage.getItem('name');
  if(!storedName) {
     setUserName();
  } else {
     setHeading(storedName);
  }
  
  let myButton = document.querySelector('button'); 
  myButton.onclick = setUserName;