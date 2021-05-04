const root = document.querySelector(':root');
let theme = 1
function changeVariable(){
  if (theme === 1){
    root.style.setProperty('--text-primary', '#1f1f1f');
    root.style.setProperty('--text-secondary', '#000000');
    root.style.setProperty('--bg-primary', '#ffffff');
    root.style.setProperty('--bg-secondary', '#e4e4e4');
    theme = 0;
  }else{
    root.style.setProperty('--text-primary', '#b6b6b6');
    root.style.setProperty('--text-secondary', '#ececec');
    root.style.setProperty('--bg-primary', '#23232e');
    root.style.setProperty('--bg-secondary', '#141418');
    theme = 1;
  }
}

const changeTheme = document.querySelector('#changetheme')

changeTheme.addEventListener('click', changeVariable)