import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Lavender SEO — Beautiful SEO Learning Website",
  description: "Learn SEO step-by-step with a modern lavender design. Includes metadata, internal linking, canonical tags, and SEO content.",
};

export default function Home() {
  return (
    <div className="container py-5">

      {/* HERO */}
      <section className="hero text-center">
        <h1 className="fw-bold mb-3">Learn SEO Beautifully & Professionally</h1>
        <p className="mb-4 fs-5">
          A clean, modern, pastel-theme website carefully crafted for SEO perfection.
        </p>
        <Link href="/blog" className="btn btn-primary">Explore Articles</Link>
      </section>

      {/* ROADMAP */}
      <section className="mt-5">
        <h2 className="fw-bold mb-4">10-Day SEO Roadmap</h2>
        <div className="row g-4">
          {[
            "Introduction to SEO",
            "Search Intent & Keyword Types",
            "Keyword Tools (GKP, Ahrefs, SEMrush)",
            "Building Keyword Strategy",
            "Practical Keyword Research",
            "On-Page SEO Basics",
            "Semantic HTML & Headers",
            "Image SEO",
            "Internal Linking & Canonical",
            "On-Page SEO Practice",
          ].map((item, i) => (
            <div key={i} className="col-md-6">
              <div className="card p-4">
                <h5 className="fw-semibold">Day {i + 1}</h5>
                <p className="text-muted mb-0">{item}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section className="mt-5">
        <h2 className="fw-bold mb-4">Latest SEO Articles</h2>
        <div className="row g-4">
          <div className="col-md-6">
            <div className="card p-4">
              <h4>Introduction to SEO</h4>
              <p className="text-muted">Learn what SEO is and how search engines work.</p>
              <Link href="/blog/introduction-to-seo" className="btn btn-outline">Read Article</Link>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card p-4">
              <h4>Keyword Research Guide</h4>
              <p className="text-muted">Understand keyword intent, tools, and strategy.</p>
              <Link href="/blog/keyword-research-guide" className="btn btn-outline">Read Article</Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
