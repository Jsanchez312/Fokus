import { useLanguage } from '../context/LanguageContext'

export default function LangSwitcher({ theme = 'light' }) {
  const { lang, setLang } = useLanguage()
  const isEn = lang === 'en'

  return (
    <div
      className={`lang-slider-wrap theme-${theme}`}
      role="group"
      aria-label="Language selection"
    >
      <div className={`lang-slider-track ${isEn ? 'is-en' : 'is-es'}`}>
        <span className="lang-slider-thumb" aria-hidden="true" />
        <button
          type="button"
          className={`lang-option-btn ${!isEn ? 'active' : ''}`}
          onClick={() => setLang('es')}
          aria-pressed={!isEn}
          aria-label="Cambiar idioma a Español"
        >
          ES
        </button>
        <button
          type="button"
          className={`lang-option-btn ${isEn ? 'active' : ''}`}
          onClick={() => setLang('en')}
          aria-pressed={isEn}
          aria-label="Switch language to English"
        >
          ENG
        </button>
      </div>
    </div>
  )
}
