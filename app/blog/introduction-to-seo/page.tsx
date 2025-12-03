import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "Introduction to SEO — SEO",
  description: "A beginner-friendly explanation of SEO including crawling, indexing, ranking.",
  alternates: { canonical: "http://localhost:3000/blog/introduction-to-seo" },
};

export default function IntroSEO() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Introduction to SEO",
    description: metadata.description,
    author: "SEO",
  };

  return (
    <div className="container py-5">
<Link href="/blog" className="text-muted mb-3 d-block text-decoration-none">← Back</Link>

      <h1 className="fw-bold mb-3">Introduction to SEO</h1>

      <Script
        id="seo-json"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <p className="lead">
        SEO (Search Engine Optimization) is the process of improving your website’s visibility in search engines.
      </p>

      <h3>How Search Engines Work</h3>
      <ul>
        <li><strong>Crawling:</strong> Robots discover web pages.</li>
        <li><strong>Indexing:</strong> Pages are analyzed and stored.</li>
        <li><strong>Ranking:</strong> Google ranks them based on relevance.</li>
      </ul>

      <h3>Types of SEO</h3>
      <ul>
        <li>Technical SEO</li>
        <li>On-Page SEO</li>
        <li>Off-Page SEO</li>
        <li>Local SEO</li>
      </ul>
    </div>
  );
}
