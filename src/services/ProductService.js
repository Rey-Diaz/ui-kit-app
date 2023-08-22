import axios from 'axios';
import config from '../config.json';

export class ProductService {
    baseUrl = config.api.baseUrl + "/products";

    getProductsSmall() {
        // If you want to use the real API:
        //return axios.get(`${this.baseUrl}/small`).then(res => res.data);

        // If you want to use dummy data:
        return Promise.resolve(config.dummyData.products);
    }
}