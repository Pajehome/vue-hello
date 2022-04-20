const hello = new Vue({
    el: '#hello',
    data: {
        testo:'Benvenuto',
        immagine: '',
        sfondo: 'bg',
        isActive: false
    },
    methods: {
        addImg() {

            if(!this.isActive){
            this.isActive = true;
            this.immagine = 'img/slap.png';
            this.testo = 'Ti avevo detto di non cliccare'
            }else {
            this.isActive = false;
            this.immagine = 'img/slap1.png';
            this.testo = 'Riprovaci'
            } 
        },

    }
})