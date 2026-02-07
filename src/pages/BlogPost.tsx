import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock } from "lucide-react";
import { getBlogPostBySlug } from "@/data/blogPosts";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The article you're looking for doesn't exist.
          </p>
          <Link
            to="/#blog"
            className="inline-flex items-center text-primary hover:underline"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Articles
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Simple markdown to HTML conversion
  const renderMarkdown = (md: string) => {
    return md
      .split("\n")
      .map((line) => {
        if (line.startsWith("#### "))
          return `<h4>${line.slice(5)}</h4>`;
        if (line.startsWith("### "))
          return `<h3>${line.slice(4)}</h3>`;
        if (line.startsWith("## "))
          return `<h2>${line.slice(3)}</h2>`;
        if (line.startsWith("- "))
          return `<li>${line.slice(2)}</li>`;
        if (/^\d+\. /.test(line))
          return `<li>${line.replace(/^\d+\. /, "")}</li>`;
        if (line.trim() === "") return "<br/>";
        return `<p>${line}</p>`;
      })
      .join("\n")
      .replace(/(<li>.*?<\/li>\n?)+/g, (match) => `<ul>${match}</ul>`)
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <header className="relative pt-24 pb-16 bg-foreground">
        <div className="container mx-auto px-4">
          <Link
            to="/#blog"
            className="inline-flex items-center text-primary hover:underline mb-8 block"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Articles
          </Link>

          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-4">
              <span className="inline-flex items-center gap-1 text-sm text-primary">
                <Clock className="h-4 w-4" />
                {post.readTime} min read
              </span>
              <span className="text-sm text-muted-foreground/60">
                {post.date}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground leading-tight">
              {post.title}
            </h1>

            <p className="mt-6 text-lg text-muted-foreground/80">
              {post.excerpt}
            </p>
          </div>
        </div>
      </header>

      {/* Cover image */}
      <div className="w-full max-h-[500px] overflow-hidden">
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Article content */}
      <main className="py-16">
        <div className="container mx-auto px-4">
          <article
            className="prose prose-lg max-w-3xl mx-auto prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground prose-h2:text-2xl prose-h2:mt-10 prose-h3:text-xl prose-h3:mt-8 prose-h4:text-lg prose-h4:mt-6 prose-ul:list-disc prose-ul:pl-6"
            dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
