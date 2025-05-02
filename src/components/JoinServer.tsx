
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const JoinServer = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const steps = document.querySelectorAll('.step-card');
            steps.forEach((step, index) => {
              setTimeout(() => {
                step.classList.add('animate-fade-in');
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const [serverStatus, setServerStatus] = useState("Online");
  
  const steps = [
    {
      title: "step1",
      description: "step1Desc",
      link: "https://fivem.net/"
    },
    {
      title: "step2",
      description: "step2Desc",
      link: "#"
    },
    {
      title: "step3",
      description: "step3Desc",
      link: "#"
    },
    {
      title: "step4",
      description: "step4Desc",
      link: "#"
    }
  ];
  
  return (
    <section id="join" className="section-padding bg-black" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">{t('joinServer.title')}</span>
          </h2>
          <p className="text-gray-300">
            {t('joinServer.description')}
          </p>
        </div>
        
        <div className="mb-16 bg-fivem-gray-light rounded-lg p-6 flex flex-col md:flex-row justify-between items-center">
          <div>
            <p className="text-gray-300 mb-2">{t('joinServer.serverStatus')}</p>
            <div className="flex items-center">
              <span className={`inline-block w-3 h-3 rounded-full mr-2 ${serverStatus === "Online" ? "bg-green-500" : "bg-red-500"}`}></span>
              <p className="text-xl font-bold text-white">{serverStatus}</p>
            </div>
          </div>
          
          <div>
            <p className="text-gray-300 mb-2">{t('joinServer.serverIp')}</p>
            <div className="flex items-center">
              <p className="text-xl font-bold text-white">play.yourserver.com</p>
              <Button variant="ghost" className="ml-2 text-fivem-orange hover:text-fivem-orange-dark" onClick={() => navigator.clipboard.writeText("play.yourserver.com")}>
                {t('joinServer.copy')}
              </Button>
            </div>
          </div>
          
          <Button className="orange-gradient text-white font-medium px-8 py-2 rounded-md hover:brightness-110 transition-all duration-300 mt-4 md:mt-0">
            {t('joinServer.connectNow')}
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="step-card opacity-0 bg-fivem-gray-light p-6 rounded-lg border border-fivem-orange/20 relative group hover:border-fivem-orange/50 transition-all duration-300"
            >
              <div className="absolute -top-4 -left-4 bg-gradient-to-br from-fivem-orange to-fivem-orange-dark w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold mb-3 mt-2 text-white">{t(`joinServer.${step.title}`)}</h3>
              <p className="text-gray-300 mb-4">{t(`joinServer.${step.description}`)}</p>
              {step.link && (
                <a 
                  href={step.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-fivem-orange hover:text-fivem-orange-dark"
                >
                  {t('joinServer.learnMore')} →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JoinServer;
