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
    getData() {
        fetch("https://www.lgm-studioweb.com.ar/Frontend-Mentor/data.json")
            .then(res => res.json())
            .then(data => {
                const {
                    h1,
                    p
                } = data,
                [l1, l2, l3] = data.lists;
                this.previewCardContainer.innerHTML = `<div class="preview__card-copy"><div class="preview__card-copy-container"><h1 class="preview__card-headline">${h1}</h1><p class="preview__card-paragraph">${p}</p><ul class="preview__card-stats"><li class="preview__card-list">${l1}</li><li class="preview__card-list">${l2}</li><li class="preview__card-list">${l3}</li></ul></div></div><div class="preview__card-image" role="img" aria-label=""></div>`;
            });
    }
}

const fontsOnLoad = new FontsLoaded('preview__card-container--show');

/* var FontsLoaded = function (clase) {
    this.clase = clase;
    this.previewCardContainer = document.querySelector('.preview__card-container');
}

FontsLoaded.prototype.init = function () {
    var self = this;
    WebFont.load({
        google: {
            families: [
                'Inter', 'Lexend Deca'
            ]
        },
        active: function () {
            self.previewCardContainer.classList.add(self.clase)
        }
    });
}

FontsLoaded.prototype.getData = function () {
    var ajax = new XMLHttpRequest();
    ajax.open("GET", "https://www.lgm-studioweb.com.ar/Frontend-Mentor/data.json", true);
    ajax.send();
    ajax.addEventListener("load", (function () {
        var data = JSON.parse(ajax.responseText);
        this.previewCardContainer.innerHTML = '<div class="preview__card-copy"><div class="preview__card-copy-container"><h1 class="preview__card-headline">' + data.h1 + '</h1><p class="preview__card-paragraph">' + data.p + '</p><ul class="preview__card-stats"><li class="preview__card-list">' + data.lists[0] + '</li><li class="preview__card-list">' + data.lists[1] + '</li><li class="preview__card-list">' + data.lists[2] + '</li></ul></div></div><div class="preview__card-image" role="img" aria-label=""></div>'
    }).bind(this));
    ajax.addEventListener("error", function () {
        console.error(new Error("hubo un error"));
    })
}

var fontsOnLoad = new FontsLoaded('preview__card-container--show');
fontsOnLoad.init();
fontsOnLoad.getData(); */