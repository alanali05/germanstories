import { Link } from "react-router-dom";
import Icon from "./Icon";

// Takes its color from --accent (set by the page)
export default function TopicCard({ to, title, subtitle, info }) {
  return (
    <Link to={to} className="accent-card flex items-center gap-4 rounded-2xl p-5">
      <span className="h-12 w-1.5 shrink-0 rounded-full" style={{ background: "var(--accent)" }} />
      <div className="min-w-0">
        <h3 dir="auto" className="truncate text-lg font-semibold">{title}</h3>
        {subtitle && <p dir="auto" className="truncate text-muted">{subtitle}</p>}
        {info && <p className="text-sm text-muted">{info}</p>}
      </div>
      <Icon name="chevron" className="ms-auto shrink-0 text-faint rtl:rotate-180" />
    </Link>
  );
}
