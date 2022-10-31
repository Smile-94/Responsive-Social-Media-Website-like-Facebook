
let settingsMenu=document.getElementById('settingsMenu');
let darkButton=document.getElementById('dark-btn');

function settingsMenuToogle(){
    settingsMenu.classList.toggle('setting-menu-height');
}

darkButton.onclick=function(){
    darkButton.classList.toggle('dark-btn-on');
    document.body.classList.toggle('dark-theme');

    if(localStorage.getItem('theme')=='light'){
        localStorage.setItem('theme','dark')
    }else{
        localStorage.setItem('theme','light')
    }
}

if(localStorage.getItem('theme')=='light'){
    darkButton.classList.remove('dark-btn-on');
    document.body.classList.remove('dark-theme');
}else if(localStorage.getItem('theme')=='dark'){
    darkButton.classList.add('dark-btn-on');
    document.body.classList.add('dark-theme');  
}else{
    localStorage.setItem('theme','light')
}

