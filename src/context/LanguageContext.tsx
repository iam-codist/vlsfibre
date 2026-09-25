'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export interface Language {
  code: string;
  label: string;
  nativeName: string;
  countryCode: string;
  dir?: 'ltr' | 'rtl';
}

export const SUPPORTED_LANGUAGES: Language[] = [
  { code: 'en', label: 'English', nativeName: 'English', countryCode: 'gb', dir: 'ltr' },
  { code: 'hi', label: 'Hindi', nativeName: 'हिन्दी', countryCode: 'in', dir: 'ltr' },
  { code: 'ta', label: 'Tamil', nativeName: 'தமிழ்', countryCode: 'in-ta', dir: 'ltr' },
  { code: 'de', label: 'Deutsch', nativeName: 'Deutsch', countryCode: 'de', dir: 'ltr' },
  { code: 'fr', label: 'French', nativeName: 'Français', countryCode: 'fr', dir: 'ltr' },
  { code: 'es', label: 'Spanish', nativeName: 'Español', countryCode: 'es', dir: 'ltr' },
  { code: 'ar', label: 'Arabic', nativeName: 'العربية', countryCode: 'ae', dir: 'rtl' },
  { code: 'ja', label: 'Japanese', nativeName: '日本語', countryCode: 'jp', dir: 'ltr' },
];

// Researched native industrial B2B translations across 8 global languages
// Product names, chemical resin grades, and engineering standards are strictly preserved in English
export const TRANSLATIONS: Record<string, Record<string, string>> = {
  // Navigation
  'nav.home': {
    en: 'Home',
    hi: 'होम',
    ta: 'முகப்பு',
    de: 'Startseite',
    fr: 'Accueil',
    es: 'Inicio',
    ar: 'الرئيسية',
    ja: 'ホーム'
  },
  'nav.markets': {
    en: 'Markets',
    hi: 'उद्योग क्षेत्र',
    ta: 'தொழில்துறை பிரிவுகள்',
    de: 'Branchen & Märkte',
    fr: 'Secteurs Industriels',
    es: 'Sectores Industriales',
    ar: 'القطاعات الصناعية',
    ja: '産業分野・用途'
  },
  'nav.products': {
    en: 'Products',
    hi: 'उत्पाद एवं प्रणालियां',
    ta: 'தயாரிப்புகள் & அமைப்புகள்',
    de: 'Produkte & Systeme',
    fr: 'Équipements & Composites',
    es: 'Equipos & Composites',
    ar: 'المنتجات والأنظمة',
    ja: '製品・装置一覧'
  },
  'nav.projects': {
    en: 'Projects',
    hi: 'प्रमुख परियोजनाएं',
    ta: 'திட்டங்கள் & சாதனைகள்',
    de: 'Referenzen & Großprojekte',
    fr: 'Réalisations & Projets',
    es: 'Proyectos & Referencias',
    ar: 'المشاريع الكبرى',
    ja: '納入実績・プロジェクト'
  },
  'nav.about': {
    en: 'About VLS Fibre',
    hi: 'VLS Fibre के बारे में',
    ta: 'VLS Fibre பற்றி',
    de: 'Über VLS Fibre',
    fr: 'À propos de VLS Fibre',
    es: 'Acerca de VLS Fibre',
    ar: 'عن VLS Fibre',
    ja: 'VLS Fibre について'
  },
  'nav.contact': {
    en: 'CONTACT & RFQ',
    hi: 'संपर्क एवं कोटेशन',
    ta: 'தொடர்பு & விலைப்பட்டியல்',
    de: 'KONTAKT & ANFRAGE',
    fr: 'CONTACT & DEVIS',
    es: 'CONTACTO & COTIZACIÓN',
    ar: 'تواصل معنا وطلب تسعير',
    ja: 'お問い合わせ・技術相談'
  },
  'nav.view_all_products': {
    en: 'View complete product overview',
    hi: 'सभी इंजीनियरिंग उत्पादों का विवरण देखें',
    ta: 'அனைத்து தயாரிப்புகளின் முழு விவரங்களை காண்க',
    de: 'Komplette Produktübersicht ansehen',
    fr: 'Consulter l\'ensemble des équipements',
    es: 'Ver catálogo completo de productos',
    ar: 'عرض النظرة الشاملة للمنتجات الهندسية',
    ja: '製品総合カタログ・仕様一覧を見る'
  },

  // Hero Section
  'hero.title': {
    en: 'VLS Fibre — Custom FRP & Dual-Laminate Process Equipment',
    hi: 'VLS Fibre — कस्टम FRP एवं Dual-Laminate प्रोसेस इक्विपमेंट',
    ta: 'VLS Fibre — தொழில்துறை FRP & Dual-Laminate செயலாக்க உபகரணங்கள்',
    de: 'VLS Fibre — Industrieller Apparatebau & GFK-Verbundwerkstoffe',
    fr: 'VLS Fibre — Chaudronnerie Industrielle FRP & Dual-Laminate',
    es: 'VLS Fibre — Equipos de Proceso en FRP y Dual-Laminate',
    ar: 'VLS Fibre — تصنيع معدات العمليات الكيميائية من FRP و Dual-Laminate',
    ja: 'VLS Fibre — 工業用FRP & デュアルラミネート化学プロセス装置'
  },
  'hero.subtitle': {
    en: 'VLS Fibre is an international manufacturer of custom FRP and dual-laminate chemical process equipment. We engineer high-integrity storage tanks, reaction vessels, FGD ducts, and scrubbers built with virgin thermoplastic liners (PP / PVDF / PTFE) to withstand severe corrosive environments.',
    hi: 'VLS Fibre रासायनिक उद्योगों के लिए कस्टम-इंजीनियर्ड FRP एवं Dual-Laminate प्रोसेस इक्विपमेंट का अंतरराष्ट्रीय निर्माता है। हम अत्यधिक संक्षारक (Corrosive) रसायनों के सुरक्षित संचालन हेतु प्रीमियम थर्मोप्लास्टिक लाइनर्स (PP / PVDF / PTFE) से युक्त स्टोरेज टैंक, रिएक्शन वेसल्स, एफजीडी डक्ट्स एवं स्क्रबर सिस्टम्स का निर्माण करते हैं।',
    ta: 'VLS Fibre இரசாயன மற்றும் உற்பத்தி தொழிற்சாலைகளுக்கான அதிநவீன FRP மற்றும் Dual-Laminate செயலாக்க உபகரணங்களை சர்வதேச தரத்தில் தயாரிக்கும் முன்னணி நிறுவனமாகும். தீவிர அமில மற்றும் இரசாயன அரிப்பை தாங்கும் வகையில் தெர்மோபிளாஸ்டிக் லைனர்களுடன் (PP / PVDF / PTFE) கூடிய சேமிப்பு தொட்டிகள், ரியாக்டர்கள் மற்றும் ஸ்க்ரப்பர்களை நாங்கள் வடிவமைக்கிறோம்.',
    de: 'VLS Fibre ist ein internationaler Hersteller von maßgefertigten FRP- und Dual-Laminat-Prozessapparaten. Wir fertigen hochbeständige Lagertanks, Reaktionsbehälter, Rauchgaswäscher und Rohrleitungssysteme mit thermoplastischen Auskleidungen (PP / PVDF / PTFE) für anspruchsvollste korrosive Medien.',
    fr: 'VLS Fibre conçoit et fabrique sur mesure des équipements chimiques haute performance en FRP et composites bi-matières (Dual-Laminate). Nos cuves de stockage, réacteurs chimiques, gaines FGD et laveurs de gaz intègrent des liners thermoplastiques vierges (PP / PVDF / PTFE) résistant aux environnements corrosifs extrêmes.',
    es: 'VLS Fibre es un fabricante internacional de equipos a medida en FRP y materiales compuestos dual-laminate para plantas químicas. Diseñamos tanques de almacenamiento, reactores químicos, scrubbers de gases y ductos de lavado con liners termoplásticos vírgenes (PP / PVDF / PTFE) para máxima resistencia a la corrosión severa.',
    ar: 'تعد شركة VLS Fibre صرحاً دولياً رائداً في هندسة وتصنيع معدات العمليات الكيميائية المخصصة من مادة FRP واللدائن المزدوجة (Dual-Laminate). نصمم خزانات التخزين الكيميائي الضخمة، وأوعية التفاعل، وأبراج معالجة الغازات المبطنة بمواد (PP / PVDF / PTFE) فائقة المقاومة لأشد الأحماض والظروف التآكلية.',
    ja: 'VLS Fibreは、高度な耐腐食性を誇るカスタムFRPおよびDual-Laminate複合材料装置の国際的エンジニアリングメーカーです。過酷な酸・腐食環境に対応するため、バージン熱可塑性ライナー（PP / PVDF / PTFE）を備えた大型ケミカルタンク、反応槽、排ガススクラバー、耐食配管を精密製造しています。'
  },
  'hero.brochure': {
    en: 'DOWNLOAD TECHNICAL BROCHURE',
    hi: 'टेक्निकल ब्रोशर डाउनलोड करें',
    ta: 'தொழில்நுட்ப கையேடு பதிவிறக்கம்',
    de: 'TECHNISCHE BROSCHÜRE',
    fr: 'TÉLÉCHARGER LA BROCHURE',
    es: 'DESCARGAR CATÁLOGO TÉCNICO',
    ar: 'تحميل الكتيب الفني',
    ja: '技術カタログをダウンロード'
  },
  'hero.explore': {
    en: 'EXPLORE PRODUCTS',
    hi: 'उत्पाद श्रृंखला देखें',
    ta: 'தயாரிப்புகளை காண்க',
    de: 'PRODUKTE ENTDECKEN',
    fr: 'EXPLORER LES PRODUITS',
    es: 'EXPLORAR PRODUCTOS',
    ar: 'استكشاف المنتجات',
    ja: '製品ラインナップを見る'
  },
  'hero.metric_volume': {
    en: 'Max Single Tank Volume',
    hi: 'अधिकतम सिंगल टैंक क्षमता',
    ta: 'அதிகபட்ச ஒற்றை தொட்டி கொள்ளளவு',
    de: 'Max. Einzelbehälter-Volumen',
    fr: 'Capacité Unitaire Maximale',
    es: 'Capacidad Máxima Unitaria',
    ar: 'أقصى سعة للخزان الواحد',
    ja: '単一タンク最大製作容量'
  },
  'hero.metric_spark': {
    en: '100% Spark Tested Seams',
    hi: '100% स्पार्क टेस्टेड सीम',
    ta: '100% ஸ்பார்க் பரிசோதிக்கப்பட்ட வெல்டிங்',
    de: '100% Funkengeprüfte Schweißnähte',
    fr: 'Soudures 100% Contrôlées à l\'Étincelle',
    es: 'Ensayos de Chispa 100% en Soldaduras',
    ar: 'فحص عزل اللحام بالشرارة بنسبة 100%',
    ja: '全周溶接部100%放電スパーク試験'
  },
  'hero.metric_temp': {
    en: 'Max Continuous Temp',
    hi: 'अधिकतम निरंतर तापमान',
    ta: 'தொடர்ச்சியான அதிகபட்ச வெப்பநிலை',
    de: 'Max. Dauerbetriebstemperatur',
    fr: 'Température Continue Maximale',
    es: 'Temperatura Continua Máxima',
    ar: 'أقصى درجة حرارة تشغيل مستمر',
    ja: '連続最高使用可能温度'
  },
  'hero.export_badge': {
    en: 'Dahej & Chennai Deep-Water Ports Export',
    hi: 'Dahej एवं Chennai बंदरगाहों से वैश्विक निर्यात',
    ta: 'Dahej மற்றும் Chennai துறைமுகங்கள் மூலம் ஏற்றுமதி',
    de: 'Export über Tiefseehäfen Dahej & Chennai',
    fr: 'Export Maritime via Ports de Dahej & Chennai',
    es: 'Exportación Marítima Vía Dahej & Chennai',
    ar: 'تصدير بحري مباشر عبر موانئ Dahej و Chennai',
    ja: 'ダヘジ港・チェンナイ深水貿易港より世界へ直輸出'
  },

  // Discover World Section
  'discover.tag': {
    en: 'Satisfy your curiosity and',
    hi: 'अपनी तकनीकी आवश्यकताओं के लिए',
    ta: 'உங்கள் தொழிற்சாலை தேவைகளுக்கு ஏற்ப',
    de: 'Präzision im Apparatebau',
    fr: 'Excellence en ingénierie composite',
    es: 'Ingeniería en materiales compuestos',
    ar: 'ريادة هندسة المواد المركبة المقاومة للتآكل',
    ja: '最高峰の耐食コンポジットエンジニアリング'
  },
  'discover.title': {
    en: 'Discover the World of VLS Fibre',
    hi: 'VLS Fibre की तकनीकी दुनिया',
    ta: 'VLS Fibre உலகத்தை கண்டறியுங்கள்',
    de: 'Die Welt von VLS Fibre entdecken',
    fr: 'Découvrir l\'Univers de VLS Fibre',
    es: 'Descubra el Mundo de VLS Fibre',
    ar: 'اكتشف عالم VLS Fibre',
    ja: 'VLS Fibre の技術領域'
  },
  'discover.desc': {
    en: 'VLS Fibre serves various chemical and manufacturing industries with its wide range of custom FRP products such as storage tanks, reaction vessels, FGD duct and fume scrubbers.',
    hi: 'VLS Fibre अंतरराष्ट्रीय रासायनिक एवं मैन्युफैक्चरिंग उद्योगों को स्टोरेज टैंक्स, रिएक्शन वेसल्स, एफजीडी डक्ट्स एवं फ्यूम स्क्रबर्स जैसे उच्च गुणवत्ता वाले FRP कंपोजिट उत्पाद प्रदान करता है।',
    ta: 'VLS Fibre பல்வேறு இரசாயன ஆலைகளுக்கு உயர்தர FRP சேமிப்பு தொட்டிகள், ரியாக்சன் வெசல்கள், கழிவுவாயு ஸ்க்ரப்பர்கள் போன்ற பிரத்யேக தயாரிப்புகளை வழங்குகிறது.',
    de: 'VLS Fibre beliefert die internationale Chemie- und Prozessindustrie mit Hochleistungs-FRP-Lösungen: von Chemikalientanks und Rührwerkskesseln über Wäscherkolonnen bis hin zu korrosionsfesten Rohrleitungssystemen.',
    fr: 'VLS Fibre accompagne l\'industrie chimique mondiale avec une gamme complète d\'équipements anticorrosion : cuves de stockage FRP, réacteurs agités, laveurs de gaz et colonnes de neutralisation.',
    es: 'VLS Fibre suministra a la industria petroquímica y de procesos con una amplia gama de equipos en FRP: tanques de proceso, reactores con agitación, torres de absorción y ductos para gases corrosivos.',
    ar: 'تقدم VLS Fibre خدماتها لكبرى مجمعات الصناعات البتروكيماوية والعمليات الكيميائية عبر منظومة متكاملة من خزانات التخزين، وأوعية التفاعل الكيميائي، وأبراج غسيل الانبعاثات.',
    ja: 'VLS Fibreは、世界中の化学プラントや製造ラインに向けて、高耐食ケミカルストレージタンク、撹拌反応槽、FGDダクト、排ガススクラバーなど多岐にわたるFRPプロセス機器を提供しています。'
  },
  'discover.explore_cad': {
    en: 'Explore system specifications',
    hi: 'सिस्टम स्पेसिफिकेशन्स एवं CAD विवरण देखें',
    ta: 'அமைப்பின் தொழில்நுட்ப விவரங்களை காண்க',
    de: 'Systemspezifikationen & CAD prüfen',
    fr: 'Explorer les spécifications techniques',
    es: 'Explorar especificaciones de sistema',
    ar: 'استعراض المواصفات الهندسية ومخططات CAD',
    ja: 'システム仕様・CAD詳細図面を確認する'
  },

  // On-Site Fabrication Section
  'onsite.tag': {
    en: 'Field Fabrication of FRP Tanks & Equipment',
    hi: 'FRP टैंक्स एवं इक्विपमेंट का ऑन-साइट निर्माण',
    ta: 'FRP தொட்டிகள் மற்றும் உபகரணங்களின் கள தயாரிப்பு',
    de: 'Vor-Ort-Fertigung von FRP Großbehältern',
    fr: 'Chantiers de Chaudronnerie Composite in Situ',
    es: 'Fabricación e Instalación en Planta de Tanques FRP',
    ar: 'التصنيع الميداني لخزانات ومعدات FRP في موقع العميل',
    ja: '大型FRP機器・タンクの現地巻き取り施工'
  },
  'onsite.title': {
    en: 'On-Site Tank Fabrication',
    hi: 'On-Site Tank Fabrication',
    ta: 'On-Site Tank Fabrication',
    de: 'On-Site Tank Fabrication',
    fr: 'On-Site Tank Fabrication',
    es: 'On-Site Tank Fabrication',
    ar: 'On-Site Tank Fabrication (التصنيع الميداني)',
    ja: 'On-Site Tank Fabrication（現地大型タンク施工）'
  },
  'onsite.desc1': {
    en: 'VLS Fibre on-site production of large FRP tanks and equipment, exceeding transport limits, offers unparalleled advantages. Eliminating size constraints, on-site fabrication ensures bespoke solutions for diverse industrial needs.',
    hi: 'सड़क परिवहन सीमाओं से अधिक बड़े आकार के FRP टैंक्स एवं प्रोसेस उपकरणों के लिए VLS Fibre का ऑन-साइट निर्माण अद्वितीय लाभ प्रदान करता है। व्यास और ऊंचाई की सीमाओं को समाप्त करते हुए, हम सीधे आपकी प्लांट साइट पर विशिष्ट आवश्यकताओं के अनुरूप निर्माण करते हैं।',
    ta: 'போக்குவரத்து வரம்புகளை விட பெரிய அளவிலான FRP தொட்டிகள் மற்றும் உபகரணங்களை நேரடியாக வாடிக்கையாளரின் தொழிற்சாலை தளத்திலேயே தயாரிப்பதில் VLS Fibre இணையற்ற அனுபவம் கொண்டுள்ளது. அளவு கட்டுப்பாடுகள் இன்றி உங்கள் தேவைகளுக்கு ஏற்ப பிரத்யேகமாக கட்டமைக்கப்படுகிறது.',
    de: 'Die On-Site-Fertigung von großvolumigen FRP-Tanks und Apparaten durch VLS Fibre überwindet straßenseitige Transportgrenzen. Durch den Wegfall von Durchmesser- und Höhenbeschränkungen realisieren wir passgenaue Großbehälter direkt am Anlagenstandort.',
    fr: 'La fabrication in situ de cuves et équipements FRP grand volume par VLS Fibre s\'affranchit totalement des contraintes de transport routier. En éliminant les limites de gabarit, notre équipe réalise des ouvrages sur mesure directement intégrés à votre site industriel.',
    es: 'La fabricación in situ de grandes tanques y equipos FRP de VLS Fibre supera todas las limitaciones del transporte por carretera. Al eliminar restricciones de tamaño y gálibo, entregamos soluciones a medida de gran escala directamente en su planta industrial.',
    ar: 'يوفر التصنيع الميداني في موقع العميل لخزانات ومعدات FRP العملاقة من VLS Fibre مزايا استثنائية تتجاوز قيود النقل البري. ومن خلال إزالة قيود الأبعاد والأقطار، نضمن تنفيذ حلول هندسية مصممة خصيصاً لتناسب احتياجات المصانع الكبرى.',
    ja: '道路輸送制限を超える超大型FRPタンクおよび装置において、VLS Fibreの現地施工（On-site Fabrication）は卓越したメリットを提供します。輸送限界による寸法制約を排除し、プラント固有の要件に合致した特注大型タンクを現地で直接製作します。'
  },
  'onsite.desc2': {
    en: 'Customization becomes a breeze, optimizing dimensions to match specific plant layouts. Transporting colossal structures becomes obsolete, slashing logistical complexities and costs. Additionally, on-site assembly streamlines installation, reducing plant turnaround downtime.',
    hi: 'प्लांट लेआउट के अनुसार सटीक डायमेंशन कस्टमाइजेशन संभव होता है, जिससे भारी लॉजिस्टिक लागत पूरी तरह समाप्त हो जाती है। साइट पर त्वरित असेंबली के कारण प्लांट शटडाउन का समय भी काफी कम हो जाता है।',
    ta: 'ஆலை அமைப்பிற்கு ஏற்றவாறு துல்லியமான பரிமாணங்களை உருவாக்குவதுடன், பிரம்மாண்ட உபகரணங்களை கொண்டு செல்வதற்கான அதிகப்படியான போக்குவரத்து செலவுகள் மற்றும் தாமதங்களை முழுமையாக தவிர்க்கிறது.',
    de: 'Die Behältergeometrie wird optimal an bestehende Hallenlayouts angepasst. Schwertransporte entfallen vollständig, was logistische Risiken und Kosten minimiert. Die Vor-Ort-Montage verkürzt zudem Revisions- und Stillstandszeiten erheblich.',
    fr: 'L\'optimisation des dimensions s\'adapte parfaitement à l\'implantation de vos unités de production. L\'absence de transport exceptionnel réduit drastiquement les coûts logistiques et simplifie la mise en service sans perturber vos arrêts techniques.',
    es: 'Las dimensiones se optimizan al espacio exacto de su proyecto. Se eliminan los costosos transportes especiales y se minimizan los tiempos de inactividad de parada de planta gracias a nuestro montaje y soldadura automatizada en terreno.',
    ar: 'يتيح التصنيع في الموقع استغلالاً مثالياً للمساحة التشغيلية لمصنعكم، مما يلغي تماماً تكاليف النقل المعقدة ويقلل فترات توقف العمليات الإنتاجية أثناء الصيانة والتركيب.',
    ja: '既設プラントの配置に最適な寸法で設計可能となり、特殊トレーラーによる長距離大型輸送コストを完全削減。現場での迅速な組み立てにより、定修やプラント停止期間の大幅短縮を実現します。'
  },
  'onsite.read_more': {
    en: 'READ MORE',
    hi: 'विस्तृत जानकारी',
    ta: 'மேலும் அறிய',
    de: 'MEHR ERFAHREN',
    fr: 'EN SAVOIR PLUS',
    es: 'LEER MÁS',
    ar: 'قراءة المزيد',
    ja: '詳細を確認する'
  },
  'onsite.rfq_btn': {
    en: 'Site Feasibility RFQ',
    hi: 'साइट व्यवहार्यता एवं RFQ',
    ta: 'கள சாத்தியக்கூறு RFQ',
    de: 'Machbarkeitsanfrage Vor Ort',
    fr: 'Étude de Faisabilité & Devis',
    es: 'Viabilidad en Sitio y Cotización',
    ar: 'طلب دراسة الجدوى الميدانية والتسعير',
    ja: '現地施工フィージビリティ・見積依頼'
  },
  'onsite.feat_diameter': {
    en: 'Zero Diameter Limitations',
    hi: 'शून्य व्यास सीमा (No Diameter Limit)',
    ta: 'விட்டம் வரம்புகள் இல்லை (No Limit)',
    de: 'Keine Durchmesserbegrenzung',
    fr: 'Sans Limite de Diamètre',
    es: 'Sin Restricción de Diámetro',
    ar: 'أقطار تصنيع غير محدودة في الموقع',
    ja: 'タンク直径・寸法の制約ゼロ'
  },
  'onsite.feat_fusion': {
    en: 'PPRC & HDPE Fusion Crews',
    hi: 'PPRC एवं HDPE फ्यूजन विशेषज्ञ दल',
    ta: 'PPRC & HDPE எலக்ட்ரோ ஃப்யூஷன் குழு',
    de: 'PPRC & HDPE Schweißfachkräfte',
    fr: 'Équipes Soudage PPRC & HDPE',
    es: 'Cuadrillas de Fusión PPRC & HDPE',
    ar: 'فرق لحام متخصصة في PPRC & HDPE',
    ja: 'PPRC & HDPE 電融溶着専門チーム'
  },

  // Global EPC Section
  'epc.tag': {
    en: 'INTERNATIONAL EPC CONTRACTS & GLOBAL LOGISTICS',
    hi: 'अंतरराष्ट्रीय EPC अनुबंध एवं ग्लोबल लॉजिस्टिक्स',
    ta: 'சர்வதேச EPC ஒப்பந்தங்கள் & உலகளாவிய தளவாடங்கள்',
    de: 'INTERNATIONALE EPC-VERTRÄGE & LOGISTIK',
    fr: 'CONTRATS EPC INTERNATIONAUX & LOGISTIQUE',
    es: 'CONTRATOS EPC INTERNACIONALES Y LOGÍSTICA',
    ar: 'عقود EPC الدولية والخدمات اللوجستية العالمية',
    ja: '国際EPCコントラクト & グローバル物流'
  },
  'epc.title': {
    en: 'Engineered for Multinational Chemical Conglomerates',
    hi: 'वैश्विक रासायनिक समूहों के लिए इंजीनियर्ड समाधान',
    ta: 'பன்னாட்டு இரசாயன ஆலைகளுக்கான பொறியியல் தீர்வுகள்',
    de: 'Konstruiert für globale Chemiekonzerne',
    fr: 'Conçu pour les Grands Groupes Chimiques Mondiaux',
    es: 'Ingeniería para Conglomerados Químicos Multinacionales',
    ar: 'هندسة مصممة لكبرى تكتلات الصناعات الكيميائية العالمية',
    ja: '世界基準の化学プラント・コングロマリット向け設計'
  },
  'epc.desc': {
    en: 'VLS Fibre delivers turnkey composite equipment to global standards. Our strategic deep-water port proximity in Gujarat and Tamil Nadu enables seamless multimodal breakbulk shipping to the Middle East, Southeast Asia, Europe, and the Americas.',
    hi: 'VLS Fibre अंतरराष्ट्रीय मानकों के अनुसार टर्नकी कंपोजिट उपकरण तैयार करता है। गहरे पानी के बंदरगाहों के निकट हमारी रणनीतिक उपस्थिति मध्य पूर्व, यूरोप और दक्षिण पूर्व एशिया में सुगम समुद्री परिवहन सुनिश्चित करती है।',
    ta: 'VLS Fibre உலகளாவிய தரக்கட்டுப்பாடுகளுக்கு ஏற்ப டர்ன்கீ உபகரணங்களை தயாரித்து வழங்குகிறது. ஆழ்கடல் துறைமுகங்களின் அருகாமை மூலம் மத்திய கிழக்கு, ஐரோப்பா மற்றும் தென்கிழக்கு ஆசிய நாடுகளுக்கு தடையற்ற கப்பல் ஏற்றுமதியை செயல்படுத்துகிறோம்.',
    de: 'VLS Fibre liefert schlüsselfertige Composite-Komponenten nach weltweiten Industriestandards. Durch die direkte Nähe zu Tiefseehäfen gewährleisten wir reibungslose Seefrachttransporte nach Europa, in den Nahen Osten und nach Asien.',
    fr: 'VLS Fibre livre des équipements composites clés en main certifiés selon les standards internationaux. La proximité immédiate de ports en eau profonde garantit des expéditions maritimes fiables vers l\'Europe, le Moyen-Orient et l\'Amérique.',
    es: 'VLS Fibre suministra equipos compuestos llave en mano bajo estándares internacionales. Nuestra cercanía estratégica a puertos de aguas profundas permite embarques marítimos eficientes a Europa, Medio Oriente, América y el Sudeste Asiático.',
    ar: 'تسلم VLS Fibre معدات مركبة بنظام تسليم المفتاح متوافقة مع أرقى المعايير الدولية. يتيح موقعنا الاستراتيجي بالقرب من الموانئ البحرية العميقة شحناً بحرياً مباشراً وموثوقاً إلى الشرق الأوسط وأوروبا والأمريكتين.',
    ja: 'VLS Fibreは、世界各国の工業規格に準拠したターンキー複合材料機器を納入しています。インドの深水貿易港に近接した立地を活かし、中東、東南アジア、欧州、米州へスムーズな海上輸出を行っています。'
  },
  'epc.standards_tag': {
    en: 'Certified Manufacturing Standards',
    hi: 'प्रमाणित अंतरराष्ट्रीय विनिर्माण मानक',
    ta: 'சான்றளிக்கப்பட்ட சர்வதேச தரநிலைகள்',
    de: 'Zertifizierte Fertigungsnormen',
    fr: 'Normes de Fabrication Certifiées',
    es: 'Normas de Fabricación Certificadas',
    ar: 'معايير التصنيع المعتمدة دولياً',
    ja: '国際認証製造規格'
  },
  'epc.view_certs': {
    en: 'Request Compliance Dossier & QA Pack',
    hi: 'कंप्लायंस डॉसियर एवं QA पैक प्राप्त करें',
    ta: 'தரக்கட்டுப்பாடு ஆவணங்களை கோருக',
    de: 'Qualitätsdossier & Prüfprotokolle anfordern',
    fr: 'Demander le Dossier Qualité & Certificats',
    es: 'Solicitar Dossier de Calidad y Certificaciones',
    ar: 'طلب ملف الجودة وشهادات المطابقة الفنية',
    ja: '品質保証ドキュメント・QA試験成績書を請求'
  },

  // Product Card & UI Actions
  'products.view_cad': {
    en: 'View CAD Spec',
    hi: 'CAD स्पेसिफिकेशन देखें',
    ta: 'CAD வரைபடத்தை காண்க',
    de: 'CAD-Datenblatt ansehen',
    fr: 'Voir Spécification CAD',
    es: 'Ver Especificación CAD',
    ar: 'عرض مواصفات CAD',
    ja: 'CAD仕様図面を見る'
  },
  'products.enquire': {
    en: 'Enquire',
    hi: 'पूछताछ करें',
    ta: 'விசாரிக்க',
    de: 'Anfragen',
    fr: 'Demander Devis',
    es: 'Cotizar',
    ar: 'طلب تسعير',
    ja: '見積依頼'
  },
  'products.spark_tested': {
    en: 'Spark Tested',
    hi: 'स्पार्क टेस्टेड',
    ta: 'ஸ்பார்க் சோதனை',
    de: 'Funkengeprüft',
    fr: 'Testé à l\'Étincelle',
    es: 'Prueba de Chispa',
    ar: 'مفحوص بالشرارة',
    ja: 'スパーク試験済'
  },

  // Markets Section
  'markets.tag': {
    en: 'Sectors & Applications',
    hi: 'औद्योगिक क्षेत्र एवं अनुप्रयोग',
    ta: 'தொழில்துறை பிரிவுகள் & பயன்பாடுகள்',
    de: 'Branchen & Anwendungsbereiche',
    fr: 'Secteurs & Applications',
    es: 'Sectores & Aplicaciones',
    ar: 'القطاعات والتطبيقات الصناعية',
    ja: '適用産業分野・プラント領域'
  },
  'markets.title': {
    en: 'Markets Served Worldwide',
    hi: 'विश्वभर में सेवा क्षेत्र',
    ta: 'உலகளவில் எங்கள் சேவைகள்',
    de: 'Weltweit belieferte Industrien',
    fr: 'Marchés Desservis dans le Monde',
    es: 'Mercados Atendidos en Todo el Mundo',
    ar: 'الأسواق والقطاعات المخدومة عالمياً',
    ja: 'グローバル導入実績・産業分野'
  },
  'markets.view_all': {
    en: 'View all industry applications',
    hi: 'सभी उद्योग अनुप्रयोग देखें',
    ta: 'அனைத்து பயன்பாடுகளையும் காண்க',
    de: 'Alle Industrieanwendungen ansehen',
    fr: 'Voir toutes les applications industrielles',
    es: 'Ver todas las aplicaciones industriales',
    ar: 'عرض جميع التطبيقات الصناعية',
    ja: 'すべての産業用途・導入事例を見る'
  },

  // Trusted Clients Section
  'clients.tag': {
    en: 'TRUSTED BY INDUSTRY CONGLOMERATES & EPC LEADERS',
    hi: 'प्रमुख औद्योगिक समूह एवं EPC कंपनियों का विश्वास',
    ta: 'முன்னணி தொழில்துறை மற்றும் EPC நிறுவனங்களின் நம்பிக்கை',
    de: 'BEWÄHRT BEI FÜHRENDEN INDUSTRIEKONZERNEN & EPC-PARTNERN',
    fr: 'CONFIANCE DES GRANDS GROUPES INDUSTRIELS & LEADERS EPC',
    es: 'CONFIANZA DE CONGLOMERADOS INDUSTRIALES Y LÍDERES EPC',
    ar: 'موثوق من كبرى التكتلات الصناعية وشركات الهندسة الدولية (EPC)',
    ja: '国内外の化学大手・総合エンジニアリング企業の信頼実績'
  },
  'clients.title': {
    en: 'Trusted by 120+ Industrial Giants Across Severe Corrosive Operations',
    hi: 'अत्यधिक संक्षारक परिचालनों में 120+ औद्योगिक समूहों का भरोसा',
    ta: '120+ முன்னணி தொழிற்சாலைகளின் நம்பகமான தேர்வு',
    de: 'Über 120 Industrieanlagen weltweit vertrauen auf VLS Fibre',
    fr: 'Plus de 120 Complexes Industriels Équipés dans le Monde',
    es: 'Más de 120 Plantas Industriales Confían en VLS Fibre',
    ar: 'أكثر من 120 مجمعاً صناعياً يعتمدون على معداتنا في البيئات شديدة التآكل',
    ja: '過酷な腐食性プロセス現場で120社以上のプラントに採用'
  },
  'clients.subtitle': {
    en: 'From chlor-alkali mega-plants to high-potency API synthesis suites, multinational operators mandate VLS Fibre dual-laminate vessels and scrubbers for zero unplanned downtime.',
    hi: 'क्लोर-अल्कली संयंत्रों से लेकर सक्रिय फार्मास्यूटिकल इकाइयों तक, शून्य ब्रेकडाउन हेतु प्रमुख बहुराष्ट्रीय कंपनियाँ VLS Fibre के ड्यूल-लैमिनेट वेसल्स चुनती हैं।',
    ta: 'குளோரின்-கார ஆலைகள் முதல் மருந்து தயாரிப்பு அலகுகள் வரை, தடையில்லா உற்பத்திக்கு VLS Fibre உபகரணங்கள் முன்னுரிமை பெறுகின்றன.',
    de: 'Von Chlor-Alkali-Großanlagen bis zu pharmazeutischen Synthesen setzen Betreiber auf VLS Fibre Dual-Laminat-Behälter für maximale Betriebssicherheit.',
    fr: 'Des méga-complexes chlore-alcali aux unités pharmaceutiques de pointe, les industriels choisissent nos cuves pour éliminer tout arrêt imprévu.',
    es: 'Desde plantas de cloro-álcali hasta síntesis farmacéutica de alta potencia, operadores multinacionales eligen nuestros equipos para cero paradas imprevistas.',
    ar: 'من مجمعات الكلور والقلويات العملاقة إلى مفاعلات الأدوية الحساسة، تعتمد الشركات الدولية على أوعيتنا لضمان استمرارية التشغيل التام بدون أعطال.',
    ja: 'クロル・アルカリプラントから高薬理活性API医薬中間体合成設備まで、計画外停止ゼロを実現する高信頼性デュアルラミネート機器として選ばれています。'
  },

  // Testimonials Section
  'testimonials.tag': {
    en: 'VERIFIED PLANT INSTALLATION CASE STUDIES',
    hi: 'प्रमाणित प्लांट इंस्टालेशन एवं केस स्टडीज',
    ta: 'சரிபார்க்கப்பட்ட ஆலை நிறுவல் அனுபவங்கள்',
    de: 'VERIFIZIERTE ANLAGENREFERENZEN & ERFAHRUNGSBERICHTE',
    fr: 'ÉTUDES DE CAS & RETOURS D\'EXPÉRIENCE SUR SITE',
    es: 'CASOS DE ÉXITO VERIFICADOS EN PLANTA',
    ar: 'دراسات حالة وتقييمات معتمدة من مهندسي المواقع الصناعية',
    ja: '導入プラント現場の検証済み技術評価・ケーススタディ'
  },
  'testimonials.title': {
    en: 'What Chief Process Engineers & Plant Directors Say About VLS Fibre',
    hi: 'चीफ प्रोसेस इंजीनियर्स एवं प्लांट डायरेक्टर्स का प्रामाणिक अनुभव',
    ta: 'தலைமை செயல்முறை பொறியாளர்கள் மற்றும் ஆலை இயக்குநர்களின் கருத்து',
    de: 'Was leitende Verfahrensingenieure & Betriebsleiter über VLS Fibre sagen',
    fr: 'Ce Que Disent les Directeurs d\'Usine et Chefs de Procédés',
    es: 'La Opinión de Directores de Planta e Ingenieros de Procesos',
    ar: 'ماذا يقول كبار مهندسي العمليات ومديرو المصانع الكبرى عن VLS Fibre',
    ja: '化学プラント技術責任者・操業ディレクターによる評価'
  },
  'testimonials.subtitle': {
    en: 'Read how our dual-laminate reactors, on-site fabricated acid storage tanks, and packed bed scrubbers pass rigorous third-party inspections and deliver decade-long operational integrity.',
    hi: 'पढ़ें कि कैसे हमारे ड्यूल-लैमिनेट रिएक्टर्स, ऑन-साइट टैंक्स एवं स्क्रबर्स सख्त थर्ड-पार्टी इंस्पेक्शन पास कर दीर्घकालिक सुरक्षा प्रदान करते हैं।',
    ta: 'எங்கள் டூயல்-லேமினேட் ரியாக்டர்கள் மற்றும் ஸ்க்ரப்பர்கள் எவ்வாறு கடுமையான ஆய்வுகளை கடந்து நம்பகத்தன்மையுடன் செயல்படுகின்றன என்பதை அறியுங்கள்.',
    de: 'Erfahren Sie, wie unsere Reaktoren, Großbehälter und Wäscher strengste Prüfungen durch TÜV & BV bestehen und jahrzehntelange Standzeiten garantieren.',
    fr: 'Découvrez comment nos réacteurs et cuves in situ passent avec succès les inspections TÜV/Lloyds et garantissent des décennies de résistance.',
    es: 'Conozca cómo nuestros reactores dual-laminate y scrubbers superan rigurosas inspecciones de terceros garantizando máxima vida útil.',
    ar: 'اكتشف كيف تنجح مفاعلاتنا وخزاناتنا وأبراج الغسيل في اجتياز فحوصات الطرف الثالث (TÜV / BV) محققة أداءً متواصلاً لسنوات طويلة دون تآكل.',
    ja: '当社のデュアルラミネート反応槽、大型現地施工タンク、スクラバー塔が第三者検査（TÜV/BV）に合格し、長年の安定操業を達成している実績をご覧ください。'
  },

  // CTA Section
  'cta.tag': {
    en: 'Turnkey Engineering Consultation',
    hi: 'टर्नकी इंजीनियरिंग परामर्श',
    ta: 'டர்ன்கீ பொறியியல் ஆலோசனை',
    de: 'Schlüsselfertige Ingenieurberatung',
    fr: 'Ingénierie & Consultation Clé en Main',
    es: 'Consultoría e Ingeniería Llave en Mano',
    ar: 'استشارات هندسية بنظام تسليم المفتاح',
    ja: 'ターンキープラントエンジニアリング技術相談'
  },
  'cta.title': {
    en: 'REQUEST A TECHNICAL BROCHURE & QUOTE',
    hi: 'तकनीकी ब्रोशर एवं प्रोजेक्ट कोटेशन प्राप्त करें',
    ta: 'தொழில்நுட்ப கையேடு & விலைப்பட்டியல் கோருக',
    de: 'TECHNISCHE BROSCHÜRE & ANGEBOT ANFORDERN',
    fr: 'DEMANDER LA BROCHURE TECHNIQUE & UN DEVIS',
    es: 'SOLICITAR CATÁLOGO TÉCNICO Y COTIZACIÓN',
    ar: 'طلب الكتيب الفني وعرض السعر للمشروع',
    ja: '技術資料・プラント見積書の作成依頼'
  },
  'cta.desc': {
    en: 'Connect with our senior chemical process engineers to receive formal GA drawings, ASME RTP-1 wall thickness calculations, and immersion test sample kits.',
    hi: 'फॉर्मल GA ड्रॉइंग्स, ASME RTP-1 थिकनेस कैलकुलेशन एवं टेस्ट सैंपल्स प्राप्त करने हेतु हमारे सीनियर केमिकल प्रोसेस इंजीनियर्स से सीधे संपर्क करें।',
    ta: 'முறையான GA வரைபடங்கள், ASME RTP-1 தடிமன் கணக்கீடுகள் மற்றும் மாதிரி கிட்களைப் பெற எங்கள் மூத்த செயல்முறை பொறியாளர்களைத் தொடர்பு கொள்ளவும்.',
    de: 'Kontaktieren Sie unsere leitenden Verfahrensingenieure für maßstäbliche GA-Zeichnungen, ASME RTP-1 Wanddickenberechnungen und Materialprüfmuster.',
    fr: 'Consultez nos ingénieurs en génie chimique pour obtenir des plans d\'ensemble (GA), des notes de calcul d\'épaisseur ASME RTP-1 et des échantillons d\'immersion.',
    es: 'Contacte a nuestros ingenieros de procesos químicos para recibir planos generales (GA), memorias de cálculo ASME RTP-1 y kits de muestras de inmersión.',
    ar: 'تواصل مع كبار مهندسي العمليات الكيميائية لدينا للحصول على المخططات الهندسية الرسمية، وحسابات سماكة الجدران وفق ASME RTP-1، وعينات الاختبار المعملي.',
    ja: '正式な全体配置図（GA図面）、ASME RTP-1 肉厚強度計算書、耐食性試験サンプルのご要望は、当社の主席プロセスエンジニアまで直接ご相談ください。'
  },
  'cta.button': {
    en: 'REQUEST CONSULTATION',
    hi: 'तकनीकी परामर्श मांगें',
    ta: 'ஆலோசனை பெறுக',
    de: 'BERATUNG ANFORDERN',
    fr: 'DEMANDER UNE ÉTUDE',
    es: 'SOLICITAR CONSULTORÍA',
    ar: 'طلب استشارة فنية',
    ja: '技術相談を申し込む'
  },
  'cta.whatsapp': {
    en: 'Chat on WhatsApp',
    hi: 'व्हाट्सएप पर बात करें',
    ta: 'வாட்ஸ்அப்பில் பேசுக',
    de: 'Über WhatsApp anfragen',
    fr: 'Échanger sur WhatsApp',
    es: 'Chatear por WhatsApp',
    ar: 'محادثة عبر واتساب',
    ja: 'WhatsAppで直接相談'
  },

  // Bot & Lead Desks
  'bot.header': {
    en: 'VLS Sales Desk',
    hi: 'VLS टेक्निकल सेल्स डेस्क',
    ta: 'VLS தொழில்நுட்ப விற்பனை பிரிவு',
    de: 'VLS Technischer Vertrieb',
    fr: 'Bureau Commercial VLS Fibre',
    es: 'Departamento Técnico Comercial VLS',
    ar: 'المكتب الفني والتجاري VLS Fibre',
    ja: 'VLS 技術営業デスク'
  },
  'bot.teaser': {
    en: 'Need instant pricing, ASME RTP-1 calculations, or CAD drawings for chemical tanks, scrubbers, or reactors?',
    hi: 'क्या आपको Chemical Tanks, Scrubbers या Reaction Vessels के लिए त्वरित बजट अनुमान, ASME RTP-1 थिकनेस कैलकुलेशन या CAD ड्रॉइंग्स चाहिए?',
    ta: 'Chemical Tanks, Scrubbers அல்லது Reaction Vessels-களுக்கான உடனடி விலைப்பட்டியல், ASME RTP-1 கணக்கீடுகள் அல்லது CAD வரைபடங்கள் தேவையா?',
    de: 'Benötigen Sie unverzügliche Richtpreise, ASME RTP-1 Auslegungen oder CAD-Zeichnungen für Chemical Tanks, Scrubbers oder Reaction Vessels?',
    fr: 'Besoin d\'un chiffrage budgétaire immédiat, d\'une note de calcul ASME RTP-1 ou de plans CAD pour cuves, réacteurs ou colonnes de lavage ?',
    es: '¿Necesita cotización inmediata, cálculos de espesor bajo ASME RTP-1 o planos CAD para tanques, reactores o scrubbers?',
    ar: 'هل تحتاج إلى تسعير تقديري فوري، أو حسابات سماكة ASME RTP-1، أو مخططات CAD لخزانات ومفاعلات وأبراج FRP؟',
    ja: '化学タンク、スクラバー、反応容器に関する概算価格、ASME RTP-1 板厚強度計算、CAD図面のご相談を承ります。'
  },
  'bot.quote_btn': {
    en: 'Receive Quote on WhatsApp',
    hi: 'व्हाट्सएप पर कोटेशन एवं ड्रॉइंग प्राप्त करें',
    ta: 'வாட்ஸ்அப்பில் விலை விவரம் பெறுக',
    de: 'Angebot über WhatsApp anfordern',
    fr: 'Recevoir le chiffrage sur WhatsApp',
    es: 'Recibir cotización por WhatsApp',
    ar: 'استلام عرض السعر عبر واتساب',
    ja: 'WhatsAppで仕様・見積書を受け取る'
  },
  'bot.enter_phone': {
    en: 'Enter WhatsApp or Phone',
    hi: 'व्हाट्सएप या फोन नंबर दर्ज करें',
    ta: 'வாட்ஸ்அப் அல்லது தொலைபேசி எண்',
    de: 'WhatsApp- oder Telefonnummer eingeben',
    fr: 'Saisir numéro WhatsApp ou téléphone',
    es: 'Ingrese número de WhatsApp o teléfono',
    ar: 'أدخل رقم الهاتف أو الواتساب',
    ja: '電話番号またはWhatsApp番号を入力'
  },
  'bot.direct_quote': {
    en: 'Send RFQ to Senior Engineer',
    hi: 'सीनियर इंजीनियर को RFQ भेजें',
    ta: 'பொறியாளருக்கு கோரிக்கையை அனுப்பவும்',
    de: 'Anfrage an Fachingenieur senden',
    fr: 'Transmettre la demande à l\'ingénieur',
    es: 'Enviar RFQ al Ingeniero Jefe',
    ar: 'إرسال طلب التسعير إلى كبير المهندسين',
    ja: '専任エンジニアへ見積依頼を送信'
  },
  'bot.placeholder': {
    en: 'Ask about chemical compatibility, resin grades, or tank volume...',
    hi: 'केमिकल कम्पैटिबिलिटी, रेजिन ग्रेड्स या वॉल्यूम के बारे में पूछें...',
    ta: 'இரசாயன பொருத்தம், ரெசின் வகைகள் அல்லது கொள்ளளவு பற்றி கேட்க...',
    de: 'Fragen Sie nach chemischer Beständigkeit, Harzsorten oder Abmessungen...',
    fr: 'Interrogez sur la compatibilité chimique, résines ou volumes...',
    es: 'Consulte sobre resistencia química, tipos de resina o capacidades...',
    ar: 'اسأل عن التوافق الكيميائي، أو درجات الراتنج، أو سعات الخزانات...',
    ja: '耐薬品適合性、樹脂グレード、タンク仕様について質問する...'
  }
};

interface LanguageContextType {
  currentLang: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  languages: Language[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [currentLang, setCurrentLangState] = useState<Language>(SUPPORTED_LANGUAGES[0]);

  useEffect(() => {
    // Restore saved language from localStorage
    const savedCode = localStorage.getItem('vls_language');
    if (savedCode) {
      const match = SUPPORTED_LANGUAGES.find((l) => l.code === savedCode);
      if (match) {
        setCurrentLangState(match);
      }
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setCurrentLangState(lang);
    localStorage.setItem('vls_language', lang.code);

    // Update document direction
    if (typeof document !== 'undefined') {
      document.documentElement.dir = lang.dir || 'ltr';
      document.documentElement.lang = lang.code;

      // Set Google Translate cookie for full-page translation
      const domain = window.location.hostname;
      document.cookie = `googtrans=/en/${lang.code}; path=/; domain=${domain}`;
      document.cookie = `googtrans=/en/${lang.code}; path=/;`;

      // Trigger Google Translate if loaded
      const gtCombo = document.querySelector('.goog-te-combo') as HTMLSelectElement | null;
      if (gtCombo) {
        gtCombo.value = lang.code;
        gtCombo.dispatchEvent(new Event('change'));
      }
    }
  };

  const t = (key: string): string => {
    const entry = TRANSLATIONS[key];
    if (!entry) return key;
    return entry[currentLang.code] || entry['en'] || key;
  };

  return (
    <LanguageContext.Provider
      value={{
        currentLang,
        setLanguage,
        t,
        languages: SUPPORTED_LANGUAGES,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
