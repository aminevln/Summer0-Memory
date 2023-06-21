function start(){
    let ulTemi = document.getElementById('ulTemi')
    for(let i=0; i<3; ++i){
        let li = document.createElement('li')
        let li2 = document.createElement('li')
        li.classList.add('liThemes')
        li2.classList.add('liThemes')
        let img = document.createElement('img')
        img.src = "/img/theme"+i.toString()+'.jpg'
        img.name = i.toString()
        img.classList.add('imgThemes')
        img.addEventListener('click', function(){
            creaCard(img);
        });
        let tt = document.createElement('p')
        tt.classList.add('ttthm', 'mt-3')
        switch(i){
            case 0:
                img.style.border = "3px solid #fff"
                tt.textContent = "Woody Wood"
                tt.style.color = "#fff"
            break;
            case 1:
                tt.textContent = "Space Cadet"
            break;
            case 2:
                tt.textContent = "Coding!!"
            break;
        }
        li2.appendChild(tt)  
        li.appendChild(img)
        ulTemi.appendChild(li2)
        ulTemi.appendChild(li)
    }
}
function creaCard(img){
    let themes = document.getElementsByClassName('imgThemes')
    for(let i=0; i<themes.length; ++i)
        themes[i].style.border = "0px solid #fff"
    img.style.border = "3px solid #fff"
    switch(img.name){
        case 0: 
            wood();
        break;
        case 1:
            space();
        break;
        case 2:
            code();
        break;
    }
}
function wood(){
    
}