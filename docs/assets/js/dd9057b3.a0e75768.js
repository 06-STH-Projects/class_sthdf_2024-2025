"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[88201],{

/***/ 27296:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/files/Analýza v1-fb8e244040b2b77e336388320e77ab34.docx");

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

/***/ 34665:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2024_2025_projects_prj_018_presentation_slides_md_dd9_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2024-2025-projects-prj-018-presentation-slides-md-dd9.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2024_2025_projects_prj_018_presentation_slides_md_dd9_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2024-2025/projects/PRJ018/presentation/slides","title":"slides","description":"{{DESCRIPTION}}","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2024-2025/projects/PRJ018/presentation/slides.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2024-2025/projects/PRJ018/presentation","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2024-2025/projects/PRJ018/presentation/slides","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2024-2025/projects/PRJ018/presentation/slides","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2026-10-05T12:53:06.003962+00:00","fm_version_comment":"","guid":"c8c64c27-fbb6-4a7c-9c47-255ceb7beb9b","dao":"class_sthdf_dashboard","title":"slides","description":"{{DESCRIPTION}}","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"","type":"","priority":"","tags":[],"locale":"sk","created":"2026-10-05 14:53","modified":"2026-10-05 14:53","status":"backlog","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"PRJ018","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2024-2025/projects/PRJ018/"},"next":{"title":"notes","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2024-2025/projects/PRJ018/sdlc/business/notes"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2024-2025/projects/PRJ018/presentation/slides.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2026-10-05T12:53:06.003962+00:00',
	fm_version_comment: '',
	guid: 'c8c64c27-fbb6-4a7c-9c47-255ceb7beb9b',
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
const contentTitle = 'PRJ018 — Presentation';

const assets = {

};



const toc = [{
  "value": "SMVIT - Lendify",
  "id": "smvit---lendify",
  "level": 2
}, {
  "value": "Komunikačné a prezentačné kanály",
  "id": "komunikačné-a-prezentačné-kanály",
  "level": 3
}, {
  "value": "Spoločná práca",
  "id": "spoločná-práca",
  "level": 3
}, {
  "value": "Minimum Viable Product",
  "id": "minimum-viable-product",
  "level": 2
}, {
  "value": "Funkcie aplikácie Lendify",
  "id": "funkcie-aplikácie-lendify",
  "level": 3
}, {
  "value": "Prihlásenie a registrácia",
  "id": "prihlásenie-a-registrácia",
  "level": 3
}, {
  "value": "Zalistovanie produktu",
  "id": "zalistovanie-produktu",
  "level": 3
}, {
  "value": "Objednávka produktu",
  "id": "objednávka-produktu",
  "level": 3
}, {
  "value": "Filter a vyhľadávanie",
  "id": "filter-a-vyhľadávanie",
  "level": 3
}, {
  "value": "Čet a notifikácie",
  "id": "čet-a-notifikácie",
  "level": 3
}, {
  "value": "Hodnotenie",
  "id": "hodnotenie",
  "level": 3
}, {
  "value": "Celý zoznam features:",
  "id": "celý-zoznam-features",
  "level": 4
}, {
  "value": "Zoznam požiadaviek pre MVP Lendify (funkcie)",
  "id": "zoznam-požiadaviek-pre-mvp-lendify-funkcie",
  "level": 5
}, {
  "value": "Zoznam požiadaviek pre MVP Lendify (nefunkčné)",
  "id": "zoznam-požiadaviek-pre-mvp-lendify-nefunkčné",
  "level": 5
}, {
  "value": "Výber technológií",
  "id": "výber-technológií",
  "level": 3
}, {
  "value": "Frontend",
  "id": "frontend",
  "level": 4
}, {
  "value": "Backend",
  "id": "backend",
  "level": 4
}, {
  "value": "Databáza",
  "id": "databáza",
  "level": 4
}, {
  "value": "Platobné systémy",
  "id": "platobné-systémy",
  "level": 4
}, {
  "value": "Mapy a geolokácia",
  "id": "mapy-a-geolokácia",
  "level": 4
}, {
  "value": "Zabezpečenie",
  "id": "zabezpečenie",
  "level": 4
}, {
  "value": "Škálovanie a nasadenie",
  "id": "škálovanie-a-nasadenie",
  "level": 4
}, {
  "value": "Mobilné aplikácie",
  "id": "mobilné-aplikácie",
  "level": 4
}, {
  "value": "Modely",
  "id": "modely",
  "level": 3
}, {
  "value": "Organization Viewpoint:",
  "id": "organization-viewpoint",
  "level": 5
}, {
  "value": "Motivation Viewpoint:",
  "id": "motivation-viewpoint",
  "level": 5
}, {
  "value": "Product Viewpoint:",
  "id": "product-viewpoint",
  "level": 5
}, {
  "value": "Business Process Cooperation Viewpoint:",
  "id": "business-process-cooperation-viewpoint",
  "level": 5
}, {
  "value": "Application Usage Viewpoint:",
  "id": "application-usage-viewpoint",
  "level": 5
}, {
  "value": "Technology Viewpoint:",
  "id": "technology-viewpoint",
  "level": 5
}, {
  "value": "Low Fidelity",
  "id": "low-fidelity",
  "level": 3
}, {
  "value": "Domovská stránka",
  "id": "domovská-stránka",
  "level": 4
}, {
  "value": "Pridanie nového produktu",
  "id": "pridanie-nového-produktu",
  "level": 4
}, {
  "value": "Katalóg produktov",
  "id": "katalóg-produktov",
  "level": 4
}, {
  "value": "Stránka produktu",
  "id": "stránka-produktu",
  "level": 4
}, {
  "value": "Platba krok č.1",
  "id": "platba-krok-č1",
  "level": 4
}, {
  "value": "Platba krok č.2",
  "id": "platba-krok-č2",
  "level": 4
}, {
  "value": "Platba krok č.3",
  "id": "platba-krok-č3",
  "level": 4
}, {
  "value": "Stránka používateľa",
  "id": "stránka-používateľa",
  "level": 4
}, {
  "value": "Klikateľný prototyp",
  "id": "klikateľný-prototyp",
  "level": 3
}, {
  "value": "Prihlásenie",
  "id": "prihlásenie",
  "level": 5
}, {
  "value": "Domovská stránka",
  "id": "domovská-stránka-1",
  "level": 5
}, {
  "value": "Katalóg produktov",
  "id": "katalóg-produktov-1",
  "level": 5
}, {
  "value": "Stránka produktu",
  "id": "stránka-produktu-1",
  "level": 5
}, {
  "value": "Pridanie nového produktu",
  "id": "pridanie-nového-produktu-1",
  "level": 5
}, {
  "value": "Detail pôžičky",
  "id": "detail-pôžičky",
  "level": 5
}, {
  "value": "Platba krok č.1",
  "id": "platba-krok-č1-1",
  "level": 5
}, {
  "value": "Platba krok č.2",
  "id": "platba-krok-č2-1",
  "level": 5
}, {
  "value": "Platba krok č.3",
  "id": "platba-krok-č3-1",
  "level": 5
}, {
  "value": "Košík",
  "id": "košík",
  "level": 5
}, {
  "value": "3D Printing",
  "id": "3d-printing",
  "level": 3
}, {
  "value": "3D Modeling with Blender",
  "id": "3d-modeling-with-blender",
  "level": 4
}, {
  "value": "CURA – program for 3D printer",
  "id": "cura--program-for-3d-printer",
  "level": 4
}, {
  "value": "Finálny produkt",
  "id": "finálny-produkt",
  "level": 3
}, {
  "value": "Podporné súbory",
  "id": "podporné-súbory",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    header: "header",
    img: "img",
    li: "li",
    p: "p",
    strong: "strong",
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
        id: "prj018--presentation",
        children: "PRJ018 — Presentation"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "smvit---lendify",
      children: "SMVIT - Lendify"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lendify"
      }), " je moderná aplikácia, ktorá spája ľudí, ktorí chcú prenajať svoje veci, s tými, ktorí ich\npotrebujú na krátky čas. Primárne sa zameriava na techniku, ako sú vŕtačky, píly, rebríky, stavebné a záhradné\nnáradie, ale jej využitie je omnoho širšie. Či už ste domáci majster, ktorý potrebuje špecifický nástroj, alebo vlastníte\nvybavenie, ktoré nepoužívate často, Lendify ponúka jednoduchý a výhodný spôsob, ako ho zdieľať."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Aplikácia funguje na princípe vzájomného prenájmu – každý užívateľ môže svoje predmety ponúknuť na požičiavanie\n, pričom si s nájomcom dohodne cenu a podmienky. Vďaka prehľadnému prostrediu a integrovanému hodnotiacemu systému\naplikácia zabezpečuje dôveryhodné a bezpečné transakcie."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Lendify podporuje filozofiu zdieľanej ekonomiky, ktorá prispieva k udržateľnosti a efektívnemu\nvyužívaniu zdrojov. Užívatelia nemusia investovať do nákupu drahého vybavenia, ktoré potrebujú len príležitostne,\na majitelia zasa môžu získať pasívny príjem z predmetov, ktoré by inak len ležali nevyužité."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Je to ideálne riešenie pre tých, ktorí si cenia flexibilitu, chcú ušetriť alebo prispieť k zníženiu zbytočného konzumu.\nLendify spája komunitu ľudí s podobnými záujmami a vytvára priestor pre jednoduché zdieľanie zdrojov."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "komunikačné-a-prezentačné-kanály",
      children: "Komunikačné a prezentačné kanály"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Youtube kanál: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://www.youtube.com/@SKIBIDI_IT_RIZZLERS",
          children: "Skibidi IT RIZZ"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Patreon: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://www.patreon.com/c/ShoppingRevolution",
          children: "Lendify"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Linked In Skibidy IT RIZZ: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://www.linkedin.com/company/skibidi-it-rizz/",
          children: "Lendify"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Linked In Matej: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://www.linkedin.com/in/matejpakan/",
          children: "Matej Pakán"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Linked In Adam: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://www.linkedin.com/in/adam-jankani%C4%8D-46aa61238/",
          children: "Adam Jankanič"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Linked In Ivan: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://www.linkedin.com/in/ivan-gajdos-175902267/",
          children: "Ivan Gajdoš"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "spoločná-práca",
      children: "Spoločná práca"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Počas semestra sme si viedli vlastný GitHub repozitár: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/Matt1s/SMVIT",
        children: "https://github.com/Matt1s/SMVIT"
      }), "\nNa v tomto repozitári sme si viedli zmeny na vlastných vetvách."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://bitbucket.org/st10-st18-st34-lendify/repo_sthdf_2024-2025/raw/3c6d2d06c0fc167930a65bab140f3b9463bbc45a/repos/github.png",
        alt: ""
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Na porovnávanie branchí sme použili LemonTree."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://bitbucket.org/st10-st18-st34-lendify/repo_sthdf_2024-2025/raw/3c6d2d06c0fc167930a65bab140f3b9463bbc45a/repos/lemontree.png",
        alt: ""
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Následne sme si forkli repozitár, a presunuli dáta na Bitbucket, kde sme dotvorili túto dokumentáciu."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "minimum-viable-product",
      children: "Minimum Viable Product"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "funkcie-aplikácie-lendify",
      children: "Funkcie aplikácie Lendify"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Aplikácia Lendify ponúka širokú škálu funkcií, ktoré zjednodušujú prenajímanie a správu produktov medzi používateľmi. Od intuitívneho pridávania produktov, prepracovaných filtrov a recenzií až integrovaný čet. Všetky funkcie sú navrhnuté s dôrazom na užívateľskú jednoduchosť a efektívnosť. Cieľom aplikácie je vytvoriť bezpečné a transparentné prostredie pre vzájomné zdieľanie zdrojov."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "prihlásenie-a-registrácia",
      children: "Prihlásenie a registrácia"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Používatelia sa môžu prihlásiť alebo zaregistrovať, pričom proces zahŕňa overenie dokladu totožnosti. Účty umožňujú editáciu údajov (meno, fotografia) a zobrazenie štatistík, ako je dĺžka registrácie a počet úspešných objednávok."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "zalistovanie-produktu",
      children: "Zalistovanie produktu"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Je možné pridávať produkty s nasledovnými detailmi:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Názov, popis a fotografie/videá"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kategórie a podkategórie (napr. Náradie → Vŕtačka → Príklepové vŕtačky)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cena za časovú jednotku a výška zábezpeky"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Miesta a časy vyzdvihnutia a vrátenia"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://bitbucket.org/st10-st18-st34-lendify/repo_sthdf_2024-2025/raw/14bdf4f8332732ae116e180f7b59cc890f1766bd/n%C3%A1%C4%8Drty/Fin%C3%A1lne%20n%C3%A1%C4%8Drty/desktop/2_add_new_product.png",
        alt: ""
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Používatelia môžu pri pridávaní produktov využiť možnosť nahrávať kvalitné fotografie a videá, ktoré lepšie predstavia ponúkaný produkt. Taktiež môžu detailne špecifikovať kategórie a podkategórie, čo zjednodušuje vyhľadávanie zo strany zákazníkov. Pri každom produkte je možné uviesť viacero miest vyzdvihnutia, čo pridáva flexibilitu pre predávajúcich aj kupujúcich."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "objednávka-produktu",
      children: "Objednávka produktu"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Objednávkový proces umožňuje jednoduché a intuitívne zadávanie presných časov vyzdvihnutia a vrátenia produktu. Používateľ má možnosť sledovať stav objednávky v reálnom čase a notifikácie ho upozornia na všetky dôležité zmeny. Po dokončení objednávky môže hodnotiť predávajúceho aj samotný produkt, čím prispieva k transparentnosti platformy."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        src: "https://bitbucket.org/st10-st18-st34-lendify/repo_sthdf_2024-2025/raw/7d98e99d3d3f3809494fd76f966c14547e94ab86/n%C3%A1%C4%8Drty/Fin%C3%A1lne%20n%C3%A1%C4%8Drty/desktop/4_single_item.png",
        alt: ""
      }), "\n", (0,jsx_runtime.jsx)(_components.img, {
        src: "https://bitbucket.org/st10-st18-st34-lendify/repo_sthdf_2024-2025/raw/7d98e99d3d3f3809494fd76f966c14547e94ab86/n%C3%A1%C4%8Drty/Fin%C3%A1lne%20n%C3%A1%C4%8Drty/desktop/5_checkout.png",
        alt: ""
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "filter-a-vyhľadávanie",
      children: "Filter a vyhľadávanie"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Je umožnené filtrovať produkty podľa:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vzdialenosti (vrátane mapy)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ceny"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kategórie, podkategórie"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Recenzií produktu a používateľa"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dostupnosti (v %)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        src: "https://bitbucket.org/st10-st18-st34-lendify/repo_sthdf_2024-2025/raw/accdbbda8f292bf61bc4c7ee061c27b6e7892d0d/n%C3%A1%C4%8Drty/Fin%C3%A1lne%20n%C3%A1%C4%8Drty/desktop/3_catalog.png",
        alt: ""
      }), "\nPokročilé filtre umožňujú presné hľadanie produktov podľa individuálnych potrieb. Napríklad pomocou mapy si môžu používatelia vyhľadať produkty v blízkosti a porovnať ceny rôznych predávajúcich. Systém zobrazuje aj hodnotenie produktov a predávajúcich, čo zjednodušuje rozhodovanie pri výbere."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "čet-a-notifikácie",
      children: "Čet a notifikácie"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Integrovaný čet poskytuje rýchlu komunikáciu medzi predávajúcim a kupujúcim, čím urýchľuje riešenie nejasností alebo dohody o detailoch objednávky. Notifikácie informujú používateľov o príchode nových správ, zmenách v objednávkach či dôležitých aktualizáciách v aplikácii."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hodnotenie",
      children: "Hodnotenie"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Systém hodnotení pomáha budovať dôveru medzi používateľmi. Okrem hodnotenia produktov môžu používatelia zanechať spätnú väzbu aj na správanie predávajúcich a kupujúcich. Všetky recenzie sú verejné a zobrazujú priemerné hodnotenie pre jednoduché porovnávanie. Týmto spôsobom sa vytvára komunita zodpovedných používateľov, ktorí si navzájom dôverujú.\n", (0,jsx_runtime.jsx)(_components.img, {
        src: "https://bitbucket.org/st10-st18-st34-lendify/repo_sthdf_2024-2025/raw/accdbbda8f292bf61bc4c7ee061c27b6e7892d0d/n%C3%A1%C4%8Drty/Fin%C3%A1lne%20n%C3%A1%C4%8Drty/desktop/8_personal_user_page.png",
        alt: ""
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "celý-zoznam-features",
      children: "Celý zoznam features:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pre našu aplikáciu sme identifikovali nasledovné funkčné a nefunkčné požiadavky."
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "zoznam-požiadaviek-pre-mvp-lendify-funkcie",
      children: "Zoznam požiadaviek pre MVP Lendify (funkcie)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Vedenie účtu", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "prihlásenie / registrácia"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "overenie používateľa na základe dokladu"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "výber prevodom na účet"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["editácia účtu (minimálne meno + fotka)", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "zobrazovať dĺžku registrácie a úspešných objednávok"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Zalistovanie produktu", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Názov"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Popis"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Fotografie, video"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Kategorizácia (Náradie → Vŕtačka → Príklepové vŕtačky)"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Cena za jednotku času", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Zábezpeka"
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Miesta vyzdvihnutia"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Možný čas vyzdvihnutia (dostupnosť)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Možný čas na vrátenie"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Výpočet provízie"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Objednávka produktu", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Čas vyzdvihnutia"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Čas vrátenia"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Recenzie", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Na konkrétny produkt konkrétneho používateľa"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Priemer recenzií konkrétneho produktu všetkých používateľov"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Recenzia predávajúceho"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Recenzia kupujúceho"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Schopnosť spraviť recenziu po objednávke"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Filter", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Vzdialenosť (+ mapa)"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Cena", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "za deň + prepočet na presný čas"
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Kategórie", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "podkategórie"
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Na základe recenzií produktu"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Na záklde recenzií používateľa"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Dostupnosť (v %)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Zoradzovanie"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Manažment objednávok", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Dashboard príjmov a skladu"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Zoznam nových objednávok"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Zoznam prebiehajúcich"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Možnosť expirácie objednávky, ak predávajuci nezareaguje"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Čet + notifikácia"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Support", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Ticket systém"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Vytvorenie ticketu"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Čet s operátorom"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "zoznam-požiadaviek-pre-mvp-lendify-nefunkčné",
      children: "Zoznam požiadaviek pre MVP Lendify (nefunkčné)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bezpečnosť peňazí"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vedenie účtov"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prevody peňazí"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vedenie zábezpek"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Obchodné podmienky"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "výber-technológií",
      children: "Výber technológií"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pri vývoji aplikácie Lendify je dôležité zvoliť vhodné technológie, ktoré zabezpečia plynulú funkčnosť, škálovateľnosť a bezpečnosť celého systému. Na základe požiadaviek a analýzy odporúčame nasledujúce technologické riešenia:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "frontend",
      children: "Frontend"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Pre vývoj používateľského rozhrania je ideálnou voľbou ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "React"
      }), " v kombinácii s ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "TypeScriptom"
      }), ". Táto kombinácia umožňuje vytvárať modulárne a flexibilné komponenty, pričom TypeScript zabezpečuje vyššiu stabilitu kódu vďaka statickému typovaniu. Alternatívne je možné použiť ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next.js"
      }), " na zlepšenie SEO a rýchlejšie načítanie stránok pomocou server-side rendering (SSR)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "backend",
      children: "Backend"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Na strane servera je vhodné použiť:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Node.js"
        }), " s frameworkom ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Express"
        }), " – rýchly a škálovateľný nástroj pre REST API."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Alternatívne ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Django"
        }), " (Python), ak by boli potrebné robustné nástroje na správu dát a užívateľov."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tieto technológie poskytujú flexibilitu pri práci s dátami, vývoj modulov pre správu objednávok, notifikácií a bezpečnostných prvkov."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "databáza",
      children: "Databáza"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Pre ukladanie štruktúrovaných údajov je najlepšou voľbou ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "PostgreSQL"
      }), ", ktorý ponúka vysoký výkon a podporu komplexných dotazov. Na ukladanie neštruktúrovaných dát, ako sú obrázky a videá, môžeme použiť ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Firebase"
      }), " alebo ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cloud Storage"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "platobné-systémy",
      children: "Platobné systémy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Integrácia platobných brán je nevyhnutná pre bezpečné spracovanie transakcií:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Stripe"
        }), " – jednoduchá implementácia, široká podpora API a vysoká bezpečnosť."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PayPal API"
        }), " – osvedčené riešenie na globálne platby."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "mapy-a-geolokácia",
      children: "Mapy a geolokácia"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Na implementáciu filtrov podľa vzdialenosti a vyhľadávania na je najlepšou možnosťou ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Google Maps API"
      }), ", ktoré poskytuje robustné a presné geolokačné služby."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "zabezpečenie",
      children: "Zabezpečenie"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bezpečnosť je kľúčovým prvkom aplikácie:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "OAuth 2.0"
        }), " na autentifikáciu používateľov."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Šifrovanie hesiel a citlivých údajov pomocou ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "bcrypt"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Zabezpečenie platieb a účtov pomocou TLS/SSL certifikátov."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "škálovanie-a-nasadenie",
      children: "Škálovanie a nasadenie"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pre zaistenie škálovateľnosti a dostupnosti aplikácie:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Použitie ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Docker"
        }), " a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Kubernetes"
        }), " na kontajnerizáciu a orchestru nasadení."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "mobilné-aplikácie",
      children: "Mobilné aplikácie"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ak bude aplikácia rozšírená o natívne mobilné aplikácie môžeme použiť:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Swift"
        }), " pre iOS a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Kotlin"
        }), " pre Android, ak je prioritou výkonnosť."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "React Native"
        }), " na rýchlejší vývoj multiplatformových aplikácií."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tieto technológie spoločne tvoria komplexnú infraštruktúru, ktorá zabezpečuje spoľahlivé a efektívne fungovanie aplikácie Lendify, pričom spĺňa všetky požiadavky na funkčnosť a bezpečnosť."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "modely",
      children: "Modely"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tieto diagramy lepšie predstavujú systém Lendify, zobrazený z rôznych uhlov pohľadu - technického, aplikačného, procesného, motivačného, organizačného a produktového."
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "organization-viewpoint",
      children: "Organization Viewpoint:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Predstavuje organizačnú štruktúru spoločnosti od vedenia (majitelia, investori, C-level) cez stredný manažment až po výkonných pracovníkov (programátori, návrhári, dizajnéri).\n", (0,jsx_runtime.jsx)(_components.img, {
        src: "https://bitbucket.org/st10-st18-st34-lendify/repo_sthdf_2024-2025/raw/c644a032ff23172bed4f07b7054a536e6e327783/model/images/Organization%20Viewpoint.png",
        alt: "Organization Viewpoint Diagram!",
        title: "Organization Viewpoint Diagram"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "motivation-viewpoint",
      children: "Motivation Viewpoint:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Ukazuje motivačné faktory pre dve hlavné skupiny - vlastníkov a záujemcov. Pre vlastníkov je kľúčové zníženie času na získanie záujemcu, pre záujemcov flexibilita a úspora nákladov.\n", (0,jsx_runtime.jsx)(_components.img, {
        src: "https://bitbucket.org/st10-st18-st34-lendify/repo_sthdf_2024-2025/raw/c644a032ff23172bed4f07b7054a536e6e327783/model/images/Motivation%20Viewpoint.png",
        alt: "Motivation Viewpoint Diagram!",
        title: "Motivation Viewpoint Diagram"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "product-viewpoint",
      children: "Product Viewpoint:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Zobrazuje proces zápožičky produktu v systéme od jeho zalistovania cez vytvorenie požiadavky na výpožičku až po platbu a uzatvorenie zmluvy. Zachytáva interakciu medzi zákazníkom, aplikáciou a podpornými službami.\n", (0,jsx_runtime.jsx)(_components.img, {
        src: "https://bitbucket.org/st10-st18-st34-lendify/repo_sthdf_2024-2025/raw/c644a032ff23172bed4f07b7054a536e6e327783/model/images/Product%20Viewpoint.png",
        alt: "Product Viewpoint Diagram!",
        title: "Product Viewpoint Diagram"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "business-process-cooperation-viewpoint",
      children: "Business Process Cooperation Viewpoint:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Zachytáva proces zalistovania produktu od vyplnenia povinných údajov až po overenie obsahu. Proces zahŕňa interakciu medzi používateľom, systémom, AI a redaktorom.\n", (0,jsx_runtime.jsx)(_components.img, {
        src: "https://bitbucket.org/st10-st18-st34-lendify/repo_sthdf_2024-2025/raw/c644a032ff23172bed4f07b7054a536e6e327783/model/images/Business%20Process%20Cooperation%20Viewpoint.png",
        alt: "Business Process Cooperation Viewpoint Diagram!",
        title: "Business Process Cooperation Viewpoint Diagram"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "application-usage-viewpoint",
      children: "Application Usage Viewpoint:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Opisuje proces požičiavania predmetu v troch hlavných krokoch - pridanie predmetu, požičanie a vzájomné hodnotenie. Všetky tieto služby sú prepojené s mobilnou/webovou aplikáciou.\n", (0,jsx_runtime.jsx)(_components.img, {
        src: "https://bitbucket.org/st10-st18-st34-lendify/repo_sthdf_2024-2025/raw/c644a032ff23172bed4f07b7054a536e6e327783/model/images/Application%20Usage%20Viewpoint.png",
        alt: "Application Usage Viewpoint!",
        title: "Application Usage Viewpoint"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "technology-viewpoint",
      children: "Technology Viewpoint:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Zobrazuje technickú architektúru systému postavenú na Kubernetes clusteri s MongoDB a PostgreSQL databázami. Systém je zabezpečený firewallom a obsahuje záložné riešenie pre dáta. Podporuje rôzne operačné systémy na strane klienta.\n", (0,jsx_runtime.jsx)(_components.img, {
        src: "https://bitbucket.org/st10-st18-st34-lendify/repo_sthdf_2024-2025/raw/c644a032ff23172bed4f07b7054a536e6e327783/model/images/Technology%20Viewpoint.png",
        alt: "Technology Viewpoint Diagram!",
        title: "Technology Viewpoint Diagram"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "low-fidelity",
      children: "Low Fidelity"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nižšie zobrazujeme nákresy na papier, ako by mohla aplikácia vyzerať. Keďže sme to kreslili na papier, ušetrili sme mnoho času a mohli sme brainstormovať."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "domovská-stránka",
      children: "Domovská stránka"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://bitbucket.org/st10-st18-st34-lendify/repo_sthdf_2024-2025/raw/14bdf4f8332732ae116e180f7b59cc890f1766bd/n%C3%A1%C4%8Drty/Fin%C3%A1lne%20n%C3%A1%C4%8Drty/desktop/1_homepage.png",
        alt: ""
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pridanie-nového-produktu",
      children: "Pridanie nového produktu"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://bitbucket.org/st10-st18-st34-lendify/repo_sthdf_2024-2025/raw/14bdf4f8332732ae116e180f7b59cc890f1766bd/n%C3%A1%C4%8Drty/Fin%C3%A1lne%20n%C3%A1%C4%8Drty/desktop/2_add_new_product.png",
        alt: ""
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "katalóg-produktov",
      children: "Katalóg produktov"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://bitbucket.org/st10-st18-st34-lendify/repo_sthdf_2024-2025/raw/14bdf4f8332732ae116e180f7b59cc890f1766bd/n%C3%A1%C4%8Drty/Fin%C3%A1lne%20n%C3%A1%C4%8Drty/desktop/3_catalog.png",
        alt: ""
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "stránka-produktu",
      children: "Stránka produktu"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://bitbucket.org/st10-st18-st34-lendify/repo_sthdf_2024-2025/raw/14bdf4f8332732ae116e180f7b59cc890f1766bd/n%C3%A1%C4%8Drty/Fin%C3%A1lne%20n%C3%A1%C4%8Drty/desktop/4_single_item.png",
        alt: ""
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "platba-krok-č1",
      children: "Platba krok č.1"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://bitbucket.org/st10-st18-st34-lendify/repo_sthdf_2024-2025/raw/14bdf4f8332732ae116e180f7b59cc890f1766bd/n%C3%A1%C4%8Drty/Fin%C3%A1lne%20n%C3%A1%C4%8Drty/desktop/5_checkout.png",
        alt: ""
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "platba-krok-č2",
      children: "Platba krok č.2"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://bitbucket.org/st10-st18-st34-lendify/repo_sthdf_2024-2025/raw/14bdf4f8332732ae116e180f7b59cc890f1766bd/n%C3%A1%C4%8Drty/Fin%C3%A1lne%20n%C3%A1%C4%8Drty/desktop/6_payment_details.png",
        alt: ""
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "platba-krok-č3",
      children: "Platba krok č.3"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://bitbucket.org/st10-st18-st34-lendify/repo_sthdf_2024-2025/raw/14bdf4f8332732ae116e180f7b59cc890f1766bd/n%C3%A1%C4%8Drty/Fin%C3%A1lne%20n%C3%A1%C4%8Drty/desktop/7_summary.png",
        alt: ""
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "stránka-používateľa",
      children: "Stránka používateľa"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://bitbucket.org/st10-st18-st34-lendify/repo_sthdf_2024-2025/raw/14bdf4f8332732ae116e180f7b59cc890f1766bd/n%C3%A1%C4%8Drty/Fin%C3%A1lne%20n%C3%A1%C4%8Drty/desktop/8_personal_user_page.png",
        alt: ""
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "klikateľný-prototyp",
      children: "Klikateľný prototyp"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Po iteráciach nad low-fidelity prototypom, sme vytvorili finálny, ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://bitbucket.org/st10-st18-st34-lendify/repo_sthdf_2024-2025/src/_2024_PRJ_01-ST10-ST18-ST34-Lendify/klikate%C4%BEn%C3%BD%20prototyp/Lendify-Prototype.mp4",
        children: "klikateľný prototyp"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "prihlásenie",
      children: "Prihlásenie"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://bitbucket.org/st10-st18-st34-lendify/repo_sthdf_2024-2025/raw/ccda4363efeab853e69ba8b4294b9fda269a4895/klikate%C4%BEn%C3%BD%20prototyp/images/login.png",
        alt: ""
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "domovská-stránka-1",
      children: "Domovská stránka"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://bitbucket.org/st10-st18-st34-lendify/repo_sthdf_2024-2025/raw/ccda4363efeab853e69ba8b4294b9fda269a4895/klikate%C4%BEn%C3%BD%20prototyp/images/homepage.png",
        alt: ""
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "katalóg-produktov-1",
      children: "Katalóg produktov"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://bitbucket.org/st10-st18-st34-lendify/repo_sthdf_2024-2025/raw/ccda4363efeab853e69ba8b4294b9fda269a4895/klikate%C4%BEn%C3%BD%20prototyp/images/Catalog.png",
        alt: ""
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "stránka-produktu-1",
      children: "Stránka produktu"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://bitbucket.org/st10-st18-st34-lendify/repo_sthdf_2024-2025/raw/ccda4363efeab853e69ba8b4294b9fda269a4895/klikate%C4%BEn%C3%BD%20prototyp/images/SingleItem.png",
        alt: ""
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "pridanie-nového-produktu-1",
      children: "Pridanie nového produktu"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://bitbucket.org/st10-st18-st34-lendify/repo_sthdf_2024-2025/raw/ccda4363efeab853e69ba8b4294b9fda269a4895/klikate%C4%BEn%C3%BD%20prototyp/images/addNewProduct.png",
        alt: ""
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "detail-pôžičky",
      children: "Detail pôžičky"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://bitbucket.org/st10-st18-st34-lendify/repo_sthdf_2024-2025/raw/ccda4363efeab853e69ba8b4294b9fda269a4895/klikate%C4%BEn%C3%BD%20prototyp/images/borrowDetails.png",
        alt: ""
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "platba-krok-č1-1",
      children: "Platba krok č.1"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://bitbucket.org/st10-st18-st34-lendify/repo_sthdf_2024-2025/raw/ccda4363efeab853e69ba8b4294b9fda269a4895/klikate%C4%BEn%C3%BD%20prototyp/images/checkout.png",
        alt: ""
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "platba-krok-č2-1",
      children: "Platba krok č.2"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://bitbucket.org/st10-st18-st34-lendify/repo_sthdf_2024-2025/raw/ccda4363efeab853e69ba8b4294b9fda269a4895/klikate%C4%BEn%C3%BD%20prototyp/images/checkout2.png",
        alt: ""
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "platba-krok-č3-1",
      children: "Platba krok č.3"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://bitbucket.org/st10-st18-st34-lendify/repo_sthdf_2024-2025/raw/ccda4363efeab853e69ba8b4294b9fda269a4895/klikate%C4%BEn%C3%BD%20prototyp/images/checkout3.png",
        alt: ""
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "košík",
      children: "Košík"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://bitbucket.org/st10-st18-st34-lendify/repo_sthdf_2024-2025/raw/ccda4363efeab853e69ba8b4294b9fda269a4895/klikate%C4%BEn%C3%BD%20prototyp/images/Cart.png",
        alt: ""
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3d-printing",
      children: "3D Printing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "3D Printer Creality"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PLA Material"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Material Temperature 200°"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bed Temperature 60°"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://bitbucket.org/st10-st18-st34-lendify/repo_sthdf_2024-2025/raw/accdbbda8f292bf61bc4c7ee061c27b6e7892d0d/3D%20print/images/3.png",
        alt: ""
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "3d-modeling-with-blender",
      children: "3D Modeling with Blender"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://bitbucket.org/st10-st18-st34-lendify/repo_sthdf_2024-2025/raw/accdbbda8f292bf61bc4c7ee061c27b6e7892d0d/3D%20print/images/1.png",
        alt: ""
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "cura--program-for-3d-printer",
      children: "CURA – program for 3D printer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://bitbucket.org/st10-st18-st34-lendify/repo_sthdf_2024-2025/raw/accdbbda8f292bf61bc4c7ee061c27b6e7892d0d/3D%20print/images/2.png",
        alt: ""
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "finálny-produkt",
      children: "Finálny produkt"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://bitbucket.org/st10-st18-st34-lendify/repo_sthdf_2024-2025/raw/accdbbda8f292bf61bc4c7ee061c27b6e7892d0d/3D%20print/images/4.png",
        alt: ""
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "podporné-súbory",
      children: "Podporné súbory"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          target: "_blank",
          "data-noBrokenLinkCheck": true,
          href: (__webpack_require__(74096)/* ["default"] */ .A) + "",
          children: "Lendify 3D"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          target: "_blank",
          "data-noBrokenLinkCheck": true,
          href: (__webpack_require__(27296)/* ["default"] */ .A) + "",
          children: "Analýza v1"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          target: "_blank",
          "data-noBrokenLinkCheck": true,
          href: (__webpack_require__(51264)/* ["default"] */ .A) + "",
          children: "Požiadavky v1"
        })
      }), "\n"]
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

/***/ 51264:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/files/Požiadavky v1-1afea73655c50037237266082a53e2db.docx");

/***/ }),

/***/ 74096:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/files/Lendify 3D-7683119034d5e965a086606033448821.pptx");

/***/ })

}]);