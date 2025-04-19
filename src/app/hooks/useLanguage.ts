'use client'
import { useEffect, useState } from "react";

export const useLanguage = () => {
    const savedLanguage = localStorage?.getItem('language') || 'en';
    const [language,setLanguage] = useState(savedLanguage);

    useEffect(() => {
        localStorage.setItem('language', language);
    }, [language]);

    return {language, setLanguage};
}