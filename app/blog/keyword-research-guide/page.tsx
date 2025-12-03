import Link from "next/link";

export const metadata = {
  title: "Keyword Research Guide — SEO",
  description:
    "Learn keyword intent types, tools, and how to map keywords properly for SEO.",
  alternates: { canonical: "http://localhost:3000/blog/keyword-research-guide" },
};

export default function KeywordGuide() {
  return (
    <div className="container py-5">
      <Link href="/blog" className="text-muted mb-3 d-block text-decoration-none">← Back</Link>

      <h1 className="fw-bold mb-3">Keyword Research Guide</h1>

      <p className="lead">Keyword research helps you understand what users are searching for.</p>

      <h3>Search Intent Types</h3>
      <ul>
        <li>Informational</li>
        <li>Navigational</li>
        <li>Commercial</li>
        <li>Transactional</li>
      </ul>

      <h3>Tools</h3>
      <ul>
        <li>Google Keyword Planner</li>
        <li>Ahrefs</li>
        <li>SEMrush</li>
        <li>Ubersuggest</li>
      </ul>
    </div>
  );
}
