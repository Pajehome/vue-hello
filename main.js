const hello = new Vue({
    el: '#hello',
    data: {
        testo:'Benvenuto',
        immagine: 'img/slap1.png',
        sfondo: 'bg',
        isActive: false
    },
    methods: {
        addImg() {
            if(!this.isActive){
            this.isActive = true;
            this.immagine = 'img/slap.png';
            }else {
            this.isActive = false;
            this.immagine = 'img/slap1.png';
            }
            
        },

    }
})