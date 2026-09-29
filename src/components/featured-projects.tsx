"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/icon";
import { portfolio as p, projects, type Project } from "@/data/portfolio";

export function FeaturedProjects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);

  const closeModal = () => {
    setActiveProject(null);
    requestAnimationFrame(() => lastTriggerRef.current?.focus());
  };

  useEffect(() => {
    if (!activeProject) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeModal();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;
      const focusable = Array.from(dialogRef.current.querySelectorAll<HTMLElement>("button, [href], [tabindex]:not([tabindex='-1'])"));
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeProject]);

  const openModal = (project: Project, trigger: HTMLButtonElement) => {
    lastTriggerRef.current = trigger;
    setActiveProject(project);
  };

  return <>
    <div className="project-grid">
      {projects.map((project) => <button
        type="button"
        className="project-card"
        key={project.id}
        aria-label={`${project.title} 상세 보기`}
        aria-haspopup="dialog"
        onClick={(event) => openModal(project, event.currentTarget)}
      >
        <div className="flex items-center justify-between gap-4"><span className="eyebrow">{project.category}</span><span className="project-number">{project.id}</span></div>
        <h3>{project.title}</h3><p className="project-summary">{project.summary}</p>
        <div className="project-metric"><span>{project.metricLabel}</span><strong>{project.metric}</strong></div>
        <div className="project-body">
          <div className="project-facts"><div><h4>{p.ui.problem}</h4><p>{project.problem}</p></div><div><h4>{p.ui.role}</h4><p>{project.role}</p></div></div>
          <div><h4>{p.ui.solution}</h4><ul>{project.actions.map((action) => <li key={action}>{action}</li>)}</ul></div>
          <div className="project-result"><h4>{p.ui.outcome}</h4><strong>{project.result}</strong><p>{project.application}</p></div>
        </div>
        <div className="project-footer"><div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><span className="project-more">상세 보기<Icon name="arrow"/></span></div>
      </button>)}
    </div>

    {activeProject && <div className="modal-overlay" role="presentation" onMouseDown={(event) => {
      if (event.target === event.currentTarget) closeModal();
    }}>
      <div className="project-modal" ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby={`project-modal-${activeProject.id}`} aria-describedby={`project-modal-summary-${activeProject.id}`}>
        <button ref={closeButtonRef} type="button" className="modal-close" onClick={closeModal} aria-label="프로젝트 상세 닫기">×</button>
        <header className="modal-header">
          <span className="eyebrow">{activeProject.category}</span>
          <span className="modal-number">PROJECT {activeProject.id}</span>
          <h2 id={`project-modal-${activeProject.id}`}>{activeProject.title}</h2>
          <p id={`project-modal-summary-${activeProject.id}`}>{activeProject.modalDetails.summary}</p>
        </header>

        <div className="modal-info" aria-label="프로젝트 기본 정보">
          <div><span>역할</span><strong>{activeProject.modalDetails.role}</strong></div>
          <div><span>주요 업무</span><strong>{activeProject.modalDetails.mainTasks}</strong></div>
          <div><span>기술 스택</span><div className="tags">{activeProject.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
        </div>

        <div className="modal-content-grid">
          <div className="modal-column">
            <section className="modal-section">
              <span className="modal-section-index">01</span><h3>문제 상황</h3>
              <p>{activeProject.modalDetails.situation}</p>
            </section>
            <section className="modal-section">
              <span className="modal-section-index">02</span><h3>내가 맡은 부분</h3>
              <ul>{activeProject.modalDetails.ownership.map((item) => <li key={item}>{item}</li>)}</ul>
            </section>
          </div>

          <div className="modal-column">
            <section className="modal-section">
              <span className="modal-section-index">03</span><h3>해결 과정</h3>
              <ol className="process-list">{activeProject.modalDetails.process.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></li>)}</ol>
            </section>
            <section className="modal-section modal-results">
              <span className="modal-section-index">04</span><h3>결과</h3>
              <div className="modal-metric"><span>{activeProject.metricLabel}</span><strong>{activeProject.metric}</strong></div>
              <ul>{activeProject.modalDetails.results.map((item) => <li key={item}>{item}</li>)}</ul>
            </section>
          </div>
        </div>
        <section className="modal-section technical-point">
          <span className="modal-section-index">05</span><h3>기술적 포인트 / 배운 점</h3>
          <p>{activeProject.modalDetails.technicalPoint}</p>
        </section>
      </div>
    </div>}
  </>;
}
