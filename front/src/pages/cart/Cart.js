import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Cart.css";
import Title from "../../components/Title";
import { ROUTE } from "../../utills/route";
import { ReactComponent as AddIcon } from "../../icons/add.svg";
import { ReactComponent as RemoveIcon } from "../../icons/remove.svg";
import { ReactComponent as CloseIcon } from "../../icons/close.svg";
import { AuthContext } from "../../utills/AuthContext";

function CardProductContainer({
  img,
  productId,
  productName,
  price,
  handleDelete,
  checked,
  onChange,
  quantity,
  onIncrease,
  onDecrease,
}) {
  const currencySymbol = "KRW";
  return (
    <>
      <div className="cart-product-info">
        <div className="cart-img">
          <input
            type="checkbox"
            checked={checked}
            onChange={onChange}
            className="cart-checkbout"
            style={{ width: "15px", marginRight: "1rem" }}
          ></input>
          <Link to={`/product/detail/${productId}`}>
            <img className="cart-product-img" src={img} alt={productName} />
          </Link>
        </div>
        <div className="cart-product-name-quantity">
          <div className="cart-product-name">
            <Link to={`/product/detail/${productId}`}>{productName} </Link>
          </div>
          <div className="cart-quantity">
            <RemoveIcon onClick={onDecrease} />

            <div className="cart-quantity-no">{quantity}</div>

            <AddIcon onClick={onIncrease} />
          </div>
        </div>
        <div className="cart-product-price">
          {price.toLocaleString("en-US", {
            style: "currency",
            currency: currencySymbol,
          })}{" "}
        </div>
        <span className="delete-button">
          <CloseIcon onClick={handleDelete} />
        </span>
      </div>
    </>
  );
}

function Cart() {
  const currencySymbol = "KRW";
  const shippingCost = 3000;
  const navigate = useNavigate();
  const location = useLocation();
  const [subtotal, setSubtotal] = useState(0);
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
  // const [quantity, setQuantity] = useState(1);
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const auth = useContext(AuthContext);

  const handleOrder = () => {
    auth.isLoggedIn
      ? navigate(ROUTE.ORDER.link, { state: { cart } })
      : navigate(ROUTE.LOGIN.link, {
          state: {
            redirectUrl: location.pathname + location.search + location.hash,
          },
        });
  };

  //체크 박스 전체 선택
  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    setSelectedItems(selectAll ? [] : cart.map((item) => item._id));
  };

  // 체크박스 선택
  const handleItemSelection = (itemId) => {
    if (selectedItems.includes(itemId)) {
      setSelectedItems(selectedItems.filter((_id) => _id !== itemId));
    } else {
      setSelectedItems([...selectedItems, itemId]);
    }
  };

  // 선택 삭제
  const handleDelete = () => {
    const updatedCart = cart.filter((item) => !selectedItems.includes(item._id));
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
    setSelectedItems([]);
    setSelectAll(false);
  };

  // x 버튼 클릭 시 해당 상품 카트에서 삭제
  const handleRemoveFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  // cart[index].quantity를 add +1
  const handleIncrease = (index) => {
    const updatedCart = cart.map((item) => {
      if (item._id === index) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  const handleDecrease = (index) => {
    const updatedCart = cart.map((item) => {
      if (item._id === index) {
        if (item.quantity === 1) {
          return item;
        }
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      return item;
    });

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  useEffect(() => {
    const sum = cart.reduce((accum, curr) => accum + curr.price * curr.quantity, 0);
    setSubtotal(sum);
  }, [cart]);

  return (
    <>
      <div className="section">
        <Title title="Cart" style={{ marginBottom: "0" }}></Title>

        {/*
1. {Array.isArray(cart)  cart 가 undefined가 아니고
2.  장바구니.leng !==0 일때 렌더
3. 장바구니.leng ===0 일때는 이거
*/}
        <div className="cart-product-header">
          <input
            type="checkbox"
            onChange={handleSelectAll}
            checked={selectAll}
            className="cart-checkbout"
            style={{ width: "15px" }}
          ></input>
          <div style={{ display: "inline", marginLeft: "1rem" }}>전체선택</div>
          <div style={{ display: "inline", marginLeft: "1rem" }}>|</div>
          <div
            style={{ display: "inline", marginLeft: "1rem", cursor: "pointer" }}
            onClick={handleDelete}
          >
            선택삭제
          </div>
        </div>

        {cart.length !== 0 ? (
          cart.map((item) => (
            <CardProductContainer
              key={item._id}
              img={process.env.REACT_APP_FILE_RES_URL + "/" + item.imageKey + ".png"}
              productId={item._id}
              productName={item.productName}
              price={item.price * item.quantity}
              quantity={item.quantity}
              handleDelete={handleRemoveFromCart}
              checked={selectedItems.includes(item._id)}
              onChange={() => handleItemSelection(item._id)}
              onIncrease={() => handleIncrease(item._id)}
              onDecrease={() => handleDecrease(item._id)}
            ></CardProductContainer>
          ))
        ) : (
          <p>장바구니가 비어있습니다.</p>
        )}

        {cart.length !== 0 && (
          <div className="cart-payment-tile">
            <div className="payment-summary ">
              <div className="payment-header">결제정보</div>
              <div className="payment-info">
                <div className="info">
                  <p>상품 총 금액</p>
                  <p id="productsTotal">
                    {subtotal.toLocaleString("en-US", {
                      style: "currency",
                      currency: currencySymbol,
                    })}
                  </p>
                </div>
                <div className="info">
                  <p>배송비</p>
                  <p id="deliveryFee">
                    {shippingCost.toLocaleString("en-US", {
                      style: "currency",
                      currency: currencySymbol,
                    })}
                  </p>
                </div>
              </div>
              <div className="payment-total">
                <p>총 결제금액</p>
                <p id="Total">
                  {(subtotal + shippingCost).toLocaleString("en-US", {
                    style: "currency",
                    currency: currencySymbol,
                  })}
                </p>{" "}
              </div>

              <div className="purchase">
                <button className="purchase-button" onClick={handleOrder}>
                  구매하기
                </button>
              </div>
              <p
                style={{
                  textAlign: "center",
                  marginTop: "1rem",
                  textDecoration: "underline",
                  display: "inline",
                }}
              >
                <Link to={ROUTE.HOME.link}>Back home</Link>
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Cart;
