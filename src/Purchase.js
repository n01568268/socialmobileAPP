import React, { useState } from "react";
import Download from "./Download";
import "./styles.scss";

export default function Purchase(props) {
  const [isPurchasing, setIsPurchasing] = useState(false);
  const [isPaid, setIsPaid] = useState(false);

  const handlePurchaseClick = () => {
    setIsPurchasing(true);
  };

  const handlePayClick = () => {
    setIsPaid(true);
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("PurchaseOverlay")) {
      setIsPurchasing(false);
    }
  };

  return (
    <div className="Purchase">
      <button className="PurchaseButton" onClick={handlePurchaseClick}>
        Purchase
      </button>
      {isPurchasing && !isPaid && (
        <div className="PurchaseOverlay" onClick={handleOverlayClick}>
          <div className="PurchaseArea">
            <div className="Price">Price: {props.price}</div>
            <button className="PayButton" onClick={handlePayClick}>
              Pay
            </button>
          </div>
        </div>
      )}
      {isPaid && <Download url={props.url} />}
    </div>
  );
}
