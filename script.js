const config = {
    title: "Write and Reveal",
    question: "What are your top 4 blogging options?",
    input_tags: [
        "1.",
        "2.",
        "3.",
        "4."
    ],
    text_answers: [
        "Blogger",
        "Wordpress",
        "Wix",
        "Tumblr"
    ],
    image_answers: [
        "",
        "",
        "",
        ""
    ],
    header_img_on: false,
    header_img: ""
}

const mainContainer = document.getElementById("mainContainer");
const endContainer = document.getElementById("celebrationContainer");
const endImage = document.getElementById("celebration");
const endMessage = document.getElementById("thankYou");

endMessage.textContent = "Well done! Click the \"Next Video\" button to proceed now."
endImage.src = ''


const image = document.getElementById('image')

if (config.header_img_on) {
    image.src = config.header_img
    image.style.display = 'flex'
} else {
    image.style.display = 'none'
}


const title = document.getElementById('title')
title.textContent = config.title

const question = document.getElementById('question')
question.textContent = config.question

const answerContainer = document.getElementById('openContainer')
let i = 0
config.input_tags.forEach(e => {
    const newTag = document.createElement("p")
    newTag.textContent = config.input_tags[i] + " "
    const newInput = document.createElement("input")
    newInput.classList.add('input');
    newTag.appendChild(newInput)
    answerContainer.appendChild(newTag)
    i++
})

const checkContainer = document.getElementById('checkContainer')

let j = 0
config.text_answers.forEach(e => {
    const newCheck = document.createElement("p")
    newCheck.textContent = config.text_answers[j]
    newCheck.classList.add('answer')
    checkContainer.appendChild(newCheck)
    j++
})

const answers = document.querySelectorAll('.answer')

let k = 0
answers.forEach(element => {
    const newImage = document.createElement("img")
    newImage.src = config.image_answers[k]
    newImage.classList.add('answerImage')
    element.appendChild(newImage)
    k++
})

const reveal = document.getElementById("revealAnswers")
const tryAgain = document.getElementById("tryAgain")
const proceed = document.getElementById("proceed")
const inputs = document.querySelectorAll('.input')
const lowerAnswers = config.text_answers.map(element => {
    return element.toLowerCase().trim().replace(/ /g, "");
})

const instructions = document.getElementById("instructions")
instructions.textContent = "Click next video to proceed."
instructions.style.display = 'none'

reveal.addEventListener('click', () => {
    proceed.style.display = 'flex';
    reveal.style.display = 'none';
    checkContainer.style.display = 'flex';
    inputs.forEach(element => {
        const userAnswer = element.value.toLowerCase().trim().replace(/ /g, "");
        if (lowerAnswers.includes(userAnswer)) {
            element.className = 'inputCorrect'
            element.style.pointerEvents = 'none'
            instructions.style.display = 'none'
        } else {
            element.className = 'inputIncorrect'
            element.style.pointerEvents = 'none'
            tryAgain.style.display = 'flex';
            instructions.style.display = 'none'
        }
    });
})



endContainer.style.display = 'none'


const endScreen = () => {
    endContainer.style.display = 'flex';
    mainContainer.style.display = 'none';
}

proceed.addEventListener('click', endScreen)

tryAgain.addEventListener('click', () => {
    window.location.reload()
})