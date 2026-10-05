"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[59522],{

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

/***/ 70812:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/blight-bg-5c9bf8c071b49797669025ae87fcdab1.png");

/***/ }),

/***/ 73046:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/metostation_ai_cover-d2aea3b064d59e92d8ca859cf7335289.png");

/***/ }),

/***/ 92229:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2024_2025_class_sthdf_showcase_index_md_e77_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2024-2025-class-sthdf-showcase-index-md-e77.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2024_2025_class_sthdf_showcase_index_md_e77_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2024-2025/class-sthdf/showcase/index","title":"✨ Showcase — Best of 2024","description":"Curated highlights from student work and projects.","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2024-2025/class-sthdf/showcase/index.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2024-2025/class-sthdf/showcase","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2024-2025/class-sthdf/showcase/","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2024-2025/class-sthdf/showcase/","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"showcase","permalink":"/tags/showcase"}],"version":"current","sidebarPosition":3,"frontMatter":{"fm_version":"1.0.1","fm_build":"2026-10-05T12:53:05.779953+00:00","fm_version_comment":"","guid":"f4b746aa-fb6c-41ec-b05b-31029eacccaa","dao":"class_sthdf_dashboard","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"","type":"","priority":"","locale":"sk","created":"2026-10-05 14:53","modified":"2026-10-05 14:53","status":"backlog","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":"","title":"✨ Showcase — Best of 2024","description":"Curated highlights from student work and projects.","sidebar_label":"Showcase","sidebar_position":3,"keywords":["showcase","highlights"],"tags":["showcase"],"knife":{"type":"showcase","owner_alias":"TEACHING_TEAM","version":0.1,"status":"draft","related_prj":[],"kc_refs":[]}},"sidebar":"tutorialSidebar","previous":{"title":"Assignments & Milestones","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2024-2025/class-sthdf/conditions/"},"next":{"title":"projects","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2024-2025/projects/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2024-2025/class-sthdf/showcase/index.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2026-10-05T12:53:05.779953+00:00',
	fm_version_comment: '',
	guid: 'f4b746aa-fb6c-41ec-b05b-31029eacccaa',
	dao: 'class_sthdf_dashboard',
	author: 'Roman Kazicka',
	authors: [
		'Roman Kazicka'
	],
	category: '',
	type: '',
	priority: '',
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
	fm_reserved2: '',
	title: '✨ Showcase — Best of 2024',
	description: 'Curated highlights from student work and projects.',
	sidebar_label: 'Showcase',
	sidebar_position: 3,
	keywords: [
		'showcase',
		'highlights'
	],
	tags: [
		'showcase'
	],
	knife: {
		type: 'showcase',
		owner_alias: 'TEACHING_TEAM',
		version: 0.1,
		status: 'draft',
		related_prj: [],
		kc_refs: []
	}
};
const contentTitle = 'Showcase — Best of 2024';

const assets = {

};



const toc = [{
  "value": "B-Light — inteligentné svetlá pre cyklistov",
  "id": "b-light--inteligentné-svetlá-pre-cyklistov",
  "level": 3
}, {
  "value": "Meteostanica — modulárna domáca meteorologická stanica",
  "id": "meteostanica--modulárna-domáca-meteorologická-stanica",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    em: "em",
    h1: "h1",
    h3: "h3",
    header: "header",
    hr: "hr",
    img: "img",
    p: "p",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/",
        children: "🏠 Domov"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2024-2025/class-sthdf/",
        children: "⬅️ Nahor"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "showcase--best-of-2024",
        children: "Showcase — Best of 2024"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Výber najlepších prác ročníka 2024-2025."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "b-light--inteligentné-svetlá-pre-cyklistov",
      children: "B-Light — inteligentné svetlá pre cyklistov"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2024-2025/projects/PRJ003/",
        children: (0,jsx_runtime.jsx)(_components.img, {
          alt: "B-Light",
          src: (__webpack_require__(70812)/* ["default"] */ .A) + "",
          width: "2054",
          height: "1150"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "Adam Tomčala (ST42), Lukáš Rucek (ST38) · PRJ003 · 2024–2025"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "IoT osvetlenie na bicykel, ktoré zvyšuje bezpečnosť cyklistov: inteligentné brzdové a smerové svetlá, hlasové ovládanie a dynamické prispôsobenie podmienkam, prepojené s mobilnou aplikáciou."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2024-2025/projects/PRJ003/",
        children: "Read →"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "meteostanica--modulárna-domáca-meteorologická-stanica",
      children: "Meteostanica — modulárna domáca meteorologická stanica"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2024-2025/projects/PRJ006/",
        children: (0,jsx_runtime.jsx)(_components.img, {
          alt: "Meteostanica",
          src: (__webpack_require__(73046)/* ["default"] */ .A) + "",
          width: "1024",
          height: "1024"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "Christian Danižek, Patrik Malina, Ondrej Lesák, Dávid Kováľ · PRJ006 · 2024–2025"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cenovo dostupná, modulárna a univerzálna meteostanica z 3D tlačených dielov, Raspberry Pi a senzorov (teplota, vlhkosť, kvalita ovzdušia), integrovaná s Home Assistant."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2024-2025/projects/PRJ006/",
        children: "Read →"
      })
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



/***/ })

}]);