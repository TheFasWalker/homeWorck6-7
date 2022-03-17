Vue.component('basket',{
    props:{
        'basketVisibility':Boolean,
        basket:{
            type:Array,
            default(){
                return[]
            }
        }
    },
    data(){
        return{
        }
    },
    methods:{
    },
    computed:{},
    mounted(){},
    created(){
    },
    watch:{
        basket:[]
    },
    template:`
        <div class="header__basket" :class="{hiddenBlock : basketVisibility}">
            <div class="header__basker-container">
                <p v-if="basket.length < 1">Корзина пуста</p>
                <basketItem 
                v-for="basketItem in basket"
                :key="basketItem.id"
                :cartItem ="basketItem"
                />
                </div>

            </div>
        </div>
    `
});

