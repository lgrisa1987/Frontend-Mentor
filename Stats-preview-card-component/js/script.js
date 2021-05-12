/* WebFont.load({
    google: {
        families: [
            'Inter', 'Lexend Deca'
        ]
    },
    active: function () {
        document.querySelector('.preview__card-container').classList.add('preview__card-container--show')
    }
}) */

/* class FontsLoaded {
    constructor(clase) {
        this.clase = clase;
        this.init();
    }
    init() {
        WebFont.load({
            google: {
                families: [
                    'Inter', 'Lexend Deca'
                ]
            },
            active: function () {
                document.querySelector('.preview__card-container').classList.add(this.clase)
            }
        });
    }
}

const fontsOnLoad = new FontsLoaded('preview__card-container--show'); */

var FontsLoaded = function (clase) {
    this.clase = clase;
}

FontsLoaded.prototype.init = function () {
    var clase = this.clase;
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

var fontsOnLoad = new FontsLoaded('preview__card-container--show');
fontsOnLoad.init();