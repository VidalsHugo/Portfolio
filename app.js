let header = document.getElementById('header');
let menu = document.getElementById('menu');
let content = document.getElementById('content');
let showSidebar = false;

function toggleSidebar(){
    showSidebar = !showSidebar;
    if(showSidebar){
        menu.style.marginLeft = '-10vw';
        menu.style.animationName = 'showSidebar';
        content.style.filter = 'blur(2px)';
    }else{
        menu.style.marginLeft = '-100vw';
        menu.style.animationName = '';
        content.style.filter = '';
    }
}

function closeSidebar(){
    if(showSidebar){
        toggleSidebar();
    }
}

window.addEventListener('resize', function(event){
    if(this.window.innerWidth > 768 && showSidebar){
        toggleSidebar();
    }
});

let count = 0;
//VerMais
let button = document.getElementById('verMais');

button.addEventListener('click', function(){
    count +=1;
    let container = document.getElementById('container');
    let botao = document.getElementById('verMais');

    container.classList.toggle('hide');

    if(count == 1){
        botao.innerText = 'Ver menos';
    }else{
        count = 0;
        botao.innerText = 'Ver mais';
    }

})

