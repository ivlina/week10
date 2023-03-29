const learnJS = () => console.log(`Я учу JavaScript!`);
learnJS();

const changePicturePrevious = () => {
    let egyptPicture = document.getElementById('photo');
    egyptPicture.src = 'images/ibn_tulun.jpeg';
};

const changePictureNext = () => {
    let egyptPicture = document.getElementById('photo');
    egyptPicture.src = 'images/aswan.jpeg';
};