import type { ReactNode } from 'react';
export default function SectionHeading({ eyebrow, title, description, centered = false }: { eyebrow: string; title: ReactNode; description?: string; centered?: boolean }) {
  return <div className={centered ? 'section-heading centered' : 'section-heading'}><span className="eyebrow"><i />{eyebrow}</span><h2>{title}</h2>{description && <p>{description}</p>}</div>;
}
