import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
        title: 'Blog - Online Notepad Tips & Tricks',
        description: 'Discover tips, tricks, and best practices for using our free online notepad. Learn about productivity, note-taking strategies, and text editing techniques.',
        keywords: ['note taking tips', 'productivity', 'text editor tips', 'writing tools', 'online notepad guide'],
        alternates: {
                canonical: '/blog',
        },
};

const blogPosts = [
        {
                id: 'productivity-tips',
                title: '10 Productivity Tips for Better Note-Taking',
                excerpt: 'Learn how to take more effective notes and boost your productivity with these proven strategies. Discover techniques used by successful professionals and students.',
                date: '2024-01-15',
                readTime: '5 min read',
                category: 'Productivity',
                color: 'blue'
        },
        {
                id: 'coding-notes',
                title: 'Why Developers Love Online Notepads for Coding',
                excerpt: 'Discover how online notepads are becoming essential tools for developers. Learn coding tips, snippet management, and why local storage matters for code notes.',
                date: '2024-01-12',
                readTime: '7 min read',
                category: 'Development',
                color: 'green'
        },
        {
                id: 'student-guide',
                title: 'The Ultimate Student Guide to Online Notepads',
                excerpt: 'Discover how online notepads can revolutionize your study habits. Learn note-taking strategies, organization tips, and study techniques for academic success.',
                date: '2024-01-08',
                readTime: '8 min read',
                category: 'Student Guide',
                color: 'purple'
        },
        {
                id: 'privacy-security',
                title: 'Why Local Storage Makes Your Notes More Secure',
                excerpt: 'Understanding the security benefits of storing notes locally in your browser versus cloud storage. Learn why privacy matters for your personal and professional notes.',
                date: '2024-01-05',
                readTime: '6 min read',
                category: 'Security',
                color: 'red'
        },
        {
                id: 'workflow-optimization',
                title: 'Building an Effective Writing Workflow with Online Tools',
                excerpt: 'Create a streamlined writing process using online tools and improve your content creation. Learn workflow optimization techniques for writers, students, and professionals.',
                date: '2024-01-01',
                readTime: '6 min read',
                category: 'Workflow',
                color: 'orange'
        },
        {
                id: 'how-to-use-online-notepad',
                title: 'How to Use an Online Notepad for Quick Note-Taking',
                excerpt: 'Discover how online notepads make jotting down thoughts, reminders, or ideas quick and hassle-free. Learn the benefits, use cases, and tips for maximizing your note-taking experience.',
                date: '2024-06-07',
                readTime: '8 min read',
                category: 'Productivity',
                color: 'blue'
        }
];

const getCategoryColor = (color: string) => {
        const colors = {
                blue: 'bg-blue-500 text-blue-800',
                green: 'bg-green-400 text-green-800',
                purple: 'bg-purple-100 text-purple-800',
                red: 'bg-red-100 text-red-800',
                orange: 'bg-orange-100 text-orange-800'
        };
        return colors[color as keyof typeof colors] || 'bg-gray-100 text-gray-800';
};

export default function BlogPage() {
        return (
                <div className="container mx-auto px-4 py-8">
                        <header className="text-center mb-12">
                                <h1 className="text-4xl font-bold mb-4">Blog</h1>
                                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                        Tips, tricks, and insights to help you make the most of our free online notepad
                                </p>
                        </header>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {blogPosts.map((post) => (
                                        <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                                                <div className="p-6">
                                                        <div className="flex items-center justify-between mb-3">
                                                                <span className={`text-sm font-medium px-2 py-1 rounded ${getCategoryColor(post.color)}`}>
                                                                        {post.category}
                                                                </span>
                                                                <span className="text-sm text-gray-500">{post.readTime}</span>
                                                        </div>
                                                        <h2 className="text-xl font-semibold mb-3 line-clamp-2">
                                                                <Link href={`/blog/${post.id}`} className="hover:text-blue-600 transition-colors">
                                                                        {post.title}
                                                                </Link>
                                                        </h2>
                                                        <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                                                        <div className="flex items-center justify-between">
                                                                <time className="text-sm text-gray-500">{post.date}</time>
                                                                <Link
                                                                        href={`/blog/${post.id}`}
                                                                        className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                                                                >
                                                                        Read more →
                                                                </Link>
                                                        </div>
                                                </div>
                                        </article>
                                ))}
                        </div>

                        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg">
                                <div className="text-center">
                                        <h2 className="text-2xl font-bold mb-4">Ready to Start Writing?</h2>
                                        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                                                Put these tips into practice with our free online notepad. No registration required, just start writing and organizing your thoughts today.
                                        </p>
                                        <Link
                                                href="/notepad"
                                                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                                        >
                                                Start Writing Now
                                        </Link>
                                </div>
                        </div>

                        <div className="mt-12 text-center">
                                <h3 className="text-lg font-semibold mb-4">Popular Topics</h3>
                                <div className="flex flex-wrap justify-center gap-2">
                                        {['Productivity', 'Study Tips', 'Security', 'Development', 'Writing'].map((topic) => (
                                                <span key={topic} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                                                        {topic}
                                                </span>
                                        ))}
                                </div>
                        </div>
                </div>
        );
} 