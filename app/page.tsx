import MemberCard from "../components/MemberCard";
import ProjectCard from "../components/ProjectCard";
import { ArrowUpRight, CircuitIcon } from "../components/Icons";
import { capabilities, projects, team } from "../data/portfolio";

export default function HomePage() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Robotics Engineering Team home">
          <span className="brand-mark"><CircuitIcon /></span>
          <span>
            <strong>Robotics Engineering</strong>
            <small>Multidisciplinary Team</small>
          </span>
        </a>
        <nav>
          <a href="#projects">Projects</a>
          <a href="#team">Team</a>
          <a href="#capabilities">Capabilities</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-glow glow-one" />
        <div className="hero-glow glow-two" />
        <div className="hero-copy">
          <p className="kicker"><span /> EMBEDDED · HARDWARE · MECHANICAL · ROBOTICS</p>
          <h1>We build robots from <em>schematic</em> to <em>motion.</em></h1>
          <p className="hero-lead">
            A five-person engineering team covering the complete prototype stack: firmware, electronics, PCB, mechanical design, and hardware validation.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Explore projects <ArrowUpRight /></a>
            <a className="button button-secondary" href="#team">Meet the team</a>
          </div>
        </div>

        <div className="hero-panel" aria-label="Team engineering workflow">
          <div className="panel-grid" />
          <div className="system-core">
            <span className="core-ring ring-one" />
            <span className="core-ring ring-two" />
            <span className="core-dot" />
            <strong>ROBOTIC<br />SYSTEM</strong>
          </div>
          <div className="system-node node-a"><span>01</span> Firmware</div>
          <div className="system-node node-b"><span>02</span> Electronics</div>
          <div className="system-node node-c"><span>03</span> PCB</div>
          <div className="system-node node-d"><span>04</span> Mechanical</div>
          <div className="system-node node-e"><span>05</span> Validation</div>
        </div>

      </section>

      <section className="section" id="projects">
        <div className="section-heading">
          <div>
            <p className="kicker"><span /> SELECTED WORK</p>
            <h2>Projects built around real-world interaction.</h2>
          </div>
          <p>
            From human-facing robots to tactile swarms, collision-tolerant drones, and multimodal soft sensing, our work focuses on systems that physically understand and respond to their environment.
          </p>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => <ProjectCard project={project} index={index} key={project.title} />)}
        </div>
      </section>

      <section className="section team-section" id="team">
        <div className="section-heading compact-heading">
          <div>
            <p className="kicker"><span /> THE TEAM</p>
            <h2>One prototype, five engineering disciplines.</h2>
          </div>
          <p>
            Each role owns a critical part of the development chain while working across interfaces to keep the complete system manufacturable, testable, and ready to demonstrate.
          </p>
        </div>
        <div className="team-grid">
          {team.map((member, index) => <MemberCard member={member} index={index} key={member.name} />)}
        </div>
      </section>

      <section className="section capabilities-section" id="capabilities">
        <div className="capability-copy">
          <p className="kicker"><span /> CAPABILITIES</p>
          <h2>Engineering across the full mechatronic stack.</h2>
          <p>
            Our workflow is structured around fast integration: design the electronics and mechanics together, bring up the firmware early, validate subsystem behavior, then iterate at the complete robot level.
          </p>
        </div>
        <div className="capability-cloud">
          {capabilities.map((capability, index) => (
            <span key={capability} className={`capability-pill pill-${(index % 4) + 1}`}>{capability}</span>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <div>
          <p className="kicker"><span /> BUILD WITH US</p>
          <h2>Complex robots become possible when every discipline speaks the same language.</h2>
        </div>
        <a className="button button-primary" href="#projects">View our work <ArrowUpRight /></a>
      </section>

      <footer>
        <div className="footer-brand">
          <span className="brand-mark"><CircuitIcon /></span>
          <div><strong>Robotics Engineering Team</strong><small>Firmware · Hardware · Mechanics · Validation</small></div>
        </div>
        <p>Portfolio website built with Next.js.</p>
      </footer>
    </main>
  );
}
