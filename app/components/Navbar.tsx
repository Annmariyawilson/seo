import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="py-3 shadow-sm bg-white">
      <div className="container d-flex justify-content-between align-items-center">
        <Link className="fw-bold fs-4 text-decoration-none" style={{ color: "#7c3aed" }} href="/">
          SEO
        </Link>

        <div className="d-flex gap-4">
          <Link href="/" className="text-decoration-none text-muted">Home</Link>
          <Link href="/blog" className="text-decoration-none text-muted">Blog</Link>
        </div>
      </div>
    </nav>
  );
}
