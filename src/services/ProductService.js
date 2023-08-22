import axios from 'axios';
import config from '../config.json';  // Adjust the path based on where your config.json is located

class ProductService {
    static apiBaseUrl = config.apiBaseUrl;

    // Fetch products from the API
    static async fetchProductsFromAPI() {
        try {
            const response = await axios.get(`${this.apiBaseUrl}/products`);  // Assuming the endpoint is /products
            return response.data;
        } catch (error) {
            console.error('Error fetching products from API:', error);
            throw error;
        }
    }

    // Get dummy products from config
    static getDummyProducts() {
        return config.dummyData.products;
    }
}

export default ProductService;
