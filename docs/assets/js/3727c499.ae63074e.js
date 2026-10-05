"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[35691],{

/***/ 10579:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/kubeglimpse-00f59812f10d48fbfc8c2440f45c76ff.png");

/***/ }),

/***/ 16539:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/app-cont-market-trends-ffea25fe11236967393b28f444193843.png");

/***/ }),

/***/ 27418:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/product2-6835c07f0aa0ed278163f107b8b72464.png");

/***/ }),

/***/ 28453:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useMDXComponents),
/* harmony export */   x: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/**
 * @import {MDXComponents} from 'mdx/types.js'
 * @import {Component, ReactElement, ReactNode} from 'react'
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {ReactElement}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


/***/ }),

/***/ 28643:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/product3-e964ad80155cfce66a2e1510d34459e6.png");

/***/ }),

/***/ 29940:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/k8s_graph4-bbdcd1bf6e518ad478e34dc616ab3056.png");

/***/ }),

/***/ 32398:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/edge_properties-333b4be32aea2248e6115459923ab9d6.png");

/***/ }),

/***/ 34691:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/arch-viz-635ab0dee9a27887c9cfdb5041b2bd0e.png");

/***/ }),

/***/ 35875:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/nodes_arango-7ab62de08c441b6885a4b74db1aa9b2d.png");

/***/ }),

/***/ 48348:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ORM_approach-c6e48563498166a404fe38b0bc0a0453.png");

/***/ }),

/***/ 53055:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/node_properties-b07fe422d5ac59dd636e49be0d93b764.png");

/***/ }),

/***/ 56690:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/navrh2-79b1cca255755b03cf5c3511c5a7040a.png");

/***/ }),

/***/ 56953:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2024_2025_projects_prj_016_presentation_slides_md_372_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2024-2025-projects-prj-016-presentation-slides-md-372.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2024_2025_projects_prj_016_presentation_slides_md_372_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2024-2025/projects/PRJ016/presentation/slides","title":"slides","description":"{{DESCRIPTION}}","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2024-2025/projects/PRJ016/presentation/slides.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2024-2025/projects/PRJ016/presentation","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2024-2025/projects/PRJ016/presentation/slides","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2024-2025/projects/PRJ016/presentation/slides","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2026-10-05T12:53:05.996642+00:00","fm_version_comment":"","guid":"e10b3c1f-ff6f-439d-b3ba-2091a6a9509a","dao":"class_sthdf_dashboard","title":"slides","description":"{{DESCRIPTION}}","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"","type":"","priority":"","tags":[],"locale":"sk","created":"2026-10-05 14:53","modified":"2026-10-05 14:53","status":"backlog","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"PRJ016","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2024-2025/projects/PRJ016/"},"next":{"title":"notes","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2024-2025/projects/PRJ016/sdlc/business/notes"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2024-2025/projects/PRJ016/presentation/slides.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2026-10-05T12:53:05.996642+00:00',
	fm_version_comment: '',
	guid: 'e10b3c1f-ff6f-439d-b3ba-2091a6a9509a',
	dao: 'class_sthdf_dashboard',
	title: 'slides',
	description: '{{DESCRIPTION}}',
	author: 'Roman Kazicka',
	authors: [
		'Roman Kazicka'
	],
	category: '',
	type: '',
	priority: '',
	tags: [],
	locale: 'sk',
	created: '2026-10-05 14:53',
	modified: '2026-10-05 14:53',
	status: 'backlog',
	privacy: 'public',
	rights_holder_content: 'Roman Kazicka',
	rights_holder_system: 'CAA / KNIFE / LetItGrow',
	license: 'CC-BY-NC-SA-4.0',
	disclaimer: 'Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.',
	copyright: '© 2025 Roman Kazicka',
	origin_repo: '',
	origin_repo_url: '',
	origin_commit: '',
	origin_branch: '',
	origin_system: 'CAA',
	origin_author: 'Roman Kazicka',
	origin_imported_from: '',
	origin_import_date: '',
	fm_reserved1: '',
	fm_reserved2: ''
};
const contentTitle = 'PRJ016 — Presentation';

const assets = {

};



const toc = [{
  "value": "Kubeglimpse",
  "id": "kubeglimpse",
  "level": 2
}, {
  "value": "1. Popis projektu",
  "id": "1-popis-projektu",
  "level": 2
}, {
  "value": "<strong>Ako KubeGlimpse funguje?</strong>",
  "id": "ako-kubeglimpse-funguje",
  "level": 3
}, {
  "value": "<strong>2. Motivácia</strong>",
  "id": "2-motivácia",
  "level": 2
}, {
  "value": "<strong>3. Prípady použitia</strong>",
  "id": "3-prípady-použitia",
  "level": 2
}, {
  "value": "<strong>1. Porozumenie štruktúre Kubernetesu</strong>",
  "id": "1-porozumenie-štruktúre-kubernetesu",
  "level": 3
}, {
  "value": "<strong>2. Analýza závislostí medzi podmi a službami</strong>",
  "id": "2-analýza-závislostí-medzi-podmi-a-službami",
  "level": 3
}, {
  "value": "<strong>3. Vytváranie vizualizácií pre tímové stretnutia</strong>",
  "id": "3-vytváranie-vizualizácií-pre-tímové-stretnutia",
  "level": 3
}, {
  "value": "<strong>4. Porovnanie štruktúry v čase</strong>",
  "id": "4-porovnanie-štruktúry-v-čase",
  "level": 3
}, {
  "value": "<strong>5. Lepšia orientácia pre nových členov tímu</strong>",
  "id": "5-lepšia-orientácia-pre-nových-členov-tímu",
  "level": 3
}, {
  "value": "<strong>4. Biznis pohľad KubeGlimpse</strong>",
  "id": "4-biznis-pohľad-kubeglimpse",
  "level": 2
}, {
  "value": "<strong>Použitie KubeGlimpse v praxi:</strong>",
  "id": "použitie-kubeglimpse-v-praxi",
  "level": 3
}, {
  "value": "<strong>Trhové príležitosti a finančný potenciál</strong>",
  "id": "trhové-príležitosti-a-finančný-potenciál",
  "level": 2
}, {
  "value": "<strong>Firmy investujú do Kubernetes technológií kvôli:</strong>",
  "id": "firmy-investujú-do-kubernetes-technológií-kvôli",
  "level": 3
}, {
  "value": "<strong>Rast Kubernetes trhu podľa regiónov (v miliardách USD)</strong>",
  "id": "rast-kubernetes-trhu-podľa-regiónov-v-miliardách-usd",
  "level": 3
}, {
  "value": "<strong>5. Návrh dizajnu</strong>",
  "id": "5-návrh-dizajnu",
  "level": 2
}, {
  "value": "<strong>6. Technologická vrstva</strong>",
  "id": "6-technologická-vrstva",
  "level": 2
}, {
  "value": "<strong>6.1 Teoretický pohľad na použité technológie</strong>",
  "id": "61-teoretický-pohľad-na-použité-technológie",
  "level": 3
}, {
  "value": "<strong>6.2 Prakticky pohľad na použité technológie</strong>",
  "id": "62-prakticky-pohľad-na-použité-technológie",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/",
        children: "🏠 Domov"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../",
        children: "⬅️ Nahor"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "prj016--presentation",
        children: "PRJ016 — Presentation"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "kubeglimpse",
      children: "Kubeglimpse"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        alt: "KubeGlimpse logo",
        src: (__webpack_require__(83899)/* ["default"] */ .A) + "",
        width: "653",
        height: "430"
      }), "\n", (0,jsx_runtime.jsx)(_components.img, {
        alt: "KubeGlimpse wallpaper",
        src: (__webpack_require__(10579)/* ["default"] */ .A) + "",
        width: "1024",
        height: "768"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-popis-projektu",
      children: "1. Popis projektu"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["KubeGlimpse je 3D vizualizačná aplikácia, určená na interaktívne prehliadanie a analýzu Kubernetes klastrov. Aplikácia využíva technológie ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Django"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Quasar"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Three.js"
      }), " a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ArangoDB"
      }), ", čím poskytuje dynamickú a prehľadnú reprezentáciu komplexných Kubernetes infraštruktúr. Cieľom projektu je umožniť používateľom efektívnu správu, diagnostiku a analýzu klastrov prostredníctvom vizuálne prívetivého a modulárneho rozhrania."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ako-kubeglimpse-funguje",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Ako KubeGlimpse funguje?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Získavanie dát z Kubernetes API"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Aplikácia napísaná v ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pythone"
      }), " pravidelne pristupuje k Kubernetes API a získava potrebné informácie o klastroch, vrátane nodov, podov, služieb, namespaces, ConfigMap a Secret objektov."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Ukladanie dát do ArangoDB"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Zozbierané dáta sú ukladané do ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ArangoDB"
      }), ", multi-model databázy kombinujúcej dokumentový a grafový prístup. Tento prístup umožňuje efektívne modelovanie a spracovanie vzťahov medzi komponentmi klastra bez potreby komplexných transformácií dát."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Transformácia dát do JSON"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Dáta sú transformované do JSON formátu, čo uľahčuje ich načítanie a manipuláciu v 3D grafickom prostredí."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "4. 3D Vizualizácia pomocou Three.js (3D-Forced-Graph)"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Vizualizácia využíva Three.js spolu s knižnicou 3D-Force-Graph na zobrazenie vzťahov medzi komponentmi klastra. Uzly reprezentujú jednotlivé komponenty (nody, pody, služby) a hrany zobrazujú ich vzájomné vzťahy."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "5. Interaktívne funkcie vizualizácie"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Používatelia môžu interagovať s 3D modelom klastra – približovať, otáčať a kliknúť na jednotlivé uzly pre zobrazenie detailných informácií o daných komponentoch, ako je stav podu, alokované zdroje či metadáta."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "6. Škáľovateľnosť a výkonnosť"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "KubeGlimpse je navrhnutý tak, aby zvládal vizualizáciu malých aj veľkých klastrov. Vďaka efektívnemu spracovaniu dát v ArangoDB a optimalizovanému vykresľovaniu v Three.js aplikácia plynule funguje aj pri komplexných infraštruktúrach."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        alt: "Vizualizacia architektury",
        src: (__webpack_require__(34691)/* ["default"] */ .A) + "",
        width: "995",
        height: "811"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "(Zobrazenie architektúry)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-motivácia",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Motivácia"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kubernetes sa stal jednou z najpopulárnejších platforiem na správu kontajnerizovaných aplikácií v moderných IT infraštruktúrach, najmä pre veľké a dynamické prostredia. Jeho schopnosť automatizovať nasadzovanie a škálovanie aplikácií je zásadná, avšak čím je klaster väčší a zložitejší, tým je pre správcov náročnejšie získať prehľad o tom, ako jednotlivé komponenty, ako sú nody, pody a služby, medzi sebou interagujú. Textové alebo tabuľkové výstupy z bežných nástrojov často neposkytujú dostatočne intuitívny pohľad na celý systém, čo môže skomplikovať riešenie problémov a optimalizáciu klastrov."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Existujúce vizualizačné nástroje pre Kubernetes klastre sú často nepresné, ťažko ovládateľné alebo ponúkajú len základné informácie. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "KubeGlimpse"
      }), " rieši túto medzeru tým, že poskytuje interaktívnu 3D vizualizáciu, ktorá zobrazuje presné vzťahy medzi jednotlivými komponentmi klastrov. Tento nástroj umožňuje používateľom efektívne prehliadať klastre, rýchlo identifikovať problémy a lepšie porozumieť dynamike a štruktúre infraštruktúry, čím zjednodušuje správu aj veľmi komplexných systémov."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-prípady-použitia",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Prípady použitia"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Zobrazenie Usecase diagramu pre KubeGlimpse",
        src: (__webpack_require__(74562)/* ["default"] */ .A) + "",
        width: "2208",
        height: "1326"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-porozumenie-štruktúre-kubernetesu",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Porozumenie štruktúre Kubernetesu"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pre správu veľkých Kubernetes klastrov je kľúčové mať jasný prehľad o tom, ako jednotlivé komponenty (nody, pody, služby) spolu interagujú. KubeGlimpse poskytuje interaktívnu 3D vizualizáciu, ktorá umožňuje správcovi lepšie pochopiť vzťahy medzi komponentmi a rýchlo identifikovať neefektívne usporiadanie alebo nezrovnalosti v štruktúre klastra."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-analýza-závislostí-medzi-podmi-a-službami",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Analýza závislostí medzi podmi a službami"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "KubeGlimpse umožňuje používateľom vizuálne skúmať, ako sú pody prepojené so službami a inými komponentmi v rámci klastra. Táto vizualizácia umožňuje rýchlo pochopiť zložité závislosti medzi aplikáciami a infraštruktúrou, čo je mimoriadne užitočné pri diagnostikovaní problémov alebo pri plánovaní zmien."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-vytváranie-vizualizácií-pre-tímové-stretnutia",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Vytváranie vizualizácií pre tímové stretnutia"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "KubeGlimpse môže slúžiť ako nástroj na prezentovanie štruktúry klastra počas tímových stretnutí. Vizualizácie môžu pomôcť rôznym členom tímu, vrátane tých, ktorí nemajú technické zázemie, ľahšie pochopiť fungovanie Kubernetes a ako jednotlivé komponenty spolu interagujú, čím uľahčujú komunikáciu medzi rôznymi oddeleniami."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-porovnanie-štruktúry-v-čase",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Porovnanie štruktúry v čase"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pri aktualizáciách alebo zmenách v konfigurácii Kubernetes klastrov je často náročné pochopiť, ako sa štruktúra klastra zmenila. KubeGlimpse môže vytvárať vizualizácie, ktoré umožňujú porovnávať stav klastra pred a po zmene, čo pomáha pri overovaní správnosti nasadenia zmien a pri znižovaní rizika chýb."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5-lepšia-orientácia-pre-nových-členov-tímu",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "5. Lepšia orientácia pre nových členov tímu"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pre nových členov tímu, ktorí ešte nemajú skúsenosti so správou Kubernetes klastrov, môže byť pochopenie infraštruktúry náročné. KubeGlimpse poskytuje vizuálny nástroj, ktorý uľahčuje orientáciu v štruktúre klastra a pomáha im rýchlejšie sa zorientovať a pochopiť fungovanie jednotlivých komponentov a ich vzťahov."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-biznis-pohľad-kubeglimpse",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Biznis pohľad KubeGlimpse"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "KubeGlimpse"
      }), " ponúka jedinečný spôsob vizualizácie Kubernetes klastrov, čo prináša jasné výhody nielen pre technických odborníkov, ale aj pre manažérske a biznisové tímy. KubeGlimpse umožňuje prístup k vizualizáciám, ktorá sú ľahko pochopiteľná a umožňuje efektivnejšie pochopenie infraštruktúry, čo v dôsledku zlepšuje komunikáciu naprieč rôznymi tímami."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "použitie-kubeglimpse-v-praxi",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Použitie KubeGlimpse v praxi:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Podpora rozhodovania v IT oddeleniach"
          }), "\nPre manažérov a vedúcich IT oddelení je kľúčové mať prehľad o infraštruktúre, na ktorej závisí prevádzka aplikácií a služieb. KubeGlimpse poskytuje jednoduchý a prehľadný pohľad na celý Kubernetes klaster, čím umožňuje rýchlo zhodnotiť stav infraštruktúry a efektívnosť jej využívania. Vizualizácia môže slúžiť ako podklad pre rozhodovanie o škálovaní, nasadzovaní nových služieb alebo optimalizácii infraštruktúry."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Zlepšenie medziodborovej komunikácie"
          }), "\nPre tímy mimo IT oddelení, ako sú produktoví manažéri, marketingové tímy či projektoví vedúci, môže byť zložité pochopiť technické detaily aplikácie. KubeGlimpse umožňuje ne-technickým tímom rýchlo pochopiť štruktúru systému, čo podporuje lepšiu koordináciu medzi technickými a obchodnými jednotkami v organizácii."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Nasadzovanie v DevOps a SRE prostredí"
          }), "\nDevOps tímy a SRE (Site Reliability Engineering) zvyčajne spravujú rozsiahle klastre, kde je neustála potreba vizuálne sledovať vzťahy medzi komponentmi a ich stav. KubeGlimpse môže byť kľúčovým nástrojom pri analýze výkonnosti, sledovaní preťaženia nodov alebo pri vizualizácii zmien v infraštruktúre počas nasadzovania nových verzií aplikácií."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Podpora pri plánovaní a škálovaní infraštruktúry"
          }), "\nOrganizácie, ktoré neustále rastú a škálujú svoje Kubernetes klastre, môžu využívať KubeGlimpse na vizualizáciu budúcich zmien v infraštruktúre. Používanie vizualizácie pri plánovaní rozšírení pomáha pri optimalizácii zdrojov a zabraňuje vzniku preťažených alebo neefektívne využívaných nodov."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "trhové-príležitosti-a-finančný-potenciál",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trhové príležitosti a finančný potenciál"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Podľa najnovších analýz bol trh s Kubernetes v roku 2019 ocenený na ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "1,46 miliardy USD"
      }), ", pričom sa očakáva, že do roku 2031 dosiahne hodnotu ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "9,69 miliardy USD"
      }), " s ročným rastom (CAGR) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "23,4 %"
      }), " v období rokov 2024 – 2031. Kubernetes je najrýchlejšie rastúcim projektom v histórii open-source softvéru po Linuxe, a jeho adopcia sa stáva štandardom pre správu kontajnerizovaných aplikácií."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "firmy-investujú-do-kubernetes-technológií-kvôli",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Firmy investujú do Kubernetes technológií kvôli:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Automatizácii:"
        }), " Kubernetes umožňuje automatickú správu a škálovanie prostredí."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Efektivite:"
        }), " Znižovanie prevádzkových nákladov a optimalizácia využívania zdrojov."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multicloud a hybridné možnosti:"
        }), " Kubernetes umožňuje nasadenie v multicloudových a hybridných prostrediach, čo firmám poskytuje väčšiu flexibilitu."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Zlepšenej produktivite vývojárov:"
        }), " Vďaka jednoduchšiemu nasadzovaniu aplikácií a lepšej správe infraštruktúry."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Rast Kubernetes trhu je poháňaný jeho širokým využitím v IT a telekomunikáciách, zdravotníctve, financiách a ďalších odvetviach. Najväčší trhový podiel má momentálne ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Severná Amerika"
      }), ", ale najrýchlejšie rastúcim regiónom je ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Ázia-Pacifik"
      }), ", kde je vysoký dopyt po modernizácii IT infraštruktúr."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Zobrazenie trhu cloudoveho marketu",
        src: (__webpack_require__(16539)/* ["default"] */ .A) + "",
        width: "670",
        height: "350"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rast-kubernetes-trhu-podľa-regiónov-v-miliardách-usd",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rast Kubernetes trhu podľa regiónov (v miliardách USD)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Rok"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Severná Amerika"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Ázia-Pacifik"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Európa"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Latinská Amerika"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Blízky východ a Afrika"
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2023"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.54"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.49"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.44"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.40"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.35"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2024"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.66"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.60"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.55"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.49"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.44"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2025"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.80"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.74"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.68"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.62"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.55"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2026"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.97"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.91"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.84"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.77"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.70"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2027"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.19"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.03"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.95"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.87"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2028"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.45"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.36"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.27"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.18"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.09"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2029"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.78"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.67"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.57"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.47"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.36"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2030"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2.18"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2.06"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.94"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.82"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.70"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Zobrazenie ocakavanie rastu trhu cloudoveho marketu",
        src: (__webpack_require__(87320)/* ["default"] */ .A) + "",
        width: "671",
        height: "350"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "KubeGlimpse"
      }), " má potenciál stať sa zaujímavým pre tento trh tým, že rieši existujúci problém s vizualizáciou zložitých infraštruktúr. Vizualizačné nástroje pre Kubernetes klastre sú nevyhnutné pre udržanie vysokej úrovne výkonu a spoľahlivosti systémov, čo zvyšuje dopyt po takýchto riešeniach. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "KubeGlimpse"
      }), " je schopný uspokojiť potreby malých startupov, ako aj veľkých korporácií spravujúcich tisíce nodov a podov."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-návrh-dizajnu",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "5. Návrh dizajnu"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        alt: "Zobrazenie nodes",
        src: (__webpack_require__(71305)/* ["default"] */ .A) + "",
        width: "1800",
        height: "1602"
      }), "\n(Návrh ako by vyzerala vizualizácia)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        alt: "Zobrazenie nodes",
        src: (__webpack_require__(56690)/* ["default"] */ .A) + "",
        width: "1800",
        height: "1236"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "(Návrh architektúry)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        alt: "Zobrazenie nodes",
        src: (__webpack_require__(48348)/* ["default"] */ .A) + "",
        width: "1089",
        height: "1102"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "(Schéma ORM prístupu k modelovaniu Kubernetes zdrojov. Tento prístup si vyžadoval pevné definície tried pre každý typ zdroja, čo obmedzilo flexibilitu a rozšíriteľnosť systému, a preto sme prešli na data-driven prístup.)"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-technologická-vrstva",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "6. Technologická vrstva"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["V tejto sekcii sa pozrieme na technológie, ktoré boli použité pri vývoji KubeGlimpse, a rozdelíme ich na dve časti: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "teoretickú"
      }), " a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "praktickú"
      }), ". Najskôr si vysvetlíme jednotlivé komponenty, z ktorých sa projekt skladá, a prečo sme sa rozhodli použiť práve tieto technológie. V praktickej časti následne uvedieme konkrétne príklady toho, ako boli tieto technológie implementované v našom kóde, aby bolo jasné, ako celý systém funguje."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "61-teoretický-pohľad-na-použité-technológie",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "6.1 Teoretický pohľad na použité technológie"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frontend: Quasar Framework & Three.js"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Quasar je framework postavený na Vue.js, ktorý umožňuje efektívny vývoj moderných a responzívnych webových aplikácií. V kombinácii s Three.js a knižnicou 3D-Force-Graph poskytuje robustné nástroje na tvorbu interaktívnych 3D vizualizácií priamo v prehliadači."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Načo sa používa:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "3D modelovanie:"
        }), " Three.js umožňuje vytváranie komplexných 3D scén a objektov, ktoré sú vizualizované pomocou WebGL."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interaktívnosť:"
        }), " Quasar a Three.js podporujú interakciu používateľov s vizualizáciou, ako je zoom, otáčanie a kliknutie na objekty pre zobrazenie detailov."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Responzívny dizajn:"
        }), " Quasar zabezpečuje, že aplikácia je prístupná a použiteľná na rôznych zariadeniach a obrazovkách."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Príklad základnej scény s 3D objektami:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "https://youtu.be/8r4LcAXUNDY",
        children: "Video ako táto základna scéna vyzerá"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Backend: Python a Kubernetes API"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Backend ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "KubeGlimpse"
      }), " je postavený na frameworku Django, ktorý poskytuje robustnú základňu pre správu aplikačnej logiky, komunikáciu s databázou a API. Kombinácia Django a Kubernetes API umožňuje efektívne získavanie a spracovávanie dát o Kubernetes klastroch."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Správa dát:"
        }), " Django poskytuje nástroje na správu a manipuláciu s dátami získanými z Kubernetes API."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "API komunikácia:"
        }), " Umožňuje komunikáciu medzi frontendom a databázou prostredníctvom REST API."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Automatizácia:"
        }), " Django skripty zabezpečujú pravidelnú synchronizáciu dát a monitorovanie stavu klastra."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Databáza: ArangoDB"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArangoDB je multi-model databáza, ktorá kombinuje dokumentový a grafový prístup, čo je ideálne pre modelovanie komplexných vzťahov v Kubernetes klastroch."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Flexibilné ukladanie dát:"
        }), " Neo4j ukladá nody, pody a služby ako uzly, a vzťahy medzi nimi ako hrany, čím umožňuje modelovať zložité prepojenia v Kubernetes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Efektívne dotazovanie:"
        }), " Databáza umožňuje efektívne vyhľadávať a získavať informácie o vzťahoch medzi rôznymi komponentmi klastra."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Škálovateľnosť:"
        }), " Vhodná pre veľké a dynamické dátové sady, čo je nevyhnutné pre komplexné Kubernetes infraštruktúry."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "62-prakticky-pohľad-na-použité-technológie",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "6.2 Prakticky pohľad na použité technológie"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Backend implementácia s Django a ArangoDB"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Backend aplikácie KubeGlimpse je implementovaný pomocou Django frameworku, ktorý zabezpečuje komunikáciu s Kubernetes API a ukladanie dát do ArangoDB."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hlavné funkcie backendu:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Získavanie dát z Kubernetes API:"
      }), " Používa sa knižnica ", (0,jsx_runtime.jsx)(_components.code, {
        children: "kubernetes"
      }), " pre Python, ktorá umožňuje jednoduchý prístup k rôznym API Kubernetes a získavanie informácií o nodoch, podoch, službách a ďalších objektoch."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "from kubernetes import client, config\n\nconfig.load_kube_config()\nv1 = client.CoreV1Api()\napps_v1 = client.AppsV1Api()\n\npods = v1.list_pod_for_all_namespaces(watch=False).items\nservices = v1.list_service_for_all_namespaces(watch=False).items\ndeployments = apps_v1.list_deployment_for_all_namespaces(watch=False).items\nnodes = v1.list_node(watch=False).items\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Ukladanie dát do ArangoDB:"
      }), " Kubernetes objekty sú ukladané ako JSON dokumenty do kolekcie ", (0,jsx_runtime.jsx)(_components.code, {
        children: "nodes"
      }), " a ich vzťahy do kolekcie ", (0,jsx_runtime.jsx)(_components.code, {
        children: "edges"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "from arango import ArangoClient\n\nclient = ArangoClient()\ndb = client.db('kubeglimpse', username='root', password='password')\n\nfor pod in pods:\n    document = {\n        \"_key\": f\"Pod_{pod.metadata.namespace}_{pod.metadata.name}\",\n        \"type\": \"Pod\",\n        \"name\": pod.metadata.name,\n        \"namespace\": pod.metadata.namespace,\n        \"labels\": pod.metadata.labels,\n        \"node_name\": pod.spec.node_name\n    }\n    db.collection(\"nodes\").upsert(document[\"_key\"], document)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        alt: "Zobrazenie nodes",
        src: (__webpack_require__(35875)/* ["default"] */ .A) + "",
        width: "1562",
        height: "1166"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "(Kolekcia ", (0,jsx_runtime.jsx)(_components.code, {
        children: "nodes"
      }), " v ramci datábazy)\n", (0,jsx_runtime.jsx)(_components.img, {
        alt: "Zobrazenie nodes",
        src: (__webpack_require__(53055)/* ["default"] */ .A) + "",
        width: "1542",
        height: "1102"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "(Vlastnosti ", (0,jsx_runtime.jsx)(_components.code, {
        children: "node"
      }), ")\n", (0,jsx_runtime.jsx)(_components.img, {
        alt: "Zobrazenie nodes",
        src: (__webpack_require__(82952)/* ["default"] */ .A) + "",
        width: "1557",
        height: "669"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "(Kolekcia ", (0,jsx_runtime.jsx)(_components.code, {
        children: "edges"
      }), " v ramci datábazy)\n", (0,jsx_runtime.jsx)(_components.img, {
        alt: "Zobrazenie nodes",
        src: (__webpack_require__(32398)/* ["default"] */ .A) + "",
        width: "1541",
        height: "423"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "(Vlastnosti ", (0,jsx_runtime.jsx)(_components.code, {
        children: "edge"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Vytváranie vzťahov medzi uzlami:"
      }), " Vzťahy medzi objektmi sú definované v kolekcii edges pomocou AQL dotazov."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "query = \"\"\"\nFOR pod IN nodes\n    FILTER pod.type == \"Pod\" AND pod.node_name != null\n    LET node = FIRST(FOR n IN nodes FILTER n.name == pod.node_name AND n.type == \"Node\" RETURN n)\n    INSERT { _from: node._id, _to: pod._id, relation: \"HOSTS\" } INTO edges\n\"\"\"\ndb.aql.execute(query)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        alt: "Zobrazenie nodes",
        src: (__webpack_require__(63635)/* ["default"] */ .A) + "",
        width: "1570",
        height: "1107"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "(Kubernetes cluster v rámci grafovej datábazy)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        alt: "Zobrazenie nodes",
        src: (__webpack_require__(64107)/* ["default"] */ .A) + "",
        width: "1570",
        height: "1107"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "(Zobrazenie kolekcie ", (0,jsx_runtime.jsx)(_components.code, {
        children: "edges"
      }), " a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "nodes"
      }), " ako graf s prepojenými vzťahm.)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        alt: "Zobrazenie nodes",
        src: (__webpack_require__(75851)/* ["default"] */ .A) + "",
        width: "1567",
        height: "1186"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "(Zobrazenie jenotlivých vlastností)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        alt: "Zobrazenie nodes",
        src: (__webpack_require__(29940)/* ["default"] */ .A) + "",
        width: "1557",
        height: "1180"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "(Zobrazenie jenotlivých vlastností)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frontend implementácia s Quasar a Three.js"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Frontend aplikácie KubeGlimpse je vyvinutý pomocou Quasar frameworku a využíva Three.js spolu s 3D-Force-Graph pre 3D vizualizáciu Kubernetes klastrov."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Načítanie dát z backendu:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "fetch('/graph-data/')\n  .then(response => response.json())\n  .then(data => {\n    const scaleFactor = 1.5;\n    data.nodes.forEach(node => {\n      node.x = (Math.random() - 0.5) * scaleFactor;\n      node.y = (Math.random() - 0.5) * scaleFactor;\n      node.z = (Math.random() - 0.5) * scaleFactor;\n    });\n    Graph.graphData(data);\n  });\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Vizualizácia grafu:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import ForceGraph3D from '3d-force-graph';\n\nconst Graph = ForceGraph3D()(document.getElementById('3d-graph'))\n  .nodeLabel(node => `${node.type}: ${node.name}`)\n  .nodeColor(node => labelColors[node.type] || 'lightgray')\n  .linkLabel(link => link.type)\n  .linkColor(link => linkColors[link.type] || 'lightgray')\n  .backgroundColor('#000000');\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        alt: "Zobrazenie nodes",
        src: (__webpack_require__(85810)/* ["default"] */ .A) + "",
        width: "1652",
        height: "917"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "(Samotná vizualizácia)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        alt: "Zobrazenie nodes",
        src: (__webpack_require__(27418)/* ["default"] */ .A) + "",
        width: "1093",
        height: "632"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "(Zobrazenie jednotlivého bodu)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        alt: "Zobrazenie nodes",
        src: (__webpack_require__(28643)/* ["default"] */ .A) + "",
        width: "1044",
        height: "701"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "(Možnosť pohybovať s grafom/jednotlivými bodmi)"]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



/***/ }),

/***/ 63635:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/k8s_graph2-c3d8284b7cf878ab104d703fd173d320.jpeg");

/***/ }),

/***/ 64107:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/k8s_graph-3c42a008cce589117db0bc5d45f7f68a.jpeg");

/***/ }),

/***/ 71305:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/navrh1-a19ea3241bd7535ea5d65665a587b0f5.png");

/***/ }),

/***/ 74562:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/usecase-821197db9792b7e979a85f5e68e02fe3.png");

/***/ }),

/***/ 75851:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/k8s_graph3-a3d3f581a3f7e2e05e4f3837ebf02e01.png");

/***/ }),

/***/ 82952:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/edges_arango-833e036b301bd13f01e59e8fecebf115.png");

/***/ }),

/***/ 83899:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/kubeglimpse-logo-7e51df6cb212f44df810f933b4b35c69.png");

/***/ }),

/***/ 85810:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/product-2675b87e02ebac13c0994060ac779f18.png");

/***/ }),

/***/ 87320:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/app-cont-market-36dae4892eb8f5678d711e698a04800e.png");

/***/ })

}]);