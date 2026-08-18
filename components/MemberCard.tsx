import type { Member } from "../data/portfolio";

export default function MemberCard({ member, index }: { member: Member; index: number }) {
  return (
    <article className="member-card">
      <div className="member-topline">
        <span className="member-index">0{index + 1}</span>
        <span className="member-chip">{member.shortRole}</span>
      </div>
      <div className="avatar" aria-hidden="true">{member.initials}</div>
      <h3>{member.name}</h3>
      <p className="member-role">{member.role}</p>
      <p className="member-description">{member.description}</p>
    </article>
  );
}
