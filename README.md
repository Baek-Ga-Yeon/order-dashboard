# order-dashboard

주문 관리 대시보드 (Order Dashboard)

주문 데이터를 기반으로
화면에 표시하기 적합한 UI용 데이터 구조를 만들고,  
그 흐름을 프론트엔드(JavaScript와 React), 백엔드(Node + Express) 를 분리하여
REST API 기반 구조로 데이터를 관리하도록 설계했습니다.

## Architecture

Frontend (React)
Backend (Node + Express)
Database (MySQL - Docker)

## 프로젝트 구조

## Frontend

- `src/data/orders.js`  
  주문 원본 데이터

- `src/maps/statusMap.js`  
  주문 상태 코드 -> UI 표시 문구 매핑

- `src/ui/buildOrdersUI.js`  
  화면 렌더링을 고려한 데이터 가공 로직

- `App.jsx`  
  React 최상위 컴포넌트

- `main.jsx`  
  React 진입 파일 (ReactDOM.createRoot)

- `index.html`  
  Vite 기반 루트 HTML

  ## Backend

- `server/src/app.js`  
  Express 서버 설정

- `server/src/routes/`  
  REST API 라우팅

- `server/src/db.js`  
  MySQL 연결 설정

- `docker-compose.yml`  
  MySQL 컨테이너 실행

- `.env`  
  DB 환경 변수 설정

## 현재 구현 내용

- 주문 상태 값을 기반으로 화면용 상태 문구 생성
- 데이터 가공 로직을 함수 단위로 분리
  (-> 실무적 상황 고려, 수정하기 쉽고 가독성 좋게 모듈화)
- React 환경으로 프론트 구조 구성
- Node + Express 서버 생성
- MySQL 연결 구조 설계
- Docker 기반 DB 실행

## 설계 의도

## 1 데이터 가공 로직 분리

UI와 데이터 로직을 분리하여  
수정 시 영향 범위를 최소화하도록 설계했습니다.

## 2 상태 매핑 객체 도입

상태 코드를 직접 문자열로 쓰지 않고  
`statusMap`을 통해 관리하여 유지보수하기 편하도록 구성했습니다.

## 3 REST 기반 확장 구조

- GET /orders
- POST /orders

구현을 목표로  
프론트/백 분리 구조를 설계했습니다.


## 리팩토링 이력

- JSX 사용을 위해 일부 파일을 `.jsx`로 리팩토링
- Docker 기반 DB 실행으로 개발 환경 통합
- 환경 변수(.env)로 DB 정보 분리


## 진행 예정

- GET / POST API 구현
- React에서 fetch 연동
- 상태코드 처리
- 실제 DB 기반 주문 데이터 조회
