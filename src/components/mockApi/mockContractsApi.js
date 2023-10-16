import {mockContracts} from '../mockData/mockContracts';

export function getAllContracts() {
  return Promise.resolve(mockContracts);
}