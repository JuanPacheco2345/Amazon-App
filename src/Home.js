import React from "react";
import Product from "./Product";
import "./Home.css";
function Home() {
    return (
    <div className="home">
        <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt=""
            />

            <div className="home_row">
            <Product
                id="123324"
                title="Echo Dot 3rd Gen- Smart Speaker with Alexa"
                price={11.56}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/6182S7MYC2L._AC_UL320_SR320,320_.jpg"
                />
                <Product
                    id="134564"
                    title="$10 PlayStation Store Gift Card [Digital Code]"
                    price={14.56}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71cCI9QPwYL._AC_UL480_SR333,480_.jpg"
                />
            </div>

            <div className="home_row">
                <Product
                    id="123644"
                    title="Outdoor Security Camera, 1080P WiFi Camera Surveillance Cameras, IP Camera with Two-Way Audio"
                    price={56.65}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71Cj-5UMIdL._AC_UL320_SR320,320_.jpg"
                />
                <Product
                    id="123354"
                    title="10 Xbox Gift Card [Digital Code]"
                    price={17.56}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/618mZBoZXNL._AC_UL320_SR230,320_.jpg"
                />
                <Product
                    id="123544"
                    title="Wansview Wireless Security Camera, IP Camera 1080P HD, WiFi Home Indoor Camera for Baby"
                    price={16.56}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/611kt5mpzvL._AC_UL320_SR320,320_.jpg"
                />
            </div>

            <div className="home_row">
                <Product
                    id="122464"
                    title="My First Learn to Write Workbook: Practice for Kids with Pen Control, Line Tracing"
                    price={3.56}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/71XQe19mZtL._AC_UL320_SR248,320_.jpg"
                />
                </div>


    </div>

    );

}

export default Home;