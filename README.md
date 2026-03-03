# order-dashboard

주문 관리 대시보드 (Order Dashboard)

React(프론트) + Node/Express(백엔드) + MySQL(Docker)로 구성된
REST API 기반 주문 관리 프로젝트입니다.  
데이터 가공 로직(UI용 변환)과 화면 렌더링, API 통신 레이어를 분리해
유지보수성과 확장성을 고려한 구조로 설계했습니다.

## Architecture

Frontend (React)
Backend REST API (Node + Express)
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
  React 진입 파일

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

- 주문 상태 값을 기반으로 UI 표시 문구 생성 (`statusMap`)
- UI 렌더링을 고려한 데이터 구조 변환 로직 분리 (`buildOrdersUI`)
- 프론트/백 분리 구조 구성 (React + Express)
- React에서 API 호출 흐름 구성 (`ordersApi.js` → `ordersScreen.jsx`)
- MySQL Docker 기반 개발 환경 구성

## 설계 의도

### 데이터 가공 로직 분리

화면(UI)에서 바로 원본 데이터를 사용하지 않고  
`buildOrdersUI.js`에서 UI 렌더링에 적합한 형태로 가공하도록 분리했습니다.

이를 통해  
- 화면 구조 변경 시 데이터 로직에 영향을 주지 않도록 설계
- 동일한 가공 로직을 다른 화면에서도 재사용 가능하도록 구성

---

### 상태 매핑 객체 도입

주문 상태 코드를 화면에 직접 문자열로 작성하지 않고  
`statusMap` 객체를 통해 일관되게 관리했습니다.

이를 통해  
- 하드코딩 제거
- 상태 문구 변경 시 단일 파일 수정만으로 반영
- 유지보수성 향상

---

### REST 기반 프론트/백 분리 구조

프론트엔드(React)와 백엔드(Express)를 분리하고  
API 레이어(`src/api/ordersApi.js`)를 통해 통신하도록 구성했습니다.

- GET /orders : 주문 목록 조회
- POST /orders : 주문 생성 (확장 가능 구조)

이 구조를 통해  
클라이언트와 서버 책임을 명확히 분리하고  
확장 가능하게 설계했습니다.


## 리팩토링 이력

- JSX 문법 사용에 맞게 일부 파일을 `.jsx`로 변경
- API 호출 로직을 `src/api`로 분리
- Docker 기반 MySQL 실행으로 개발 환경 통일
- 환경 변수(.env) 도입으로 민감 정보 분리


## 진행 예정

- 주문 생성(POST) 기능 완성 및 유효성 검증 추가
- API 에러 처리 및 상태 관리 고도화
- 실제 DB 연동 기반 CRUD 확장
- 컴포넌트 단위 분리 및 재사용성 개선
