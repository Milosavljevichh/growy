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

//Why US
const usContainer = document.querySelector('#whyUsContainer')
const reasons = [
    {
        img:"puzzle.png",
        alt:"puzzle",
        heading:"Tailored solutions",
        text:"We understand that no two businesses are the same. That's why we craft personalized IT strategies designed to address your unique challenges and amplify your strengths. "
    },
    {
        img:"experience.png",
        alt:"experience",
        heading:"Experts",
        text:"Our team of experienced professionals leverages cutting-edge technology and industry insights to drive your growth.We ensure your business stays ahead in a competitive market."
    },
    {
        img:"success.png",
        alt:"success",
        heading:"Commitment",
        text:"Your success is our priority. From seamless project execution to ongoing support, we’re dedicated to delivering results that fuel your business growth and help you achieve long-term goals."
    },
    {
        img:"honest.png",
        alt:"honesty",
        heading:"Honesty",
        text:"With Growy, you’ll always know the status of your projects, empowering you to make informed decisions and stay in control of your growth journey.We believe in building strong partnerships."
    },
]

const imgPath = "./images/"
function whyUsBlock(block, index){
    let article = document.createElement('article')
    article.classList.add('reasonBlock')
    article.classList.add(`c${index + 1}`)

    let img = document.createElement('img')
    img.src = imgPath.concat(block.img)
    img.alt = block.alt

    let h2 = document.createElement('h2')
    h2.innerHTML = block.heading

    let p = document.createElement('p')
    p.innerHTML = block.text

    article.append(img, h2, p)
    return article
}

if (usContainer) {
    for (let i = 0;i<reasons.length;i++){
        usContainer.appendChild(whyUsBlock(reasons[i], i))
    }
}