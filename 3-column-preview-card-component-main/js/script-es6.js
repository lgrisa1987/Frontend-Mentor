"use strict";

class ColumnPreviewCard {
    constructor() {
        this.initVue();
    }
    initVue() {
        this.vueInstance = new Vue({
            el: ".body-container",
            data: {
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
                getCarType(car) {
                    const type = car.split("-")[1]
                    return type[0].toUpperCase() + type.slice(1);
                }
            }
        })
    }

};
const initPreviewCard = new ColumnPreviewCard();