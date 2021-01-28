new Vue({
    el: '#vue-app',
    data: {
        available: false,
        nearby: false
    },
    methods: {
        nearbyToggle() {
            this.nearby = !this.nearby;
        },

        toggleAvailability() {
            this.available = !this.available;
        }
    },
    computed: {
        compClasses(){
            return{
                available: this.available,
                nearby: this.nearby,
            }
        }
    }
});
