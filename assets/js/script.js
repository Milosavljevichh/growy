// MENI
const navBar  = document.querySelector('#nav')
const navLinks = [
    {
        href:"index.html",
        text:"Home",
        currentlyActive: false
    },
    {
        href:"contact.html",
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
    for (let i = 0;i<navLinks.length;i++){
        ul.appendChild(createNavLink(navLinks[i]))
    }
    navBar.appendChild(ul)
}

//Achievements
const achievementContainer = document.querySelector('#achievementContainer')
const achievements = [
    {
        icon:"fa-code-branch",
        numberVal:128,
        text:"Ideas",
        isSolid: true
    },
    {
        icon:"fa-folder-open",
        numberVal:103,
        text:"Projects",
        isSolid: false
    },
    {
        icon:"fa-signal",
        numberVal:95,
        text:"Impact",
        isSolid: true
    },
    {
        icon:"fa-laptop",
        numberVal:100,
        text:"Solutions",
        isSolid: true
    },
    {
        icon:"fa-gem",
        numberVal:120,
        text:"Milestones",
        isSolid: false
    },
]

function createAchievement(achievement, index){

    const li = document.createElement('li')
    li.classList.add(`style${index + 1}`)

    const span = document.createElement('span')
    span.classList.add(`icon`)
    achievement.isSolid ? span.classList.add(`solid`) : null
    span.classList.add(achievement.icon)

    const strong = document.createElement('strong')
    strong.innerHTML = achievement.numberVal

    const span2 = document.createElement('span')
    span2.innerHTML = achievement.text

    li.append(span, strong, span2)
    
    return li
}

if (achievementContainer) {
    const ul = document.createElement('ul')
    ul.classList.add("statistics")
    for (let i = 0;i<achievements.length;i++){
        ul.appendChild(createAchievement(achievements[i], i))
    }
    achievementContainer.appendChild(ul)
}