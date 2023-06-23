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
        let main = document.querySelector('main')
        main.innerHTML = creaTemi()
        let caseTemi = document.getElementsByClassName('caseTemi')
        for(let i=0; i<caseTemi.length; ++i){
            caseTemi[i].src = "/img/theme"+i.toString()+'.jpg'
            caseTemi[i].name = i.toString()
        }
    }
}
function creaTemi(){
    
    let a = 
    `
        <h1 class="BigText animate__animated animate__wobble">Benvenuto! Scegli il tuo tema</h1>
        <div class="padreTemi">
            <img onclick="setBG(this)" name="0" class="caseTemi animate__animated animate__wobble"></img>
            <img onclick="setBG(this)" name="1" class="caseTemi animate__animated animate__wobble"></img>
            <img onclick="setBG(this)" name="2" class="caseTemi animate__animated animate__wobble"></img>
        </div>
    `
    return a
}
function setBG(a){
    console.log(a.name)
    let bgs = document.getElementsByClassName('caseTemi')
    let h1 = document.querySelector('.BigText')
    h1.classList.replace("animate__wobble", "animate__backOutUp")
    for(let i=0; i<bgs.length; ++i){
        bgs[i].classList.replace("animate__wobble", "animate__backOutUp")
    }
    setTimeout(function(){
        creaCard(a)
    }, 1000)
}
function creaCard(img){
    let themes = document.getElementsByClassName('imgThemes')
    for(let i=0; i<themes.length; ++i)
        themes[i].style.border = "0px solid #fff"
    img.style.border = "3px solid #fff"
    console.log('wood')

    switch(img.name){
        case '0': 
            wood();
            setImg();
            setWood();
        break;
        case '1':
            space();
            setImg();

        break;
        case '2':
            code();
            setImg();

        break;
    }
}
function wood(){
    let he = document.getElementById('main')
    he.style.backgroundImage = "url(img/bwood.jpg)"
    let main = document.querySelector('main')
    main.innerHTML = creaCaselle()
    let caselle = document.getElementsByClassName('ctsm')
    for(let i=0; i<caselle.length; ++i){
        caselle[i].style.backgroundImage = 'url(img/theme0.jpg)'
        caselle[i].style.border = "4px solid burlywood"
    }
}
function setWood(){
    let caselle = document.getElementsByClassName('ctsm')
    
}
function setImg(){
    let caselle = document.getElementsByClassName('ctsm')
    let aus = []
    let j
    for(let i=0; i<caselle.length; ++i){
        do{
            j=Math.floor(Math.random()*8)
        }while(!fnd(j, aus))
        caselle[i].id = j.toString()
        aus.push(j)
    }
    if(caselle[0].style.backgroundImage = 'url(img/theme0.jpg)'){
        caselle.addEventListener('click', ()=>{
            for(let i=0; i<caselle.length; ++i){
                switch(caselle[i].id){
                    case 0:
                        caselle[i].style.backgroundImage = 'url(wood/wood0.webp)'
                    break;
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                }
            }
        })
    }
}
function fnd(j, aus){
    let fnd = false;
    let i=0
    do{
        if(j==aus[i])
            fnd=true
        i++;
    }while(!fnd && i<aus.length)
    return !fnd
}
function space(){
    let he = document.getElementById('main')
    he.style.backgroundImage = "url(img/spacedark.jpg)"
    let main = document.querySelector('main')
    main.innerHTML = creaCaselle()
    let caselle = document.getElementsByClassName('ctsm')
    for(let i=0; i<caselle.length; ++i){
        caselle[i].style.backgroundImage = 'url(img/theme1.jpg)'
        caselle[i].style.border = "4px solid rgb(151, 151, 205)"
    }
}
function code(){
    let he = document.getElementById('main')
    he.style.backgroundImage = "url(img/darkcoding.webp)"
    let main = document.querySelector('main')
    main.innerHTML = creaCaselle()
    let caselle = document.getElementsByClassName('ctsm')
    for(let i=0; i<caselle.length; ++i){
        caselle[i].style.backgroundImage = 'url(img/theme2.jpg)'
        caselle[i].style.border = "4px solid #fff"
    }
}
function creaCaselle(){
    let a = 
    `
    <div class="container">
        <div class="row">
          <div class="container ctsm animate__animated animate__pulse"></div>
          <div class="container ctsm animate__animated animate__pulse"></div>
          <div class="container ctsm animate__animated animate__pulse"></div>
          <div class="container ctsm animate__animated animate__pulse"></div>
        </div>
        <div class="row">
          <div class="container ctsm animate__animated animate__pulse"></div>
          <div class="container ctsm animate__animated animate__pulse"></div>
          <div class="container ctsm animate__animated animate__pulse"></div>
          <div class="container ctsm animate__animated animate__pulse"></div>
        </div><div class="row">
        <div class="container ctsm animate__animated animate__pulse"></div>
        <div class="container ctsm animate__animated animate__pulse"></div>
        <div class="container ctsm animate__animated animate__pulse"></div>
        <div class="container ctsm animate__animated animate__pulse"></div>
      </div><div class="row">
      <div class="container ctsm animate__animated animate__pulse"></div>
      <div class="container ctsm animate__animated animate__pulse"></div>
      <div class="container ctsm animate__animated animate__pulse"></div>
      <div class="container ctsm animate__animated animate__pulse"></div>
    </div>
      </div>
    `
    return a
}