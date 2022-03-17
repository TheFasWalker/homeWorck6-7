
const app =new Vue({
    el:'#app',
    data:{
        title:'hello',
        basket:[],
        catalog:[],
        catalogUrl:'/api/products',
        cartUrl:'/api/cart',
        filtered:[]
    },
    methods:{
        getJson(url){
            return fetch (url)
            .then(result=>result.json())
            .catch(error=>{
                this.$refs.error.setError(error)
            })
        },
        postJson(url,data){
            return fetch(url,{
                method: 'POST',
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(data)
            }).then(result => result.json())
              .catch(error =>{
                  this.$refs.error.setError(error)
              })
        },
        putJson(url,data){
            return fetch(url,{
                method: 'PUT',
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(data)
            }).then(result => result.json())
              .catch(error =>{
                //   this.$refs.error.setError(error)
                  console.log(error)
              })
        },
        sendClickJson(url,data){
            return fetch(url,{
                method: 'PUT',
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(data)
            }).then(result => result.json())
              .catch(error =>{
                //   this.$refs.error.setError(error)
                  console.log(error)
              })
        },
        deleteJson(url,data){
            return fetch(url,{
                method:'DELETE',
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(data)
            }).then(result => result.json())
              .catch(error =>{
                //   this.$refs.error.setError(error);
                  console.log(error)
              })
        },
        addToCard(product){
            let find = this.basket.find(el => el.id === product.id );
 
            if(find){
                this.putJson(`api/cart/${find.id}`,{count:1});
                find.count++;
            }else{
                let prod = Object.assign({count:1},product)
                this.postJson('/api/cart',prod)
                    .then(data =>{
                        if(data.result ===1){
                            this.basket.push(prod)
                        }
                    })

            }
        },
        deleteFromCard(product){
            let find = this.basket.find(el => el.id === product.id );
            if (find){
                if(find.count >1){
                    this.deleteJson(`/api/cart/${product.id}`);
                    find.count--;
                }else{
                    this.basket.splice(find,1);
                    this.deleteJson(`/api/cart/${product.id}`);
                }
            }
        },
        fixClick(clicked){
            const clickTime = new Date
             this.sendClickJson('/api/statisks', {clickTime, clicked})
        },
        filter(value){
            let regexp = new RegExp(value, 'i');
            this.filtered = this.catalog.filter(el => regexp.test(el.name)); 
        },
        filterClean(){
            this.filtered = []
        }
    },
    created(){
        this.getJson(this.catalogUrl)
            .then(data =>{
                for(let el of data){
                    this.catalog.push(el)
                }
            }),
        this.getJson(this.cartUrl)
            .then(data =>{
                for(let el of data){
                    this.basket.push(el)
            }
    })
        
    },
    template:`
        <div class="main-wrapper">
            <site-header
            :basketItems =basket
            :filtered = "filtered"
            />

            <div class="catalog">
                <catalogItem
                v-for ="product in catalog"
                :key ="product.id"
                :product ="product"
                />
            </div>   
        </div> 
    `

});