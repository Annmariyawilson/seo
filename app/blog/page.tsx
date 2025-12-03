import Link from "next/link";

export const metadata = {
  title: "SEO Blog",
  description: "Read professional SEO articles written with clean design and SEO best practices.",
  alternates: { canonical: "http://localhost:3000/blog" },
};

export default function Blog() {
  const posts = [
    {
      slug: "introduction-to-seo",
      title: "Introduction to SEO",
      desc: "Learn how search engines crawl, index, and rank pages.",
    },
    {
      slug: "keyword-research-guide",
      title: "Keyword Research Guide",
      desc: "Explore keyword intent, tools, and building strategies.",
    },
  ];

  return (
    <div className="container py-5">
      <h1 className="fw-bold mb-4">SEO Blog Articles</h1>
      <div className="row g-4">
        {posts.map((post) => (
          <div className="col-md-6" key={post.slug}>
            <div className="card p-4 h-100">
              <h4>{post.title}</h4>
              <p className="text-muted">{post.desc}</p>
              <Link href={`/blog/${post.slug}`} className="btn btn-primary">
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
