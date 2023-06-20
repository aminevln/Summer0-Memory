function start(){
    let ulTemi = document.getElementById('ulTemi')
    for(let i=0; i<3; ++i){
        let li = document.createElement('li')
        li.classList.add('liThemes')
        let img = document.createElement('img')
        img.src = "/img/theme"+i.toString()+'.jpg'
        img.classList.add('imgThemes')
        if(i==0)
            img.style.border = "3px solid #fff"
        li.appendChild(img)
        ulTemi.appendChild(li)
    }
}
