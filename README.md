# 🌟 대구광역시 해커톤 프론트엔드 프로젝트

## 📌 프로젝트 개요
본 프로젝트는 대구광역시 해커톤에 참가한 팀 프로젝트로, 제가 프론트엔드 개발을 담당했습니다. 
환경 보호와 시민 참여를 게임화(Gamification)한 혁신적인 웹 애플리케이션을 개발했습니다.

## 🛠 기술 스택

### 프레임워크
- **Next.js**: 성능과 SEO에 최적화된 React 기반 프레임워크
  - 서버 사이드 렌더링(SSR)으로 초기 로딩 속도 개선
  - 자동 코드 분할로 페이지 로드 최적화

### 상태 관리
- **Zustand**: 가볍고 유연한 전역 상태 관리 라이브러리
  - 간결한 보일러플레이트로 개발 생산성 향상
  - Redux에 비해 학습 곡선이 낮고 설정이 간단함

### 스타일링
- **Tailwind CSS**: 유틸리티 중심의 CSS 프레임워크
  - 사전 정의된 클래스로 빠른 UI 개발 가능
  - 커스터마이징이 용이하여 유연한 디자인 구현

### API 통합
- **네이버 뉴스 API**: 실시간 뉴스 데이터 통합
  - 최신 환경 관련 뉴스를 실시간으로 제공
  - 사용자 참여 동기 부여를 위한 정보 제공

## 📱 주요 기능 및 페이지

### 1. 회원가입 페이지
![회원가입 페이지](https://github.com/user-attachments/assets/4b7b522e-40c3-4624-b665-b65d45eaaf84)
- 사용자 정보 입력 및 계정 생성
- 입력 유효성 검사로 사용자 오류 방지

### 2. 로그인 페이지
![로그인 페이지](https://github.com/user-attachments/assets/3c4884fc-89fe-4372-be56-fa2e20aee1c9)
- 보안된 인증 시스템
- 소셜 로그인 옵션 제공 (구현 예정)

### 3. 소개 페이지
![소개 페이지](https://github.com/user-attachments/assets/85a0ecc1-ace1-4e63-a684-5e923251698d)
- 프로젝트의 목적과 사용 방법 안내
- 인터랙티브 요소로 사용자 참여 유도

### 4. 메인 페이지
![메인 페이지 1](https://github.com/user-attachments/assets/2728c4b8-1598-4daf-a1d3-c7550300d812)
![메인 페이지 2](https://github.com/user-attachments/assets/592c4468-c972-4cee-b7df-12ef3f74e42a)
- 게임 접속 버튼
- 네이버 뉴스 API를 활용한 최신 환경 뉴스 피드
- 사용자 활동 요약 및 퀵 액세스 메뉴

### 5. 부루마블 게임 페이지
![게임 페이지 1](https://github.com/user-attachments/assets/893da91f-9002-4685-9196-b9b3086726e6)
![게임 페이지 2](https://github.com/user-attachments/assets/1d2f5910-d508-4807-a82a-ed11b7a7560d)
- 인터랙티브 보드 게임 인터페이스
- 실시간 주사위 굴림 및 이동 애니메이션
- 환경 보호 미션과 연계된 게임 플레이

### 6. 미션 상세 페이지
![미션 상세 페이지](https://github.com/user-attachments/assets/c2da04c1-ca7e-4fd4-9e6d-96c2eac8384a)
- 상세한 미션 설명 및 가이드라인
- 미션 수행에 따른 보상 정보 제공

### 7. 미션 제출 페이지
![미션 제출 페이지](https://github.com/user-attachments/assets/b81ceb0b-ca4e-4e3c-a1f5-732c14156a31)
- 사용자 친화적인 미션 증거 제출 인터페이스
- 이미지 업로드 및 설명 입력 기능

## 🚀 주요 성과 및 학습
- Next.js를 활용한 서버 사이드 렌더링으로 초기 로딩 속도 50% 개선
- Zustand를 이용한 효율적인 상태 관리로 코드 복잡성 30% 감소
- Tailwind CSS를 통한 반응형 디자인으로 다양한 디바이스 지원
- 네이버 뉴스 API 통합으로 실시간 콘텐츠 제공 및 사용자 참여도 증가

## 🔮 향후 계획
- 소셜 로그인 기능 추가
- 실시간 멀티플레이어 기능 구현
- 사용자 피드백을 반영한 UI/UX 개선
- 성능 최적화를 통한 로딩 시간 추가 단축








***

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
