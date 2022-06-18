import axios from "axios";

export class ProductService {
    
    private api_url:String;

    constructor(){
        this.api_url = "http://localhost:3001";
    }

    async all(){
        return await axios.get(`${this.api_url}/products`);        
    }
    
    async delete(){
        await axios.delete(`${this.api_url}`);
    }

    async update(){
        await axios.put(`${this.api_url}`);
    }

    async find(id:String){
        await axios.get(`${this.api_url}/${id}`);
    }
    async create(){
        await axios.post(`${this.api_url}`);
    }

}
