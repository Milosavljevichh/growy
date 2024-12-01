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

//SERVICES
const servicesContainer = document.querySelector('#servicesContainer')
const serviceList = [
    {
        title:"Software Development",
        text:"From tailored web applications to mobile apps and enterprise-grade software, we create solutions designed specifically to meet your business needs and drive measurable growth.",
        alt:"software",
        img:"software.png"
    },
    {
        title:"Data Analytics",
        text:"Leverage the power of data with our analytics services. We transform raw data into actionable insights, enabling you to make data-driven decisions to accelerate your success.",
        alt:"data",
        img:"data.png"
    },
    {
        title:"Cloud Solutions",
        text:"Streamline your operations and enhance flexibility with our cloud services. We assist in migrating your systems to the cloud, optimizing costs, and ensuring secure and reliable access to your data anytime, anywhere.",
        alt:"cloud",
        img:"cloud.png"
    },
]

function serviceBlock(block){
    const article = document.createElement('article')
    article.classList.add('service')

    const img = document.createElement('img')
    img.classList.add('serviceImg')
    img.alt = block.alt
    img.src = imgPath + block.img

    const h3 = document.createElement('h3')
    h3.textContent = block.title

    const p = document.createElement('p')
    p.textContent = block.text

    const button = document.createElement('button')
    button.id = "serviceBtn"
    button.textContent = "Read More"

    article.append(img,h3,p,button)
    return article
}

if (servicesContainer) {
    const ul = document.createElement('ul')
    ul.classList.add('features')
    
    for (let i = 0;i<serviceList.length;i++){
        const li = document.createElement('li')
        li.appendChild(serviceBlock(serviceList[i]))
        ul.appendChild(li)
    }

    servicesContainer.appendChild(ul)
}
//REGEX
//ime kompanije mora poceti velikim slovom ili brojem i da ima bar 2 slova ili broja (npr. A1)
const nameReg = /[A-Z0-9][a-z0-9]{1, }/
//email sme imati sva mala slova, brojeve i tacke. Mora se zavrsiti s @(domen koji je od min. 2 slova a max, 7).[moze biti jos jedan domen].rs/com(tako nesto)
const email = /[a-z0-9.]{2, }@[a-z]{2, 7}.[a-z]{2, 4}/ //doradaiti
//radio mora biti selefcted (companySize.value ne sme biti prazan string)
const form = document.querySelector('#form')
const companySize = form.companySize
//service select value mora biti > 0
const serviceSelect = document.querySelector('#serviceSelect')
//terms mrroa biti selected
const termsBox = document.querySelector('#terms')
const submitBtn = document.querySelector('#submit')
termsBox.addEventListener('click', ()=>{
    submitBtn.disabled ? submitBtn.disabled = "" : submitBtn.disabled = "disabled"
})


//TEAM
const members = [
    {
        name: "Armin Arlert",
        role: "Frontend Dev."
    },
    {
        name: "Mikasa Ackerman",
        role: "Designer"
    },
    {
        name: "Tanjiro Kamado",
        role: "HR"
    },
    {
        name: "Casca Doe",
        role: "Backend dev."
    },
    {
        name: "Thomas",
        role: "Moral support"
    },
    {
        name: "Farnese Vandimion",
        role: "CEO"
    }
]
const teamContainer = document.querySelector('#teamContainer')
function createMemberBlock(member, index){
    let article = document.createElement('article')
    article.classList.add('member')

    let img = document.createElement('img')
    img.src = imgPath + 'worker' + (index + 1) + '.jpg'
    img.alt = 'worker'+index

    let name = document.createElement('h4')
    name.textContent = member.name

    let strong = document.createElement('strong')
    strong.innerHTML = member.role
    let h5 = document.createElement('h5')
    h5.appendChild(strong)

    article.append(img,name,h5)

    return article
}

if (teamContainer) {
    for (let i = 0;i<members.length;i++){
        teamContainer.appendChild(createMemberBlock(members[i], i))
    }
}