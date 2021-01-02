import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img 
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
                alt="" />

                <div className="home__row">
                    <Product 
                        id="76109611"
                        title="Bose Noise Cancelling Wireless Bluetooth Headphones 700"
                        price={339.00}
                        image="https://dealsee.net/wp-content/uploads/2020/04/Bose-Noise-Cancelling-Wireless-Bluetooth-Headphones-700-with-Alexa-Voice-Control-Arctic-White.jpg"
                        rating={5}
                    />
                    <Product 
                        id="37396257"
                        title="All-new Echo (4th Gen) Charcoal"
                        price={99.99}
                        image="https://i.gadgets360cdn.com/products/large/amazon-echo-4th-gen-800x800-1601011939.jpg"
                        rating={5}
                    />  
                    <Product 
                        id="40007830"
                        title="Logitech MK345 Wireless Combo"
                        price={49.99}
                        image="https://i5.walmartimages.com/asr/67cf308d-6c26-4511-b979-df9255b5a3a2.1a19365bbb34d715cf18df51be2a6ebd.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff"
                        rating={5}
                    />
                </div>

                <div className="home__row">
                    <Product 
                    id="80454409"
                    title="Instant Pot Duo Mini 7-in-1 Electric Pressure Cooker, Sterilizer, Slow Cooker, Rice Cooker, Steamer, Saute, Yogurt Maker, and Warmer, 3 Quart, 11 One-Touch Programs"
                    price={59.99}
                    image="https://home.batsdeals.com/wp-content/uploads/2019/12/71J8mC0HoIL.jpg"
                    rating={5}
                    />
                </div>

                <div className="home__row">
                    <Product 
                    id="69590534"
                    title="SWAROVSKI Women's Attract Trilogy Earrings & Necklace Crystal Jewelry Collection"
                    price={89.00}
                    image="https://cdnb.lystit.com/photos/dillards/5b0752f1/swarovski-Crystal-Attract-Trilogy-Round-Pendant-Necklace.jpeg"
                    rating={4}
                    />
                    <Product 
                    id="90308292"
                    title="Cracking the Coding Interview: 189 Programming Questions and Solutions - 6th Edition"
                    price={39.95}
                    image="https://rukminim1.flixcart.com/image/704/704/book/8/6/4/cracking-the-coding-interview-189-programming-questions-and-original-imaedsggknvpmzkh.jpeg?q=70"
                    rating={5}
                    />
                </div>

            </div>
        </div>
    )
}

export default Home
