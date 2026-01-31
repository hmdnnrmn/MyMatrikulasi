"use client";

import Link from "next/link";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Smartphone, Apple, Github } from "lucide-react";

import { IPhoneFrame } from "@/components/ui/iphone-frame";

export function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden pb-20">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] opacity-50" />

            <div className="container px-4 text-center z-10 mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
                        Master Your <br />
                        <span className="text-blue-500">Matrikulasi Journey</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10">
                        The ultimate productivity companion for students. Intelligent scheduling,
                        study load analysis, and seamless cross-platform sync.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="https://github.com/hmdnnrmn/MyMatrikulasi/releases/download/1.0.0/android-release.apk">
                            <Button size="lg" className="h-12 px-8 bg-blue-600 hover:bg-blue-700 text-white rounded-full">
                                <Smartphone className="mr-2 h-5 w-5" />
                                Download .APK
                            </Button>
                        </Link>
                        <Link href="https://github.com/hmdnnrmn/MyMatrikulasi/releases/download/1.0.0/ios-release.ipa">
                            <Button size="lg" className="h-12 px-8 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white hover:bg-white/10 transition-all">
                                <Apple className="mr-2 h-5 w-5" />
                                Download .IPA
                            </Button>
                        </Link>
                        <Link href="https://github.com/hmdnnrmn/MyMatrikulasi" target="_blank">
                            <Button size="lg" variant="ghost" className="h-12 px-8 rounded-full text-white hover:bg-white/5 hover:text-blue-400 transition-all">
                                <Github className="mr-2 h-5 w-5" />
                                View on GitHub
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Scrollable iPhone Screenshots */}
            <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="w-full overflow-x-auto pb-12 hide-scrollbar mask-linear-fade"
            >
                <div className="flex gap-8 px-8 w-max mx-auto">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <IPhoneFrame key={i}>
                            <img
                                src={`/images/${i}.jpg`}
                                alt={`App Screenshot ${i}`}
                                className="w-full h-full object-cover"
                            />
                        </IPhoneFrame>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
