import { useEffect, useState } from "react";
import { getOrders } from "../api/ordersApi";

function OrdersScreen() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrders().then(setOrders);
  }, []);
  // 의존성 배열 공백, 마운트시 1번만 실행, 안하면 무한 루프.

  return <div>...</div>;
}