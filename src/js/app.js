import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'highlight.js/styles/atom-one-dark.css';

import hljs from 'highlight.js/lib/common';

import mermaid from 'mermaid';

import { marked } from 'marked';

import DOMPurify from 'dompurify';

import '../css/style.css';
/**
 * ==========================================================
 * AWS Developer Associate Manual
 * app.js
 * ==========================================================
 */

const content = document.getElementById('content');
const loader = document.getElementById('loader');

const DEFAULT_DOCUMENT = 'intro.md';

/**
 * Inicialização do Mermaid
 */
mermaid.initialize({
  startOnLoad: false,
  theme: 'dark',
});

/**
 * Lista de documentos disponíveis
 */
const DOCUMENTS = [
  'intro.md',
  'resumo.md',
  'lambda.md',
  'dynamodb.md',
  'iam.md',
  'sqs-sns.md',
  'cloudformation-sam.md',
];

/**
 * Exibe o loader
 */
function showLoader() {
  loader.classList.remove('d-none');
}

/**
 * Esconde o loader
 */
function hideLoader() {
  loader.classList.add('d-none');
}

/**
 * Atualiza o título da página
 */
function updateTitle(doc) {
  const title = doc
    .replace('.md', '')
    .replaceAll('-', ' ')
    .replace(/\b\w/g, (letter) => letter.toUpperCase());

  document.title = `AWS Developer Manual • ${title}`;
}

/**
 * Destaca o menu ativo
 */
function updateActiveMenu(doc) {
  document.querySelectorAll('.nav-link').forEach((link) => {
    link.classList.remove('active');
  });

  document.querySelector(`[data-doc="${doc}"]`)?.classList.add('active');
}

/**
 * Atualiza a URL
 */
function updateUrl(doc) {
  const url = new URL(window.location);

  url.searchParams.set('doc', doc.replace('.md', ''));

  history.replaceState({}, '', url);
}

/**
 * Gera Tabela de Conteúdo (TOC)
 */
function generateTOC() {
  const toc = document.getElementById('toc');

  toc.innerHTML = '';

  const headings = content.querySelectorAll('h1,h2,h3,h4,h5,h6');

  if (!headings.length) {
    return;
  }

  const title = document.createElement('h6');

  title.textContent = 'Conteúdo';

  toc.appendChild(title);

  const list = document.createElement('ul');

  toc.appendChild(list);

  headings.forEach((heading) => {
    if (!heading.id) {
      heading.id = heading.textContent
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^\w\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-');
    }

    const li = document.createElement('li');

    const a = document.createElement('a');

    a.href = `#${heading.id}`;

    a.textContent = heading.textContent;

    a.className = `level-${heading.tagName[1]}`;

    li.appendChild(a);

    list.appendChild(li);
  });
}

function activateTOC() {
  const links = [...document.querySelectorAll('#toc a')];

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        links.forEach((link) => link.classList.remove('active'));

        const link = document.querySelector(`#toc a[href="#${entry.target.id}"]`);

        link?.classList.add('active');
      });
    },

    {
      rootMargin: '0px 0px -80% 0px',
    },
  );

  document.querySelectorAll('#content h1,h2,h3,h4,h5,h6').forEach((heading) => {
    observer.observe(heading);
  });
}

/**
 * Renderiza o Markdown
 */
async function renderMarkdown(markdown) {
  const html = marked.parse(markdown);

  content.innerHTML = DOMPurify.sanitize(html);

  generateTOC();
  activateTOC();
  prepareMermaid();

  /**
   * Syntax Highlight
   */
  document.querySelectorAll('pre code').forEach((block) => {
    if (block.classList.contains('language-mermaid')) {
      return;
    }

    hljs.highlightElement(block);
  });

  /**
   * Renderiza Mermaid
   */
  function prepareMermaid() {
    document.querySelectorAll('pre code.language-mermaid').forEach((block) => {
      const parent = block.parentElement;

      const div = document.createElement('div');

      div.className = 'mermaid';

      div.textContent = block.textContent;

      parent.replaceWith(div);
    });
  }

  await mermaid.run();

  /**
   * Volta ao topo
   */
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

/**
 * Exibe erro
 */
function renderError(message) {
  content.innerHTML = `
        <div class="alert alert-danger shadow-sm">
            <h4 class="alert-heading">
                Erro
            </h4>

            <p class="mb-0">
                ${message}
            </p>
        </div>
    `;
}

/**
 * Carrega documento
 */
async function loadDocument(doc) {
  try {
    showLoader();

    if (!DOCUMENTS.includes(doc)) {
      throw new Error('Documento inválido.');
    }

    const response = await fetch(`${import.meta.env.BASE_URL}docs/${doc}`);

    if (!response.ok) {
      throw new Error(`Não foi possível carregar "${doc}".`);
    }

    const markdown = await response.text();

    await renderMarkdown(markdown);

    if (window.location.hash) {
      const element = document.querySelector(window.location.hash);

      element?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }

    updateActiveMenu(doc);

    updateTitle(doc);

    updateUrl(doc);
  } catch (error) {
    renderError(error.message);

    console.error(error);
  } finally {
    hideLoader();
  }
}

/**
 * Obtém documento pela Query String
 */
function getCurrentDocument() {
  const params = new URLSearchParams(window.location.search);

  return params.get('doc') ? `${params.get('doc')}.md` : DEFAULT_DOCUMENT;
}

/**
 * Navegação pelos links
 */
function bindNavigation() {
  document.querySelectorAll('[data-doc]').forEach((link) => {
    link.addEventListener('click', async (event) => {
      event.preventDefault();

      const documentName = link.dataset.doc;

      await loadDocument(documentName);
    });
  });
}

/**
 * Back / Forward do navegador
 */
window.addEventListener('popstate', () => {
  loadDocument(getCurrentDocument());
});

/**
 * Inicialização da aplicação
 */
async function initialize() {
  bindNavigation();

  await loadDocument(getCurrentDocument());
}

initialize();
