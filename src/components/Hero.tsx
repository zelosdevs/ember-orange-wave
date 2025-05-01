
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-gradient-to-b from-fivem-gray-dark to-black"
    >
      {/* Background overlay with grid pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(#FF7A00 0.5px, transparent 0.5px), linear-gradient(to right, #FF7A00 0.5px, transparent 0.5px)',
          backgroundSize: '50px 50px'
        }}
      ></div>

      {/* Orange gradient circle in the background */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-fivem-orange/30 to-fivem-orange-dark/30 filter blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-fivem-orange/20 to-fivem-orange-dark/20 filter blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6 text-center md:text-left opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Welcome to <span className="gradient-text">Our FiveM Server</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-lg mx-auto md:mx-0">
              Experience the ultimate roleplay adventure with our custom scripts, active community, and immersive environment
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <Button className="orange-gradient text-white font-semibold px-8 py-6 rounded-md hover:brightness-110 transition-all duration-300 animate-pulse-orange">
                Join Server Now
              </Button>
              <Button variant="outline" className="border-fivem-orange text-fivem-orange hover:bg-fivem-orange/10">
                Learn More
              </Button>
            </div>
            <div className="flex items-center gap-6 justify-center md:justify-start pt-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-white">200+</p>
                <p className="text-gray-400 text-sm">Active Players</p>
              </div>
              <div className="h-10 w-px bg-gray-700"></div>
              <div className="text-center">
                <p className="text-3xl font-bold text-white">50+</p>
                <p className="text-gray-400 text-sm">Custom Jobs</p>
              </div>
              <div className="h-10 w-px bg-gray-700"></div>
              <div className="text-center">
                <p className="text-3xl font-bold text-white">24/7</p>
                <p className="text-gray-400 text-sm">Support</p>
              </div>
            </div>
          </div>
          <div className="flex-1 opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-2xl orange-glow animate-float">
                <img
                  src="https://i.imgur.com/0sq8qO3.jpg"
                  alt="FiveM Server Screenshot"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-fivem-gray-dark px-4 py-2 rounded-md border border-fivem-orange/50">
                <p className="text-fivem-orange font-medium">64 Slots Available</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll down indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-0 animate-fade-in" style={{ animationDelay: '1s' }}>
          <p className="text-white/50 mb-2">Scroll Down</p>
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
            <div className="w-1.5 h-1.5 bg-fivem-orange rounded-full animate-bounce mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
