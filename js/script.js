const {createApp} = Vue;

createApp({
    data(){
        return{
            apiUrl : 'https://flynn.boolean.careers/exercises/api/random/mail',
            emails: []
            
        }
    },

    methods:{
        getApi(){
            for (let i = 1; i <= 10; i++) {
                axios.get(this.apiUrl)
                .then((result) =>{
                    this.emails.push(result.data.response)
                    console.log(this.emails);
                })
            }
        }
    },

    mounted(){
        this.getApi()
    }
}).mount('#app');