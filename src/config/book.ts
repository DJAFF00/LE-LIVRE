/**
 * Configuration centralisée du livre et de la boutique Chariow.
 * Modifiez ces valeurs pour personnaliser l'ensemble du site.
 */

// Asset paths
import bookCoverImg from '../assets/images/book_cover_luxury_1791535600299.jpg';
import editorialReadingImg from '../assets/images/editorial_book_reading_1791535618619.jpg';
import authorPortraitImg from '../assets/images/editorial_author_portrait_1791535634264.jpg';
import luxuryStudyImg from '../assets/images/editorial_luxury_study_1791535650600.jpg';
import bookCraftDetailImg from '../assets/images/book_craft_detail_1791539589554.jpg';
import villaSunsetImg from '../assets/images/hero_luxury_villa_sunset_1791560453618.jpg';

export interface BookTheme {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  keyTakeaway: string;
  readTime: string;
  iconName: 'Compass' | 'Flame' | 'Scale' | 'TrendingUp';
}

export interface KeyPillar {
  number: string;
  title: string;
  description: string;
  quote: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Achat & Paiement' | 'Format & Contenu' | 'Expédition & Suivi';
}

export interface TransformationItem {
  before: string;
  after: string;
}

export const BOOK_CONFIG = {
  // === INTÉGRATION CHARIOW ===
  // Remplacez cette URL par le lien direct de votre fiche produit sur Chariow
  chariowUrl: "https://chariow.com/checkout/le-livre-edition-officielle",
  chariowShopName: "Boutique Officielle Chariow",
  isChariowUrlConfigured: false,

  // === IDENTITÉ DU LIVRE ===
  title: "LE LIVRE",
  titleSuffix: "L'Essence du Dépassement",
  heroHeadline: "Un état d'esprit qui change tout.",
  heroPunchline: "Bâtir. Diriger. Durer.",
  heroSubtitle: "Parce que tu es capable de plus. Le manifeste stratégique pour ceux qui refusent la dispersion et veulent convertir leur potentiel en puissance concrète.",
  categoryLabel: "Édition Prestige · Développement Personnel & Business",
  
  // === CARACTÉRISTIQUES COMMERCIALES ===
  commercial: {
    price: "29,00",
    currency: "€",
    originalPrice: "39,00",
    format: "Édition Reliée Prestige (Couverture Rigide)",
    pages: "320 pages",
    language: "Français",
    paperQuality: "Papier bouffant ivoire 100g & signet textile",
    isbn: "En cours d'attribution",
    availability: "Premier tirage limité disponible",
    shippingZone: "Expédition internationale via Chariow",
    toConfigureNotice: "Données synchronisées avec la boutique Chariow. Le tarif et les options finales sont confirmés au passage en caisse.",
  },

  // === SPÉCIFICATIONS FABRICATION & OBJET (CRAFT) ===
  craftSpecs: [
    { title: "Couverture Rigide Toilée", desc: "Toile de lin noire intense au grain texturé haute résistance." },
    { title: "Marquage à Chaud Or Mat", desc: "Dorure mécanique de précision pour une finition bijouterie durable." },
    { title: "Papier Bouffant Crème 100g", desc: "Opacité supérieure sans reflet, confort visuel optimal pour la lecture prolongée." },
    { title: "Reliure Cousue au Fil", desc: "Ouverture à plat 180° garantie sans décollement au fil des années." },
  ],

  // === TRANSFORMATION COMPARISON ===
  transformations: [
    {
      before: "Dispersion cognitive et accumulation passive d'informations sans passage à l'action.",
      after: "Clarté chirurgicale sur les 3 leviers décisifs qui génèrent 80% des résultats tangibles.",
    },
    {
      before: "Dépendance à des pics de motivation éphémères suivis de phases de stagnation.",
      after: "Mise en place d'un protocole opérationnel inébranlable qui fonctionne par défaut.",
    },
    {
      before: "Hésitation prolongée face au risque et décisions prises sous le coup de l'émotion.",
      after: "Grille d'évaluation rationnelle pour trancher rapidement et exploiter l'asymétrie favorable.",
    },
    {
      before: "Épuisement dans l'exécution sans bâtir d'actifs pérennes ou d'autorité durable.",
      after: "Construction d'un écosystème où chaque effort renforce votre souveraineté et votre liberté.",
    },
  ] as TransformationItem[],

  // === EXTRAIT DE LECTURE (CHAPITRE 1 EXCLUSIF) ===
  excerpt: {
    chapterNumber: "Chapitre 01",
    chapterTitle: "Le Silence Avant L'Impact",
    pages: [
      {
        pageNumber: 1,
        content: `La plupart des hommes et des femmes passent leur existence à réagir au vacarme du monde plutôt qu'à orchestrer leur propre trajectoire.

Nous vivons dans une économie de la distraction où chaque seconde de votre attention est convoitée, monétisée et fragmentée. Dès l'instant où vous cédez le contrôle de votre focus, vous renoncez implicitement à diriger votre destin.

Ceux qui bâtissent des œuvres durables ne disposent pas de journées de 36 heures. Ils ne possèdent pas non plus un génie surnaturel. Leur seul secret réside dans une discipline d'éviction radicale : éliminer impitoyablement tout ce qui ne sert pas leur intention maîtresse.`,
      },
      {
        pageNumber: 2,
        content: `L'ambition sans méthode n'est qu'une hallucination confortable.

Vous pouvez accumuler les discours inspirants et remplir vos carnets de citations flamboyantes : tant que vos heures de veille ne sont pas protégées par un sanctuaire d'exigence, rien ne changera dans la texture de votre réalité.

Le passage à un niveau supérieur exige d'abandonner le besoin d'approbation immédiate. Il exige d'embrasser la friction silencieuse du travail sans public, là où se forgent les compétences que personne ne pourra vous contester. C'est le prix de l'inestimable.`,
      },
      {
        pageNumber: 3,
        content: `Regardez autour de vous : la complaisance est la norme, la médiocrité est tolérée, la lenteur est excusée.

Dès que vous décidez d'adopter des standards intransigeants, vous quittez automatiquement la mêlée. Vous n'êtes plus en compétition avec la masse ; vous êtes seul face à votre propre potentiel.

Ce livre a été écrit pour être votre manuel d'alignement. Ouvrez-le non pas pour vous rassurer, mais pour vous armer.`,
      },
    ],
  },

  // === IMAGES ÉDITORIALES ===
  images: {
    cover: bookCoverImg,
    reading: editorialReadingImg,
    author: authorPortraitImg,
    studyPanoramic: luxuryStudyImg,
    craftDetail: bookCraftDetailImg,
    villa: villaSunsetImg,
  },

  // === PRÉSENTATION DU LIVRE & ENJEUX ===
  presentation: {
    title: "Une méthode rigoureuse pour structurer votre ambition",
    lead: "Ce livre n'est pas un recueil de platitudes motivationnelles. C'est une grille de lecture pragmatique, née de l'épreuve du terrain et de la confrontation entre vision et exécution.",
    body: "À travers des analyses concrètes, des principes de décision et une philosophie d'action sans compromis, cet ouvrage déconstruit les illusions du succès spontané pour poser les fondations d'une croissance personnelle et entrepreneuriale durable.",
    pillars: [
      {
        number: "01",
        title: "La Maîtrise de l'Attention",
        description: "Reprendre le contrôle de votre énergie cognitive face au bruit permanent pour sanctuariser ce qui déplace l'aiguille.",
        quote: "L'attention est le seul capital non reconstituable.",
      },
      {
        number: "02",
        title: "L'Architecture de la Décision",
        description: "Adopter des modèles mentaux éprouvés pour trancher vite, limiter le risque asymétrique et agir avec certitude.",
        quote: "Une bonne décision exécutée vite vaut mille plans parfaits jamais lancés.",
      },
      {
        number: "03",
        title: "La Résilience Opérationnelle",
        description: "Transformer l'inconfort en levier d'accélération et bâtir des systèmes personnels capables de résister à la friction.",
        quote: "La rigueur n'est pas une contrainte, c'est un rempart.",
      },
      {
        number: "04",
        title: "L'Effet de Levier Business",
        description: "Articuler valeur, distribution et exécution pour bâtir des projets qui dépassent le simple échange de temps contre argent.",
        quote: "Ce qui est scalable libère votre vie ; ce qui est fragile l'enchaîne.",
      },
    ] as KeyPillar[],
  },

  // === LES THÈMES ABORDÉS ===
  themes: [
    {
      id: "theme-1",
      number: "I",
      title: "Clarté Stratégique",
      subtitle: "Éliminer le bruit & fixer le cap",
      description: "Apprenez à formuler des objectifs limpides et à distinguer les signaux réels des distractions flatteuses. La clarté est le premier multiplicateur de force.",
      keyTakeaway: "Moins de dispersion, une trajectoire nette et mesurable.",
      readTime: "45 min de lecture",
      iconName: "Compass",
    },
    {
      id: "theme-2",
      number: "II",
      title: "Discipline & Gravité",
      subtitle: "Construire des rituels inébranlables",
      description: "La motivation est une étincelle éphémère. Seule une structure rigoureuse permet de traverser les périodes creuses et d'accumuler un avantage décisif.",
      keyTakeaway: "Un système quotidien qui produit même sans enthousiasme.",
      readTime: "50 min de lecture",
      iconName: "Flame",
    },
    {
      id: "theme-3",
      number: "III",
      title: "Économie de l'Action",
      subtitle: "Le courage de l'exécution immédiate",
      description: "Remplacer la sur-réflexion paralysante par des boucles de rétroaction rapides. Agir avec pragmatisme pour tester la réalité plutôt que spéculer.",
      keyTakeaway: "Raccourcir le délai entre l'idée et le premier résultat.",
      readTime: "60 min de lecture",
      iconName: "TrendingUp",
    },
    {
      id: "theme-4",
      number: "IV",
      title: "Souveraineté & Éthique",
      subtitle: "Bâtir un succès pérenne",
      description: "Le développement personnel et la réussite commerciale ne valent rien s'ils sacrifient votre liberté intérieure et vos principes fondamentaux.",
      keyTakeaway: "Cohérence totale entre ambitions et intégrité.",
      readTime: "40 min de lecture",
      iconName: "Scale",
    },
  ] as BookTheme[],

  // === L'AUTEUR ===
  author: {
    title: "L'Auteur",
    name: "L'Auteur",
    role: "Entrepreneur & Praticien de la Stratégie",
    tagline: "Une voix forgée dans la réalité du terrain",
    bioLead: "Ce livre est le fruit de plusieurs années d'expérimentation concrète, d'échecs assumés et de victoires construites pas à pas.",
    bioText: "Animé par la volonté de transmettre des principes intemporels débarrassés du vernis superflu, l'auteur partage ici les fondations qui lui ont permis de structurer ses entreprises et d'atteindre une clarté d'action sans compromis. L'approche privilégie toujours l'honnêteté intellectuelle et l'impact mesurable sur les slogans faciles.",
    visionQuote: "Le succès n'est pas un coup d'éclat imprévisible ; c'est le sous-produit inévitable d'une discipline silencieuse et d'un alignement parfait avec ses priorités fondamentales.",
    note: "Espace réservé pour la biographie définitive de l'auteur. Les informations officielles seront intégrées lors de la finalisation éditoriale.",
  },

  // === FAQ ===
  faq: [
    {
      id: "faq-1",
      category: "Achat & Paiement",
      question: "Comment se déroule la commande sur Chariow ?",
      answer: "En cliquant sur l'un des boutons d'achat de ce site, vous êtes redirigé directement vers la page sécurisée du produit sur la boutique officielle Chariow. Vous y validez votre commande, choisissez votre mode de paiement sécurisé (carte bancaire, etc.) et recevez instantanément votre confirmation par e-mail.",
    },
    {
      id: "faq-2",
      category: "Format & Contenu",
      question: "Quels formats sont proposés ?",
      answer: "Le livre est proposé en édition reliée prestige avec papier d'art et signet textile. Selon les options activées sur la boutique Chariow, des versions numériques (ePub / PDF) ou audio peuvent également être proposées en complément ou à l'unité.",
    },
    {
      id: "faq-3",
      category: "Expédition & Suivi",
      question: "Où livrez-vous et comment suivre mon colis ?",
      answer: "Les livraisons sont opérées selon les conditions de distribution configurées sur Chariow. Une fois votre achat validé, un numéro de suivi logistique vous est automatiquement envoyé par e-mail afin de suivre l'acheminement de votre colis jusqu'à votre adresse.",
    },
    {
      id: "faq-4",
      category: "Format & Contenu",
      question: "Ce livre est-il accessible si je débute dans l'entrepreneuriat ?",
      answer: "Absolument. Si les concepts abordés s'adressent avec pertinence aux fondateurs et décideurs, la pédagogie repose sur des principes fondamentaux accessibles à toute personne déterminée à clarifier sa vision, renforcer sa discipline et passer à l'action.",
    },
    {
      id: "faq-5",
      category: "Achat & Paiement",
      question: "Mes coordonnées bancaires sont-elles protégées ?",
      answer: "Oui. Toutes les transactions sont opérées par l'infrastructure sécurisée et certifiée de Chariow avec chiffrement SSL 256 bits conforme aux standards bancaires les plus stricts. Aucune information de paiement ne transite par ce site vitrine.",
    },
    {
      id: "faq-6",
      category: "Expédition & Suivi",
      question: "Comment obtenir de l'aide concernant une commande passée ?",
      answer: "Pour toute question relative à votre achat, votre paiement ou la logistique, le service client Chariow ainsi que les coordonnées de l'auteur indiquées dans votre e-mail de confirmation sont à votre entière disposition.",
    },
  ] as FAQItem[],

  socials: [
    { name: "LinkedIn", url: "#", placeholder: true },
    { name: "Instagram", url: "#", placeholder: true },
    { name: "Twitter / X", url: "#", placeholder: true },
    { name: "YouTube", url: "#", placeholder: true },
  ],
};
