import { minify } from 'terser';

function initTheme() {
  // Language init
  const storedLang = localStorage.getItem('language');
  const browserLang = navigator.language.toLowerCase();
  const prefersFinnish = browserLang.startsWith('fi');
  const lang = storedLang || (prefersFinnish ? 'fi' : 'en');
  document.documentElement.setAttribute('lang', lang);

  const storedTheme = localStorage.getItem('theme');
  if (storedTheme) {
    document.documentElement.setAttribute('data-theme', storedTheme);
  } else {
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    if (prefersLight) {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }
}

const code = `(${initTheme.toString()})();`;

// Minify using Terser in production builds
let minifiedCode = code;
if (process.env.NODE_ENV === 'production') {
  const result = await minify(code, {
    compress: true,
    mangle: true,
  });
  minifiedCode = result.code || code;
}

export const themeInitScript = minifiedCode;
