'use client';

import { useState } from 'react';

const faqData = [
        {
                question: "Is this online notepad really free?",
                answer: "Yes, our online notepad is completely free to use. There are no hidden fees, subscriptions, or premium features. You can start writing immediately without any cost."
        },
        {
                question: "Do I need to create an account to use the notepad?",
                answer: "No account is required! You can start using the notepad immediately without any registration or login. Your notes are saved locally in your browser for privacy and convenience."
        },
        {
                question: "How do I save my notes?",
                answer: "Your notes are automatically saved as you type using your browser's local storage. You can also download your notes as a text file using the 'Download' button in the toolbar."
        },
        {
                question: "Can I access my notes from different devices?",
                answer: "Currently, notes are stored locally in your browser, so they're only available on the same device. For cross-device access, you can download your notes and transfer the file."
        },
        {
                question: "What file formats are supported?",
                answer: "You can download your notes as plain text (.txt) files. The notepad supports basic text formatting and is perfect for quick notes, code snippets, and general writing."
        },
        {
                question: "Is my data secure and private?",
                answer: "Absolutely! Your notes are stored locally in your browser and are never sent to our servers. We don't collect, store, or access any of your personal data or notes."
        },
        {
                question: "Can I customize the appearance?",
                answer: "Yes! You can choose from multiple themes (Light, Dark, Sepia) and adjust the font size to suit your preferences. The interface is designed to be clean and distraction-free."
        },
        {
                question: "What browsers are supported?",
                answer: "Our online notepad works on all modern browsers including Chrome, Firefox, Safari, and Edge. For the best experience, we recommend using the latest version of your browser."
        }
];

export default function FAQ() {
        const [openItems, setOpenItems] = useState<number[]>([]);

        const toggleItem = (index: number) => {
                setOpenItems(prev =>
                        prev.includes(index)
                                ? prev.filter(i => i !== index)
                                : [...prev, index]
                );
        };

        return (
                <div className="max-w-4xl mx-auto px-4 py-8">
                        <h2 className="text-3xl font-bold text-center mb-8" style={{ color: '#FFFFFF' }}>Frequently Asked Questions</h2>
                        <div className="space-y-4">
                                {faqData.map((item, index) => (
                                        <div key={index} className="border border-gray-200 rounded-lg bg-white">
                                                <button
                                                        onClick={() => toggleItem(index)}
                                                        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                        style={{ color: '#000000' }}
                                                >
                                                        <span className="font-semibold text-lg">{item.question}</span>
                                                        <span className="text-2xl transition-transform duration-200" style={{ color: '#6b7280' }}>
                                                                {openItems.includes(index) ? '−' : '+'}
                                                        </span>
                                                </button>
                                                {openItems.includes(index) && (
                                                        <div className="px-6 pb-4">
                                                                <p className="leading-relaxed" style={{ color: '#374151' }}>{item.answer}</p>
                                                        </div>
                                                )}
                                        </div>
                                ))}
                        </div>

                        {/* FAQ Schema Markup */}
                        <script
                                type="application/ld+json"
                                dangerouslySetInnerHTML={{
                                        __html: JSON.stringify({
                                                "@context": "https://schema.org",
                                                "@type": "FAQPage",
                                                "mainEntity": faqData.map(item => ({
                                                        "@type": "Question",
                                                        "name": item.question,
                                                        "acceptedAnswer": {
                                                                "@type": "Answer",
                                                                "text": item.answer
                                                        }
                                                }))
                                        })
                                }}
                        />
                </div>
        );
} 