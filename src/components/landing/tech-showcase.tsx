"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Server, Database, Shield, Code, Cpu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function TechShowcase() {
    return (
        <section id="tech-stack" className="py-24 overflow-hidden">
            <div className="container px-4 mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Badge className="mb-4 bg-blue-600 hover:bg-blue-700">Engineering Excellence</Badge>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Complex Backend. <br />
                            <span className="text-muted-foreground">Simple Experience.</span>
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            Our system handles complex data relationships between students, courses, slots, and events.
                            Powered by a robust Node.js & TypeScript architecture.
                        </p>

                        <div className="space-y-6">
                            {[
                                {
                                    icon: Database,
                                    title: "PostgreSQL & Prisma ORM",
                                    desc: "Normalized relational schema designed for high-concurrency and data integrity."
                                },
                                {
                                    icon: Shield,
                                    title: "Admin Dashboard Control",
                                    desc: "Comprehensive role-based access control (RBAC) for administrators to manage schedules."
                                },
                                {
                                    icon: Server,
                                    title: "Express.js REST API",
                                    desc: "Scalable API endpoints with JWT authentication and rigorous input validation."
                                }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="mt-1 w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0 text-blue-500">
                                        <item.icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-xl">{item.title}</h3>
                                        <p className="text-muted-foreground">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}

                        className="relative space-y-8"
                    >
                        {/* Admin Dashboard Preview */}
                        <div className="relative z-20 rounded-xl bg-[#0F1117] border border-white/10 overflow-hidden shadow-2xl">
                            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-[#0F1117]">
                                <span className="text-xs text-muted-foreground flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-red-500/50" />
                                    <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                                    <div className="w-2 h-2 rounded-full bg-green-500/50" />
                                    <span className="ml-2 opacity-50">admin.mymatrikulasi.com</span>
                                </span>
                            </div>
                            <div className="relative aspect-[16/10] w-full">
                                <Image
                                    src="/images/admin-dashboard.png"
                                    alt="Admin Dashboard Interface"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1117] via-transparent to-transparent opacity-50" />

                                {/* Live Demo Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/60 backdrop-blur-sm">
                                    <Link href="https://dashboard.mym.hamdan.lol/" target="_blank">
                                        <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6">
                                            Try Live Demo
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Abstract visual representation of backend/code */}
                        <div className="relative z-10 rounded-xl bg-[#0F1117] border border-white/10 p-6 shadow-2xl ml-8">
                            <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-4">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                                <span className="ml-2 text-xs text-muted-foreground font-mono">server.ts</span>
                            </div>
                            <pre className="font-mono text-xs sm:text-sm text-blue-300 leading-relaxed overflow-x-auto">
                                <code>{`
// API Endpoint: Calculate Study Load
app.post('/api/load', authenticate, async (req, res) => {
  const { userId } = req.user;
  
  // Complex aggregation query
  const load = await prisma.assignment.aggregate({
    where: { 
      studentId: userId,
      status: 'PENDING' 
    },
    _sum: { weight: true },
    _count: true
  });

  const stressScore = calculateStress(load);
  return res.json({ score: stressScore });
});
                `}</code>
                            </pre>
                        </div>

                        {/* Background blobs */}
                        <div className="absolute -top-10 -right-10 w-72 h-72 bg-purple-500/20 rounded-full blur-[80px]" />
                        <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-[80px]" />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
