import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { useBasket } from "../Context";
import { getQuantityTotal } from "../utility";
import Basket from "./Basket";
import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const { basket } = useBasket();
  const [openBasket, setOpenBasket] = useState(false);

  const basketQuantity = getQuantityTotal(basket);
  const closeBasket = () => {
    setOpenBasket(false);
  };

  return (
    <nav className="Nav">
      <div className="wrapper">
        <div className="logo">
          <Link to="/">
            <h1>SK</h1>
          </Link>
        </div>
        <ul className="navIcons">
          <li>
            <button
              onClick={() => setOpenBasket(!openBasket)}
              className="basketBtn"
            >
              <FontAwesomeIcon
                icon={faBagShopping}
                size="lg"
                className="basketIcon"
              />
              <span>{basketQuantity}</span>
            </button>
          </li>

          {openBasket && <Basket closeBasket={closeBasket} />}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
