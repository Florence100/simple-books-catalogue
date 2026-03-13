import './styles/main.css';

import { initSearchHandler } from  './handlers/searchHandler';
import renderFavoriteBooks from './ui/renderFavoriteBooks';
import renderFavoriteCount from './ui/renderFavoriteCount';

initSearchHandler();
renderFavoriteBooks();
renderFavoriteCount();