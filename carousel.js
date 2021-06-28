// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {

  player7 = new YT.Player('last-clone', {
    width: '960',
    height: '540',
    videoId: 'vHm9_MN8jRA', // 
  }); 
  player1 = new YT.Player('first', {
    width: '960',
    height: '540',
    videoId: 'KcdBOoK3Pfw', // 8F2s8ivKXNY
  });
  player2 = new YT.Player('second', {
    width: '960',
    height: '540',
    videoId: 'woL0YlCqO64',
  });
  player3 = new YT.Player('third', {
    width: '960',
    height: '540',
    videoId: 'ku_97a6Bgkg',
  });
  player4 = new YT.Player('fourth', {
    width: '960',
    height: '540',
    videoId: '-Rp0Dy27Uo8',
  });
  player5 = new YT.Player('fifth', {
    width: '960',
    height: '540',
    videoId: 'vHm9_MN8jRA',
  });
  player6 = new YT.Player('first-clone', {
    width: '960',
    height: '540',
    videoId: 'KcdBOoK3Pfw',
  });

}
var done = false;
const descriptionSlide = document.querySelector('.video-description-list');
const carouselSlide = document.querySelector('.carousel-slide');
const carouselVideos = document.querySelectorAll('.carousel-slide div');

const prevBtn = document.querySelector('.videos-btn-prev');
const nextBtn = document.querySelector('.videos-btn-next');
let counter = 1;
const size = 940;
const descriptionSize = 113;
carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
descriptionSlide.style.transform = 'translateY(' + (-descriptionSize * counter ) + 'px)';

nextBtn.onclick = function () {
    if (counter >= carouselVideos.length - 1) return;
    carouselSlide.style.transition = "transform 0.3s ease-in-out";
    descriptionSlide.style.transition = "transform 0.3s ease-in-out";
    player1.stopVideo();
    player2.stopVideo();
    player3.stopVideo();
    player4.stopVideo();
    player5.stopVideo();
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
    descriptionSlide.style.transform = 'translateY(' + (-descriptionSize * counter ) + 'px)';
    console.log(counter);
}

prevBtn.onclick = function () {
    if (counter <= 0) return;
    carouselSlide.style.transition = "transform 0.3s ease-in-out";
    descriptionSlide.style.transition = "transform 0.3s ease-in-out";
    player1.stopVideo();
    player2.stopVideo();
    player3.stopVideo();
    player4.stopVideo();
    player5.stopVideo();
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
    descriptionSlide.style.transform = 'translateY(' + (-descriptionSize * counter ) + 'px)';
    console.log(counter);
}   

carouselSlide.addEventListener('transitionend', () => {
    if (carouselVideos[counter].id === 'last-clone') {
        carouselSlide.style.transition = "none";
        descriptionSlide.style.transition = "none";
        counter = carouselVideos.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
        descriptionSlide.style.transform = 'translateY(' + (-descriptionSize * counter ) + 'px)';
    }
    if (carouselVideos[counter].id === 'first-clone') {
        carouselSlide.style.transition = "none";
        descriptionSlide.style.transition = "none";
        counter = carouselVideos.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
        descriptionSlide.style.transform = 'translateY(' + (-descriptionSize * counter ) + 'px)';
    }
});