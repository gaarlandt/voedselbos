import Link from "next/link";

export default function LinksPage() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center p-6 space-y-8">
            <h1 className="text-4xl font-serif text-accent-primary">Externe Links</h1>
            <div className="flex flex-col space-y-4 w-full max-w-md">
                <Link href="/" className="block p-4 border border-foreground/20 hover:bg-white/50 text-center transition-colors">
                    Terug naar Home
                </Link>
                {/* Add more links here */}
                <a href="#" className="block p-4 border border-foreground/20 hover:bg-white/50 text-center transition-colors">
                    Instagram
                </a>
                <a href="#" className="block p-4 border border-foreground/20 hover:bg-white/50 text-center transition-colors">
                    LinkedIn
                </a>
                <a href="mailto:info@example.com" className="block p-4 border border-foreground/20 hover:bg-white/50 text-center transition-colors">
                    Email Ons
                </a>
            </div>
        </main>
    );
}
