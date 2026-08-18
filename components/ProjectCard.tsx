import type { Project } from "../data/portfolio";
import { ArrowUpRight, PlayIcon } from "./Icons";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const hasVideo = Boolean(project.youtubeUrl);

  return (
    <article className="project-card">
      <div className="project-media">
        {project.thumbnail ? (
          // Plain img keeps the project self-contained without external image-domain config.
          // eslint-disable-next-line @next/next/no-img-element
          <img src={project.thumbnail} alt="" loading="lazy" />
        ) : null}
        <div className="project-media-overlay" />
        <span className="project-number">0{index + 1}</span>
        {hasVideo ? (
          <a className="play-button" href={project.youtubeUrl} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} on YouTube`}>
            <PlayIcon />
          </a>
        ) : null}
      </div>

      <div className="project-body">
        <p className="eyebrow">{project.eyebrow}</p>
        <h3>{project.title}</h3>
        <p className="project-summary">{project.summary}</p>
        <div className="tag-row">
          {project.highlights.map((item) => (
            <span className="tag" key={item}>{item}</span>
          ))}
        </div>

        {hasVideo ? (
          <a className="text-link" href={project.youtubeUrl} target="_blank" rel="noreferrer">
            {project.linkLabel ?? "Watch on YouTube"}
            <ArrowUpRight />
          </a>
        ) : project.thumbnail ? null : (
          <span className="text-link text-link-muted">{project.linkLabel ?? "Video coming soon"}</span>
        )}
      </div>
    </article>
  );
}
