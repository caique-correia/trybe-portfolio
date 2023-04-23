import { Router } from 'express';
import BooksController from '../controllers/books.controller';

const router = Router();

const booksController = new BooksController();

router
  .route('/books')
  .get(booksController.getAll)
  .post(booksController.create);

router
  .route('/books/:id')
  .get(booksController.getById)
  .put(booksController.update)
  .delete(booksController.remove);

export default router;