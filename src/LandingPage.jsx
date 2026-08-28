import "./LandingPage.css"
import { FaWheelchair } from "react-icons/fa6"
import { useEffect, useState } from "react"


function LandingPage() {
    const [foods, setFoods] = useState([]);
    useEffect(() => {
        fetch("https://dummyjson.com/recipes")
            .then((res) => res.json())
            .then((data) => setFoods(data.recipes.slice(0, 8)))
    }, [])
    return (

        <>
            <section>
                <div className="navdiv">
                    <nav className="nav">
                        <div>
                            <img src="/Frame 58511 (1).png" alt="" />
                        </div>
                        <div className="li">
                            <li>Products</li>
                            <li>Battery Swap</li>
                            <li>Charging Stations</li>
                            <li>Contact Us</li>
                        </div>
                    </nav>
                    <input type="text" placeholder="search" className="search" /><FaWheelchair className="icn1" />

                </div>
            </section>
            <section>
                <div className="bgdiv">
                    <img src="/Frame 58501 (1).png" alt="" className="bg" />
                </div>
            </section>
            <section className="sec2">
                <div className="fourimages">
                    <div className="blueimg">

                        <img src="/Rectangle 26.png" alt="" className="blueimage" />
                        <img src="public/pexels-bruggi-4678065.png" alt="" className="grass" />
                    </div>
                    <div>
                        <img src="public/pexels-elmir-jafarov-375483362-24376862.png" alt="" className="brown" />
                        <img src="public/Rectangle 25.png" alt="" className="orange" />
                    </div>
                </div>
                <div className="write-up-one">
                    <p className="aboutus">ABOUT US</p>
                    <h1>Driving Africa’s Electric Future</h1>
                    <p>At RoadRunner EV, we’re on a mission to revolutionize mobility <br />through clean, smart, and accessible electric <br />transportation. From eco-friendly tricycles to innovative battery swap <br />services and expanding EV infrastructure, we provide solutions that power <br />businesses and individuals alike.
                        Built for performance and sustainability, our vehicles are designed to meet the unique challenges of urban and rural transportation — all while reducing carbon emissions and fueling progress.</p>
                    <h1>Why RoadRunner?</h1>
                    <p>✔ Affordable, high-performing EVs <br /> ✔ Convenient battery swap and charging networks <br /> ✔ Trusted by riders, businesses, and delivery services <br /> ✔ Committed to a greener, smarter tomorrows.</p>
                </div>

                        <div className="product-div">
                            <p className="products">OUR PRODUCTS</p>
                            <h1 className="Delivery">Fries</h1>
                            <div className="div-seven-2">
                                {foods.slice(0, 3).map((food) => (
                                    <div key={food.id} className="div-eight-two">
                                        <img src={food.image} alt="" className="div-9-2" />


                                        <div className="div-ten">
                                            <h2> {food.name}</h2>
                                            <p> ⭐ {food.rating}</p>
                                            <p> ⏱ Cooking time: {food.cookTimeMinutes} minutes</p>
                                        </div>

                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="product-div">
                            <h1 className="Delivery">Meat and sauce</h1>

                            <div className="div-seven-2">
                                {foods.slice(3, 6).map((food) => (
                                    <div key={food.id} className="div-eight-two">
                                        <img src={food.image} alt="" className="div-9-2" />


                                        <div className="div-ten">
                                            <h2> {food.name}</h2>
                                            <p> ⭐ {food.rating}</p>
                                            <p> ⏱ Cooking time: {food.cookTimeMinutes} minutes</p>
                                        </div>
                                    </div>

                                ))}
                            </div>
                        </div>

                        <div className="product-div">
                            <p className="products">OUR PRODUCTS</p>
                            <h1 className="Delivery">Foreign foods</h1>
                            <div className="div-seven-2">
                                {foods.slice(5, 8).map((food) => (
                                    <div key={food.id} className="div-eight-two">
                                        <img src={food.image} alt="" className="div-9-2" />


                                        <div className="div-ten">
                                            <h2> {food.name}</h2>
                                            <p> ⭐ {food.rating}</p>
                                            <p> ⏱ Cooking time: {food.cookTimeMinutes} minutes</p>
                                        </div>

                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="product-div">
                            <h1 className="Delivery">Meat and sauce</h1>

                            <div className="div-seven-2">
                                {foods.slice(4, 7).map((food) => (
                                    <div key={food.id} className="div-eight-two">
                                        <img src={food.image} alt="" className="div-9-2" />


                                        <div className="div-ten">
                                            <h2> {food.name}</h2>
                                            <p> ⭐ {food.rating}</p>
                                            <p> ⏱ Cooking time: {food.cookTimeMinutes} minutes</p>
                                        </div>
                                    </div>

                                ))}
                            </div>
                        </div>

                        <div className="product-div">
                            <h1 className="Delivery">Salads</h1>

                            <div className="div-seven-2">
                                {foods.slice(3, 6).map((food) => (
                                    <div key={food.id} className="div-eight-two">
                                        <img src={food.image} alt="" className="div-9-2" />


                                        <div className="div-ten">
                                            <h2> {food.name}</h2>
                                            <p> ⭐ {food.rating}</p>
                                            <p> ⏱ Cooking time: {food.cookTimeMinutes} minutes</p>
                                        </div>
                                    </div>

                                ))}
                            </div>
                        </div>


            </section>
            <section>
                <div className="images">
                    <img src="/image 5.png" alt="" />
                    <img src="/image 7.png" alt="" />
                    <img src="/image 8.png" alt="" />
                    <img src="/image 9.png" alt="" />
                    <img src="/image 10.png" alt="" />
                </div>
            </section>
        </>
    )
}
export default LandingPage