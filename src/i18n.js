// src/i18n.js
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";

const I18nContext = createContext(null);

// языки в дропдауне
export const AVAILABLE_LANGS = [
  { code: "en", label: "EN" },
  { code: "ru", label: "RU" },
  { code: "de", label: "DE" },
  { code: "es", label: "ES" },
  { code: "fr", label: "FR" },
];

const translations = {
  en: {
    nav: {
      main: "Main",
      products: "Products",
      quality: "Quality",
      certificates: "Certificates",
      about: "About us",
    },

    hero: {
      tag: "Umbrella Pharmaceuticals • Research Division",
      titleMain: "Laboratory-grade ",
      titleTail: " protocols for elite performance and recovery",
      text:
        "Closed pharmaceutical R&D, peptide and hormone protocols built to Umbrella Labs quality standards. Only verified compounds, strict batch control, and full documentation for every vial.",
      ctaPrimary: "View products",
      ctaSecondary: "About company",
      note:
        "For research use only. Not intended as a medicinal product. Available exclusively to qualified professionals.",
    },

    products: {
      tag: "Peptide & metabolic protocols",
      title: "Flagship Umbrella peptide line",
      text:
        "Each vial is produced in controlled laboratory conditions with full batch traceability, purity analytics and cold-chain logistics.",

      items: {
        bpc157: {
          badge: "Tissue regeneration",
          name: "BPC-157 5 mg",
          subtitle: "Recovery & anti-inflammatory support",
          description:
            "Peptide complex designed to support tissue regeneration, recovery after high-intensity training and to modulate inflammatory responses.",
          bullets: [
            "Supports ligament and tendon recovery after load",
            "May help reduce local inflammatory response",
            "Suitable for long training cycles and deload phases",
          ],
        },

        semaglutide: {
          badge: "Metabolic protocol",
          name: "Semaglutide",
          subtitle: "Appetite & glucose control",
          description:
            "Research-grade GLP-1 analogue for protocols targeting appetite regulation, glucose metabolism and body weight management.",
          bullets: [
            "Studied for reduction of appetite and cravings",
            "Supports glucose control in complex protocols",
            "Used in long-term metabolic research schemes",
          ],
        },

        terzepatide: {
          badge: "Dual agonist",
          name: "Terzepatide",
          subtitle: "Advanced weight-management research",
          description:
            "Dual GIP/GLP-1 agonist used in advanced metabolic research protocols for body composition and insulin sensitivity.",
          bullets: [
            "Combines GIP and GLP-1 mechanism",
            "Used in complex weight-management protocols",
            "Research-grade purity with full analytics",
          ],
        },

        nad: {
          badge: "Cellular energy",
          name: "NAD+",
          subtitle: "Mitochondrial & anti-aging support",
          description:
            "NAD+ precursor solution for studies focused on cellular energy metabolism, mitochondrial function and longevity pathways.",
          bullets: [
            "Supports research on mitochondrial function",
            "Involved in sirtuin and longevity pathways",
            "Used in anti-aging and recovery protocols",
          ],
        },

        hghFragment: {
          badge: "Targeted fraction",
          name: "HGH Fragment 176-191",
          subtitle: "Fat-loss research component",
          description:
            "Target fragment of the HGH molecule, studied in protocols focused on fat-loss mechanisms without full HGH activity profile.",
          bullets: [
            "Fragment 176-191 of HGH sequence",
            "Used in fat-loss-oriented research",
            "Does not replicate full HGH profile",
          ],
        },

        rhgh: {
          badge: "Recombinant hormone",
          name: "Recombinant HGH",
          subtitle: "Growth hormone research",
          description:
            "Laboratory-grade recombinant human growth hormone for controlled research protocols with strict monitoring.",
          bullets: [
            "Recombinant 191-aa HGH sequence",
            "Requires strict research-grade handling",
            "Full analytical support for each batch",
          ],
        },
      },
    },
  },

  ru: {
    nav: {
      main: "Главная",
      products: "Продукты",
      quality: "Качество",
      certificates: "Сертификаты",
      about: "О нас",
    },

    hero: {
      tag: "Umbrella Pharmaceuticals • Research Division",
      titleMain: "Клиническая лаборатория ",
      titleTail: " для элитной продуктивности и восстановления",
      text:
        "Закрытое фарм-подразделение, которое разрабатывает продвинутые пептидные и метаболические протоколы для восстановления, когнитивной ясности и долгосрочной работоспособности.",
      ctaPrimary: "Смотреть продукты",
      ctaSecondary: "Скачать прайс-лист",
      note:
        "Пептидные препараты только для исследовательских целей. Не предназначены для использования человеком или животными.",
    },

    products: {
      tag: "Пептидные и метаболические протоколы",
      title: "Флагманская линейка пептидов Umbrella",
      text:
        "Каждый флакон производится в контролируемых лабораторных условиях с полной отслеживаемостью партий, аналитикой чистоты и поддержанием холодовой цепочки.",

      items: {
        bpc157: {
          badge: "Регенерация тканей",
          name: "BPC-157 5 mg",
          subtitle: "Восстановление и противовоспалительная поддержка",
          description:
            "Пептидный комплекс для поддержки регенерации тканей, восстановления после интенсивных нагрузок и модуляции воспалительных процессов.",
          bullets: [
            "Поддержка связок и сухожилий при нагрузках",
            "Снижение локального воспалительного ответа",
            "Подходит для длинных тренировочных циклов",
          ],
        },

        semaglutide: {
          badge: "Метаболический протокол",
          name: "Semaglutide",
          subtitle: "Контроль аппетита и глюкозы",
          description:
            "Исследовательский GLP-1 аналог для протоколов, направленных на регуляцию аппетита, обмен глюкозы и контроль массы тела.",
          bullets: [
            "Изучается для снижения аппетита и тяги к еде",
            "Поддержка контроля глюкозы в сложных схемах",
            "Используется в долгосрочных метаболических протоколах",
          ],
        },

        terzepatide: {
          badge: "Двойной агонист",
          name: "Terzepatide",
          subtitle: "Продвинутые протоколы снижения веса",
          description:
            "Двойной GIP/GLP-1 агонист для продвинутых метаболических протоколов по композиции тела и чувствительности к инсулину.",
          bullets: [
            "Комбинирует механизмы GIP и GLP-1",
            "Используется в сложных схемах контроля веса",
            "Исследовательская чистота с полной аналитикой",
          ],
        },

        nad: {
          badge: "Клеточная энергия",
          name: "NAD+",
          subtitle: "Поддержка митохондрий и anti-age протоколов",
          description:
            "Раствор NAD+ для исследований в области энергетического обмена, работы митохондрий и путей долголетия.",
          bullets: [
            "Поддержка исследований митохондриальных функций",
            "Участие в путях долголетия и восстановлении",
            "Используется в anti-age и восстановительных протоколах",
          ],
        },

        hghFragment: {
          badge: "Таргетированный фрагмент",
          name: "HGH Fragment 176-191",
          subtitle: "Компонент жиросжигающих протоколов",
          description:
            "Целевой фрагмент молекулы гормона роста, изучается в протоколах, направленных на жиросжигание без полного профиля действия HGH.",
          bullets: [
            "Фрагмент 176-191 последовательности HGH",
            "Используется в исследованиях механизмов жиросжигания",
            "Не повторяет полный профиль действия HGH",
          ],
        },

        rhgh: {
          badge: "Рекомбинантный гормон",
          name: "Recombinant HGH",
          subtitle: "Исследования гормона роста",
          description:
            "Лабораторный рекомбинантный гормон роста человека для контролируемых исследовательских протоколов с жёстким мониторингом.",
          bullets: [
            "Рекомбинантная 191-aa последовательность HGH",
            "Требует строгих условий обращения в лаборатории",
            "Полная аналитика каждой серии выпуска",
          ],
        },
      },
    },
  },
};

export function I18nProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window === "undefined") return "en";
    return window.localStorage.getItem("lang") || "en";
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("lang", lang);
      document.documentElement.setAttribute("lang", lang);
    }
  }, [lang]);

  const t = useCallback(
    (key) => {
      const parts = key.split(".");
      const langPack = translations[lang] || translations.en; // Fallback на EN
      let current = langPack;
      for (const p of parts) {
        current = current?.[p];
        if (current === undefined || current === null) {
          return key;
        }
      }
      return current;
    },
    [lang]
  );

  const value = { lang, setLang, t };

  return React.createElement(I18nContext.Provider, { value }, children);
}

export function useI18n() {
  return useContext(I18nContext);
}
