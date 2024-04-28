import { defineStore } from 'pinia'
import { computed } from 'vue'

interface ProductState {
    orders:Array<{text:string,sum:number}>
    products: Product[]
    productDisplay:Product[]
}
interface Product {
    id:number;
    title:string;
    type:string;
    image:string;
    quantity:number;
}

export const useProductStore = defineStore('ProductStore', {
    state: (): ProductState => ({
        products:[
            {id:1,title:'Tandoori Chicken (Full)',type:'DPB Special Combos',image:'https://picsum.photos/5/150',quantity:1},
            {id:2,title:'Tandoori Chicken (Full)',type:'DPB Special Combos',image:'https://picsum.photos/5/150',quantity:1},
            {id:3,title:'Tandoori Chicken (Full)',type:'DPB Special Combos',image:'https://picsum.photos/5/150',quantity:1},
            {id:4,title:'Tandoori Chicken (Full)',type:'DPB Special Combos',image:'https://picsum.photos/5/150',quantity:1},
            {id:5,title:'Chineese',type:'Chineese Starters',image:'https://picsum.photos/20/150',quantity:1},
            {id:6,title:'Chineese',type:'Chineese Starters',image:'https://picsum.photos/20/150',quantity:1},
            {id:7,title:'Chineese',type:'Chineese Starters',image:'https://picsum.photos/20/150',quantity:1},
            {id:8,title:'Chineese',type:'Chineese Starters',image:'https://picsum.photos/20/150',quantity:1},
            {id:9,title:'Main',type:'Chinese Main Course',image:'https://picsum.photos/30/150',quantity:1},
            {id:10,title:'Main',type:'Chinese Main Course',image:'https://picsum.photos/30/150',quantity:1},
            {id:11,title:'Main',type:'Chinese Main Course',image:'https://picsum.photos/30/150',quantity:1},
            {id:12,title:'Main',type:'Chinese Main Course',image:'https://picsum.photos/30/150',quantity:1},
            {id:13,title:'Indian',type:'Indian Main Course',image:'https://picsum.photos/40/150',quantity:1},
            {id:14,title:'Indian',type:'Indian Main Course',image:'https://picsum.photos/40/150',quantity:1},
            {id:15,title:'Indian',type:'Indian Main Course',image:'https://picsum.photos/40/150',quantity:1},
            {id:16,title:'Indian',type:'Indian Main Course',image:'https://picsum.photos/40/150',quantity:1},
            {id:17,title:'Rice',type:'Rice & Pulao',image:'https://picsum.photos/50/150',quantity:1},
            {id:18,title:'Rice',type:'Rice & Pulao',image:'https://picsum.photos/50/150',quantity:1},
            {id:19,title:'Rice',type:'Rice & Pulao',image:'https://picsum.photos/50/150',quantity:1},
            {id:20,title:'Rice',type:'Rice & Pulao',image:'https://picsum.photos/50/150',quantity:1},
            {id:21,title:'Desserts',type:'Desserts',image:'https://picsum.photos/60/150',quantity:1},
            {id:22,title:'Desserts',type:'Desserts',image:'https://picsum.photos/60/150',quantity:1},
            {id:23,title:'Desserts',type:'Desserts',image:'https://picsum.photos/60/150',quantity:1},
            {id:24,title:'Desserts',type:'Desserts',image:'https://picsum.photos/60/150',quantity:1},
            {id:25,title:'Soup',type:'Soup & wonton',image:'https://picsum.photos/70/150',quantity:1},
            {id:26,title:'Soup',type:'Soup & wonton',image:'https://picsum.photos/70/150',quantity:1},
            {id:27,title:'Soup',type:'Soup & wonton',image:'https://picsum.photos/70/150',quantity:1},
            {id:28,title:'Soup',type:'Soup & wonton',image:'https://picsum.photos/70/150',quantity:1},
            {id:29,title:'Accompaniment',type:'Accompaniment',image:'https://picsum.photos/80/150',quantity:1},
            {id:30,title:'Accompaniment',type:'Accompaniment',image:'https://picsum.photos/80/150',quantity:1},
            {id:31,title:'Accompaniment',type:'Accompaniment',image:'https://picsum.photos/80/150',quantity:1},
            {id:32,title:'Accompaniment',type:'Accompaniment',image:'https://picsum.photos/80/150',quantity:1},
            {id:33,title:'Biryani',type:'Biryani',image:'https://picsum.photos/90/150',quantity:1},
            {id:34,title:'Biryani',type:'Biryani',image:'https://picsum.photos/90/150',quantity:1},
            {id:35,title:'Biryani',type:'Biryani',image:'https://picsum.photos/90/150',quantity:1},
            {id:36,title:'Biryani',type:'Biryani',image:'https://picsum.photos/90/150',quantity:1},
        ],
        orders:[
            {text:'DPB Special Combos',sum:10},
            {text:'Chineese Starters',sum:30},
            {text:'Chinese Main Course',sum:75},
            {text:'Indian Main Course',sum:63},
            {text:'Rice & Pulao',sum:7},
            {text:'Desserts',sum:1},
            {text:'Soup & wonton',sum:15},
            {text:'Accompaniment',sum:4},
            {text:'Biryani',sum:1},
        ],
        productDisplay:[]
    }),
    getters:{
        filterProducts:(state)=>{
            return computed(() => state.productDisplay);
        }
    },
    actions:{
        filter(filterType:string): void{
            this.productDisplay = this.products.filter(item => item.type == filterType);
        }
    }
})
