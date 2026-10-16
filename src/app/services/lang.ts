'use server'
import { hasLocale, Locale } from "next-intl";
import { cookies } from "next/headers";

const COOKIE_NAME = 'NEXT_LOCALE';
const locales = ['en', 'es'];
const defaultLocale = 'en';

export async function setUserLocale(locale: string) {
    if (!hasLocale(locales, locale)) return;
    (await cookies()).set(COOKIE_NAME, locale, {
        path: '/',
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 365,
    });
}

export async function getUserLocale(): Promise<Locale> {
    const candidate = (await cookies()).get(COOKIE_NAME)?.value;
    return hasLocale(locales, candidate) ? candidate : defaultLocale;
}
