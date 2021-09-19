const app = new Vue({
    el: '#app',
    data: {
        nombre: '',
        apellido: '',
        edad: null,
        profesion: '',
        pais: '',
    },
    computed: {
        usuario: {
            get: function() {
                if (this.nombre && this.apellido) {
                    return this.nombre + ' ' + this.apellido;
                } else{
                    return this.nombre || this.apellido;
                }
            },
            set: function(nuevoNombre){
                const nombres = nuevoNombre.split(' ');

                if (nombres.length === 2){
                    this.nombre = nombres[0];
                    this.apellido = nombres[1];
                } else if (nombres.length <= 1){
                    this.nombre = nombres[0] || '';
                    this.apellido = '';
                }
            }
        }
    },
    methods: {
        resetear: function(){
            this.nombre = '';
            this.apellido = '';
            this.edad = null;
            this.profesion= '';
            this.pais= '';
        },
        /* Se crea la función "guardar" con API de JS para queries "fetch"
        y realice las instrucciones en el bloque contenido dentro de llaves */
        guardar: function(){
            fetch(`${location.origin}/send`, {
                method: "POST",
                body: new FormData(document.querySelector("form"))
            });
        }
    }
})