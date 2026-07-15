/**
 * Portfolio AI Assistant — answers questions about Divyansh using embedded knowledge.
 * Works fully client-side (no API key required). Optional LLM hook can be added later.
 */
(function () {
    'use strict';

    const KNOWLEDGE = [
        {
            keywords: ['who', 'about', 'introduce', 'background', 'summary', 'tell me', 'yourself', 'overview'],
            response: `I'm an AI assistant for **Divyansh Agrawal** — a Senior Software Engineer specializing in **AI & Java Backend** with **5.7+ years** of experience.\n\nHe designs high-throughput distributed systems using Java, Spring Boot, and microservices. His expertise spans BFSI systems, AI-driven platforms (RAG, Agentic AI), and event-driven architecture with Kafka — handling **4K+ RPS** in production.\n\nBased in **Ratlam, MP, India**.`
        },
        {
            keywords: ['avalara', 'current', 'recent', 'last job', 'tax'],
            response: `**Avalara** — Senior Software Engineer - AI (Jul 2024 – Jan 2026, Pune)\n\nKey highlights:\n• Owned a **Tax Calculation Service** handling **4K+ RPS** with multi-cloud architecture\n• Built an **AI-assisted evaluation platform** using RAG & Agentic AI — reduced manual review by **70%**\n• Saved **~$500K annually** in AWS costs through resource optimization\n• Engineered an **NLP tax rule chatbot** in a 48-hour AI Hackathon (LangChain, vector embeddings)\n• Led architecture discussions, code reviews, and mentored junior engineers\n\n**Tech:** Java, Spring Boot, AWS, MongoDB, LangChain, Docker`
        },
        {
            keywords: ['ajio', 'reliance', 'jio', 'vendor', 'seller', 'ecommerce', 'retail'],
            response: `**Reliance AJIO** — Software Development Engineer - 1 (Dec 2022 – Jul 2024, Bengaluru)\n\nKey highlights:\n• Architected a **multi-tenant platform** integrating AJIO, JioMart, and Tira — saved **₹20–25 Cr/month**\n• Built **event-driven microservices** with Kafka, reducing latency by 30% across 15+ services\n• Optimized **Vendor Management System** for **60K+ vendors**\n• Processed **1M+ API requests/day** with 99.95% success rate\n\n**Project:** Seller Central (B2B Engineering Platform)\n**Tech:** Java, Spring Boot, Kafka, MongoDB, Redis, Docker`
        },
        {
            keywords: ['ivy', 'entain', 'affiliate', 'gaming', 'promotion'],
            response: `**IVY - Entain Group** — Software Developer (Jan 2021 – Dec 2022, Hyderabad)\n\nKey highlights:\n• Engineered **international affiliate promotion flow** — +30% brand visibility, +25% engagement\n• Automated promotions via microservices, cutting time-to-market by **50%**\n• Migrated legacy **Struts to Spring** — +50% scalability, -40% maintenance costs\n• Built Dynamic Commission System and Statistical Reporting\n\n**Tech:** Java, Spring Boot/MVC, Oracle DB, REST APIs, PL/SQL`
        },
        {
            keywords: ['experience', 'work', 'career', 'job', 'company', 'companies', 'years'],
            response: `Divyansh has **5.7+ years** of backend engineering experience:\n\n1. **Avalara** — Senior Software Engineer - AI (Jul 2024 – Jan 2026)\n2. **Reliance AJIO** — SDE-1 (Dec 2022 – Jul 2024)\n3. **IVY - Entain Group** — Software Developer (Jan 2021 – Dec 2022)\n4. **People Assets Learning** — Java Intern (Jan 2019)\n\nHe specializes in scalable microservices, event-driven systems, and AI-powered platforms.`
        },
        {
            keywords: ['skill', 'tech', 'technology', 'stack', 'language', 'framework', 'tool', 'expertise'],
            response: `**Technical Skills:**\n\n**Languages:** Java 17, J2EE, PL/SQL, OOP, Design Patterns\n**Frameworks:** Spring Boot, Spring MVC, JPA, JUnit, Maven, Gradle\n**Architecture:** Microservices, Event-Driven, AWS, REST APIs, System Design, CI/CD\n**Databases:** Oracle DB, MongoDB, Vector DB (PineCone)\n**AI & Tools:** RAG, Agentic AI, LangChain, Generative AI, Cursor, GitHub Copilot, Claude\n**Messaging:** Apache Kafka`
        },
        {
            keywords: ['ai', 'rag', 'agentic', 'langchain', 'llm', 'machine learning', 'nlp', 'chatbot', 'generative', 'embedding', 'vector'],
            response: `Divyansh has hands-on **AI engineering** experience:\n\n• Built an **AI-assisted evaluation platform** with vector embeddings, RAG & Agentic AI (70% less manual review)\n• Engineered an **NLP tax rule chatbot** using LangChain, semantic retrieval & LLM-driven generation\n• Uses **Cursor, Claude, GitHub Copilot** for AI-assisted development\n• Skills: RAG, Agentic AI, LangChain, Generative AI, Vector DB (PineCone)\n\nHe bridges traditional backend engineering with modern AI capabilities.`
        },
        {
            keywords: ['project', 'portfolio', 'built', 'created', 'github'],
            response: `**Featured Projects:**\n\n1. **AI-Assisted Evaluation Platform** — RAG, Agentic AI, LangChain, Vector DB (enterprise validation system)\n2. **Professional Portfolio Website** — [Live Site](https://da4pi08.github.io/Portfolio/) | [GitHub](https://github.com/DA4PI08/Portfolio)\n3. **Bequest Donation Platform** — Android app with secure payments (Java, SQLite)\n\nHis production work at Avalara and AJIO are his strongest enterprise projects.`
        },
        {
            keywords: ['achievement', 'award', 'recognition', 'certification', 'cert', 'rating', 'honor'],
            response: `**Key Achievements:**\n\n• **Highest Performance Rating** at Avalara — owned Tax Calculation Service (4K+ RPS)\n• **A+ Ownership Rating** at Reliance AJIO — led Vendor Management System (60K+ vendors)\n• **Entain Champions Award** — high-impact affiliate promotion system\n• HackerRank: Silver Problem-Solving, Gold Java\n• Academic: Shri Sojatia Scholarship, NSEP top 10%\n\n10+ professional certifications including AI For Everyone (DeepLearning.AI), Docker, Java, and more.`
        },
        {
            keywords: ['education', 'degree', 'college', 'university', 'study', 'graduate', 'be', 'b.e', 'engineering'],
            response: `**Education:**\n\n**B.E. Computer Science & Engineering**\nAcropolis Institute of Technology and Research\nAug 2016 – Sep 2020 | Indore, India\n\n**HSC (PCM)**\nShri Guru Tegh Bahadur Academy\nApr 2015 – Mar 2016 | Ratlam, India`
        },
        {
            keywords: ['contact', 'email', 'phone', 'reach', 'hire', 'linkedin', 'connect', 'location', 'where'],
            response: `**Contact Divyansh:**\n\n📧 **Email:** divyanshagrawal532@gmail.com\n📱 **Phone:** +91 9406815130\n📍 **Location:** Ratlam, MP, India\n\n🔗 **LinkedIn:** [divyanshagrawal4pi08](https://www.linkedin.com/in/divyanshagrawal4pi08/)\n🔗 **GitHub:** [DA4PI08](https://github.com/DA4PI08)\n\nCoding profiles: LeetCode, CodeChef, HackerRank, HackerEarth`
        },
        {
            keywords: ['resume', 'cv', 'download'],
            response: `You can download Divyansh's resume here:\n\n📄 [**Download Resume (PDF)**](https://drive.google.com/file/d/1jQFAWvGegHCaGEX2aRvkjuH-6uIAFn6C/view)\n\nIt covers 5.7+ years of Java backend & AI engineering experience across Avalara, AJIO, and Entain.`
        },
        {
            keywords: ['kafka', 'event', 'messaging', 'async'],
            response: `Divyansh has deep **Kafka & event-driven architecture** experience:\n\n• Built event-driven microservices at AJIO with **30% latency reduction** across 15+ services\n• Multi-tenant platform integrating AJIO, JioMart, Tira using Kafka\n• Expertise in event-driven design patterns, async processing, and service integration\n\nKafka is a core part of his microservices toolkit alongside Spring Boot and MongoDB.`
        },
        {
            keywords: ['aws', 'cloud', 'cost', 'infrastructure', 'devops'],
            response: `**AWS & Cloud Experience:**\n\n• Optimized AWS infrastructure at Avalara — saved **~$500K annually** by identifying underutilized resources and automating owner notifications\n• Multi-cloud architecture for Tax Calculation Service (4K+ RPS)\n• CI/CD, Docker, Jenkins in production environments\n\nStrong focus on cost optimization and scalable cloud design.`
        },
        {
            keywords: ['java', 'spring', 'backend', 'microservice', 'api', 'rest'],
            response: `Divyansh is a **Java & Spring Boot expert** with 5.7+ years building production systems:\n\n• **Spring Boot, Spring MVC, JPA, JUnit** — daily use\n• **Microservices** at scale (AJIO: 15+ services, Avalara: tax engine)\n• **REST APIs** processing 1M+ requests/day\n• **System Design** — multi-tenant, event-driven, high-throughput (4K+ RPS)\n\nHe's migrated legacy Struts to Spring and mentors junior engineers on best practices.`
        },
        {
            keywords: ['salary', 'ctc', 'package', 'compensation', 'pay'],
            response: `Compensation details aren't shared publicly on this portfolio. For discussions about opportunities, please reach out directly:\n\n📧 divyanshagrawal532@gmail.com\n🔗 [LinkedIn](https://www.linkedin.com/in/divyanshagrawal4pi08/)`
        },
        {
            keywords: ['available', 'open', 'looking', 'opportunity', 'job', 'freelance', 'relocate'],
            response: `For current availability and opportunities, please connect with Divyansh directly:\n\n📧 divyanshagrawal532@gmail.com\n📱 +91 9406815130\n🔗 [LinkedIn](https://www.linkedin.com/in/divyanshagrawal4pi08/)\n\nHe's based in Ratlam, MP and has worked in Pune, Bengaluru, and Hyderabad.`
        },
        {
            keywords: ['hello', 'hi', 'hey', 'help', 'start'],
            response: `Hello! 👋 I can answer questions about **Divyansh Agrawal** — his experience, skills, projects, education, and how to contact him.\n\nTry asking:\n• "What's his experience at Avalara?"\n• "What AI skills does he have?"\n• "How can I contact him?"`
        }
    ];

    const SUGGESTED_QUESTIONS = [
        'Tell me about Divyansh',
        'Avalara experience?',
        'AI & RAG skills?',
        'How to contact?',
        'Download resume'
    ];

    const FALLBACK = `I'm not sure about that specific question. Try asking about:\n\n• **Experience** (Avalara, AJIO, Entain)\n• **Skills** (Java, AI, Kafka, AWS)\n• **Projects** & **Achievements**\n• **Education** & **Contact info**\n\nOr use one of the suggested questions below!`;

    function normalize(text) {
        return text.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();
    }

    function findAnswer(query) {
        const normalized = normalize(query);
        if (!normalized) return null;

        let bestScore = 0;
        let bestResponse = null;

        KNOWLEDGE.forEach(entry => {
            let score = 0;
            entry.keywords.forEach(kw => {
                if (normalized.includes(kw)) {
                    score += kw.includes(' ') ? 3 : 1;
                }
            });
            if (score > bestScore) {
                bestScore = score;
                bestResponse = entry.response;
            }
        });

        return bestScore > 0 ? bestResponse : null;
    }

    function formatMessage(text) {
        return text
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>')
            .replace(/\n/g, '<br>');
    }

    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    class PortfolioAssistant {
        constructor() {
            this.isOpen = false;
            this.isTyping = false;
            this.init();
        }

        init() {
            this.injectHTML();
            this.bindEvents();
        }

        injectHTML() {
            const widget = document.createElement('div');
            widget.id = 'ai-assistant';
            widget.innerHTML = `
                <button id="ai-assistant-toggle" class="ai-assistant-toggle" aria-label="Open AI assistant">
                    <i class="fas fa-robot"></i>
                    <span class="ai-toggle-label">Ask AI</span>
                </button>
                <div id="ai-assistant-panel" class="ai-assistant-panel" aria-hidden="true">
                    <div class="ai-assistant-header">
                        <div class="ai-header-info">
                            <div class="ai-avatar"><i class="fas fa-robot"></i></div>
                            <div>
                                <h4 class="ai-header-title">Portfolio Assistant</h4>
                                <span class="ai-header-status"><span class="ai-status-dot"></span> Ask me about Divyansh</span>
                            </div>
                        </div>
                        <button id="ai-assistant-close" class="ai-assistant-close" aria-label="Close chat">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                    <div id="ai-assistant-messages" class="ai-assistant-messages"></div>
                    <div id="ai-suggested-questions" class="ai-suggested-questions"></div>
                    <div class="ai-assistant-input-area">
                        <input type="text" id="ai-assistant-input" class="ai-assistant-input"
                            placeholder="Ask about experience, skills, projects..." autocomplete="off" maxlength="300">
                        <button id="ai-assistant-send" class="ai-assistant-send" aria-label="Send message">
                            <i class="fas fa-paper-plane"></i>
                        </button>
                    </div>
                </div>
            `;
            document.body.appendChild(widget);
        }

        bindEvents() {
            this.toggle = document.getElementById('ai-assistant-toggle');
            this.panel = document.getElementById('ai-assistant-panel');
            this.closeBtn = document.getElementById('ai-assistant-close');
            this.messages = document.getElementById('ai-assistant-messages');
            this.suggestions = document.getElementById('ai-suggested-questions');
            this.input = document.getElementById('ai-assistant-input');
            this.sendBtn = document.getElementById('ai-assistant-send');

            this.toggle.addEventListener('click', () => this.togglePanel());
            this.closeBtn.addEventListener('click', () => this.closePanel());
            this.sendBtn.addEventListener('click', () => this.handleSend());
            this.input.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    this.handleSend();
                }
            });

            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && this.isOpen) this.closePanel();
            });
        }

        togglePanel() {
            this.isOpen ? this.closePanel() : this.openPanel();
        }

        openPanel() {
            this.isOpen = true;
            this.panel.classList.add('open');
            this.panel.setAttribute('aria-hidden', 'false');
            this.toggle.classList.add('active');

            if (this.messages.children.length === 0) {
                this.addBotMessage(
                    `Hi! I'm Divyansh's portfolio assistant. Ask me anything about his **experience**, **skills**, **projects**, or how to **get in touch**.`,
                    false
                );
                this.renderSuggestions();
            }

            setTimeout(() => this.input.focus(), 300);
        }

        closePanel() {
            this.isOpen = false;
            this.panel.classList.remove('open');
            this.panel.setAttribute('aria-hidden', 'true');
            this.toggle.classList.remove('active');
        }

        renderSuggestions() {
            this.suggestions.innerHTML = SUGGESTED_QUESTIONS.map(q =>
                `<button class="ai-suggestion-chip" data-question="${q}">${q}</button>`
            ).join('');

            this.suggestions.querySelectorAll('.ai-suggestion-chip').forEach(chip => {
                chip.addEventListener('click', () => {
                    this.input.value = chip.dataset.question;
                    this.handleSend();
                });
            });
        }

        addMessage(content, type) {
            const msg = document.createElement('div');
            msg.className = `ai-message ai-message-${type}`;
            msg.innerHTML = `<div class="ai-message-bubble">${content}</div>`;
            this.messages.appendChild(msg);
            this.messages.scrollTop = this.messages.scrollHeight;
            return msg;
        }

        addUserMessage(text) {
            return this.addMessage(formatMessage(text), 'user');
        }

        async addBotMessage(text, animate = true) {
            if (animate) {
                const typing = document.createElement('div');
                typing.className = 'ai-message ai-message-bot ai-typing';
                typing.innerHTML = `<div class="ai-message-bubble"><span class="ai-typing-dots"><span></span><span></span><span></span></span></div>`;
                this.messages.appendChild(typing);
                this.messages.scrollTop = this.messages.scrollHeight;

                await delay(600 + Math.random() * 400);

                typing.remove();
            }

            return this.addMessage(formatMessage(text), 'bot');
        }

        async handleSend() {
            const query = this.input.value.trim();
            if (!query || this.isTyping) return;

            this.isTyping = true;
            this.input.value = '';
            this.sendBtn.disabled = true;
            this.suggestions.innerHTML = '';

            this.addUserMessage(query);

            const answer = findAnswer(query) || FALLBACK;
            await this.addBotMessage(answer);

            this.renderSuggestions();
            this.isTyping = false;
            this.sendBtn.disabled = false;
            this.input.focus();
        }
    }

    document.addEventListener('DOMContentLoaded', () => {
        new PortfolioAssistant();
    });
})();
