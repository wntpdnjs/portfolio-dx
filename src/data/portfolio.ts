export interface Project {
  id: string; title: string; category: string; summary: string; problem: string;
  role: string; actions: string[]; result: string; application: string;
  metric: string; metricLabel: string; tags: string[]; github?: string;
}

export const portfolio = {
  name: "주세원", initials: "SW", identity: "DX ENGINEER PORTFOLIO", year: "2026",
  seo: { title: "주세원 | DX Engineer Portfolio", description: "AI 모델 개발부터 서비스 적용과 운영까지. 주세원의 문서 AI, OCR, VLM 및 백엔드 개발 경험과 실제 제품 적용 성과를 소개합니다." },
  nav: [{ label: "소개", id: "about" }, { label: "경력", id: "experience" }, { label: "프로젝트", id: "projects" }, { label: "기술", id: "skills" }],
  hero: {
    eyebrow: "DX ENGINEER · AI PRODUCT DEVELOPMENT",
    headline: "AI 모델을 실제 제품에\n연결하고 운영해 온 개발자",
    description: "문서 AI 제품에서 데이터 구축, 모델 개선, 제품 적용, 운영 이슈 대응까지 맡았습니다. 백엔드 개발 경험을 바탕으로 AI 기능을 서비스 관점에서 구현합니다.",
    proof: ["문서 AI 제품 개발", "End-to-End 실행", "Backend 연동"],
    note: "모델 성능과 서비스 요구사항을 함께 해결합니다.",
    actions: [{ label: "경력 확인", id: "experience" }, { label: "프로젝트 확인", id: "projects" }, { label: "연락처", id: "contact" }]
  },
  sections: {
    about: { index: "01", title: "About", subtitle: "AI 기능을 제품 안에서 구현하고 운영했습니다." },
    strengths: { title: "Core Strengths" },
    experience: { index: "02", title: "Experience", subtitle: "문서 AI 제품 개발부터 운영 대응까지" },
    projects: { index: "03", title: "Featured Projects", subtitle: "과제, 실행, 성과, 적용을 기준으로 정리했습니다." },
    activities: { index: "04", title: "Other Projects", subtitle: "서비스 기획과 구현 경험" },
    skills: { index: "05", title: "Skills", subtitle: "업무에 사용한 기술" },
    awards: { index: "06", title: "Awards", subtitle: "프로젝트 수상 이력" },
    why: { index: "07", title: "Why DX Engineer", subtitle: "AI와 시스템을 업무에 적용하는 개발자" },
    contact: { index: "08", title: "Contact", subtitle: "경험과 프로젝트에 대해 이야기 나누겠습니다." }
  },
  about: ["문서 AI 제품에서 OCR, 객체 탐지, VLM 기반 기능을 개발했습니다. 데이터 구축, 학습, 평가, 제품 적용, 운영 대응을 직접 수행하며 모델 성능과 서비스 요구사항을 함께 다뤘습니다.", "REST API, DB, Redis Pub/Sub 기반 백엔드도 개발했습니다. 기술 검토에 그치지 않고 일정과 운영 조건에 맞춰 실제 기능으로 구현하는 데 강점이 있습니다."],
  strengths: [
    { icon: "model", title: "AI Model Development", description: "OCR·DETR·VLM 개발, 학습, 평가, 오류 분석" },
    { icon: "connect", title: "Product Integration", description: "PoC 검증과 AI 기능의 제품 반영" },
    { icon: "backend", title: "Backend Development", description: "REST API·DB·Redis 기반 기능 구현" },
    { icon: "operation", title: "Operation & Delivery", description: "고객 일정, 요구사항, 운영 이슈 대응" }
  ],
  experience: { company: "문서 AI 솔루션 기업", role: "AI Research Engineer", roleNote: "AI 제품 개발 · 적용 · 운영", period: "2025.08 — 2026.09", label: "DOCUMENT AI", tasks: ["OCR·문서 구조 인식 모델 개발 및 성능 개선", "데이터 구축부터 학습·평가까지 파이프라인 수행", "AI 기능의 제품 반영과 운영 지원", "VLM 기반 기능 PoC 및 도입 가능성 검토", "고객 요구사항과 제품 이슈 대응"] },
  metrics: [
    { label: "일본어 OCR", unit: "F1", before: "17.03%", after: "93.61%", change: "+76.58%p" },
    { label: "문서 구조 인식", unit: "TEDS", before: "0.7413", after: "0.8916", change: "+0.1503" },
    { label: "속성 인식", unit: "성능", before: "93.6%", after: "96.1%", change: "+2.5%p" }
  ],
  activities: [
    { title: "하나 디지털 파워온", name: "STOCKER", description: "초보 투자자를 위한 주식 정보 서비스. 서비스 기획, UI/UX, API 구조 설계에 참여했습니다.", award: "우수상", tags: ["서비스 기획", "API 설계"] },
    { title: "Tech4Good 해커톤", name: "식물 판별 및 정보 검증", description: "ResNet과 BERT를 활용한 식물 판별 및 정보 검증 서비스를 개발했습니다.", award: "장려상", tags: ["ResNet", "BERT"] },
    { title: "Pay 핀테크 해커톤", name: "AI 기반 소비 관리", description: "GPT 기반 소비 리포트와 MCC 결제 제한 기능을 구현한 프로젝트입니다.", award: "장려상", tags: ["GPT", "Fintech"] }
  ],
  skills: [{ title: "AI / ML", items: ["Python", "PyTorch", "OCR", "Computer Vision", "DETR", "VLM"] }, { title: "Backend", items: ["REST API", "Spring Boot", "Redis", "Database"] }, { title: "Environment", items: ["Linux", "Ubuntu", "Git", "GPU Server"] }],
  awards: [{ title: "산학연계 SW프로젝트 전시회", prize: "우수상", project: "ClassLog" }, { title: "하나 디지털 파워온", prize: "우수상", project: "STOCKER" }, { title: "Tech4Good 해커톤", prize: "장려상", project: "식물 판별 및 정보 검증" }, { title: "Pay 핀테크 해커톤", prize: "장려상", project: "AI 기반 소비 관리" }],
  why: "모델 성능 개선과 함께 제품 반영, 고객 일정, 운영 이슈를 맡아 왔습니다. AI 개발과 백엔드 경험을 바탕으로 현장의 요구를 기능과 시스템으로 구현하고, 배포 이후까지 책임지는 DX Engineer로 기여하겠습니다.",
  contact: { description: "AI 제품 개발과 서비스 적용 경험에 대해 이야기 나누고 싶습니다.", email: "joosewon@naver.com", phone: "010-8652-7129" },
  ui: { navigation: "주요 섹션", skip: "본문으로 건너뛰기", contact: "연락처", problem: "과제", role: "담당", solution: "실행", outcome: "성과 및 적용", github: "GitHub", metricHeading: "대표 성과", email: "Email", phone: "Phone", toTop: "맨 위로", footer: "주세원 · DX Engineer Portfolio", footerNote: "AI Product · Backend · Operations" }
};

export const projects: Project[] = [
  { id: "01", title: "Japanese OCR Improvement", category: "AI → PRODUCT", summary: "고객 시연 대응에서 자체 제품 반영까지", problem: "자체 OCR의 일본어 미지원과 촉박한 고객 시연 일정", role: "데이터 구축 · 모델 비교/선정 · 자체 모델 개선", actions: ["오픈소스 OCR을 비교해 시연용 모델을 선정하고 우선 연동", "일본어 데이터 구축과 자체 모델 학습을 병행"], result: "일정 내 일본어 OCR 시연, F1 93.61% 달성", application: "자체 OCR 제품에 일본어 인식 기능 반영", metric: "17.03% → 93.61%", metricLabel: "일본어 OCR F1", tags: ["Python", "PyTorch", "OCR", "Linux"] },
  { id: "02", title: "Document Structure Recognition", category: "MODEL → PRODUCT QUALITY", summary: "데이터 기준과 오류 분석으로 인식 품질 개선", problem: "문서 객체와 구조의 인식 정확도 개선", role: "데이터 구축 · 태깅 기준 · 학습/평가", actions: ["태깅 기준을 정리해 학습 데이터의 일관성 확보", "반복 평가와 오류 사례 분석으로 모델 개선"], result: "TEDS 0.7413에서 0.8916으로 향상", application: "문서 AI 제품의 구조 인식 품질 개선에 활용", metric: "0.7413 → 0.8916", metricLabel: "문서 구조 인식 TEDS", tags: ["Python", "PyTorch", "DETR", "Computer Vision"] },
  { id: "03", title: "VLM Auto Tagging PoC", category: "POC → PRODUCT DECISION", summary: "실제 문서 기준으로 VLM 도입 가능성 검토", problem: "문서 자동 태깅 업무에 VLM을 적용할 수 있는지 판단", role: "모델 비교 · 결과 분석 · 적용 가능성 검토", actions: ["여러 VLM을 동일 조건에서 비교", "실제 문서 결과를 기준으로 오류와 활용 범위 분석"], result: "자동 태깅 기능의 적용 가능성과 한계 확인", application: "제품 도입 여부를 판단할 PoC 근거 마련", metric: "실제 문서 기반 PoC", metricLabel: "VLM Auto Tagging", tags: ["Python", "VLM", "Qwen", "Prompt Engineering"] },
  { id: "04", title: "ClassLog", category: "BACKEND → WEB SERVICE", summary: "강의·학습 관리 웹 서비스의 백엔드 구현", problem: "강의·과제 관리와 학습 알림 기능 구축", role: "Backend Developer", actions: ["사용자·강의·과제 REST API 및 DB 연동", "Redis Pub/Sub 알림과 프론트엔드 API 연동"], result: "산학연계 SW프로젝트 전시회 우수상", application: "강의·학습 관리 서비스의 핵심 백엔드 기능 구현", metric: "우수상", metricLabel: "산학연계 SW프로젝트 전시회", tags: ["Spring Boot", "REST API", "DB", "Redis"] }
];
