import { orders } from "./data/orders.js";
import { buildOrdersUI } from "./ui/buildOrdersUi.js";

const ordersUI = buildOrdersUI(orders);
console.log(ordersUI);