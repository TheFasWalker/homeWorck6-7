
Vue.component('filteredItems',{
    props:{
        filtered:{
            type:Array,
            default(){
                return[]
            }
        }
    },
    data(){
        return{}
    },
    methods:{
        searchClean(){
            this.$root.filterClean()
        },
        fixClickCleanSearch(){
            this.$root.fixClick(`очистка поиска`)
        }
    },
    computed:{},
    mounted(){
        console.log('в корзине'+this.filtered)
    },
    template:`
       <div class="filteredItems"
       v-if = "filtered.length >0"
       >
       <div class="filteredItems__header">
       <span>Результаты поиска</span>
       <button
        type="button"
        @click = searchClean
        v-on:click=fixClickCleanSearch
        >Очистить</button>
       </div>
            
             <filteredItem
             v-for= "filteredIt in filtered"
             :key="filteredIt.id"
             :filteredItem ="filteredIt"
        />
       </div>
    `
})

