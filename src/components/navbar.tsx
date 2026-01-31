import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

export function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl supports-[backdrop-filter]:bg-black/20">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                    MyMatrikulasi
                </div>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
                    <Link href="#features" className="hover:text-white hover:bg-white/5 px-4 py-2 rounded-full transition-all">Features</Link>
                    <Link href="#tech-stack" className="hover:text-white hover:bg-white/5 px-4 py-2 rounded-full transition-all">Technology</Link>
                    <Link href="#download" className="hover:text-white hover:bg-white/5 px-4 py-2 rounded-full transition-all">Download</Link>
                </div>

                <div className="flex items-center gap-4">
                    <Link href="https://github.com/hmdnnrmn/MyMatrikulasi" target="_blank">
                        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-white/10">
                            <Github className="w-5 h-5" />
                        </Button>
                    </Link>

                </div>
            </div>
        </nav>
    );
}
