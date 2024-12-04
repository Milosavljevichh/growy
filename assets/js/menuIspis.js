// MENI
const navBar  = document.querySelector('#navLinks')
const navHamburgerBar = document.querySelector('#navHamburgerLinks')
const navLinks = [
    {
        href:"index.html",
        text:"Home",
        currentlyActive: false
    },
    {
        href:"index.html#contactHeader",
        text:"Contact",
        currentlyActive: false
    },
    {
        href:"author.html",
        text:"Author",
        currentlyActive: false
    },
]
function createNavLink(link){
    const li = document.createElement('li')
    const a = document.createElement('a')
    a.href = link.href
    a.innerHTML = link.text
    li.appendChild(a)
    return li
}

if (navBar){
    let ul = document.createElement('ul')
    let ul2 = document.createElement('ul')
    for (let i = 0;i<navLinks.length;i++){
        ul.appendChild(createNavLink(navLinks[i]))
        ul2.appendChild(createNavLink(navLinks[i]))
    }
    navBar.appendChild(ul)
    navHamburgerBar.appendChild(ul2)
}

//HAMBURGER MENI
const hamburgerBtn = document.querySelector('#hamburgerMenu')
hamburgerBtn.addEventListener('click', ()=>{
    navHamburgerBar.classList.toggle('noDisplay');
})