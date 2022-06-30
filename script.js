const config = {
    background_image: "https://a.storyblok.com/f/112136/1920x1080/89cb45339a/colour-bg-2.jpg",
    background_color: "",
    header_image: "",
    title_one: "How confident do feel in your understanding of Webclass 2?",
    title_two: "On a scale of 1 - 5, 1 being not confident and 5 being very confident please rate below.",
    help_text: "Click on the appropriate unit to rate",
    rating_image: false,
    rated_image: "https://a.storyblok.com/f/112136/109x105/23dd36f1d0/icon-awesome-star.png",  // stars: https://a.storyblok.com/f/112136/109x105/23dd36f1d0/icon-awesome-star.png //smileys: https://a.storyblok.com/f/112136/281x290/f3f1d79645/smiley.png
    scale_length: 5,
    submit_background_colour: "#534092",
    submit_text_content: "Submit",
    thanks_message: "Thank you!",
    thank_you_image:""
}

const log = (item) => {
    console.log(item)
}

const submit = document.getElementById('submit');
const body = document.querySelector('body');
const headerImg = document.getElementById('headerImage');
const header = document.getElementById('header');
const titleOne = document.getElementById('titleOne');
const titleTwo = document.getElementById('titleTwo');
const helpText = document.getElementById('helpText');
const container = document.getElementById('ratingContainer');
const mainContainer = document.getElementById('container');
const thankYouImage = document.getElementById('thankYouImage');
const thankYouText = document.getElementById('thankYouMessage');
const thanksContainer = document.getElementById('thanksContainer');

body.style.backgroundColor = config.background_color;
body.style.backgroundImage = `url(${config.background_image})`;
headerImage.src = config.header_image;
titleOne.textContent = config.title_one;
titleTwo.textContent = config.title_two;
helpText.textContent = config.help_text;
submit.style.backgroundColor = config.submit_background_colour;
submit.textContent = config.submit_text_content;
thankYouImage.src = config.thank_you_image;
thankYouText.textContent = config.thanks_message;

submit.style.pointerEvents = 'none'
const rate = (event) => { 
    submit.style.pointerEvents = 'all'
    const findIndex = Array.prototype.indexOf.call(event.currentTarget.parentNode.children, event.currentTarget)
    if ('click') {
        for (let index = 0; index < config.scale_length; index++) {
            container.children[index].style.filter = 'grayscale(100%)'
        }
        for (let index = 0; index <= findIndex; index++) {
            container.children[index].style.filter = 'none'
        }
        const finalRating = findIndex+1
    }
};

for (let index = 0; index < config.scale_length; index++) {
    log(index)
    const ratingLength = index + 1;
    const ratingNumber = document.createElement('p');
    ratingNumber.textContent = ratingLength;
    ratingNumber.className = 'rartingNumber'
    const ratingImage = document.createElement('img');
    ratingImage.src = config.rated_image;
    ratingImage.className = 'ratingImage';
    const ratingContainer = document.createElement('div');
    ratingContainer.className = 'ratingSection';
    ratingContainer.appendChild(ratingImage);
    ratingContainer.appendChild(ratingNumber);
    container.appendChild(ratingContainer);
    ratingContainer.addEventListener('click', rate)
}

const sayThankYou = () => {
    mainContainer.removeChild(header);
    mainContainer.removeChild(container);
    mainContainer.removeChild(helpText);
    mainContainer.removeChild(submit);
    thanksContainer.style.display = 'flex'
}
submit.addEventListener('click', sayThankYou);
