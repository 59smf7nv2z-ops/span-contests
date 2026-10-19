# 스팬 SPAN — 건축공학 공모전 허브

건축공학도를 위한 공모전·경진대회 정보를 모아 보여주는 웹 서비스입니다.

## 라이브

GitHub Pages: `https://<username>.github.io/span-contests/`

## 기능

- 분야·상태·키워드 필터와 마감일 정렬
- 공모전별 시상·자격·팀 규모·요약 펼쳐보기
- 주최 페이지로 바로 이동

## 실행

```bash
npm install
npm run dev
```

프로덕션 빌드:

```bash
npm run build
npm run preview
```

## 데이터

`src/data/contests.ts`에 공모전 목록이 있습니다. 한국건축구조기술사회 건축구조경진대회, 구조물 내진설계 경진대회 등 실제 대회와 참고용 샘플이 함께 들어 있습니다. 일정·상금은 주최 공고를 기준으로 확인하세요.

## 스택

- Vite + React + TypeScript
- GitHub Pages (`main` 푸시 시 Actions로 배포)
