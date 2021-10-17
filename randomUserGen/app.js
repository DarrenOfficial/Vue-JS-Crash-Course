const app = Vue.createApp({
    // template: '<h1>Bonjour {{firstName}}</h1>',
    data() {
        return {
            firstName: 'Darren',
            lastName: 'Nathan',
            email: 'github@darrennathanael.com',
            gender: 'male',
            sexuality: 'straight',
            picture: 'https://thispersondoesnotexist.com/image',
        }
    },
    methods: {
        async getUser() {
            const res = await fetch()
            this.firstName = 'John',
            this.lastName = 'Doe',
            this.email = 'john@darrennathanael.com',
            this.gender = 'female',
            this.sexuality = 'straight',
            this.picture = 'https://thispersondoesnotexist.com/image'
        },
    },
})

app.mount('#app')