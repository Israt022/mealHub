import { ArrowRight, Flame } from 'lucide-react';
import React from 'react';
import hero from '../../assets/hero.avif'

const HeroSection = () => {
    return (
        <>
             <section className="relative pt-32 pb-20 overflow-hidden">
                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <style>{`
                    @keyframes fastPulse {
                        0%, 100% { opacity: 0.4; }
                        50% { opacity: 0.6; }
                    }
                    .fast-pulse { animation: fastPulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
                    `}</style>
                    <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl fast-pulse" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-200/30 rounded-full blur-3xl fast-pulse" style={{ animationDelay: '0.5s' }} />
                    <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-orange-300/20 rounded-full blur-3xl fast-pulse" style={{ animationDelay: '1s' }} />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 dark:bg-orange-900/30 rounded-full w-fit animate-in fade-in slide-in-from-left-4 duration-500">
                        <Flame className="w-4 h-4 text-orange-600 dark:text-orange-400 animate-bounce" style={{ animationDuration: '1s' }} />
                        <span className="text-sm font-medium text-orange-600 dark:text-orange-400">
                            Fresh meals delivered daily
                        </span>
                        </div>

                        {/* Headline */}
                        <div className="animate-in fade-in slide-in-from-left-4 duration-500" style={{ animationDelay: '100ms' }}>
                        <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4 text-balance">
                            Delicious meals,{' '}
                            <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent" style={{ animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}>
                            delivered fresh
                            </span>
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                            Skip the cooking stress. Our chef-prepared meals arrive at your door, ready to enjoy. 
                            From wholesome dinners to quick lunches, we've got you covered every day.
                        </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-left-4 duration-500" style={{ animationDelay: '200ms' }}>
                        <button 
                            size="lg" 
                            className="btn border-none bg-orange-600 hover:bg-orange-700 text-white group shadow-lg shadow-orange-600/30 hover:shadow-orange-600/50 transition-all duration-200 hover:scale-110 active:scale-95"
                        >
                            Order Now
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-200" />
                        </button>
                        <button 
                            size="lg" 
                            variant="outline" 
                            className="btn bg-white border-none text-black border-border hover:bg-muted transition-all duration-200 hover:scale-110 active:scale-95"
                        >
                            View Plans
                        </button>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border animate-in fade-in slide-in-from-left-4 duration-500" style={{ animationDelay: '300ms' }}>
                        {[
                            { value: '50K+', label: 'Happy customers' },
                            { value: '200+', label: 'Menu options' },
                            { value: '24hrs', label: 'Delivery time' }
                        ].map((stat, idx) => (
                            <div key={idx} className="hover:translate-y-0.5 transition-transform duration-150 cursor-pointer">
                            <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">{stat.value}</p>
                            <p className="text-sm text-muted-foreground">{stat.label}</p>
                            </div>
                        ))}
                        </div>
                    </div>

                    {/* Right Visual */}
                    <div className="relative h-full min-h-[24rem] sm:min-h-[20rem] lg:h-full animate-in fade-in slide-in-from-right-4 duration-500" style={{ animationDelay: '150ms' }}>
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-yellow-100 dark:from-orange-900/30 dark:to-yellow-900/30 rounded-2xl overflow-hidden shadow-2xl shadow-orange-500/10 hover:shadow-orange-500/20 transition-shadow duration-200 group">
                        <img
                            src={hero}
                            alt="Fresh gourmet meal delivered by mealHub"
                            // fill
                            className="object-cover lg:h-full group-hover:scale-105 transition-transform duration-300"
                            // priority
                            // sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        {/* Overlay gradient for better readability */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20" />
                        </div>

                        {/* Floating cards - Left */}
                        <div className="absolute -bottom-4 -left-4 bg-white dark:bg-card p-4 rounded-lg shadow-2xl border border-border max-w-xs animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: '400ms' }}>
                        <p className="text-sm text-black font-semibold text-foreground mb-1">⭐ Rated 4.9/5</p>
                        <p className="text-xs text-black text-muted-foreground">From 12,000+ reviews</p>
                        <div className="mt-2 h-0.5 bg-gradient-to-r from-orange-400 to-transparent rounded-full" />
                        </div>

                        {/* Floating cards - Right */}
                        <div className="absolute -top-4 -right-4 bg-white dark:bg-card p-4 rounded-lg shadow-2xl border border-border max-w-xs animate-in fade-in slide-in-from-top-4 duration-500" style={{ animationDelay: '500ms' }}>
                        <p className="text-sm text-black font-semibold text-foreground mb-1">🚀 Fast Delivery</p>
                        <p className="text-xs text-black text-muted-foreground">Same day to your doorstep</p>
                        <div className="mt-2 h-0.5 bg-gradient-to-r from-orange-400 to-transparent rounded-full" />
                        </div>
                    </div>
                    </div>
                </div>
                </section>
        </>
    );
};

export default HeroSection;