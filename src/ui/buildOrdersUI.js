import { statusMap } from "../maps/statusMap";

// 모듈화. 사용자 UI와 React key 구현.
export function buildOrdersUI(orders) {
  return orders.map((order) => {
    const { id, status, price, customer } = order;

    return {
      id,
      price,
      customer,
      status,
      statusLabel: statusMap[status] ?? "알 수 없음",
      uiId: `order-${id}`,
      // boolean으로 만들어 둔 이유 : 화면 곳곳에서 문자열 비교 반복이 생략 됨.
      isPaid: status === "paid",
    };
  });
}
