
Vue.component('filteredItem',{
    props:{
        filteredItem:{
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

    },
    computed:{},
    mounted(){
    },
    template:`
       <div class="filteredItem-block">
        <p>название: {{filteredItem.name}}</p>
        <p>цена: {{filteredItem.price}}</p>
       </div>
    `
})
