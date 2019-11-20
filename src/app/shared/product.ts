import { Category } from './category';

export class Product{
    constructor(
               public id?:Number,
               public ref?:String,
                public pname?:String,
                public descrip?:String,
                public quantity?:Number,
                public price?:Number,
                public category?:Category
          
    ){

    }

}