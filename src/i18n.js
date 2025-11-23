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
  { code: "it", label: "IT" },
];

const translations = {
  /* ================= ENGLISH ================= */
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
      tag: "Products",
      title: "Umbrella Pharmaceuticals - Research Compounds",
      text:
        "Umbrella Pharmaceuticals specializes in advanced peptide, hormone and metabolic research compounds.",

      sets: {
        set1: {
          label: "Flagship line",
          name: "Umbrella Core Stack",
          subtitle: "BPC-157 • NAD+ • HGH Fragment",
          description:
            "The core Umbrella stack designed for recovery and structural protection.",
          bullets: [
            "Original Umbrella Pharmaceuticals production",
            "Every batch is tested for purity",
            "Solid base for long-term recovery",
          ],
        },

        set2: {
          label: "Peptide lab",
          name: "Advanced Peptide Series",
          subtitle: "Elite peptide and hormone formulations",
          description:
            "Advanced peptide research line for athletes and performance clients.",
          bullets: [
            "Clean pharma-grade ingredients",
            "Predictable results in protocols",
            "Designed for professionals",
          ],
        },

        set3: {
          label: "Metabolic control",
          name: "Weight & Energy Protocols",
          subtitle: "Semaglutide • Terzepatide",
          description:
            "Targeted metabolic solutions for appetite control and sustainable energy.",
          bullets: [
            "Modern metabolic compounds",
            "Energy without stimulants",
            "Built around real protocols",
          ],
        },
      },
    },

    quality: {
      kicker: "Quality & Safety",
      title: "Laboratory-grade quality with red-line control",
      subtitle:
        "Each vial is produced under strict laboratory conditions, with every batch passing advanced testing before release.",

      badge1: {
        label: "99%+ purity",
        sub: "HPLC verified",
      },

      badge2: {
        label: "Multi-step QC",
        sub: "Every lot checked",
      },

      card1: {
        title: "Sterile environment",
        text:
          "Vials are filled and sealed in a controlled clean-room environment with aseptic procedures.",
      },

      card2: {
        title: "99%+ purity",
        text:
          "Each batch is screened using HPLC and MS to confirm maximum peptide purity and identity.",
      },

      card3: {
        title: "Red-line holographic tracking",
        text:
          "Every vial is linked to an internal batch ID, enabling precise tracking across production, testing and release.",

        bullets: [
          "Unique batch identifier",
          "Timestamped production stages",
          "Archived lab reports per lot",
        ],
      },
    },

    certificates: {
      kicker: "Documentation",
      title: "Certificates & lab reports for every batch",
      subtitle:
        "Each production lot is backed by analytical reports and internal documentation, confirming identity, purity and consistency.",

      list: [
        "Certificate of Analysis (CoA) per batch",
        "HPLC chromatograms confirming purity",
        "MS profiles for identity verification",
        "Internal QC logs and release forms",
      ],

      card1: {
        ribbon: "Batch CoA",
        p1: "Purity: 99.2% (HPLC)",
        p2: "Identity: MS confirmed",
        p3: "Solvent content: < 0.5%",
        link: "View sample report",
      },

      card2: {
        ribbon: "HPLC report",
        p1: "Purity: 98.7% (HPLC)",
        p2: "Retention time: 8.42 min",
        p3: "Impurities: < 1.0%",
        link: "View chromatogram",
      },

      card3: {
        title: "GMP-inspired workflow",
        text:
          "Internal documentation tracks every critical step: synthesis, purification, filtration, vialing and final release.",
        badges: ["QC checklist", "Temperature logs", "Signed release"],
      },
    },

    footer: {
      slogan: "Pharmaceutical-grade performance compounds & research solutions.",

      contacts: {
        title: "Contacts",
        telegram: "@umbrella_support",
      },

      social: {
        title: "Follow us",
      },

      bottom: "© Umbrella Shop. All rights reserved.",
    },
  },

  /* ================= RUSSIAN ================= */
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
      titleMain: "Протоколы ",
      titleTail:
        " лабораторного уровня для достижения наилучших результатов и восстановления",
      text:
        "Закрытые фармацевтические исследования и разработки, протоколы пептидов и гормонов, разработанные в соответствии со стандартами качества Umbrella Labs. Только проверенные соединения, строгий контроль партий и полная документация для каждого флакона.",
      ctaPrimary: "Смотреть продукты",
      ctaSecondary: "О компании",
      note:
        "Только для исследовательских целей. Не предназначено для использования в качестве лекарственного средства. Доступно исключительно квалифицированным специалистам.",
    },

    products: {
      tag: "Продукты",
      title: "Umbrella Pharmaceuticals – Исследовательские соединения",
      text:
        "Umbrella Pharmaceuticals специализируется на пептидных, гормональных и метаболических исследовательских соединениях.",

      sets: {
        set1: {
          label: "Флагманская серия",
          name: "Umbrella Core Stack",
          subtitle: "BPC-157 • NAD+ • HGH Fragment",
          description:
            "Базовый набор Umbrella Pharmaceuticals – проверенные схемы для восстановления, продуктивности и структурной поддержки после высоких нагрузок.",
          bullets: [
            "Оригинальное производство Umbrella Pharmaceuticals",
            "Каждая серия проходит тестирование на чистоту, стерильность и точность дозировки",
            "Твёрдая основа для долгосрочных циклов и восстановительных программ",
          ],
        },

        set2: {
          label: "Лаборатория пептидов и гормонов",
          name: "Advanced Peptide Series",
          subtitle: "Пептидные и гормональные формулы премиум-класса",
          description:
            "Расширенная пептидная и гормональная линейка для максимальной эффективности исследовательских протоколов. Всё необходимое для восстановления, роста и композиции тела.",
          bullets: [
            "Чистые активные вещества фарм-качества",
            "Стабильные и прогнозируемые результаты при структурных протоколах",
            "Разработано для атлетов и клиентов высокой производительности",
          ],
        },

        set3: {
          label: "Метаболический контроль",
          name: "Weight & Energy Protocols",
          subtitle: "Semaglutide, Terzepatide и метаболическая поддержка",
          description:
            "Таргетированные метаболические решения для контроля аппетита, массы тела и устойчивой энергии. Для тех, кто контролирует каждую переменную.",
          bullets: [
            "Современные соединения для контроля аппетита и веса",
            "Энергетическая поддержка без агрессивных стимуляторов",
            "Построено на реальных протоколах и лабораторной дисциплине",
          ],
        },
      },
    },

    quality: {
      kicker: "Качество и безопасность",
      title: "Лабораторное качество с красной линией контроля",
      subtitle:
        "Каждый флакон производится в строгих лабораторных условиях, каждая партия проходит расширенное тестирование перед выпуском.",

      badge1: {
        label: "99%+ чистоты",
        sub: "Подтверждено HPLC",
      },

      badge2: {
        label: "Многоступенчатый QC",
        sub: "Каждая партия проверяется",
      },

      card1: {
        title: "Стерильная среда",
        text:
          "Флаконы заполняются и герметизируются в контролируемой чистой зоне с асептическими процедурами.",
      },

      card2: {
        title: "99%+ чистоты",
        text:
          "Каждая партия проверяется с помощью HPLC и MS для подтверждения чистоты и идентичности.",
      },

      card3: {
        title: "Голографический красный контроль",
        text:
          "Каждый флакон связан с внутренним идентификатором партии для точного отслеживания этапов производства, тестирования и выпуска.",

        bullets: [
          "Уникальный ID партии",
          "Таймкоды этапов производства",
          "Архив лабораторных отчётов",
        ],
      },
    },

    certificates: {
      kicker: "Документация",
      title: "Сертификаты и лабораторные отчёты для каждой партии",
      subtitle:
        "Каждая партия подкреплена аналитическими отчётами и внутренней документацией, подтверждающей идентичность, чистоту и стабильность.",

      list: [
        "Certificate of Analysis (CoA) на каждую партию",
        "HPLC-хроматограммы подтверждения чистоты",
        "MS-профили подтверждения идентичности",
        "Внутренние QC-журналы и формы выпуска",
      ],

      card1: {
        ribbon: "Паспорт партии",
        p1: "Чистота: 99.2% (HPLC)",
        p2: "Идентичность: подтверждена MS",
        p3: "Остаточные растворители: < 0.5%",
        link: "Смотреть отчёт",
      },

      card2: {
        ribbon: "HPLC отчёт",
        p1: "Чистота: 98.7% (HPLC)",
        p2: "Время удержания: 8.42 мин",
        p3: "Примеси: < 1.0%",
        link: "Смотреть хроматограмму",
      },

      card3: {
        title: "Процесс по принципам GMP",
        text:
          "Внутренняя документация отслеживает каждый критический этап: синтез, очистку, фильтрацию, разлив и финальный выпуск.",
        badges: ["Чек-лист QC", "Журналы температур", "Подписанный релиз"],
      },
    },

    footer: {
      slogan: "Фармацевтические решения для продуктивности и исследований.",

      contacts: {
        title: "Контакты",
        telegram: "@umbrella_support",
      },

      social: {
        title: "Мы в соцсетях",
      },

      bottom: "© Umbrella Shop. Все права защищены.",
    },
  },

  /* ================= GERMAN ================= */
  de: {
    nav: {
      main: "Start",
      products: "Produkte",
      quality: "Qualität",
      certificates: "Zertifikate",
      about: "Über uns",
    },

    hero: {
      tag: "Umbrella Pharmaceuticals • Research Division",
      titleMain: "Laborqualität ",
      titleTail: " für Protokolle zu Performance und Regeneration",
      text:
        "Geschlossene pharmazeutische F&E, Peptid- und Hormonprotokolle nach Umbrella-Labs-Standards. Nur verifizierte Wirkstoffe, strenge Chargenkontrolle und vollständige Dokumentation für jedes Vial.",
      ctaPrimary: "Produkte ansehen",
      ctaSecondary: "Über das Unternehmen",
      note:
        "Nur für Forschungszwecke. Nicht als Arzneimittel vorgesehen. Ausschließlich für qualifizierte Fachleute verfügbar.",
    },

    products: {
      tag: "Produkte",
      title: "Umbrella Pharmaceuticals – Forschungspräparate",
      text:
        "Umbrella Pharmaceuticals ist auf fortgeschrittene Peptid-, Hormon- und metabolische Forschungspräparate spezialisiert.",

      sets: {
        set1: {
          label: "Flaggschiff-Linie",
          name: "Umbrella Core Stack",
          subtitle: "BPC-157 • NAD+ • HGH Fragment",
          description:
            "Der zentrale Umbrella-Stack, entwickelt für Regeneration und strukturellen Schutz nach hoher Belastung.",
          bullets: [
            "Originalproduktion von Umbrella Pharmaceuticals",
            "Jede Charge wird auf Reinheit getestet",
            "Starke Basis für langfristige Regeneration",
          ],
        },

        set2: {
          label: "Peptid-Labor",
          name: "Advanced Peptide Series",
          subtitle: "Premium Peptid- und Hormonformeln",
          description:
            "Erweiterte Peptid- und Hormonlinie für Athleten und High-Performance-Kunden.",
          bullets: [
            "Reine Wirkstoffe in Pharmaqualität",
            "Stabile, gut planbare Ergebnisse in Protokollen",
            "Entwickelt für professionelle Anwender",
          ],
        },

        set3: {
          label: "Metabolische Kontrolle",
          name: "Weight & Energy Protocols",
          subtitle: "Semaglutid • Terzepatid",
          description:
            "Gezielte metabolische Lösungen für Appetitkontrolle, Körpergewicht und nachhaltige Energie.",
          bullets: [
            "Moderne Wirkstoffe für Gewichts- und Appetitkontrolle",
            "Energieunterstützung ohne aggressive Stimulanzien",
            "Auf realen Protokollen und Labor-Disziplin aufgebaut",
          ],
        },
      },
    },

    quality: {
      kicker: "Qualität & Sicherheit",
      title: "Laborqualität mit Red-Line-Kontrolle",
      subtitle:
        "Jedes Vial wird unter strengen Laborbedingungen produziert, jede Charge durchläuft vor Freigabe erweiterte Tests.",

      badge1: {
        label: "99%+ Reinheit",
        sub: "HPLC-bestätigt",
      },

      badge2: {
        label: "Mehrstufiges QC",
        sub: "Jede Charge geprüft",
      },

      card1: {
        title: "Sterile Umgebung",
        text:
          "Vials werden in einem kontrollierten Reinraum unter aseptischen Bedingungen befüllt und versiegelt.",
      },

      card2: {
        title: "99%+ Reinheit",
        text:
          "Jede Charge wird per HPLC und MS geprüft, um Reinheit und Identität zu bestätigen.",
      },

      card3: {
        title: "Rote holografische Nachverfolgung",
        text:
          "Jedes Vial ist mit einer internen Chargen-ID verknüpft und kann durch Produktion, Testung und Freigabe exakt verfolgt werden.",

        bullets: [
          "Eindeutige Chargenkennung",
          "Zeitstempel für Produktionsstufen",
          "Archivierte Laborberichte pro Charge",
        ],
      },
    },

    certificates: {
      kicker: "Dokumentation",
      title: "Zertifikate & Laborberichte für jede Charge",
      subtitle:
        "Jeder Produktionslauf wird durch analytische Berichte und interne Dokumentation abgestützt, die Identität, Reinheit und Konsistenz bestätigen.",

      list: [
        "Certificate of Analysis (CoA) pro Charge",
        "HPLC-Chromatogramme zur Reinheitsbestätigung",
        "MS-Profile zur Identitätsprüfung",
        "Interne QC-Protokolle und Freigabeformulare",
      ],

      card1: {
        ribbon: "Chargen-CoA",
        p1: "Reinheit: 99.2% (HPLC)",
        p2: "Identität: MS bestätigt",
        p3: "Restlösungsmittel: < 0.5%",
        link: "Beispielbericht ansehen",
      },

      card2: {
        ribbon: "HPLC-Bericht",
        p1: "Reinheit: 98.7% (HPLC)",
        p2: "Retentionszeit: 8.42 min",
        p3: "Verunreinigungen: < 1.0%",
        link: "Chromatogramm ansehen",
      },

      card3: {
        title: "GMP-orientierter Workflow",
        text:
          "Interne Dokumentation verfolgt jeden kritischen Schritt: Synthese, Reinigung, Filtration, Abfüllung und finale Freigabe.",
        badges: ["QC-Checkliste", "Temperaturprotokolle", "Unterzeichnete Freigabe"],
      },
    },

    footer: {
      slogan:
        "Leistungspräparate und Forschungslösungen in pharmazeutischer Qualität.",

      contacts: {
        title: "Kontakt",
        telegram: "@umbrella_support",
      },

      social: {
        title: "Folge uns",
      },

      bottom: "© Umbrella Shop. Alle Rechte vorbehalten.",
    },
  },

  /* ================= SPANISH ================= */
  es: {
    nav: {
      main: "Inicio",
      products: "Productos",
      quality: "Calidad",
      certificates: "Certificados",
      about: "Sobre nosotros",
    },

    hero: {
      tag: "Umbrella Pharmaceuticals • Research Division",
      titleMain: "Protocolos de nivel ",
      titleTail: " laboratorio para rendimiento y recuperación de élite",
      text:
        "I+D farmacéutica cerrada con protocolos de péptidos y hormonas basados en los estándares de Umbrella Labs. Solo compuestos verificados, control estricto de lotes y documentación completa para cada vial.",
      ctaPrimary: "Ver productos",
      ctaSecondary: "Sobre la empresa",
      note:
        "Solo para uso de investigación. No destinado a uso como medicamento. Disponible exclusivamente para profesionales cualificados.",
    },

    products: {
      tag: "Productos",
      title: "Umbrella Pharmaceuticals – Compuestos de investigación",
      text:
        "Umbrella Pharmaceuticals se especializa en compuestos de investigación avanzados de péptidos, hormonas y metabolismo.",

      sets: {
        set1: {
          label: "Línea insignia",
          name: "Umbrella Core Stack",
          subtitle: "BPC-157 • NAD+ • Fragmento HGH",
          description:
            "El stack central de Umbrella, diseñado para la recuperación y la protección estructural tras cargas elevadas.",
          bullets: [
            "Producción original de Umbrella Pharmaceuticals",
            "Cada lote se analiza en pureza",
            "Base sólida para programas de recuperación a largo plazo",
          ],
        },

        set2: {
          label: "Laboratorio de péptidos",
          name: "Advanced Peptide Series",
          subtitle: "Fórmulas de péptidos y hormonas de élite",
          description:
            "Línea avanzada de péptidos para atletas y clientes orientados al rendimiento.",
          bullets: [
            "Ingredientes de grado farmacéutico",
            "Resultados previsibles en protocolos estructurados",
            "Diseñado para uso profesional",
          ],
        },

        set3: {
          label: "Control metabólico",
          name: "Weight & Energy Protocols",
          subtitle: "Semaglutida • Terzepatida",
          description:
            "Soluciones metabólicas dirigidas para el control del apetito, el peso y la energía sostenida.",
          bullets: [
            "Compuestos modernos para el control del peso",
            "Soporte energético sin estimulantes agresivos",
            "Construido a partir de protocolos reales",
          ],
        },
      },
    },

    quality: {
      kicker: "Calidad y seguridad",
      title: "Calidad de laboratorio con control de línea roja",
      subtitle:
        "Cada vial se produce en condiciones de laboratorio estrictas, y cada lote supera pruebas avanzadas antes de su liberación.",

      badge1: {
        label: "99%+ pureza",
        sub: "Verificado por HPLC",
      },

      badge2: {
        label: "QC multietapa",
        sub: "Cada lote revisado",
      },

      card1: {
        title: "Entorno estéril",
        text:
          "Los viales se llenan y sellan en una sala limpia controlada con procedimientos asépticos.",
      },

      card2: {
        title: "99%+ pureza",
        text:
          "Cada lote se analiza mediante HPLC y MS para confirmar la pureza máxima y la identidad del péptido.",
      },

      card3: {
        title: "Trazabilidad holográfica en línea roja",
        text:
          "Cada vial se vincula a un ID interno de lote, lo que permite un seguimiento preciso de producción, pruebas y liberación.",

        bullets: [
          "Identificador de lote único",
          "Fases de producción con marcas de tiempo",
          "Informes de laboratorio archivados por lote",
        ],
      },
    },

    certificates: {
      kicker: "Documentación",
      title: "Certificados e informes de laboratorio para cada lote",
      subtitle:
        "Cada producción está respaldada por informes analíticos y documentación interna que confirman identidad, pureza y consistencia.",

      list: [
        "Certificate of Analysis (CoA) por lote",
        "Cromatogramas HPLC que confirman la pureza",
        "Perfiles MS para verificación de identidad",
        "Registros internos de QC y formularios de liberación",
      ],

      card1: {
        ribbon: "CoA del lote",
        p1: "Pureza: 99.2% (HPLC)",
        p2: "Identidad: confirmada por MS",
        p3: "Contenido de disolventes: < 0.5%",
        link: "Ver informe de muestra",
      },

      card2: {
        ribbon: "Informe HPLC",
        p1: "Pureza: 98.7% (HPLC)",
        p2: "Tiempo de retención: 8.42 min",
        p3: "Impurezas: < 1.0%",
        link: "Ver cromatograma",
      },

      card3: {
        title: "Flujo de trabajo inspirado en GMP",
        text:
          "La documentación interna sigue cada paso crítico: síntesis, purificación, filtración, envasado y liberación final.",
        badges: [
          "Checklist de QC",
          "Registros de temperatura",
          "Liberación firmada",
        ],
      },
    },

    footer: {
      slogan:
        "Compuestos de rendimiento y soluciones de investigación de grado farmacéutico.",

      contacts: {
        title: "Contactos",
        telegram: "@umbrella_support",
      },

      social: {
        title: "Síguenos",
      },

      bottom: "© Umbrella Shop. Todos los derechos reservados.",
    },
  },

  /* ================= FRENCH ================= */
  fr: {
    nav: {
      main: "Accueil",
      products: "Produits",
      quality: "Qualité",
      certificates: "Certificats",
      about: "À propos",
    },

    hero: {
      tag: "Umbrella Pharmaceuticals • Division Recherche",
      titleMain: "Protocoles de niveau ",
      titleTail:
        " laboratoire pour une performance et une récupération d’élite",
      text:
        "R&D pharmaceutique fermée, protocoles de peptides et d’hormones construits selon les standards de qualité Umbrella Labs. Uniquement des composés vérifiés, un contrôle strict des lots et une documentation complète pour chaque flacon.",
      ctaPrimary: "Voir les produits",
      ctaSecondary: "À propos de l’entreprise",
      note:
        "Uniquement pour la recherche. Non destiné à un usage médical. Réservé aux professionnels qualifiés.",
    },

    products: {
      tag: "Produits",
      title: "Umbrella Pharmaceuticals – Composés de recherche",
      text:
        "Umbrella Pharmaceuticals est spécialisée dans les composés de recherche avancés : peptides, hormones et métabolisme.",

      sets: {
        set1: {
          label: "Ligne phare",
          name: "Umbrella Core Stack",
          subtitle: "BPC-157 • NAD+ • Fragment HGH",
          description:
            "Le stack central Umbrella, conçu pour la récupération et la protection structurelle après de fortes charges.",
          bullets: [
            "Production originale Umbrella Pharmaceuticals",
            "Chaque lot est testé en pureté",
            "Base solide pour des programmes de récupération à long terme",
          ],
        },

        set2: {
          label: "Laboratoire de peptides",
          name: "Advanced Peptide Series",
          subtitle: "Formules peptidiques et hormonales premium",
          description:
            "Ligne avancée de peptides et d’hormones pour les athlètes et les clients à haute performance.",
          bullets: [
            "Ingrédients de qualité pharmaceutique",
            "Résultats stables et prévisibles dans les protocoles",
            "Conçu pour les professionnels",
          ],
        },

        set3: {
          label: "Contrôle métabolique",
          name: "Weight & Energy Protocols",
          subtitle: "Sémaglutide • Terzépatide",
          description:
            "Solutions métaboliques ciblées pour le contrôle de l’appétit, du poids et de l’énergie durable.",
          bullets: [
            "Composés modernes pour le contrôle du poids",
            "Soutien énergétique sans stimulants agressifs",
            "Basé sur de vrais protocoles et une discipline de laboratoire",
          ],
        },
      },
    },

    quality: {
      kicker: "Qualité & sécurité",
      title: "Qualité de laboratoire avec contrôle ligne rouge",
      subtitle:
        "Chaque flacon est produit dans des conditions de laboratoire strictes, et chaque lot passe des tests avancés avant la libération.",

      badge1: {
        label: "99%+ pureté",
        sub: "Validé par HPLC",
      },

      badge2: {
        label: "QC multi-étapes",
        sub: "Chaque lot est contrôlé",
      },

      card1: {
        title: "Environnement stérile",
        text:
          "Les flacons sont remplis et scellés dans une salle blanche contrôlée avec des procédures aseptiques.",
      },

      card2: {
        title: "99%+ pureté",
        text:
          "Chaque lot est analysé par HPLC et MS pour confirmer la pureté maximale et l’identité du peptide.",
      },

      card3: {
        title: "Traçabilité holographique ligne rouge",
        text:
          "Chaque flacon est lié à un ID de lot interne, permettant une traçabilité précise de la production aux tests et à la libération.",

        bullets: [
          "Identifiant de lot unique",
          "Étapes de production horodatées",
          "Rapports de laboratoire archivés par lot",
        ],
      },
    },

    certificates: {
      kicker: "Documentation",
      title: "Certificats et rapports de laboratoire pour chaque lot",
      subtitle:
        "Chaque production est accompagnée de rapports analytiques et de documentation interne confirmant l’identité, la pureté et la constance.",

      list: [
        "Certificate of Analysis (CoA) par lot",
        "Chromatogrammes HPLC confirmant la pureté",
        "Profils MS pour la vérification de l’identité",
        "Journaux internes de QC et formulaires de libération",
      ],

      card1: {
        ribbon: "CoA de lot",
        p1: "Pureté : 99.2% (HPLC)",
        p2: "Identité : confirmée par MS",
        p3: "Solvants résiduels : < 0.5%",
        link: "Voir un exemple de rapport",
      },

      card2: {
        ribbon: "Rapport HPLC",
        p1: "Pureté : 98.7% (HPLC)",
        p2: "Temps de rétention : 8.42 min",
        p3: "Impuretés : < 1.0%",
        link: "Voir le chromatogramme",
      },

      card3: {
        title: "Workflow inspiré des GMP",
        text:
          "La documentation interne suit chaque étape critique : synthèse, purification, filtration, mise en flacon et libération finale.",
        badges: ["Checklist QC", "Journaux de température", "Libération signée"],
      },
    },

    footer: {
      slogan:
        "Composés de performance et solutions de recherche de qualité pharmaceutique.",

      contacts: {
        title: "Contacts",
        telegram: "@umbrella_support",
      },

      social: {
        title: "Nous suivre",
      },

      bottom: "© Umbrella Shop. Tous droits réservés.",
    },
  },
    /* ================= ITALIAN ================= */
  it: {
    nav: {
      main: "Home",
      products: "Prodotti",
      quality: "Qualità",
      certificates: "Certificati",
      about: "Chi siamo",
    },

    hero: {
      tag: "Umbrella Pharmaceuticals • Research Division",
      titleMain: "Protocolli di livello ",
      titleTail:
        " laboratorio per performance e recupero d’élite",
      text:
        "Ricerca e sviluppo farmaceutico chiuso, protocolli di peptidi e ormoni sviluppati secondo gli standard di qualità Umbrella Labs. Solo composti verificati, rigido controllo dei lotti e documentazione completa per ogni flaconcino.",
      ctaPrimary: "Vedi i prodotti",
      ctaSecondary: "Sul brand",
      note:
        "Solo per uso di ricerca. Non destinato a uso come farmaco. Disponibile esclusivamente a professionisti qualificati.",
    },

    products: {
      tag: "Prodotti",
      title: "Umbrella Pharmaceuticals – Composti per la ricerca",
      text:
        "Umbrella Pharmaceuticals è specializzata in composti avanzati per la ricerca: peptidi, ormoni e modulazione metabolica.",

      sets: {
        set1: {
          label: "Linea di punta",
          name: "Umbrella Core Stack",
          subtitle: "BPC-157 • NAD+ • Frammento HGH",
          description:
            "Lo stack centrale Umbrella, progettato per il recupero e la protezione strutturale dopo carichi elevati.",
          bullets: [
            "Produzione originale Umbrella Pharmaceuticals",
            "Ogni lotto testato per purezza e qualità",
            "Base solida per protocolli di recupero a lungo termine",
          ],
        },

        set2: {
          label: "Laboratorio peptidico",
          name: "Advanced Peptide Series",
          subtitle: "Formulazioni peptidiche e ormonali premium",
          description:
            "Linea avanzata di peptidi e ormoni per atleti e clienti ad alte prestazioni.",
          bullets: [
            "Ingredienti in grado farmaceutico",
            "Risultati stabili e prevedibili nei protocolli",
            "Sviluppato per professionisti",
          ],
        },

        set3: {
          label: "Controllo metabolico",
          name: "Weight & Energy Protocols",
          subtitle: "Semaglutide • Terzepatide",
          description:
            "Soluzioni mirate per il controllo dell’appetito, del peso corporeo e dell’energia sostenuta.",
          bullets: [
            "Composti moderni per il controllo del peso",
            "Supporto energetico senza stimolanti aggressivi",
            "Basato su protocolli reali e disciplina di laboratorio",
          ],
        },
      },
    },

    quality: {
      kicker: "Qualità e sicurezza",
      title: "Qualità di laboratorio con controllo \"linea rossa\"",
      subtitle:
        "Ogni flaconcino viene prodotto in condizioni di laboratorio rigorose e ogni lotto passa test avanzati prima del rilascio.",

      badge1: {
        label: "99%+ purezza",
        sub: "Verificata HPLC",
      },

      badge2: {
        label: "QC multistadio",
        sub: "Ogni lotto controllato",
      },

      card1: {
        title: "Ambiente sterile",
        text:
          "I flaconcini vengono riempiti e sigillati in una clean-room controllata con procedure asettiche.",
      },

      card2: {
        title: "99%+ purezza",
        text:
          "Ogni lotto è analizzato tramite HPLC e MS per confermare purezza massima e identità del peptide.",
      },

      card3: {
        title: "Tracciabilità olografica linea rossa",
        text:
          "Ogni flaconcino è collegato a un ID interno di lotto, permettendo una tracciabilità precisa tra produzione, test e rilascio.",

        bullets: [
          "Identificatore di lotto univoco",
          "Fasi di produzione con timestamp",
          "Report di laboratorio archiviati per lotto",
        ],
      },
    },

    certificates: {
      kicker: "Documentazione",
      title: "Certificati e report di laboratorio per ogni lotto",
      subtitle:
        "Ogni produzione è supportata da report analitici e documentazione interna che confermano identità, purezza e consistenza.",

      list: [
        "Certificate of Analysis (CoA) per lotto",
        "Cromatogrammi HPLC che confermano la purezza",
        "Profili MS per la verifica dell’identità",
        "Registri interni QC e moduli di rilascio",
      ],

      card1: {
        ribbon: "CoA di lotto",
        p1: "Purezza: 99.2% (HPLC)",
        p2: "Identità: confermata MS",
        p3: "Solventi residui: < 0.5%",
        link: "Vedi report di esempio",
      },

      card2: {
        ribbon: "Report HPLC",
        p1: "Purezza: 98.7% (HPLC)",
        p2: "Tempo di ritenzione: 8.42 min",
        p3: "Impurità: < 1.0%",
        link: "Vedi cromatogramma",
      },

      card3: {
        title: "Workflow ispirato alle GMP",
        text:
          "La documentazione interna traccia ogni fase critica: sintesi, purificazione, filtrazione, riempimento e rilascio finale.",
        badges: [
          "Checklist QC",
          "Log di temperatura",
          "Rilascio firmato",
        ],
      },
    },

    footer: {
      slogan:
        "Composti per la performance e soluzioni di ricerca in grado farmaceutico.",

      contacts: {
        title: "Contatti",
        telegram: "@umbrella_support",
      },

      social: {
        title: "Siamo sui social",
      },

      bottom: "© Umbrella Shop. Tutti i diritti riservati.",
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
