
import React, { createContext, useState, useContext, ReactNode } from 'react';

// Translation data structure
type Translations = {
  [key: string]: {
    [key: string]: string;
  };
};

// Available languages
export type Language = 'en' | 'hu';

// Translation content
const translations: Translations = {
  navbar: {
    home_en: 'Home',
    home_hu: 'Főoldal',
    features_en: 'Features',
    features_hu: 'Funkciók',
    about_en: 'About',
    about_hu: 'Rólunk',
    joinUs_en: 'Join Us',
    joinUs_hu: 'Csatlakozz',
    connectNow_en: 'Connect Now',
    connectNow_hu: 'Csatlakozás',
  },
  hero: {
    welcome_en: 'Welcome to the Future of',
    welcome_hu: 'Üdvözöljük a',
    roleplay_en: 'Roleplay',
    roleplay_hu: 'Szerepjáték Jövőjében',
    description_en: 'Experience the next generation of FiveM roleplay on our server with cutting-edge features and an immersive community.',
    description_hu: 'Tapasztald meg a FiveM szerepjáték következő generációját szerverünkön, modern funkciókkal és magával ragadó közösséggel.',
    joinNow_en: 'Join Now',
    joinNow_hu: 'Csatlakozz most',
    learnMore_en: 'Learn More',
    learnMore_hu: 'Tudj meg többet',
  },
  features: {
    title_en: 'Advanced Features',
    title_hu: 'Fejlett Funkciók',
    customEconomy_en: 'Advanced Economy System',
    customEconomy_hu: 'Fejlett Gazdasági Rendszer',
    economyDesc_en: 'Our server features a robust economy with stock markets, property investment, and dynamic business ownership.',
    economyDesc_hu: 'Szerverünk robusztus gazdasági rendszerrel rendelkezik, tőzsdével, ingatlanbefektetéssel és dinamikus vállalkozási lehetőségekkel.',
    customJobs_en: 'Realistic Jobs & Careers',
    customJobs_hu: 'Valósághű Munkák & Karrierek',
    jobsDesc_en: 'Progress through career paths with skill-based advancement and specialized professions unique to our server.',
    jobsDesc_hu: 'Haladj előre karrierutadon készség-alapú fejlődéssel és egyedi, specializált szakmákkal.',
    aidrivers_en: 'AI Traffic System',
    aidrivers_hu: 'AI Forgalmi Rendszer',
    aiDesc_en: 'Experience a living city with advanced AI pedestrians and traffic that react realistically to player actions.',
    aiDesc_hu: 'Tapasztalj meg egy élő várost fejlett AI gyalogosokkal és forgalommal, amelyek valósághűen reagálnak a játékosok cselekedeteire.',
    customCars_en: 'Custom Vehicles & Mods',
    customCars_hu: 'Egyedi Járművek & Modok',
    carsDesc_en: 'Access to over 300 custom vehicles with realistic handling and detailed damage systems.',
    carsDesc_hu: 'Hozzáférés több mint 300 egyedi járműhöz valósághű irányítással és részletes sérülési rendszerrel.',
    voiceChat_en: '3D Voice Communication',
    voiceChat_hu: '3D Hang Kommunikáció',
    voiceDesc_en: 'Immersive proximity voice chat with radio channels, phone calls, and voice effects.',
    voiceDesc_hu: 'Magával ragadó közelségi hang-chat rádió csatornákkal, telefonhívásokkal és hangeffektekkel.',
    realEstate_en: 'Advanced Property System',
    realEstate_hu: 'Fejlett Ingatlan Rendszer',
    realEstateDesc_en: 'Purchase, upgrade and customize homes and businesses with our comprehensive real estate system.',
    realEstateDesc_hu: 'Vásárolj, fejlessz és testreszabj otthonokat és vállalkozásokat átfogó ingatlan rendszerünkkel.',
  },
  stats: {
    activePlayers_en: 'Active Players',
    activePlayers_hu: 'Aktív Játékosok',
    customVehicles_en: 'Custom Vehicles',
    customVehicles_hu: 'Egyedi Járművek',
    customJobs_en: 'Custom Jobs',
    customJobs_hu: 'Egyedi Munkák',
    serverUptime_en: 'Server Uptime',
    serverUptime_hu: 'Szerver Üzemidő',
  },
  joinServer: {
    title_en: 'Join Our Server Today',
    title_hu: 'Csatlakozz Szerverünkhöz',
    step1_en: 'Download FiveM',
    step1_hu: 'Töltsd le a FiveM-et',
    step2_en: 'Create an Account',
    step2_hu: 'Hozz létre fiókot',
    step3_en: 'Connect to Our Server',
    step3_hu: 'Csatlakozz a szerverünkhöz',
    serverIp_en: 'Server IP',
    serverIp_hu: 'Szerver IP',
    discordTitle_en: 'Join Our Community',
    discordTitle_hu: 'Csatlakozz a közösségünkhöz',
    discordDesc_en: 'Connect with other players, stay updated on events, and get support.',
    discordDesc_hu: 'Lépj kapcsolatba más játékosokkal, értesülj az eseményekről és kérj segítséget.',
    joinDiscord_en: 'Join Our Discord',
    joinDiscord_hu: 'Csatlakozz a Discord-unkhoz',
  },
  footer: {
    rights_en: 'All Rights Reserved',
    rights_hu: 'Minden Jog Fenntartva',
    privacy_en: 'Privacy Policy',
    privacy_hu: 'Adatvédelmi Irányelvek',
    terms_en: 'Terms of Service',
    terms_hu: 'Szolgáltatási Feltételek',
    contact_en: 'Contact Us',
    contact_hu: 'Kapcsolat',
  },
  loading: {
    message_en: 'Loading experience...',
    message_hu: 'Élmény betöltése...',
  }
};

// Context interface
interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  // Translation function
  const t = (key: string): string => {
    const [section, textKey] = key.split('.');
    const translationKey = `${textKey}_${language}`;
    
    return translations[section]?.[translationKey] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
