Vue.component('basketItem',{
    props:{
        cartItem:{
            type:Object,
            default(){
                return{}
            }
        }
    },
    data(){
        return{}
    },
    methods:{
        deleteItem(){
            this.$root.deleteFromCard(this.cartItem)
        },
        sendClick(){
            this.$root.fixClick(`Удалить из корзины ${this.cartItem.name}`)
        }
    },
    computed:{},
    mounted(){},
    created(){},
    watch:{
    },
    template:`
                <div class="catrItem" >
                    <div class="card-item-info">
                        <p class="product__title">название {{cartItem.name}}</p>
                        <p class="product__price">цена {{cartItem.price}}</p>
                        <p>количество {{cartItem.count}}</p>
                    </div>
                    <button
                     class="card-item-del"
                      :data-id="cartItem.id"
                      @click=deleteItem
                      v-on:click="sendClick"
                      >del</button>
                </div>
            </div>
        </div>
    `
});