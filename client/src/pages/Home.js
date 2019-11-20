import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import '../assets/home_page/css/style.css';
import '../assets/home_page/css/colors/green.css';

import Loader from '../components/Loader';


class Home extends Component {

    constructor(props) {
        super(props);
       
    }

    render() {

        return (
            <React.Fragment>
            <div id="wrapper">


            <header id="header">
            
            <div class="container">
            
                <div class="three columns">
                    <div id="logo">
                        <h1><a href="index.html"><img src="images/logo.png" alt="" /></a></h1>
                    </div>
                </div>
            
            <div class="thirteen columns navigation">
            
                <nav id="navigation" class="menu nav-collapse">
                    <ul>
                        <li><a href="index.html" id="current">Home</a></li>
            
                        <li><a href="#">Demos</a>
                            <ul>
                                <li><a href="index.html">Grid Homepage</a></li>
                                <li><a href="index-2.html">List Homepage</a></li>
                                <li><a href="index-3.html">Boxed Version</a></li>
                            </ul>
                        </li>
            
                        <li><a href="#">Recipes</a>
                            <ul>
                                <li><a href="browse-recipes.html">Browse Recipes</a></li>
                                <li><a href="recipe-page-1.html">Recipe Page #1</a></li>
                                <li><a href="recipe-page-2.html">Recipe Page #2</a></li>
                            </ul>
                        </li>
            
                        <li><a href="#">Pages</a>
                            <ul>
                                <li><a href="shortcodes.html">Shortcodes</a></li>
                                <li><a href="typography.html">Typography</a></li>
                                <li><a href="contact.html">Contact</a></li>
                            </ul>
                        </li>
            
                        <li><a href="#">Shop</a>
                            <ul>
                                <li><a href="shop.html">Shop</a></li>
                                <li><a href="product-page.html">Product Page</a></li>
                            </ul>
                        </li>
            
                        <li><a href="submit-recipe.html">Submit Recipe</a></li>
                    </ul>
                </nav>
            
            </div>
            
            </div>
            </header>
            
            
            <div id="homeSlider" class="royalSlider rsDefaultInv">
            
                <div class="rsContent">
                    <a class="rsImg" href="images/sliderA_01.jpg"></a>
                    <i class="rsTmb">Mexican Grilled <br/> Corn Recipe</i>
            
                    <div class="SlideTitleContainer rsABlock">
                    <div class="CaptionAlignment">
                        <div class="rsSlideTitle tags">
                            <ul>
                                <li>Baking</li>
                            </ul>
                            <div class="clearfix"></div>
                        </div>
            
                        <h2 class="rsSlideTitle title"><a href="recipe-page-1.html">Mexican Grilled Corn Recipe</a></h2>
            
                        <div class="rsSlideTitle details">
                            <ul>
                                <li><i class="fa fa-cutlery"></i> 4 Servings</li>
                                <li><i class="fa fa-clock-o"></i> 30 Min</li>
                                <li><i class="fa fa-user"></i> by <a href="#">Sandra Fortin</a></li>
                            </ul>
                        </div>
            
                        <a href="recipe-page-1.html" class="rsSlideTitle button">View Recipe</a>
                    </div>
                    </div>
            
                </div>
            
                <div class="rsContent">
                    <a class="rsImg" href="images/sliderA_02.jpg"></a>
                    <i class="rsTmb">Roast Chicken <br/>With Lemon Gravy</i>
            
                    <div class="SlideTitleContainer rsABlock">
                    <div class="CaptionAlignment">
                        <div class="rsSlideTitle tags">
                            <ul>
                                <li>Curry</li>
                            </ul>
                            <div class="clearfix"></div>
                        </div>
            
                        <h2 class="rsSlideTitle title"><a href="recipe-page-1.html">Roast Chicken <br/>With Lemon Gravy</a></h2>
            
                        <div class="rsSlideTitle details">
                            <ul>
                                <li><i class="fa fa-cutlery"></i> 4 Servings</li>
                                <li><i class="fa fa-clock-o"></i> 1 Hr 20 Min</li>
                                <li><i class="fa fa-user"></i> by <a href="#">Sandra Fortin</a></li>
                            </ul>
                        </div>
            
                        <a href="recipe-page-1.html" class="rsSlideTitle button">View Recipe</a>
                    </div>
                    </div>
            
                </div>
                
                <div class="rsContent">
                    <a class="rsImg" href="images/sliderA_03.jpg"></a>
                    <i class="rsTmb">Avocado Melon Salad <br/> With Lime Vinaigrette </i>
            
                    <div class="SlideTitleContainer rsABlock">
                    <div class="CaptionAlignment">
                        <div class="rsSlideTitle tags">
                            <ul>
                                <li>Salads</li>
                            </ul>
                            <div class="clearfix"></div>
                        </div>
            
                        <h2 class="rsSlideTitle title"><a href="recipe-page-2.html">Avocado Melon Salad With Lime Vinaigrette</a></h2>
            
                        <div class="rsSlideTitle details">
                            <ul>
                                <li><i class="fa fa-cutlery"></i> 1 Servings</li>
                                <li><i class="fa fa-clock-o"></i> 15 Min</li>
                                <li><i class="fa fa-user"></i> by <a href="#">Sandra Fortin</a></li>
                            </ul>
                        </div>
            
                        <a href="recipe-page-2.html" class="rsSlideTitle button">View Recipe</a>
                    </div>
                    </div>
            
                </div>
                
                <div class="rsContent">
                    <a class="rsImg" href="images/sliderA_04.jpg"></a>
                    <i class="rsTmb">Chunky Beef Stew</i>
            
                    <div class="SlideTitleContainer rsABlock">
                    <div class="CaptionAlignment">
                        <div class="rsSlideTitle tags">
                            <ul>
                                <li>Beef</li>
                            </ul>
                            <div class="clearfix"></div>
                        </div>
            
                        <h2 class="rsSlideTitle title"><a href="recipe-page-1.html">Chunky Beef Stew</a></h2>
            
                        <div class="rsSlideTitle details">
                            <ul>
                                <li><i class="fa fa-cutlery"></i> 4 Servings</li>
                                <li><i class="fa fa-clock-o"></i> 2 Hr 30 Min</li>
                                <li><i class="fa fa-user"></i> by <a href="#">Sandra Fortin</a></li>
                            </ul>
                        </div>
            
                        <a href="recipe-page-1.html" class="rsSlideTitle button">View Recipe</a>
                    </div>
                    </div>
            
                </div>          
                
                <div class="rsContent">
                    <a class="rsImg" href="images/sliderA_05.jpg"></a>
                    <i class="rsTmb">Farmhouse Vegetable <br/> And Barley Soup</i>
            
                    <div class="SlideTitleContainer rsABlock">
                    <div class="CaptionAlignment">
                        <div class="rsSlideTitle tags">
                            <ul>
                                <li>Soups</li>
                            </ul>
                            <div class="clearfix"></div>
                        </div>
            
                        <h2 class="rsSlideTitle title"><a href="recipe-page-1.html">Farmhouse Vegetable And Barley Soup</a></h2>
            
                        <div class="rsSlideTitle details">
                            <ul>
                                <li><i class="fa fa-cutlery"></i> 4 Servings</li>
                                <li><i class="fa fa-clock-o"></i> 1 Hr 30 Min</li>
                                <li><i class="fa fa-user"></i> by <a href="#">Sandra Fortin</a></li>
                            </ul>
                        </div>
            
                        <a href="recipe-page-1.html" class="rsSlideTitle button">View Recipe</a>
                    </div>
                    </div>
            
                </div>
            
            </div>
            
            

            <div class="container">
            
                <div class="twelve columns">
            
                     <h3 class="headline">Latest Recipes</h3>
                    <span class="line rb margin-bottom-35"></span>
                    <div class="clearfix"></div>
            
                    <div class="isotope">
            
                        <div class="four recipe-box columns">
            
                            <div class="thumbnail-holder">
                                <a href="recipe-page-1.html">
                                    <img src="images/recipeThumb-01.jpg" alt=""/>
                                    <div class="hover-cover"></div>
                                    <div class="hover-icon">View Recipe</div>
                                </a>
                            </div>
            
                            <div class="recipe-box-content">
                                <h3><a href="recipe-page-1.html">Mexican Grilled <br/> Corn Recipe</a></h3>
                                
                                <div class="rating five-stars">
                                    <div class="star-rating"></div>
                                    <div class="star-bg"></div>
                                </div>
            
                                <div class="recipe-meta"><i class="fa fa-clock-o"></i> 30 min</div>
            
                                <div class="clearfix"></div>
                            </div>
                        </div>
            
                        <div class="four recipe-box columns">
            
                            <div class="thumbnail-holder">
                                <a href="recipe-page-2.html">
                                    <img src="images/recipeThumb-02.jpg" alt=""/>
                                    <div class="hover-cover"></div>
                                    <div class="hover-icon">View Recipe</div>
                                </a>
                            </div>
                            
                            <div class="recipe-box-content">
                                <h3><a href="recipe-page-2.html">Choclate Cake With Green Tea Cream</a></h3>
                                
                                <div class="rating four-stars">
                                    <div class="star-rating"></div>
                                    <div class="star-bg"></div>
                                </div>
            
                                <div class="recipe-meta"><i class="fa fa-clock-o"></i> 1 hr 30 min</div>
            
                                <div class="clearfix"></div>
                            </div>
                        </div>
            
                        <div class="four recipe-box columns">
            
                            <div class="thumbnail-holder">
                                <a href="recipe-page-1.html">
                                    <img src="images/recipeThumb-03.jpg" alt=""/>
                                    <div class="hover-cover"></div>
                                    <div class="hover-icon">View Recipe</div>
                                </a>
                            </div>
                            
                            <div class="recipe-box-content">
                                <h3><a href="recipe-page-1.html">Thai Yellow Curry Chicken</a></h3>
                                
                                <div class="rating five-stars">
                                    <div class="star-rating"></div>
                                    <div class="star-bg"></div>
                                </div>
            
                                <div class="recipe-meta"><i class="fa fa-clock-o"></i> 45 min</div>
            
                                <div class="clearfix"></div>
                            </div>
                        </div>
            
                        <div class="four recipe-box columns">
            
                            <div class="thumbnail-holder">
                                <a href="recipe-page-2.html">
                                    <img src="images/recipeThumb-04.jpg" alt=""/>
                                    <div class="hover-cover"></div>
                                    <div class="hover-icon">View Recipe</div>
                                </a>
                            </div>
                            
                            <div class="recipe-box-content">
                                <h3><a href="recipe-page-2.html">Avocado Melon Salad With Lime Vinaigrette</a></h3>
                                
                                <div class="rating four-stars">
                                    <div class="star-rating"></div>
                                    <div class="star-bg"></div>
                                </div>
            
                                <div class="recipe-meta"><i class="fa fa-clock-o"></i> 15 min</div>
            
                                <div class="clearfix"></div>
                            </div>
                        </div>
            
                        <div class="four recipe-box columns">
            
                            <div class="thumbnail-holder">
                                <a href="recipe-page-1.html">
                                    <img src="images/recipeThumb-05.jpg" alt=""/>
                                    <div class="hover-cover"></div>
                                    <div class="hover-icon">View Recipe</div>
                                </a>
                            </div>
                            
                            <div class="recipe-box-content">
                                <h3><a href="recipe-page-1.html">Pollo Borracho With Homemade Tortillas</a></h3>
                                
                                <div class="rating four-stars">
                                    <div class="star-rating"></div>
                                    <div class="star-bg"></div>
                                </div>
            
                                <div class="recipe-meta"><i class="fa fa-clock-o"></i> 30 min</div>
            
                                <div class="clearfix"></div>
                            </div>
                        </div>
            
                        <div class="four recipe-box columns">
            
                            <div class="thumbnail-holder">
                                <a href="recipe-page-2.html">
                                    <img src="images/recipeThumb-06.jpg" alt=""/>
                                    <div class="hover-cover"></div>
                                    <div class="hover-icon">View Recipe</div>
                                </a>
                            </div>
                            
                            <div class="recipe-box-content">
                                <h3><a href="recipe-page-2.html">Sweet Chilli and Lime Chicken Wings</a></h3>
                                
                                <div class="rating five-stars">
                                    <div class="star-rating"></div>
                                    <div class="star-bg"></div>
                                </div>
            
                                <div class="recipe-meta"><i class="fa fa-clock-o"></i> 45 min</div>
            
                                <div class="clearfix"></div>
                            </div>
                        </div>
            
                        <div class="four recipe-box columns">
            
                            <div class="thumbnail-holder">
                                <a href="recipe-page-2.html">
                                    <img src="images/recipeThumb-07.jpg" alt=""/>
                                    <div class="hover-cover"></div>
                                    <div class="hover-icon">View Recipe</div>
                                </a>
                            </div>
                            
                            <div class="recipe-box-content">
                                <h3><a href="recipe-page-2.html">Roast Chicken With Lemon Gravy</a></h3>
                                
                                <div class="rating five-stars">
                                    <div class="star-rating"></div>
                                    <div class="star-bg"></div>
                                </div>
            
                                <div class="recipe-meta"><i class="fa fa-clock-o"></i> 1 hr 20 min</div>
            
                                <div class="clearfix"></div>
                            </div>
                        </div>
            
                        <div class="four recipe-box columns">
            
                            <div class="thumbnail-holder">
                                <a href="recipe-page-1.html">
                                    <img src="images/recipeThumb-08.jpg" alt=""/>
                                    <div class="hover-cover"></div>
                                    <div class="hover-icon">View Recipe</div>
                                </a>
                            </div>
                            
                            <div class="recipe-box-content">
                                <h3><a href="recipe-page-1.html">Farmhouse Vegetable And Barley Soup</a></h3>
                                
                                <div class="rating four-stars">
                                    <div class="star-rating"></div>
                                    <div class="star-bg"></div>
                                </div>
            
                                <div class="recipe-meta"><i class="fa fa-clock-o"></i> 1 hr 30 min</div>
            
                                <div class="clearfix"></div>
                            </div>
                        </div>
            
                        <div class="four recipe-box columns">
            
                            <div class="thumbnail-holder">
                                <a href="recipe-page-1.html">
                                    <img src="images/recipeThumb-09.jpg" alt=""/>
                                    <div class="hover-cover"></div>
                                    <div class="hover-icon">View Recipe</div>
                                </a>
                            </div>
                            
                            <div class="recipe-box-content">
                                <h3><a href="recipe-page-1.html">Chunky Beef Stew</a></h3>
                                
                                <div class="rating five-stars">
                                    <div class="star-rating"></div>
                                    <div class="star-bg"></div>
                                </div>
            
                                <div class="recipe-meta"><i class="fa fa-clock-o"></i> 2 hr 30 min</div>
            
                                <div class="clearfix"></div>
                            </div>
                        </div>
            
                    </div>
                    <div class="clearfix"></div>
            
                    <div class="pagination-container masonry">
                        <nav class="pagination">
                            <ul>
                                <li><a href="#" class="current-page">1</a></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                            </ul>
                        </nav>
            
                        <nav class="pagination-next-prev">
                            <ul>
                                <li><a href="#" class="prev"></a></li>
                                <li><a href="#" class="next"></a></li>
                            </ul>
                        </nav>
                    </div>
            
                </div>
            
     
            <div class="four columns">
            
                <div class="widget search-form">
                    <nav class="search">
                        <form action="#" method="get">
                            <button><i class="fa fa-search"></i></button>
                            <input class="search-field" type="text" placeholder="Search for recipes" value=""/>
                        </form>
                    </nav>
                    <div class="clearfix"></div>
                </div>
            
            
                <div class="widget">
                    <div class="author-box">
                        <span class="title">Author</span>
                        <span class="name">Sandra <br/> Fortin</span>
                        <span class="contact"><a href="mailto:sandra@chow.com">sandra@chow.com</a></span>
                        <img src="images/author-photo.png" alt=""/>
                        <p>I'm Sandra and this is where I share my stuff. I am madly in love with food. You will find a balance of healthy recipes, comfort food and indulgent desserts.</p>
                    </div>
                </div>
            
            
                <div class="widget">
                    <h4 class="headline">Popular Recipes</h4>
                    <span class="line margin-bottom-30"></span>
                    <div class="clearfix"></div>
                    
                    <a href="recipe-page-1.html" class="featured-recipe">
                        <img src="images/featuredRecipe-01.jpg" alt=""/>
            
                        <div class="featured-recipe-content">
                            <h4>Choclate Cake With Green Tea Cream</h4>
                        
                            <div class="rating five-stars">
                                <div class="star-rating"></div>
                                <div class="star-bg"></div>
                            </div>
                        </div>
                        <div class="post-icon"></div>
                    </a>
            
                    <a href="recipe-page-1.html" class="featured-recipe">
                        <img src="images/featuredRecipe-02.jpg" alt=""/>
            
                        <div class="featured-recipe-content">
                            <h4>Mexican Grilled Corn Recipe</h4>
                        
                            <div class="rating five-stars">
                                <div class="star-rating"></div>
                                <div class="star-bg"></div>
                            </div>
                        </div>
                        <div class="post-icon"></div>
                    </a>
            
                    <a href="recipe-page-1.html" class="featured-recipe">
                        <img src="images/featuredRecipe-03.jpg" alt=""/>
            
                        <div class="featured-recipe-content">
                            <h4>Pollo Borracho With Homemade Tortillas</h4>
                        
                            <div class="rating five-stars">
                                <div class="star-rating"></div>
                                <div class="star-bg"></div>
                            </div>
                        </div>
                        <div class="post-icon"></div>
                    </a>
            
                    <div class="clearfix"></div>
                </div>
            
            
                <div class="widget">
                    <h4 class="headline">Share</h4>
                    <span class="line margin-bottom-30"></span>
                    <div class="clearfix"></div>
                    
                    <ul class="share-buttons">
                        <li class="facebook-share">
                            <a href="#">
                                <span class="counter">1,234</span>
                                <span class="counted">Fans</span>
                                <span class="action-button">Like</span>
                            </a>
                        </li>
            
                        <li class="twitter-share">
                            <a href="#">
                                <span class="counter">863</span>
                                <span class="counted">Followers</span>
                                <span class="action-button">Follow</span>
                            </a>
                        </li>
            
                        <li class="google-plus-share">
                            <a href="#">
                                <span class="counter">902</span>
                                <span class="counted">Followers</span>
                                <span class="action-button">Follow</span>
                            </a>
                        </li>
            
            			<li class="behance-share">
                            <a href="#">
                                <span class="counter">902</span>
                                <span class="counted">Followers</span>
                                <span class="action-button">Follow</span>
                            </a>
                        </li>
            
                        <li class="instagram-share">
                            <a href="#">
                                <span class="counter">902</span>
                                <span class="counted">Followers</span>
                                <span class="action-button">Follow</span>
                            </a>
                        </li>
            
                        <li class="dribbble-share">
                            <a href="#">
                                <span class="counter">902</span>
                                <span class="counted">Followers</span>
                                <span class="action-button">Follow</span>
                            </a>
                        </li>
            
                        <li class="linkedin-share">
                            <a href="#">
                                <span class="counter">902</span>
                                <span class="counted">Followers</span>
                                <span class="action-button">Follow</span>
                            </a>
                        </li>
            
            
                        <li class="github-share">
                            <a href="#">
                                <span class="counter">902</span>
                                <span class="counted">Followers</span>
                                <span class="action-button">Follow</span>
                            </a>
                        </li>
            
            
                        <li class="youtube-share">
                            <a href="#">
                                <span class="counter">902</span>
                                <span class="counted">Followers</span>
                                <span class="action-button">Follow</span>
                            </a>
                        </li>
            
                        <li class="pinterest-share">
                            <a href="#">
                                <span class="counter">902</span>
                                <span class="counted">Followers</span>
                                <span class="action-button">Follow</span>
                            </a>
                        </li>
             
                    </ul>
                    <div class="clearfix"></div>
                </div>
            
            </div>
            
            
            </div>
            
            <div class="margin-top-5"></div>
            
            
            </div>
            

            <div id="footer">
            
                <div class="container">
            
                    <div class="five columns">
                        <h3 class="headline footer">About</h3>
                        <span class="line"></span>
                        <div class="clearfix"></div>
                        <p>Cras at ultrices erat, sed vulputate eros. Nunc at augue gravida est fermentum vulputate. Pellentesque et ipsum in dui malesuada tempus.</p>
                    </div>
            
                    <div class="three columns">
            
                        <h3 class="headline footer">Archives</h3>
                        <span class="line"></span>
                        <div class="clearfix"></div>
            
                        <ul class="footer-links">
                            <li><a href="#">June 2014</a></li>
                            <li><a href="#">July 2014</a></li>
                            <li><a href="#">August 2014</a></li>
                            <li><a href="#">September 2014</a></li>
                            <li><a href="#">November 2014</a></li>
                        </ul>
            
                    </div>
            
                    <div class="three columns">
            
                        <h3 class="headline footer">Recipes</h3>
                        <span class="line"></span>
                        <div class="clearfix"></div>
            
                        <ul class="footer-links">
                            <li><a href="browse-recipes.html">Browse Recipes</a></li>
                            <li><a href="recipe-page-1.html">Recipe Page</a></li>
                            <li><a href="submit-recipe.html">Submit Recipe</a></li>
                        </ul>
            
                    </div>
            
                    <div class="five columns">
            
                        <h3 class="headline footer">Newsletter</h3>
                        <span class="line"></span>
                        <div class="clearfix"></div>
                        <p>Sign up to receive email updates on new product announcements, gift ideas, sales and more.</p>
            
                        <form action="#" method="get">
                            <input class="newsletter" type="text" placeholder="mail@example.com" value=""/>
                            <button class="newsletter-btn" type="submit">Subscribe</button>
            
                        </form>
                    </div>
            
                </div>
            
            </div>
            
            <div id="footer-bottom">
            
                <div class="container">
            
                    <div class="eight columns">© Copyright 2014 by <a href="#">Chow</a>. All Rights Reserved.</div>
            
                </div>
            
            </div>
            
            <div id="backtotop"><a href="#"></a></div>

            <script src="assets/home_page/scripts/jquery-1.11.0.min.js"></script>
            <script src="assets/home_page/scripts/jquery-migrate-1.2.1.min.js"></script>
            <script src="assets/home_page/scripts/jquery.superfish.js"></script>
            <script src="assets/home_page/scripts/jquery.royalslider.min.js"></script>
            <script src="assets/home_page/scripts/responsive-nav.js"></script>
            <script src="assets/home_page/scripts/hoverIntent.js"></script>
            <script src="assets/home_page/scripts/isotope.pkgd.min.js"></script>
            <script src="assets/home_page/scripts/chosen.jquery.min.js"></script>
            <script src="assets/home_page/scripts/jquery.tooltips.min.js"></script>
            <script src="assets/home_page/scripts/jquery.magnific-popup.min.js"></script>
            <script src="assets/home_page/scripts/jquery.pricefilter.js"></script>
            <script src="assets/home_page/scripts/custom.js"></script>
            
            <script src="assets/home_page/scripts/switcher.js"></script>
            
            <div id="style-switcher">
                <h2>Style Switcher <a href="#"></a></h2>
                
                <div>
                    <h3>Predefined Colors</h3>
                    <ul class="colors" id="color1">
                        <li><a href="#" class="green" title="Green"></a></li>
                        <li><a href="#" class="blue" title="Blue"></a></li>
                        <li><a href="#" class="orange" title="Orange"></a></li>
                        <li><a href="#" class="navy" title="Navy"></a></li>
                        <li><a href="#" class="yellow" title="Yellow"></a></li>
                        <li><a href="#" class="peach" title="Peach"></a></li>
                        <li><a href="#" class="beige" title="Beige"></a></li>
                        <li><a href="#" class="purple" title="Purple"></a></li>
                        <li><a href="#" class="celadon" title="Celadon"></a></li>
                        <li><a href="#" class="pink" title="Pink"></a></li>
                        <li><a href="#" class="red" title="Red"></a></li>
                        <li><a href="#" class="brown" title="Brown"></a></li>
                        <li><a href="#" class="cherry" title="Cherry"></a></li>
                        <li><a href="#" class="cyan" title="Cyan"></a></li>
                        <li><a href="#" class="gray" title="Gray"></a></li>
                        <li><a href="#" class="darkcol" title="Dark"></a></li>
                    </ul>
                    
                </div>
                
                <div id="reset"><a href="#" class="button color">Reset</a></div>
                    
            </div>
            </React.Fragment>
        )
    }
}


export default (Home);