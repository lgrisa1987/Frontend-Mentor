"use strict";
class FontsLoaded {

    constructor(clase) {
        this.clase = clase;
        this.previewCardContainer = document.querySelector('.preview__card-container');
        this.init();
        this.getData();
    }
    init() {
        const clase = this.clase;
        WebFont.load({
            google: {
                families: [
                    'Inter', 'Lexend Deca'
                ]
            },
            active: function () {
                document.querySelector('.preview__card-container').classList.add(clase)
            }
        });
    }
    /*  getData() {
         fetch("https://www.lgm-studioweb.com.ar/Frontend-Mentor/data.json")
             .then(res => res.json())
             .then(data => {
                 const {
                     h1,
                     p
                 } = data,
                 [l1, l2, l3] = data.lists;
                 this.previewCardContainer.innerHTML = `<div class="preview__card-copy"><div class="preview__card-copy-container"><h1 class="preview__card-headline">${h1}</h1><p class="preview__card-paragraph">${p}</p><ul class="preview__card-stats"><li class="preview__card-list">${l1}</li><li class="preview__card-list">${l2}</li><li class="preview__card-list">${l3}</li></ul></div></div><div class="preview__card-image preview__card-image--lazy" role="img" aria-label=""></div>`;
                 this.lazyLoading();
             });
     } */
    async getData() {
        const res = await fetch("https://www.lgm-studioweb.com.ar/Frontend-Mentor/data.json"),
            data = await res.json();
        const {
            h1,
            p
        } = data,
        [l1, l2, l3] = data.lists;
        this.previewCardContainer.innerHTML = `<div class="preview__card-copy"><div class="preview__card-copy-container"><h1 class="preview__card-headline">${h1}</h1><p class="preview__card-paragraph">${p}</p><ul class="preview__card-stats"><li class="preview__card-list">${l1}</li><li class="preview__card-list">${l2}</li><li class="preview__card-list">${l3}</li></ul></div></div><div class="preview__card-image preview__card-image--lazy" role="img" aria-label=""></div>`;
        this.lazyLoading();
    }
    lazyLoading() {
        const previewCardImage = document.querySelector('.preview__card-image'),
            replaceImages = elem => elem.classList.remove(elem.classList[1]);
        if ("IntersectionObserver" in window) {
            const lazyImageObserver = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        replaceImages(entry.target);
                        lazyImageObserver.unobserve(entry.target);
                    }
                });
            });
            lazyImageObserver.observe(previewCardImage);
        } else replaceImages(previewCardImage);
    }
}

const fontsOnLoad = new FontsLoaded('preview__card-container--show');