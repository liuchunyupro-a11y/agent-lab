import { createI18n } from 'vue-i18n'
import en from '../locales/en'
import zhCN from '../locales/zh-CN'

export default createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: { en, 'zh-CN': zhCN },
})
