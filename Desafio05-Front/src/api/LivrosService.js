import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL

export class LivrosService{
    static getLivros(){
        return axios.get(BASE_URL+'/livros');
    }

    static getLivro(id){
        return axios.get(`${BASE_URL}/livros/${id}`);
    }

    static createLivro(body){
        return axios.post(`${BASE_URL}/livros`,body);
    }

    static updateLivro(id,body){
        return axios.put(`${BASE_URL}/livros/${id}`,body);
    }

    static deleteLivro(id){
        return axios.delete(`${BASE_URL}/livros/${id}`);
    }
    
}