import './styles/main.css';

import initSearchHandler from  './handlers/searchHandler';
import initBurgerBtnHandler from './handlers/burgerBtnHandler';
import renderFavoriteBooks from './ui/renderFavoriteBooks';
import renderFavoriteCount from './ui/renderFavoriteCount';

initSearchHandler();
renderFavoriteBooks();
renderFavoriteCount();
initBurgerBtnHandler();