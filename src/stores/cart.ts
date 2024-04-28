import { defineStore } from 'pinia'
import { ref,computed } from 'vue';

interface CartItem{
    id:number;
    title:string;
    image:string;
    quantity:number;
}
interface CartState {
    cartList:CartItem[]
}

export const useCartStore = defineStore('CartStore', {
    state: (): CartState => ({
        cartList:[]
    }),
    getters:{
        count():number{
            return this.cartList.length
        }
    },
    actions:{
        addCart(item:CartItem){
            const Incart = this.cartList.find(i => i.id == item.id)
            if(Incart){
                Incart.quantity += item.quantity;
            }else{
                this.cartList.push(item)
            }
            alert('Success Add In Cart!')
        },
        deleteCart(id:number){
            const index = this.cartList.findIndex(i => i.id == id);
            if(index !== -1){
                this.cartList.splice(index,1)
            }
        },
        limitTitle(title: string): string {
            const maxLength = 9;
            if (title.length > maxLength) {
                return title.substring(0, maxLength - 3) + '...';
            }
            return title;
        }
    }
})