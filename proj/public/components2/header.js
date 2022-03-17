
Vue.component('site-header',{
    props:{
        basketItems:{
            type:Array,
            default(){
                return[]
            }
        },
        filtered:{
            type:Array,
            default(){
                return[]
            }
        }
    },
    data(){
        return{
            basketCondition :true,

        }
    },
    methods:{
        sendClick(){
            this.$root.fixClick('кнопка корзины')
        }
    },
    computed:{},
    mounted(){
    },
    template:`
        <header>
            <div header__logo>
                <span>Интернет магазин</span>
            </div>
           <filterItems />
           <filteredItems
           :filtered="filtered"
           />
            <button
                class="header__button"
                @click="basketCondition = !basketCondition"
                v-on:click="sendClick"
             >Корзина</button>
            <basket 
                :basketVisibility ="basketCondition"
                :basket="basketItems"
            />

        </header>
    `
})

