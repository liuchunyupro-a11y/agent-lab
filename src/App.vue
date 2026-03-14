<template>
  <div class="app">
    <aside class="sidebar">
      <div class="sidebar-inner">
        <div class="site-title">
          <a href="#" @click.prevent="showPanel('home')">Agent Lab</a>
        </div>
        <a href="#" class="menu-item home" :class="{ active: panel === 'home' }" @click.prevent="showPanel('home')">{{ t('nav.home') }}</a>
        <a href="#" class="menu-item about" :class="{ active: panel === 'about' }" @click.prevent="showPanel('about')">{{ t('nav.about') }}</a>

        <div class="menu-category">{{ t('nav.categoryAgentic') }}</div>
        <a href="#" class="menu-item" :class="{ active: panel === 'agentic-intro' }" @click.prevent="showPanel('agentic-intro')">{{ t('nav.agenticIntro') }}</a>
        <a href="#" class="menu-item" :class="{ active: panel === 'agentic-context' }" @click.prevent="showPanel('agentic-context')">{{ t('nav.agenticContext') }}</a>
        <a href="#" class="menu-item" :class="{ active: panel === 'agentic-rag' }" @click.prevent="showPanel('agentic-rag')">{{ t('nav.agenticRag') }}</a>
        <a href="#" class="menu-item" :class="{ active: panel === 'agentic-tool' }" @click.prevent="showPanel('agentic-tool')">{{ t('nav.agenticTool') }}</a>
        <a href="#" class="menu-item" :class="{ active: panel === 'agentic-mcp' }" @click.prevent="showPanel('agentic-mcp')">{{ t('nav.agenticMcp') }}</a>
        <a href="#" class="menu-item" :class="{ active: panel === 'agentic-skills' }" @click.prevent="showPanel('agentic-skills')">{{ t('nav.agenticSkills') }}</a>
        <a href="#" class="menu-item" :class="{ active: panel === 'agentic-workflow' }" @click.prevent="showPanel('agentic-workflow')">{{ t('nav.agenticWorkflow') }}</a>

        <div class="menu-category">{{ t('nav.categoryLang') }}</div>
        <a href="#" class="menu-item" :class="{ active: panel === 'vue' }" @click.prevent="showPanel('vue')">{{ t('nav.vue') }}</a>
        <a href="#" class="menu-item" :class="{ active: panel === 'python' }" @click.prevent="showPanel('python')">{{ t('nav.python') }}</a>
        <a href="#" class="menu-item" :class="{ active: panel === 'csharp' }" @click.prevent="showPanel('csharp')">{{ t('nav.csharp') }}</a>
        <a href="#" class="menu-item" :class="{ active: panel === 'docker-k8s' }" @click.prevent="showPanel('docker-k8s')">{{ t('nav.dockerK8s') }}</a>
      </div>
    </aside>

    <main class="content-area">
      <div class="lang-switcher">
        <button type="button" :class="{ active: locale === 'en' }" @click="setLocale('en')">EN</button>
        <span class="sep">|</span>
        <button type="button" :class="{ active: locale === 'zh-CN' }" @click="setLocale('zh-CN')">中文</button>
      </div>

      <!-- Home -->
      <div v-show="panel === 'home'" class="content-panel active">
        <div class="portal-hero">
          <h1>{{ t('home.title') }}</h1>
          <p class="tagline">{{ t('home.tagline') }}</p>
        </div>
        <div class="portal-gateways">
          <a href="#" class="portal-card" @click.prevent="showPanel('agentic-intro')">
            <span class="card-title">{{ t('home.cardAgentic') }}</span>
            <span class="card-desc">{{ t('home.cardAgenticDesc') }}</span>
            <span class="card-link">{{ t('home.cardLink') }}</span>
          </a>
          <a href="#" class="portal-card" @click.prevent="showPanel('vue')">
            <span class="card-title">{{ t('home.cardLang') }}</span>
            <span class="card-desc">{{ t('home.cardLangDesc') }}</span>
            <span class="card-link">{{ t('home.cardLink') }}</span>
          </a>
        </div>
        <div class="portal-section-title">{{ t('home.listTitle') }}</div>
        <ul class="home-list">
          <li v-for="a in homeArticles" :key="a.id">
            <a href="#" @click.prevent="showPanel(a.id)">
              <span class="item-title">{{ a.title }}</span>
              <span class="item-meta">{{ a.meta }}</span>
              <span class="item-excerpt">{{ a.excerpt }}</span>
            </a>
          </li>
        </ul>
      </div>

      <!-- About -->
      <div v-show="panel === 'about'" class="content-panel active">
        <div class="article-header">
          <h1 class="article-title">{{ t('about.title') }}</h1>
        </div>
        <div class="article-body">
          <p>{{ t('about.intro') }}</p>
          <ul>
            <li v-for="(item, i) in aboutList" :key="i">{{ item }}</li>
          </ul>
          <p>{{ t('about.footer') }}</p>
        </div>
      </div>

      <!-- Article -->
      <div v-for="id in articleIds" :key="id" v-show="panel === id" class="content-panel active">
        <template v-if="article(id)">
          <div class="article-header">
            <h1 class="article-title">{{ articleTitle(id) }}</h1>
            <div class="article-meta">{{ article(id).meta }}</div>
          </div>
          <div class="article-body">
            <template v-for="(block, bi) in article(id).body" :key="bi">
              <p v-if="block.t === 'p'" v-html="format(block.c)"></p>
              <h2 v-else-if="block.t === 'h2'">{{ block.c }}</h2>
              <ul v-else-if="block.t === 'ul'">
                <li v-for="(item, ii) in block.c" :key="ii" v-html="format(item)"></li>
              </ul>
            </template>
          </div>
        </template>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import en from './locales/en'
import zhCN from './locales/zh-CN'

const messages = { en, 'zh-CN': zhCN }
const { t, locale } = useI18n()

const validPanels = ['home', 'about', 'agentic-intro', 'agentic-context', 'agentic-rag', 'agentic-tool', 'agentic-mcp', 'agentic-skills', 'agentic-workflow', 'vue', 'python', 'csharp', 'docker-k8s']
const panel = ref('home')

function getPanelFromHash() {
  const hash = window.location.hash.slice(1) || ''
  const id = hash.split('?')[0]
  return validPanels.includes(id) ? id : 'home'
}

onMounted(() => {
  panel.value = getPanelFromHash()
  window.addEventListener('hashchange', () => { panel.value = getPanelFromHash() })
})

watch(locale, (l) => {
  document.documentElement.lang = l === 'zh-CN' ? 'zh-CN' : 'en'
}, { immediate: true })

const articleIds = [
  'agentic-intro', 'agentic-context', 'agentic-rag', 'agentic-tool',
  'agentic-mcp', 'agentic-skills', 'agentic-workflow',
  'vue', 'python', 'csharp', 'docker-k8s',
]

const homeArticles = computed(() => messages[locale.value]?.home?.articles ?? [])
const aboutList = computed(() => messages[locale.value]?.about?.list ?? [])

function showPanel(id) {
  const next = id || 'home'
  panel.value = next
  const hash = next === 'home' ? '' : next
  if (window.location.hash.slice(1) !== hash) {
    window.history.replaceState(null, '', window.location.pathname + (hash ? '#' + hash : ''))
  }
}

function setLocale(l) {
  locale.value = l
}

function article(id) {
  return messages[locale.value]?.articles?.[id] ?? null
}

function articleTitle(id) {
  const a = homeArticles.value.find(x => x.id === id)
  return a ? a.title : id
}

function format(s) {
  if (typeof s !== 'string') return ''
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
}
</script>

<style scoped>
.app { display: flex; min-height: 100vh; }
</style>

<style>
:root {
  --bg: #0d1117;
  --bg-card: #161b22;
  --border: #30363d;
  --text: #e6edf3;
  --text-muted: #8b949e;
  --accent: #58a6ff;
  --accent-soft: rgba(88, 166, 255, 0.15);
  --font-sans: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'JetBrains Mono', ui-monospace, monospace;
  --sidebar-width: 220px;
}

* { box-sizing: border-box; margin: 0; padding: 0; }
html, body { height: 100%; }
body {
  font-family: var(--font-sans);
  background: var(--bg);
  color: var(--text);
  line-height: 1.7;
  font-size: 16px;
}

.content-area { position: relative; }
.lang-switcher {
  position: absolute;
  top: 16px;
  right: 24px;
  font-size: 0.875rem;
  color: var(--text-muted);
}
.lang-switcher button {
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  padding: 2px 6px;
  border-radius: 4px;
}
.lang-switcher button:hover { color: var(--text); }
.lang-switcher button.active { color: var(--accent); font-weight: 600; }
.lang-switcher .sep { margin: 0 6px; opacity: 0.6; }

aside.sidebar {
  width: var(--sidebar-width);
  min-width: var(--sidebar-width);
  background: var(--bg);
  border-right: 1px solid var(--border);
  padding: 24px 0;
  flex-shrink: 0;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  overflow-y: auto;
}
.sidebar-inner { padding: 0 16px; }
.sidebar .site-title { font-size: 1rem; font-weight: 700; padding: 0 12px 20px; border-bottom: 1px solid var(--border); margin-bottom: 20px; }
.sidebar .site-title a { color: var(--text); text-decoration: none; }
.sidebar .site-title a:hover { color: var(--accent); }
.sidebar .menu-category {
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-muted);
  padding: 12px 12px 6px;
  margin-top: 8px;
}
.sidebar .menu-category:first-of-type { margin-top: 0; }
.sidebar .menu-item {
  display: block;
  padding: 8px 12px;
  color: var(--text-muted);
  text-decoration: none;
  font-size: 0.9rem;
  border-radius: 6px;
  margin-bottom: 2px;
  transition: color 0.15s, background 0.15s;
}
.sidebar .menu-item:hover { color: var(--text); background: var(--accent-soft); }
.sidebar .menu-item.active { color: var(--accent); background: var(--accent-soft); }
.sidebar .menu-item.home { font-weight: 600; color: var(--text); }

main.content-area {
  flex: 1;
  margin-left: var(--sidebar-width);
  min-height: 100%;
  padding: 32px 40px 48px;
  max-width: 720px;
}

.portal-hero { padding: 24px 0 40px; border-bottom: 1px solid var(--border); margin-bottom: 40px; }
.portal-hero h1 { font-size: clamp(1.75rem, 4vw, 2.25rem); font-weight: 700; margin-bottom: 12px; }
.portal-hero .tagline { color: var(--text-muted); font-size: 1.05rem; max-width: 480px; }

.portal-gateways {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}
.portal-card {
  display: block;
  padding: 24px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 12px;
  text-decoration: none;
  color: inherit;
  transition: border-color 0.2s, box-shadow 0.2s;
}
.portal-card:hover { border-color: var(--accent); box-shadow: 0 0 0 1px var(--accent); }
.portal-card .card-title { font-size: 1.1rem; font-weight: 700; margin-bottom: 8px; color: var(--text); }
.portal-card .card-desc { color: var(--text-muted); font-size: 0.9rem; line-height: 1.5; margin-bottom: 12px; }
.portal-card .card-link { font-size: 0.875rem; color: var(--accent); font-weight: 500; }
.portal-card .card-link::after { content: " →"; }

.portal-section-title {
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-muted);
  margin-bottom: 16px;
}

.home-list { list-style: none; }
.home-list li { margin-bottom: 16px; }
.home-list a {
  display: block;
  padding: 16px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 8px;
  text-decoration: none;
  color: var(--text);
  transition: border-color 0.15s;
}
.home-list a:hover { border-color: var(--accent); }
.home-list .item-title { font-weight: 600; margin-bottom: 4px; }
.home-list .item-meta { color: var(--text-muted); font-size: 0.875rem; margin-bottom: 6px; }
.home-list .item-excerpt { color: var(--text-muted); font-size: 0.9rem; }

.article-header { margin-bottom: 28px; }
.article-title { font-size: 1.5rem; font-weight: 700; line-height: 1.3; margin-bottom: 10px; }
.article-meta { color: var(--text-muted); font-size: 0.875rem; }
.article-body { font-size: 1rem; }
.article-body :deep(h2) { font-size: 1.15rem; font-weight: 600; margin: 28px 0 12px; color: var(--text); }
.article-body :deep(h2:first-child) { margin-top: 0; }
.article-body :deep(p) { margin-bottom: 16px; color: var(--text-muted); }
.article-body :deep(p:last-child) { margin-bottom: 0; }
.article-body :deep(code) {
  font-family: var(--font-mono);
  font-size: 0.88em;
  background: var(--bg-card);
  padding: 2px 6px;
  border-radius: 4px;
  color: var(--accent);
}
.article-body :deep(ul) { margin: 16px 0; padding-left: 1.4em; color: var(--text-muted); }
.article-body :deep(li) { margin-bottom: 6px; }

@media (max-width: 768px) {
  .app { flex-direction: column; }
  aside.sidebar {
    position: relative;
    width: 100%;
    min-width: 100%;
    border-right: none;
    border-bottom: 1px solid var(--border);
    padding: 16px 0;
  }
  .sidebar-inner { display: flex; flex-wrap: wrap; gap: 8px; align-items: center; }
  .sidebar .site-title { padding: 0 12px 0 0; margin: 0; border: none; }
  .sidebar .menu-category { padding: 0 8px 0 0; margin: 0; }
  .sidebar .menu-item { display: inline-block; margin: 0; }
  main.content-area { margin-left: 0; padding: 24px 20px; }
  .lang-switcher { right: 20px; }
}
</style>
