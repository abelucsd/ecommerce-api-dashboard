import { IInvoice, Invoice, CreateInvoiceInput } from "../models/invoice";
import { createLogger } from "../utils/logger";
import { CustomError } from "../errors/CustomError";

const logger = createLogger('invoice.service');

const createInvoice = async(invoice: CreateInvoiceInput): Promise<IInvoice> => {
  try {
    logger.info(`[createInvoice] Creating invoice for customer: ${invoice.customer}`);
    const newInvoice = await Invoice.create(invoice);
    logger.info(`[createInvoice] Invoice created with id: ${newInvoice._id}`);
    return newInvoice;
  } catch (error) {
    const err = new CustomError('Failed to create the invoice', 400);    
    throw(err);
  }
};

const getInvoices = async(search: string, page: number, limit: number): Promise<{data: IInvoice[], total: number}> => {
  try {
    const query = search
      ? { name: {$regex: search, $options: 'i'}}
      : {};    
    const skip = (page - 1) * limit;
    
    const [data, total] = await Promise.all([
      Invoice.find(query).skip(skip).limit(limit),
      Invoice.countDocuments(query),
    ]);

    return { data, total }
    // return await Invoice.find({});
  } catch (error) {
    const err = new CustomError('Failed to fetch Invoices', 500);    
    throw(err);
  } 
};

const getInvoiceById = async(id: string): Promise<IInvoice | null> => {
  try {
    logger.info(`[getInvoiceById] Fetching invoice with ID: ${id}`);    
    return await Invoice.findById(id);
  } catch (error) {
    const err = new CustomError('Failed to fetch invoice by ID', 404);    
    throw(err);
  }
};

const updateInvoiceById = async(
  id: string, invoiceData: Partial<CreateInvoiceInput>
): Promise<IInvoice | null> => {
  try {
    logger.info(`[updateInvoiceById] Updating invoice by ID: ${id}`);    
    return await Invoice.findByIdAndUpdate(id, invoiceData, { new: true });
  } catch (error) {
    const err = new CustomError('Failed to update invoice by ID', 404);    
    throw(err);
  }
};

const deleteInvoiceById = async(id: string): Promise<IInvoice | null> => {
  try {
    logger.info(`[deleteInvoiceById] Deleting invoice by ID: ${id}`);
    return await Invoice.findByIdAndDelete(id);
  } catch (error) {
    const err = new CustomError('Failed to delete invoice', 404);    
    throw(err);
  }
};

export const invoiceService = {
  createInvoice,
  getInvoices,
  getInvoiceById,
  updateInvoiceById,
  deleteInvoiceById,
};