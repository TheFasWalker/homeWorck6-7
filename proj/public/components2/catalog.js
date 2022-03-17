Vue.component('catalog',{
    data(){
        return{
        }
    },
    props:{
        product:{
            type:Array         
        }
    },
    methods:{
    },
    computed:{},
    mounted(){},
    created(){

    },
    template:`
        <div class="catalog">
            <catalogItem 
              v-for ="productItem in product"
              :key ="productItem.id"
              :product ="productItem"
            />
        </div>
    `
})