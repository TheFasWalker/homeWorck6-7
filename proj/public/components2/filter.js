Vue.component('filterItems',{
    data(){
        return{
            userSearch:''
        }
    },
    props:{},
    methods:{
        sendClick(){
            this.$root.fixClick(`Кнопка поиска`)
        },
        sendFocusForm(){
            this.$root.fixClick(`фокус на поиске`)
        },
        filterMethod(data){
            if(this.userSearch.length>0){
                this.$root.filter(data)
            }else{
                this.$root.filterClean()
            }
            
        }
    },
    computed:{},
    mounted(){},
    template:`
    <div class="search"
        <form 
            action="#" 
            class="search-form"
            @submit.prevent="filterMethod(userSearch)"
            >
            <input 
                type="text" 
                class="search-field"
                @focus=sendFocusForm
                v-model="userSearch"
            >
            <button
             class="btn-search" 
             type="submit" 
             v-on:click="sendClick"
             > поиск</button>
        </form>
    </div>    
    `
})