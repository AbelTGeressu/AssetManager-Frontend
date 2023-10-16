// mockApi.js
import {mockAssets} from '../mockData/mockAssets';



export function getAllAssets() {
  return Promise.resolve(mockAssets);
}



// You can add more functions for CRUD operations as needed
