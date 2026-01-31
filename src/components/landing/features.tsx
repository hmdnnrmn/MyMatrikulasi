"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Gauge, Calendar, Zap, Layers } from "lucide-react";
import { motion } from "framer-motion";

const features = [
    {
        title: "Study Load Meter",
        description: "Real-time stress analysis algorithm that visualizes your academic workload.",
        icon: Gauge,
        badge: "Unique",
    },
    {
        title: "Smart Timetable",
        description: "Dynamic scheduling that adapts to your classes and personal study time.",
        icon: Calendar,
        badge: "Core",
    },
    {
        title: "Cross-Platform Sync",
        description: "Seamlessly switch between iOS and Android. Your data is always with you.",
        icon: Layers,
        badge: "Cloud",
    },
    {
        title: "Instant Updates",
        description: "Changes made by lecturers or admins reflect instantly on your device.",
        icon: Zap,
        badge: "Real-time",
    },
];

export function Features() {
    return (
        <section id="features" className="py-24 relative">
            <div className="absolute inset-0 bg-blue-500/5 blur-[100px] pointer-events-none" />
            <div className="container px-4 mx-auto relative">
                <div className="text-center mb-16">
                    <Badge variant="outline" className="mb-4 text-blue-400 border-blue-500/30">Feature Rich</Badge>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
                        Buttressed by Powerful Tools
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Everything you need to excel in your matriculation program, wrapped in a beautiful interface.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full border-white/10 bg-black/40 backdrop-blur-md hover:border-blue-500/50 hover:bg-black/60 transition-all duration-300">
                                <CardHeader>
                                    <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 text-blue-500 border border-blue-500/10">
                                        <feature.icon className="w-6 h-6" />
                                    </div>
                                    <CardTitle className="flex items-center justify-between text-white">
                                        {feature.title}
                                        {feature.badge && <Badge variant="secondary" className="text-xs bg-blue-500/10 text-blue-400 border-0">{feature.badge}</Badge>}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-zinc-400">
                                        {feature.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
