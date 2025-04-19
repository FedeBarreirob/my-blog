import { getUserLocale } from '@/app/services/lang';
import {getRequestConfig} from 'next-intl/server';
 
export default getRequestConfig(async () => {
  const locale = await getUserLocale();
 
  return {
    locale,
    messages: (await import(`../app/locales/${locale}/common.json`)).default
  };
});