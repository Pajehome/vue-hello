const hello = new Vue({
    el: '#hello',
    data: {
        testo:'Benvenuto',
        immagine: 'img/slap1.png',
        sfondo: 'bg',
    },
    methods: {
        addImg() {
            this.immagine = 'img/slap.png';
        }
    }
})