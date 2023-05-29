import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMugHot, faCookie} from "@fortawesome/free-solid-svg-icons"


export default function MenuList() {

    const coffee = {
        "type":"Cappuccino",
        "price": "3.50 €"
    }

    const cookie = {
        "type":"Whoopie Pies",
        "price":"2 €"
    }

    return (<div className="menu">
        <main className="container">
            <h1>Caffè Exclusivo</h1>
            <section>
                <h2>Coffee</h2>
                <FontAwesomeIcon className="coffee_icon" icon={faMugHot}/>
                <article className="menu_item">
                    <p className="coffee">{coffee.type}</p>
                    <p className="price">{coffee.price}</p>
                </article>
                <article className="menu_item">
                    <p className="coffee">{coffee.type}</p>
                    <p className="price">{coffee.price}</p>
                </article>
                <article className="menu_item">
                    <p className="coffee">{coffee.type}</p>
                    <p className="price">{coffee.price}</p>
                </article>
                <article className="menu_item">
                    <p className="coffee">{coffee.type}</p>
                    <p className="price">{coffee.price}</p>
                </article>
            </section>
            <section>
                <h2>Dessert</h2>
                <FontAwesomeIcon className="coffee_icon" icon={faCookie}/>
                <article className="menu_item">
                    <p className="dessert">{cookie.type}</p>
                    <p className="price">{cookie.price}</p>
                </article>
                <article className="menu_item">
                    <p className="dessert">{cookie.type}</p>
                    <p className="price">{cookie.price}</p>
                </article>
                <article className="menu_item">
                    <p className="dessert">{cookie.type}</p>
                    <p className="price">{cookie.price}</p>
                </article>
                <article className="menu_item">
                    <p className="dessert">{cookie.type}</p>
                    <p className="price">{cookie.price}</p>
                </article>
                <article className="menu_item">
                    <p className="dessert">{cookie.type}</p>
                    <p className="price">{cookie.price}</p>
                </article>
                <article className="menu_item">
                    <p className="dessert">{cookie.type}</p>
                    <p className="price">{cookie.price}</p>
                </article>
            </section>
        </main>
    </div>);
}