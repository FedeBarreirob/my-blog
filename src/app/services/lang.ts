'use server'
import { hasLocale, Locale } from "next-intl";
import { cookies } from "next/headers";

const COOKIE_NAME = 'NEXT_LOCALE';
const locales = ['en', 'es'];
const defaultLocale = 'en';

export async function setUserLocale(locale: string) {
    (await cookies()).set(COOKIE_NAME, locale);
}

export async function getUserLocale(): Promise<Locale> {
    const candidate = (await cookies()).get(COOKIE_NAME)?.value;
    return hasLocale(locales, candidate) ? candidate : defaultLocale;
}