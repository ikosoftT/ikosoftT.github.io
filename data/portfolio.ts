export const portfolio = {
  name: "El Yassine Iko",
  brand: "IKOSOFT",
  role: "Web Developer",
  location: "Marrakech, Morocco",
  email: "hello@ikosoft.dev",
  whatsapp: "212600000000",
  intro:
    "I design and build modern websites that are fast, responsive, and focused on real business goals.",
  services: [
    {
      number: "01",
      title: "Website Development",
      description: "Fast, responsive websites built with modern technologies and clean, maintainable code.",
    },
    {
      number: "02",
      title: "Front-End Development",
      description: "Interactive interfaces built with React, Next.js, TypeScript, and thoughtful motion.",
    },
    {
      number: "03",
      title: "UI/UX to Code",
      description: "Pixel-precise implementation that turns designs into polished, accessible products.",
    },
  ],
  projects: [
    {
      title: "Elite 1337",
      category: "Student platform · Live product",
      description: "A community-built 1337 leaderboard with 42 OAuth, campus rankings, and student profiles.",
      stack: ["Next.js", "TypeScript", "42 API", "Supabase"],
      href: "https://github.com/ikosoftT/elite-1337-v3",
      live: "https://www.elite-1337.app",
      tone: "violet",
    },
    {
      title: "Fly-in",
      category: "Algorithms · Simulation",
      description: "A Python drone-routing engine with pathfinding, alternative routes, and movement constraints.",
      stack: ["Python", "Graphs", "Dijkstra", "OOP"],
      href: "https://github.com/ikosoftT/FLY-IN",
      tone: "lime",
    },
    {
      title: "Codexion",
      category: "Systems · Concurrency",
      description: "A multithreaded resource scheduler using POSIX threads, mutexes, and FIFO / EDF scheduling.",
      stack: ["C", "POSIX Threads", "Synchronization"],
      href: "https://github.com/ikosoftT/MyCoddexion",
      tone: "coral",
    },
    {
      title: "Call Me Maybe",
      category: "AI systems · Function calling",
      description: "Turns natural-language requests into typed function calls and structured JSON.",
      stack: ["Python", "LLMs", "Pydantic"],
      href: "https://github.com/ikosoftT/Call-Me-May-Be-",
      tone: "violet",
    },
    {
      title: "RAG Against the Machine",
      category: "AI engineering · In progress",
      description: "A codebase Q&A pipeline with document indexing, retrieval, and source-grounded generation.",
      stack: ["Python", "Retrieval", "LLMs"],
      href: "https://github.com/ikosoftT/RAG",
      tone: "lime",
    },
    {
      title: "YT Focus Mode",
      category: "Developer productivity · Open source",
      description: "A browser extension that keeps developers focused while learning on YouTube.",
      stack: ["JavaScript", "HTML", "Browser Extension"],
      href: "https://github.com/ikosoftT/YT-FOCUS-MODE",
      live: "https://focus-1337.vercel.app",
      tone: "coral",
    },
  ],
};

export function whatsappLink(message = "Hi El Yassine, I'd like to discuss a project with you.") {
  return `https://wa.me/${portfolio.whatsapp}?text=${encodeURIComponent(message)}`;
}
