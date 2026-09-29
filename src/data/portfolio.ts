export interface Project {
  id: string; title: string; category: string; summary: string; problem: string;
  role: string; actions: string[]; result: string; application: string;
  metric: string; metricLabel: string; tags: string[]; github?: string;
  modalDetails: {
    summary: string;
    role: string;
    mainTasks: string;
    situation: string;
    ownership: string[];
    process: string[];
    results: string[];
    technicalPoint: string;
  };
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
  awards: [
    { title: "산학연계 SW프로젝트 전시회", prize: "우수상", project: "ClassLog", image: "/awards/classlog-award.jpg", alt: "ClassLog 산학연계 SW프로젝트 전시회 우수상 상장" },
    { title: "하나 디지털 파워온", prize: "우수상", project: "STOCKER", image: "/awards/stocker-award.jpg", alt: "하나 디지털 파워온 프로젝트 우수상 상장" },
    { title: "Tech4Good 해커톤", prize: "장려상", project: "식물 판별 및 정보 검증", image: "/awards/tech4good-award.jpg", alt: "Tech4Good 해커톤 장려상 수상 사진" },
    { title: "Pay 핀테크 해커톤", prize: "장려상", project: "AI 기반 소비 관리", image: "/awards/pay-fintech-award.jpg", alt: "Pay 핀테크 해커톤 장려상 상장" }
  ],
  why: "모델 성능 개선과 함께 제품 반영, 고객 일정, 운영 이슈를 맡아 왔습니다. AI 개발과 백엔드 경험을 바탕으로 현장의 요구를 기능과 시스템으로 구현하고, 배포 이후까지 책임지는 DX Engineer로 기여하겠습니다.",
  contact: { description: "AI 제품 개발과 서비스 적용 경험에 대해 이야기 나누고 싶습니다.", email: "joosewon@naver.com", phone: "010-8652-7129" },
  ui: { navigation: "주요 섹션", skip: "본문으로 건너뛰기", contact: "연락처", problem: "과제", role: "담당", solution: "실행", outcome: "성과 및 적용", github: "GitHub", metricHeading: "대표 성과", email: "Email", phone: "Phone", toTop: "맨 위로", footer: "주세원 · DX Engineer Portfolio", footerNote: "AI Product · Backend · Operations" }
};

export const projects: Project[] = [
  {
    id: "01", title: "Japanese OCR Improvement", category: "AI → PRODUCT", summary: "고객 시연 대응에서 자체 제품 반영까지", problem: "자체 OCR의 일본어 미지원과 촉박한 고객 시연 일정", role: "데이터 구축 · 모델 비교/선정 · 자체 모델 개선", actions: ["오픈소스 OCR을 비교해 시연용 모델을 선정하고 우선 연동", "일본어 데이터 구축과 자체 모델 학습을 병행"], result: "일정 내 일본어 OCR 시연, F1 93.61% 달성", application: "자체 OCR 제품에 일본어 인식 기능 반영", metric: "17.03% → 93.61%", metricLabel: "일본어 OCR F1", tags: ["Python", "PyTorch", "OCR", "Linux"],
    modalDetails: {
      summary: "고객 시연 일정에 맞춰 일본어 OCR 기능을 우선 구현하고, 이후 자체 모델의 일본어 인식 성능까지 개선한 프로젝트",
      role: "OCR 모델 개발 및 제품 연동",
      mainTasks: "데이터 구축, 오픈소스 모델 비교, 자체 모델 학습 및 평가, 제품 적용",
      situation: "자체 OCR 모델은 일본어를 지원하지 않았지만 고객 시연 일정은 이미 정해져 있었습니다. 새로운 학습 데이터를 구축하고 자체 모델을 학습하는 데 시간이 필요해, 기존 방식만으로는 일정에 맞추기 어려운 상황이었습니다.",
      ownership: ["일본어 OCR 후보 모델 조사 및 비교", "실제 일본어 문서를 활용한 성능 평가", "기존 OCR 제품과의 연동 가능성 검토", "일본어 학습 데이터 구축", "자체 모델 학습 및 평가"],
      process: ["일본어 인식을 지원하는 여러 오픈소스 OCR 모델 검토", "실제 문서를 기준으로 인식 성능 비교", "정확도, 처리 속도, 기존 제품 연동 가능성을 함께 확인", "적합한 모델을 선정해 고객 시연용 기능을 우선 구현", "일본어 데이터를 새로 구축하며 자체 OCR 모델 학습 병행", "오류가 많은 문자와 문서 유형을 분석해 데이터 보완", "학습과 평가를 반복하며 자체 모델 성능 개선"],
      results: ["고객 일정 내 일본어 OCR 기능 시연 완료", "일본어 OCR F1 17.03% → 93.61%", "자체 OCR 모델에 일본어 인식 기능 반영"],
      technicalPoint: "촉박한 일정에서 오픈소스 모델을 활용한 단기 대응과 자체 모델 개발이라는 장기 개선을 병행했습니다. 한 가지 방법만 고집하지 않고 당시 적용 가능한 대안을 빠르게 검증했습니다."
    }
  },
  {
    id: "02", title: "Document Structure Recognition", category: "MODEL → PRODUCT QUALITY", summary: "데이터 기준과 오류 분석으로 인식 품질 개선", problem: "문서 객체와 구조의 인식 정확도 개선", role: "데이터 구축 · 태깅 기준 · 학습/평가", actions: ["태깅 기준을 정리해 학습 데이터의 일관성 확보", "반복 평가와 오류 사례 분석으로 모델 개선"], result: "TEDS 0.7413에서 0.8916으로 향상", application: "문서 AI 제품의 구조 인식 품질 개선에 활용", metric: "0.7413 → 0.8916", metricLabel: "문서 구조 인식 TEDS", tags: ["Python", "PyTorch", "DETR", "Document AI"],
    modalDetails: {
      summary: "문서 구조 인식 모델의 데이터와 학습 방식을 개선해 구조 인식 성능을 높인 프로젝트",
      role: "문서 구조 인식 모델 개발",
      mainTasks: "데이터 구축 및 검수, 모델 학습, 평가, 오류 분석, 태깅 기준 정리",
      situation: "문서 내 객체의 경계가 모호한 경우 작업자마다 태깅 기준이 달라지는 문제가 있었습니다. 학습 데이터의 기준이 일정하지 않으면 모델 성능에도 영향을 줄 수 있어 데이터와 평가 결과를 함께 점검할 필요가 있었습니다.",
      ownership: ["문서 객체 학습 데이터 구축 및 검수", "모델 학습과 성능 평가", "실패 사례 및 오류 유형 분석", "태깅 기준이 다른 사례 수집", "팀원들과 공통 태깅 기준 정리"],
      process: ["모델이 자주 실패하는 문서와 객체 유형을 별도로 수집", "객체 범위가 애매한 사례를 팀원들과 함께 확인", "사례별 객체 범위 기준을 맞추고 문서화", "동일한 기준으로 데이터를 다시 점검", "학습 및 평가 결과를 비교하며 데이터와 모델을 반복 개선"],
      results: ["문서 구조 인식 TEDS 0.7413 → 0.8916", "문서 객체 인식 품질 개선", "이후 데이터 구축에 활용할 공통 태깅 기준 마련"],
      technicalPoint: "모델 구조만 변경하지 않고 데이터 품질과 태깅 기준이 성능에 미치는 영향을 함께 확인했습니다. 성능 지표와 실제 문서 결과를 같이 보며 개선했습니다."
    }
  },
  {
    id: "03", title: "VLM Auto Tagging PoC", category: "POC → PRODUCT DECISION", summary: "실제 문서 기준으로 VLM 도입 가능성 검토", problem: "문서 자동 태깅 업무에 VLM을 적용할 수 있는지 판단", role: "모델 비교 · 결과 분석 · 적용 가능성 검토", actions: ["여러 VLM을 동일 조건에서 비교", "실제 문서 결과를 기준으로 오류와 활용 범위 분석"], result: "자동 태깅 기능의 적용 가능성과 한계 확인", application: "제품 도입 여부를 판단할 PoC 근거 마련", metric: "실제 문서 기반 PoC", metricLabel: "VLM Auto Tagging", tags: ["Python", "VLM", "Qwen", "Prompt Engineering"],
    modalDetails: {
      summary: "여러 VLM을 실제 문서에 적용해 비교하고, 문서 자동 태깅 업무에 활용할 수 있는 범위와 한계를 검토한 프로젝트",
      role: "VLM PoC 및 적용 가능성 검토",
      mainTasks: "후보 모델 선정, 테스트 환경 구성, 모델 비교, 오류 분석, 제품 적용 가능성 검토",
      situation: "기존에는 사람이 직접 수행하던 문서 태깅 업무를 VLM으로 일부 자동화할 수 있는지 확인할 필요가 있었습니다. 단순히 결과를 생성하는지보다 실제 제품에서 활용할 수 있을 정도로 안정적인지가 중요했습니다.",
      ownership: ["후보 VLM 조사 및 선정", "동일 조건에서 모델별 결과 비교", "실제 문서를 활용한 테스트", "출력 형식 및 오류 유형 분석", "자동 태깅 기능의 제품 적용 가능성 검토"],
      process: ["여러 VLM을 동일한 문서와 유사한 프롬프트 조건에서 테스트", "태그 정확도와 출력 형식의 일관성·반복성 확인", "문서 유형별 성공 및 실패 사례 정리", "프롬프트를 수정하며 결과 변화 비교", "사람의 확인이 필요한 영역과 자동화 가능한 영역 구분", "실제 제품 기능으로 활용할 수 있는 범위 정리"],
      results: ["VLM 기반 자동 태깅 적용 가능성 확인", "문서 유형별 자동화 가능 범위와 한계 정리", "이후 자동 태깅 기능 검토와 제품 적용에 활용"],
      technicalPoint: "최신 모델을 실행하는 데서 끝내지 않고 동일 조건에서 비교하고, 결과의 일관성과 오류 유형을 근거로 실제 제품 관점의 적용 가능성을 판단했습니다."
    }
  },
  {
    id: "04", title: "ClassLog", category: "BACKEND → WEB SERVICE", summary: "강의·학습 관리 웹 서비스의 백엔드 구현", problem: "강의·과제 관리와 학습 알림 기능 구축", role: "Backend Developer", actions: ["사용자·강의·과제 REST API 및 DB 연동", "Redis Pub/Sub 알림과 프론트엔드 API 연동"], result: "산학연계 SW프로젝트 전시회 우수상", application: "강의·학습 관리 서비스의 핵심 백엔드 기능 구현", metric: "우수상", metricLabel: "산학연계 SW프로젝트 전시회", tags: ["Spring Boot", "Java", "Database", "Redis", "REST API"],
    modalDetails: {
      summary: "강의와 학습 관리를 지원하는 웹 서비스에서 백엔드 API와 Redis Pub/Sub 기반 실시간 알림 기능을 구현한 프로젝트",
      role: "Backend Developer",
      mainTasks: "REST API 개발, 데이터베이스 연동, 실시간 알림 기능 구현, 프론트엔드 연동",
      situation: "강의별 일정과 과제, 학습 정보를 한곳에서 관리하고 필요한 알림을 실시간으로 전달할 수 있는 서비스가 필요했습니다.",
      ownership: ["사용자, 강의, 과제 관련 REST API 구현", "데이터베이스 연동 및 데이터 처리", "Redis Pub/Sub 기반 실시간 알림 기능 구현", "프론트엔드와 API 연동", "백엔드 기능 테스트 및 오류 수정"],
      process: ["서비스 요구사항을 기준으로 필요한 API 구조 설계", "사용자, 강의, 과제 데이터를 처리하는 백엔드 기능 구현", "이벤트 발생 시 빠른 알림 전달을 위해 Redis Pub/Sub 적용", "프론트엔드 팀과 요청·응답 구조를 맞추며 API 연동", "실제 서비스 흐름에서 기능을 반복 테스트하고 수정"],
      results: ["강의 및 학습 관리 기능 구현", "Redis Pub/Sub 기반 실시간 알림 기능 구현", "서비스 형태로 프로젝트 완성", "산학연계 SW프로젝트 전시회 우수상 수상"],
      technicalPoint: "API, 데이터베이스, 실시간 알림, 프론트엔드 연동까지 백엔드 서비스의 전체 흐름을 경험했습니다. 사용자 이벤트가 Backend를 거쳐 Redis Pub/Sub으로 전달되고 알림으로 이어지는 구조를 구현했습니다."
    }
  }
];
