
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
    activePlayers_en: 'Active Players',
    activePlayers_hu: 'Aktív Játékosok',
    customJobs_en: 'Custom Jobs',
    customJobs_hu: 'Egyedi Munkák',
    support_en: 'Support',
    support_hu: 'Támogatás',
  },
  features: {
    title_en: 'Server Features',
    title_hu: 'Szerver Funkciók',
    customEconomy_en: 'Custom Economy',
    customEconomy_hu: 'Egyedi Gazdaság',
    economyDesc_en: 'Fully balanced economy system with multiple jobs and career paths',
    economyDesc_hu: 'Teljesen kiegyensúlyozott gazdasági rendszer számos munkával és karrierúttal',
    customVehicles_en: 'Premium Vehicles',
    customVehicles_hu: 'Prémium Járművek',
    vehiclesDesc_en: 'High-quality custom vehicles with unique handling and modifications',
    vehiclesDesc_hu: 'Kiváló minőségű egyedi járművek egyedi kezeléssel és módosításokkal',
    roleplayFocus_en: 'Roleplay Focus',
    roleplayFocus_hu: 'Szerepjáték Fókusz',
    roleplayDesc_en: 'Immersive roleplay experience with custom scripts and scenarios',
    roleplayDesc_hu: 'Magával ragadó szerepjáték élmény egyedi szkriptekkel és forgatókönyvekkel',
    activeStaff_en: 'Active Staff',
    activeStaff_hu: 'Aktív Személyzet',
    staffDesc_en: 'Dedicated team of administrators and moderators available 24/7',
    staffDesc_hu: 'Elkötelezett adminisztrátorok és moderátorok csapata a nap 24 órájában',
    regularEvents_en: 'Regular Events',
    regularEvents_hu: 'Rendszeres Események',
    eventsDesc_en: 'Weekly events with exclusive rewards and unique gameplay experiences',
    eventsDesc_hu: 'Heti események exkluzív jutalmakkal és egyedi játékélményekkel',
    customInteriors_en: 'Custom Interiors',
    customInteriors_hu: 'Egyedi Belső Terek',
    interiorsDesc_en: 'Detailed building interiors with interactive elements and props',
    interiorsDesc_hu: 'Részletes épületbelsők interaktív elemekkel és kellékekkel',
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
    step1_en: 'Install FiveM',
    step1_hu: 'Töltsd le a FiveM-et',
    step1Desc_en: 'Download and install the latest version of FiveM client from the official website',
    step1Desc_hu: 'Töltsd le és telepítsd a FiveM kliens legújabb verzióját a hivatalos weboldalról',
    step2_en: 'Create an Account',
    step2_hu: 'Hozz létre fiókot',
    step2Desc_en: 'Register on our website or Discord server to get full access to our features',
    step2Desc_hu: 'Regisztrálj weboldalunkon vagy Discord szerverünkön, hogy teljes hozzáférést kapj funkcióinkhoz',
    step3_en: 'Join Our Discord',
    step3_hu: 'Csatlakozz a Discordunkhoz',
    step3Desc_en: 'Connect with our community, read rules and get server announcements',
    step3Desc_hu: 'Kapcsolódj közösségünkhöz, olvasd el a szabályokat és értesülj a szerver hírekről',
    step4_en: 'Connect to Server',
    step4_hu: 'Csatlakozz a Szerverhez',
    step4Desc_en: 'Launch FiveM, press F8, and type \'connect serverIP\' to join our world',
    step4Desc_hu: 'Indítsd el a FiveM-et, nyomd meg az F8-at, és írd be a \'connect szerverIP\' parancsot a csatlakozáshoz',
    serverStatus_en: 'Server Status',
    serverStatus_hu: 'Szerver Állapot',
    serverIp_en: 'Server IP',
    serverIp_hu: 'Szerver IP',
    activePlayers_en: 'Active Players',
    activePlayers_hu: 'Aktív Játékosok',
    connectNow_en: 'Connect Now',
    connectNow_hu: 'Csatlakozz Most',
    copy_en: 'Copy',
    copy_hu: 'Másolás',
    learnMore_en: 'Learn More',
    learnMore_hu: 'Tudj meg többet',
  },
  footer: {
    rights_en: 'All Rights Reserved',
    rights_hu: 'Minden Jog Fenntartva',
    quickLinks_en: 'Quick Links',
    quickLinks_hu: 'Gyors Linkek',
    home_en: 'Home',
    home_hu: 'Főoldal',
    features_en: 'Features',
    features_hu: 'Funkciók',
    about_en: 'About',
    about_hu: 'Rólunk',
    joinServer_en: 'Join Server',
    joinServer_hu: 'Csatlakozz',
    rules_en: 'Rules',
    rules_hu: 'Szabályzat',
    resources_en: 'Resources',
    resources_hu: 'Erőforrások',
    discordServer_en: 'Discord Server',
    discordServer_hu: 'Discord Szerver',
    donationStore_en: 'Donation Store',
    donationStore_hu: 'Támogatói Bolt',
    serverRules_en: 'Server Rules',
    serverRules_hu: 'Szerver Szabályzat',
    communityForum_en: 'Community Forum',
    communityForum_hu: 'Közösségi Fórum',
    developmentBlog_en: 'Development Blog',
    developmentBlog_hu: 'Fejlesztői Blog',
    contactUs_en: 'Contact Us',
    contactUs_hu: 'Kapcsolat',
    email_en: 'Email',
    email_hu: 'E-mail',
    website_en: 'Website',
    website_hu: 'Weboldal',
    joinDiscord_en: 'Join our Discord',
    joinDiscord_hu: 'Csatlakozz a Discord-unkhoz',
    privacyPolicy_en: 'Privacy Policy',
    privacyPolicy_hu: 'Adatvédelmi Irányelvek',
    termsOfService_en: 'Terms of Service',
    termsOfService_hu: 'Szolgáltatási Feltételek',
    cookiePolicy_en: 'Cookie Policy',
    cookiePolicy_hu: 'Cookie Szabályzat',
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
