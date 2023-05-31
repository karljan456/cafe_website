import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugHot, faCookie } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react";
import axios from 'axios'


export default function MenuList() {

    const [drinks, setDrinks] = useState([]);

    const [cookies, setCookies] = useState([]);

    useEffect(() => {

        loadMenu();

    }, []);

    const loadMenu = async () => {

        const coffee = await axios.get("http://localhost:8080/getallcoffee");

        const cookie = await axios.get("http://localhost:8080/getallcookies");

        setDrinks(coffee.data);

        setCookies(cookie.data);

    }

    return (<div className="menu">
        <main className="container">
            <h1>Caffè Exclusivo</h1>
            <section>
                <h2>Coffee</h2>
                <FontAwesomeIcon className="coffee_icon" icon={faMugHot} />

                {
                    drinks.map((drink) => (
                        <article className="menu_item">
                            <p className="coffee">{drink.name}</p>
                            <p className="price">{drink.price} €</p>
                        </article>
                    ))
                }

            </section>
            <section>
                <h2>Dessert</h2>
                <FontAwesomeIcon className="coffee_icon" icon={faCookie} />

                {
                    cookies.map((cookie) => (

                        <article className="menu_item">
                            <p className="dessert">{cookie.name}</p>
                            <p className="price">{cookie.price} €</p>
                        </article>

                    ))
                }

            </section>
        </main>
    </div>);
}