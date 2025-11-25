import Button from "@/app/_ui/Button";
import { FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function PortfolioContainer({ project }) {
    return (
        <div 
            className="group relative overflow-hidden rounded-[2.5rem] bg-white dark:bg-[#0a0a0a] border border-gray-100 dark:border-white/5 shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500"
        >
            <div className="flex flex-col md:flex-row h-full">
                
                {/* Visual Side */}
                <div className={`relative flex-1 order-1 md:order-2 min-h-[300px] md:min-h-0 bg-gradient-to-br ${project.gradient} p-8 md:p-12 flex items-center justify-center overflow-hidden`}>
                    {/* Animated Background Pattern */}
                    <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] animate-pulse-slow"></div>
                    
                    {/* Floating Elements (Static now) */}
                    <div className="absolute top-10 right-10 w-20 h-20 bg-white/10 rounded-full blur-2xl" />
                    <div className="absolute bottom-10 left-10 w-32 h-32 bg-black/10 rounded-full blur-3xl" />

                    {/* Main Visual */}
                    <div className="relative z-10 w-full max-w-lg aspect-video rounded-2xl shadow-2xl overflow-hidden border border-white/20 backdrop-blur-sm transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1">
                        {project.imageURL ? (
                            <Image 
                                src={project.imageURL} 
                                alt={`Screenshot of ${project.title}`}
                                layout="fill"
                                objectFit="cover"
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        ) : (
                            <div className="w-full h-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:bg-white/20 transition-colors duration-500">
                                <div className="transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                                    <FaExternalLinkAlt className="text-white/70 w-16 h-16 drop-shadow-lg" />
                                </div>
                            </div>
                        )}
                        

                    </div>
                </div>

                {/* Content Side */}
                <div className="flex-1 order-2 md:order-1 p-8 md:p-14 flex flex-col justify-center relative z-10 bg-white dark:bg-[#0a0a0a]">
                    
                    {/* Decorative Line */}
                    <div className={`w-12 h-1.5 rounded-full mb-8 ${project.color.replace('bg-', 'bg-')}`}></div>

                    {/* Category */}
                    <div className="mb-4">
                        <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase ${project.color.replace('bg-', 'text-').replace('600', '500')} bg-opacity-10 bg-current`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${project.color}`}></span>
                            {project.category}
                        </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-4xl md:text-5xl font-black mb-6 text-dark-default dark:text-white leading-tight">
                        {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-lg text-dark-variant/70 dark:text-gray-400 mb-8 leading-relaxed font-light">
                        {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-3 mb-10">
                        {project.tags.map((tag, i) => (
                            <span 
                                key={tag} 
                                className="px-4 py-2 bg-gray-50 dark:bg-white/5 text-dark-variant/80 dark:text-gray-300 rounded-xl text-sm font-medium border border-gray-100 dark:border-white/10 hover:border-primary-default/30 hover:bg-primary-default/5 transition-colors cursor-default"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-6">
                        <Button type="primary" className="!px-8 !py-4 !text-lg shadow-xl shadow-primary-default/20 hover:shadow-primary-default/40">
                            Explore Case Study <FaArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        
                        {project.liveURL && (
                             <Link
                                href={project.liveURL} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-dark-variant/60 dark:text-gray-500 hover:text-primary-default dark:hover:text-white font-medium flex items-center gap-2 transition-colors group/link"
                            >
                                Live Demo 
                                <FaExternalLinkAlt className="w-3 h-3 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" />
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
