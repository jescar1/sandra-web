import { motion } from "motion/react";
import { FileText, Download, BookOpen, Video, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const resources = [
  {
    icon: FileText,
    title: "First-Time Buyer's Guide",
    description: "Everything you need to know before buying your first home in the United States.",
    type: "PDF Guide",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: BookOpen,
    title: "Document Checklist",
    description: "Complete list of documents required for your mortgage application.",
    type: "Checklist",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Video,
    title: "Improve Your Credit",
    description: "Proven strategies to boost your credit score in 90 days.",
    type: "Video",
    color: "from-amber-500 to-amber-600",
  },
  {
    icon: FileText,
    title: "Glossary of Mortgage Terms",
    description: "Understand all the terms of the mortgage process in simple language.",
    type: "Guide",
    color: "from-emerald-500 to-emerald-600",
  },
];

const blogPosts = [
  {
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    category: "Tips",
    title: "5 Common Mistakes When Buying Your First Home",
    excerpt: "Avoid these costly mistakes and make better decisions in your first purchase.",
    date: "October 15, 2024",
  },
  {
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop",
    category: "Finance",
    title: "How to Improve Your Credit Before Applying for a Loan",
    excerpt: "Effective strategies to boost your score and get better rates.",
    date: "October 10, 2024",
  },
  {
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=600&fit=crop",
    category: "Market",
    title: "Real Estate Market Trends in Florida 2024",
    excerpt: "Comprehensive analysis of the market and what to expect in the coming months.",
    date: "October 5, 2024",
  },
];

export function Resources() {
  return (
    <section id="resources" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md mb-6">
            <BookOpen className="w-4 h-4 text-blue-900" />
            <span className="text-blue-900">Free Resources</span>
          </div>
          <h2 className="text-4xl lg:text-5xl text-slate-900 mb-6">
            Financial Education for You
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Tools, guides, and resources to help you make better financial decisions
          </p>
        </motion.div>

        {/* Downloadable Resources */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 h-full group hover:-translate-y-1">
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${resource.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <resource.icon className="w-7 h-7 text-white" />
                </div>
                
                <div className="text-xs text-blue-900 mb-2 font-medium">{resource.type}</div>
                <h3 className="text-slate-900 mb-2 line-clamp-2">{resource.title}</h3>
                <p className="text-slate-600 text-sm mb-4 line-clamp-3">{resource.description}</p>
                
                <button className="flex items-center gap-2 text-blue-900 hover:text-blue-700 transition-colors text-sm group">
                  <Download className="w-4 h-4" />
                  <span>Download for Free</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Blog Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-between items-end mb-8">
            <div>
              <h3 className="text-3xl text-slate-900 mb-2">Latest Articles</h3>
              <p className="text-slate-600">Tips and news from the real estate sector</p>
            </div>
            <Button variant="outline" className="hidden md:flex">
              View All Articles
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100">
                  <div className="relative overflow-hidden aspect-[16/10]">
                    <ImageWithFallback
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs text-blue-900">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="text-sm text-slate-500 mb-2">{post.date}</div>
                    <h4 className="text-slate-900 mb-3 group-hover:text-blue-900 transition-colors line-clamp-2">
                      {post.title}
                    </h4>
                    <p className="text-slate-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                    <button className="text-blue-900 hover:text-blue-700 transition-colors text-sm flex items-center gap-1 group">
                      Read More
                      <ExternalLink className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Button variant="outline">
              View All Articles
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
