import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import zhTW from './locales/zh-TW.json';
import en from './locales/en.json';
import zhCN from './locales/zh-CN.json';

const resources = {
  'zh-TW': {
    translation: zhTW
  },
  'en': {
    translation: en
  },
  'zh-CN': {
    translation: zhCN
  }
};

// 從 localStorage 讀取已保存的語言，如果沒有則使用繁體中文作為預設
// 確保在瀏覽器環境中才讀取 localStorage
const getSavedLanguage = (): string => {
  if (typeof window !== 'undefined' && window.localStorage) {
    return localStorage.getItem('i18n-language') || 'zh-TW';
  }
  return 'zh-TW';
};

const savedLanguage = getSavedLanguage();

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLanguage,
    fallbackLng: 'zh-TW',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
