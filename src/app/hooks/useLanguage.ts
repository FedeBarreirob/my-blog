'use client';
import { useEffect, useState } from "react";

export const useLanguage = () => {
  const [language, setLanguage] = useState<'en' | 'es'>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      setLanguage(savedLanguage as 'en' | 'es');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  return { language, setLanguage };
};
