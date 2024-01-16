const modal = document.querySelector("#modal");
const btnOpenModal = document.querySelector("#openmodal");
const btnCloseModal = document.querySelector("#closemodal");


btnOpenModal.addEventListener("click", () => {
    modal.style.display = "block";
});

btnCloseModal.addEventListener("click", () => {
    modal.style.display = "none";
    modal.classList.remove("animate__animated", "animate__fadeIn");
});

(function(){

    let popupCenter = function(url, title, width, height){
        let popupWidth = width || 640;
        let popupHeight = height || 320;
        let windowLeft = window.screenLeft || window.screenX;
        let windowTop = window.screenTop || window.screenY;
        let windowWidth = window.innerWidth || document.documentElement.clientWidth;
        let windowHeight = window.innerHeight || document.documentElement.clientHeight;
        let popupLeft = windowLeft + windowWidth / 2 - popupWidth / 2 ;
        let popupTop = windowTop + windowHeight / 2 - popupHeight / 2;
        let popup = window.open(url, title, 'scrollbars=yes, width=' + popupWidth + ', height=' + popupHeight + ', top=' + popupTop + ', left=' + popupLeft);
        popup.focus();
        return true;
    };

    document.querySelector('.share-twitter').addEventListener('click', function(e){
        e.preventDefault();
        let url = this.getAttribute('data-url');
        let shareUrl = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(document.title) +
             +
            "&url=" + encodeURIComponent(url);
        popupCenter(shareUrl, "Partager sur Twitter");
    });

    document.querySelector('.share-facebook').addEventListener('click', function(e){
        e.preventDefault();
        let url = this.getAttribute('data-url');
        let shareUrl = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(url);
        popupCenter(shareUrl, "Partager sur facebook");
    });

    document.querySelector('.share-gplus').addEventListener('click', function(e){
        e.preventDefault();
        let url = this.getAttribute('data-url');
        let shareUrl = "https://plus.google.com/share?url=" + encodeURIComponent(url);
        popupCenter(shareUrl, "Partager sur Google+");
    });

    document.querySelector('.share-linkedin').addEventListener('click', function(e){
        e.preventDefault();
        let url = this.getAttribute('data-url');
        let shareUrl = "https://www.linkedin.com/shareArticle?url=" + encodeURIComponent(url);
        popupCenter(shareUrl, "Partager sur Linkedin");
    });

    document.querySelector('.share-whatsapp').addEventListener('click', function(e){
        e.preventDefault();
        let url = this.getAttribute('data-url');
        let shareUrl = "https://api.whatsapp.com/send?text=" + encodeURIComponent(document.title + " " + url);
        window.open(shareUrl, "_blank");
    });
    

})();

