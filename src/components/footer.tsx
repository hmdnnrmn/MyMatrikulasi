import { Github } from "lucide-react";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-black py-12">
            <div className="container px-4 mx-auto md:flex justify-between items-center">
                <div className="mb-6 md:mb-0">
                    <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-2">
                        MyMatrikulasi
                    </h3>
                    <p className="text-muted-foreground text-sm">
                        Empowering students with technology.
                    </p>
                </div>

                <div className="flex items-center gap-6">
                    <Link href="https://github.com/hmdnnrmn/MyMatrikulasi" target="_blank" className="text-muted-foreground hover:text-white transition-colors">
                        <Github className="w-5 h-5" />
                    </Link>
                </div>
            </div>
            <div className="container px-4 mx-auto mt-8 text-center text-xs text-muted-foreground">
                © 2026 Hamdan. All rights reserved.
            </div>
        </footer>
    );
}
