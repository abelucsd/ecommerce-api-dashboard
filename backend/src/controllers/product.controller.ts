import { Request, Response, NextFunction } from 'express';
import { products, Product } from '../models/product';
import { productService } from '../services/product.service';
import { createLogger } from '../utils/logger';

const logger = createLogger('product.controller');

export const createProduct = async( req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    logger.info('[createProduct] Received request to create a new product.');

    const { name, price } = req.body;
    const newProduct = await productService.createProduct({ name, price });

    logger.info(`[createProduct] Successfully created product with ID: ${newProduct._id}`);
    res.status(201).json(newProduct);
  } catch (error) {    
    next(error);
  }
};

export const getProducts = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    logger.info('[getProducts] Received request to get all products.');

    const response = await productService.getProducts();

    logger.info(`[getProducts] Successfully fetched ${response.length} product(s).`);
    res.status(200).json(response);    
  } catch (error) {        
    next(error);
  }  
};

export const getProductById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const productId = req.params.id;
    const product = await productService.getProductById(productId);
    if (!product) {
      res.status(404).json({ message: 'Product not found' });
    }    

    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

export const updateProduct = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const productId = req.params.id;
    const updatedProduct = await productService.updateProduct(productId, req.body);
    if (!updatedProduct) {
      res.status(404).json({ message: 'Product not found' });
    }    

    res.status(200).json(updatedProduct);
  } catch (error) {
    next(error);
  }
};

export const deleteProduct = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const productId = req.params.id;
    const deletedProduct = await productService.deleteProduct(productId);
    if (!deletedProduct) {
      res.status(404).json({ message: 'Product not found' });
    }    

    res.status(200).json(deletedProduct);
  } catch (error) {
    next(error);
  }
};