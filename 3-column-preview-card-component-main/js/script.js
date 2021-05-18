"use strict";
var ColumnPreviewCard = function () {
    this.previewCard = document.querySelector('.column__preview__card');
}

ColumnPreviewCard.prototype.initVue = function () {
    this.vueInstance = new Vue({
        el: ".body__container",
        data: {
            bodyContainer: "",
            cars: [{
                img: "icon-sedans",
                description: "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."
            }, {
                img: "icon-suvs",
                description: "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."
            }, {
                img: "icon-luxury",
                description: "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style."
            }]
        },
        methods: {
            getCarType: function (car) {
                var type = car.split("-")[1]
                return type[0].toUpperCase() + type.slice(1);
            }
        }
    })
}

ColumnPreviewCard.prototype.fontsOnLoad = function () {
    var self = this;
    WebFont.load({
        google: {
            families: [
                'Big Shoulders Display', 'Lexend Deca'
            ]
        },
        active: function () {
            self.previewCard.classList.add('column__preview__card--show');
            self.initVue();
        }
    });
}

var initPreviewCard = new ColumnPreviewCard();
initPreviewCard.fontsOnLoad();