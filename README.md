이 프로젝트는 `create-next-app` 을 이용한 `Next.js` 애플리케이션이며, 서드파티 라이브러리로 `SWR` 과 `Chart.js` 를 사용하였습니다.

## Env

프로젝트를 클론 한 후 `.env.local` 파일을 생성하고 사용 할 API 주소의 `BASE_URL` 을 아래와 같이 설정해 주세요.

```
NEXT_PUBLIC_API_BASE_URL={BASE_URL}
```

## Getting Started

env 세팅이 완료되면 아래 명령어를 실행해 의존성을 설치해 주세요.

```bash
npm install
# or
yarn install
```

의존성 설치가 완료되면 아래 명령어를 실행해 개발 서버를 띄워주세요.

```bash
npm run dev
# or
yarn dev
```

개발 서버가 실행되면 [http://localhost:3000](http://localhost:3000) 으로 접속해 결과물을 확인하실 수 있습니다.

## Desciption

`HomePage` 에서 환자 정보를 탐색할 수 있는 `PatientTable` 컴포넌트를 렌더링 합니다.

`PatientTable` 컴포넌트는 `PatientTableHeader, PatientCharts, PatientTableView, PatientTableFooter` 로 구성되어 있습니다.

`PatientTableHeader` 컴포넌트는 필터링 기능을 제공합니다.

`PatientCharts` 컴포넌트는 환자 정보를 그래프로 분류하여 나타냅니다.

`PatientTableView` 컴포넌트는 환자 정보를 데이터 테이블로 나타냅니다.

`PatientTableFooter` 컴포넌트는 페이지네이션과 Row Size 선택 기능을 제공합니다.
