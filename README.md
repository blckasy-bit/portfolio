# Saeyoun Park Portfolio

UX/UI · Product Designer 포트폴리오 웹사이트입니다. Next.js + Tailwind CSS로 제작되었으며 Vercel 배포에 최적화되어 있습니다.

## 기술 스택

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript
- **Deployment:** Vercel

## 로컬 실행

```bash
cd portfolio
npm install
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인합니다.

## Vercel 배포

1. [Vercel](https://vercel.com)에 GitHub 저장소를 연결합니다.
2. **Root Directory**를 `portfolio`로 설정합니다.
3. Framework Preset은 **Next.js**를 선택합니다.
4. Deploy 버튼을 클릭합니다.

또는 Vercel CLI로 배포할 수 있습니다:

```bash
cd portfolio
npx vercel
```

## 프로젝트 구조

```
portfolio/
├── src/
│   ├── app/           # Next.js App Router
│   ├── components/    # UI 컴포넌트
│   └── data/          # 포트폴리오 콘텐츠 데이터
└── public/
```

## 콘텐츠 수정

포트폴리오 텍스트·프로젝트·스킬 등은 `src/data/portfolio.ts`에서 수정할 수 있습니다. 원본 마크다운은 `../docs/saeyoun-park-portfolio.md`에 있습니다.

## 섹션 구성

- **Hero** — 소개 및 pill 형태 이미지 갤러리
- **Latest Projects** — 경력 기반 프로젝트
- **Services** — 스킬 카드
- **Studio** — 프로필 및 통계
- **Testimonials** — 추천사
- **FAQ** — 자주 묻는 질문
- **Education** — 학력
- **Footer** — 연락처 및 경력
