const shareLinks = document.querySelector('.share-links'),
      shareBtn = document.querySelector('button'),
      shareIcon = document.querySelector('share-icon');

function show() {
    if(shareLinks.classList.contains('share-links-show')){
        shareLinks.classList.remove('share-links-show');
        shareBtn.classList.remove('button');
        shareIcon.classList.remove('img');
    }
    else {
        shareLinks.classList.add('share-links-show');
        shareBtn.style.zIndex = '5';
        shareBtn.classList.add('button');
    }
}