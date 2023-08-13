const touches = [...document.querySelectorAll('.bouton')];
const keyCode = touches.map(element => element.dataset.key);
const ecran = document.querySelector('.ecran');

document.addEventListener('keydown', (e) => {
    const value = e.keyCode.toString();
    calculer(value);

});


document.addEventListener('click', (e) => {
    const value = e.target.dataset.key;
    calculer(value);
})

const calculer = (value) => {
    if(keyCode.includes(value)){
        switch(value){
            case '8':
                ecran.textContent = '';
                break;
            case '187':
                const calcul = eval(ecran.textContent);
                ecran.textContent = calcul;
                break;
            default:
                const indexKeyCode = keyCode.indexOf(value);
                const touche = touches[indexKeyCode];
                ecran.textContent += touche.innerHTML;
                ecran.classList.add('content__screen')
            }
        }
    }

window.addEventListener('error', (e) => {
    alert('Calcul impossible : ' + e.message)
})