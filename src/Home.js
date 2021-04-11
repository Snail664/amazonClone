import React from 'react';
import "./Home.css";
import Product from "./Product"

function Home() {
    return (
    <div>
        <div className='home'>
            <img className='home__image' src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_2x._CB432458382_.jpg">
            </img>
        </div>
        <div className="home__row">
            {/* Product id, title, price, rating, image */}

            <Product
            id="1"
            title="Fjallraven, Kanken Classic Backpack for Everyday"
            price="59.96"
            rating="5"
            image="https://www.crumpler.com/media/catalog/product/t/u/tuc001-b00g70-01-tucker-bag-black.jpg"
            />

            <Product
            id='2'
            title='Classic wrist watch'
            price='200.00'
            rating='4'
            image='https://jooinn.com/images/wrist-watch-1.jpg'
            />

        </div>
            
        <div className='home__row'>
            <Product
            id="3"
            title="Samsung QLED 8K TV"
            price="2000.00"
            rating="5"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQphPztZ1pwgTrapPDjfbq7Jt-uemAvJ875fQ&usqp=CAU"
            />

            <Product
            id="4"
            title="Samsung S20 Clear Screen Case"
            price="60.99"
            rating="5"
            image="https://images.mobilefun.co.uk/graphics/450pixelp/79274.jpg"
            />

            <Product
            id="5"
            title="Sony XB21 EXTRA BASS Portable Blue"
            price="175.00"
            rating="3"
            image="https://www.sony.com.sg/image/5f13f8377fdf1a02a7e980c6f4572484?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF"
            />
        </div>

        <div class='home__row'>
            <Product
            id="6"
            title="Secretlab OMEGA 2020 Stealth - Gaming Chair"
            price="499.99"
            rating="2"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTcKmA9AXtLXgYsVdJYi74GSbDYv81xzaZZ5s0IaONEtFYRg4dPOSjBPTI2wknD_9VTCPCL9HCo&usqp=CAc"
            />
        </div>
    </div>
    )};


export default Home;
    