import { Router } from 'express';
import {  
  getProducts,  
} from '../controllers/product.controller';

export const productRouter = Router();

productRouter.get('/', getProducts);