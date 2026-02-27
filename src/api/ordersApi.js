// fetch만 담당하는 곳(유지보수를 더 쉽게 하기 위해 파일을 나눔, API 분리 패턴)

export async function getOrders() {
  const res = await fetch("http://localhost:4000/orders");
  return res.json();
}
