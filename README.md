# 주세원 · DX Engineer Portfolio

AI 모델 개발, 제품 적용, 백엔드, 운영 경험을 소개하는 단일 페이지 포트폴리오입니다.

- Next.js App Router
- TypeScript
- Tailwind CSS
- 정적 내보내기(`output: "export"`)
- 별도 서버, 데이터베이스, 환경변수 없음

## 배포 전 확인할 내용

포트폴리오의 모든 문구와 링크는 `src/data/portfolio.ts`에서 수정합니다. GitHub에 올리기 전에 아래 두 값을 실제 정보로 바꾸는 것을 권장합니다.

```ts
contact: {
  email: "joosewon@naver.com",
  phone: "010-8652-7129",
}
```

프로젝트 저장소가 공개되어 있다면 해당 프로젝트의 `github` 값을 추가할 수 있습니다. 값이 없는 프로젝트에는 GitHub 버튼이 나타나지 않습니다.

## 1. 로컬에서 실행하기

### 준비물

- Node.js 22 이상
- npm
- Git

프로젝트 폴더에서 터미널을 열고 다음 명령을 순서대로 실행합니다.

```bash
npm install
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 엽니다. 터미널에 다른 포트가 표시되면 그 주소를 사용합니다.

작업을 마친 뒤 아래 명령으로 배포용 빌드를 확인합니다.

```bash
npm run typecheck
npm run build
```

빌드가 성공하면 정적 파일이 `out/` 폴더에 생성됩니다. `out/`은 자동 생성되는 결과물이므로 GitHub에는 올리지 않습니다.

## 2. GitHub 저장소 만들기

1. [GitHub](https://github.com)에 로그인합니다.
2. 오른쪽 위 `+` 버튼을 누르고 **New repository**를 선택합니다.
3. Repository name에 원하는 이름을 입력합니다. 예: `dx-engineer-portfolio`
4. 공개 포트폴리오라면 **Public**을 선택합니다.
5. `Add a README file`, `.gitignore`, `Choose a license`는 선택하지 않습니다. 이 프로젝트에 필요한 파일이 이미 들어 있습니다.
6. **Create repository**를 누릅니다.

저장소가 만들어지면 GitHub가 보여 주는 HTTPS 주소를 복사합니다. 다음과 같은 형태입니다.

```text
https://github.com/GITHUB-아이디/dx-engineer-portfolio.git
```

## 3. 프로젝트를 GitHub에 처음 업로드하기

터미널에서 이 프로젝트 폴더로 이동합니다.

```bash
cd /Users/joosewon/dx-portfolio
```

아래 명령을 한 줄씩 실행합니다. `git remote add origin` 뒤의 주소는 앞에서 복사한 본인의 저장소 주소로 바꿉니다.

```bash
git init
git add .
git status
git commit -m "Create DX engineer portfolio"
git branch -M main
git remote add origin https://github.com/GITHUB-아이디/dx-engineer-portfolio.git
git push -u origin main
```

`git status` 결과에 `node_modules`, `.next`, `out`, `test-results`, `.env` 파일이 나타나지 않으면 정상입니다. 이 파일들은 `.gitignore`에서 제외합니다.

GitHub 로그인 창이 나타나면 브라우저 안내에 따라 인증합니다. GitHub 웹페이지에서 파일 목록이 보이면 업로드가 끝난 것입니다.

이미 Git 저장소로 만든 적이 있다면 `git init`과 `git remote add origin`은 다시 실행하지 않습니다. 연결된 주소는 다음 명령으로 확인할 수 있습니다.

```bash
git remote -v
```

## 4. Vercel에 배포하기

1. [Vercel](https://vercel.com)에 접속해 **Continue with GitHub**로 로그인합니다.
2. 대시보드에서 **Add New → Project**를 선택합니다.
3. 방금 만든 GitHub 저장소를 찾아 **Import**를 누릅니다. 저장소가 보이지 않으면 Vercel의 GitHub 접근 권한에 해당 저장소를 추가합니다.
4. Configure Project 화면에서 다음 항목을 확인합니다.

| 항목 | 설정 |
| --- | --- |
| Framework Preset | `Next.js` |
| Root Directory | 저장소 전체가 이 프로젝트라면 기본값 `./` |
| Build Command | 기본값 또는 `npm run build` |
| Output Directory | 직접 변경하지 않음 |
| Install Command | 기본값 |
| Environment Variables | 추가하지 않음 |

5. **Deploy**를 누릅니다.
6. 빌드가 끝나면 Vercel이 `https://프로젝트이름.vercel.app` 형태의 주소를 제공합니다.

이 프로젝트는 빌드 시 HTML, CSS, JavaScript를 `out/`에 생성하는 정적 사이트입니다. 서버와 데이터베이스가 없으며 Vercel 환경변수를 등록할 필요가 없습니다.

## 5. 배포 후 내용 수정하기

파일을 수정하고 로컬 빌드를 확인한 다음 아래 명령을 실행합니다.

```bash
git add .
git commit -m "Update portfolio content"
git push
```

Vercel은 `main` 브랜치의 새 커밋을 감지해 자동으로 다시 배포합니다. 보통 별도의 Vercel 조작은 필요하지 않습니다.

## 주요 명령

```bash
npm run dev          # 로컬 개발 서버
npm run typecheck    # TypeScript 검사
npm run build        # 프로덕션 정적 빌드
npm run test:e2e     # 개발 서버 기준 반응형·접근성 검사
npm run test:static  # out 폴더 기준 최종 정적 결과 검사
```

브라우저 검사를 처음 실행할 때는 Chromium을 한 번 설치합니다.

```bash
npx playwright install chromium
```

`npm run test:static`은 먼저 `npm run build`를 실행해야 하며, 로컬 환경에 Python 3가 필요합니다. 이 검사는 개발 편의를 위한 것으로 Vercel 배포에는 필요하지 않습니다.

## 프로젝트 구조

```text
src/app/page.tsx                  페이지 구성
src/app/layout.tsx                SEO와 한국어 문서 설정
src/app/globals.css               디자인과 반응형 스타일
src/components/site-header.tsx    섹션 내비게이션
src/components/scroll-button.tsx  페이지 내부 이동
src/components/featured-projects.tsx 프로젝트 카드와 상세 모달
src/components/icon.tsx           SVG 아이콘
src/data/portfolio.ts             모든 문구와 프로젝트 데이터
public/icon.svg                   파비콘
public/awards/                    웹용 상장 이미지
tests/portfolio.spec.ts           반응형·접근성 브라우저 검사
next.config.ts                    정적 내보내기 설정
```

Featured Projects의 상세 내용은 `src/data/portfolio.ts`에 있는 각 프로젝트의 `modalDetails`에서 수정합니다. 상장 이미지를 교체할 때는 `public/awards/`에 같은 파일명으로 저장하거나, `portfolio.awards`의 `image` 경로와 `alt` 설명을 함께 변경합니다.

## 배포 문제 해결

- **Vercel에서 빌드가 실패할 때:** 로컬에서 `npm install`과 `npm run build`를 다시 실행해 같은 오류가 발생하는지 확인합니다.
- **Node.js 버전 오류가 날 때:** Vercel 프로젝트의 Settings → Build and Deployment에서 Node.js 버전을 22 이상으로 선택합니다.
- **저장소를 찾을 수 없을 때:** Vercel 계정의 GitHub 연결 설정에서 저장소 접근 권한을 확인합니다.
- **수정 내용이 보이지 않을 때:** GitHub에 최신 커밋이 올라갔는지 확인하고 Vercel의 Deployments 화면에서 배포 상태를 확인합니다.

공식 문서: [Next.js 정적 내보내기](https://nextjs.org/docs/app/guides/static-exports), [Vercel Git 저장소 배포](https://vercel.com/docs/git)

## 공개 정보와 라이선스

- Noto Sans KR Variable 폰트는 패키지에 포함되어 제공되며 외부 폰트 서버를 사용하지 않습니다.
- SVG 아이콘과 파비콘의 라이선스는 `public/ICONS-LICENSE.txt`에 있습니다.
- 고객명, 내부 자료, 비공개 코드, 실제 문서 이미지는 포함하지 않습니다.
- VLM 프로젝트는 제품 도입 전 PoC로 구분해 표시합니다.
