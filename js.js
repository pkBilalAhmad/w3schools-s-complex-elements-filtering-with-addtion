filter('all')
function filter(argu) {
    if (argu == 'all') argu = ''
    let elements = document.getElementById('divs');
    let divList = elements.getElementsByTagName('div');
    for (let i = 0; i < divList.length; i++) {
        removeClass(divList[i], 'show')
        if (divList[i].className.indexOf(argu) > -1) {
            addClass(divList[i], 'show')
        }
    }
}
function addClass(element, myClass) {
    if (element.className.indexOf(myClass) == -1) {
        element.className += ' ' + myClass
    }
}
function removeClass(element, myClass) {
    if (element.className.indexOf(myClass) > -1) {
        element.className = element.className.replace(' show', '')
        // element.style.display = 'none'
    }
}
let btns = document.getElementById('btnDiv')
let btnList = btns.getElementsByTagName('button')
for (let i = 0; i < btnList.length; i++) {
    btnList[i].addEventListener('click', function () {
        let activeBtn = btns.getElementsByClassName('active')
        activeBtn[0].className = activeBtn[0].className.replace(' active', '')
        this.className += ' active'
        console.log(activeBtn)
    })
}
