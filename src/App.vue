<template>
  <div class="app">
    <aside class="sidebar">
      <div class="sidebar-inner">
        <div class="site-title">
          <a href="#" @click.prevent="showPanel('home')">Agent Lab</a>
        </div>
        <a href="#" class="menu-item home" :class="{ active: panel === 'home' }" @click.prevent="showPanel('home')">{{ t('nav.home') }}</a>

        <button type="button" class="menu-category menu-category-toggle" :class="{ open: agenticOpen }" @click="agenticOpen = !agenticOpen" :aria-expanded="agenticOpen">
          <span class="menu-category-chevron" :class="{ open: agenticOpen }" aria-hidden="true"></span>
          {{ t('nav.categoryAgentic') }}
        </button>
        <div v-show="agenticOpen" class="menu-category-body">
          <a href="#" class="menu-item" :class="{ active: panel === 'agentic-intro' }" @click.prevent="showPanel('agentic-intro')">{{ t('nav.agenticIntro') }}</a>

          <button type="button" class="menu-sub-toggle" :class="{ open: agentPatternsOpen }" @click.stop="agentPatternsOpen = !agentPatternsOpen" :aria-expanded="agentPatternsOpen">
            <span class="menu-category-chevron" :class="{ open: agentPatternsOpen }" aria-hidden="true"></span>
            {{ t('nav.agenticDesignPatterns') }}
          </button>
          <div v-show="agentPatternsOpen" class="menu-category-body menu-sub-body">
            <a href="#" class="menu-item menu-item-sub" :class="{ active: panel === 'agent-pattern-react' }" @click.prevent="showPanel('agent-pattern-react')">{{ t('nav.agentPatternReact') }}</a>
            <a href="#" class="menu-item menu-item-sub" :class="{ active: panel === 'agent-pattern-plan-execute' }" @click.prevent="showPanel('agent-pattern-plan-execute')">{{ t('nav.agentPatternPlanExecute') }}</a>
            <a href="#" class="menu-item menu-item-sub" :class="{ active: panel === 'agent-pattern-rewoo' }" @click.prevent="showPanel('agent-pattern-rewoo')">{{ t('nav.agentPatternRewoo') }}</a>
            <a href="#" class="menu-item menu-item-sub" :class="{ active: panel === 'agent-pattern-llm-compiler' }" @click.prevent="showPanel('agent-pattern-llm-compiler')">{{ t('nav.agentPatternLlmCompiler') }}</a>
            <a href="#" class="menu-item menu-item-sub" :class="{ active: panel === 'agent-pattern-basic-reflection' }" @click.prevent="showPanel('agent-pattern-basic-reflection')">{{ t('nav.agentPatternBasicReflection') }}</a>
            <a href="#" class="menu-item menu-item-sub" :class="{ active: panel === 'agent-pattern-reflexion' }" @click.prevent="showPanel('agent-pattern-reflexion')">{{ t('nav.agentPatternReflexion') }}</a>
            <a href="#" class="menu-item menu-item-sub" :class="{ active: panel === 'agent-pattern-lats' }" @click.prevent="showPanel('agent-pattern-lats')">{{ t('nav.agentPatternLats') }}</a>
            <a href="#" class="menu-item menu-item-sub" :class="{ active: panel === 'agent-pattern-self-discover' }" @click.prevent="showPanel('agent-pattern-self-discover')">{{ t('nav.agentPatternSelfDiscover') }}</a>
            <a href="#" class="menu-item menu-item-sub" :class="{ active: panel === 'agent-pattern-storm' }" @click.prevent="showPanel('agent-pattern-storm')">{{ t('nav.agentPatternStorm') }}</a>
          </div>

          <button type="button" class="menu-sub-toggle" :class="{ open: contextOpen }" @click.stop="contextOpen = !contextOpen" :aria-expanded="contextOpen">
            <span class="menu-category-chevron" :class="{ open: contextOpen }" aria-hidden="true"></span>
            {{ t('nav.agenticContext') }}
          </button>
          <div v-show="contextOpen" class="menu-category-body menu-sub-body">
            <a href="#" class="menu-item menu-item-sub" :class="{ active: panel === 'agentic-context' }" @click.prevent="showPanel('agentic-context')">{{ t('nav.agenticContext') }}</a>
            <a href="#" class="menu-item menu-item-sub" :class="{ active: panel === 'context-sliding-window' }" @click.prevent="showPanel('context-sliding-window')">{{ t('nav.contextSlidingWindow') }}</a>
            <a href="#" class="menu-item menu-item-sub" :class="{ active: panel === 'context-summary' }" @click.prevent="showPanel('context-summary')">{{ t('nav.contextSummary') }}</a>
            <a href="#" class="menu-item menu-item-sub" :class="{ active: panel === 'context-priority' }" @click.prevent="showPanel('context-priority')">{{ t('nav.contextPriority') }}</a>
            <a href="#" class="menu-item menu-item-sub" :class="{ active: panel === 'context-memory' }" @click.prevent="showPanel('context-memory')">{{ t('nav.contextMemory') }}</a>
            <a href="#" class="menu-item menu-item-sub" :class="{ active: panel === 'context-long' }" @click.prevent="showPanel('context-long')">{{ t('nav.contextLong') }}</a>
            <a href="#" class="menu-item menu-item-sub" :class="{ active: panel === 'context-memory-trends' }" @click.prevent="showPanel('context-memory-trends')">{{ t('nav.contextMemoryTrends') }}</a>
          </div>

          <button type="button" class="menu-sub-toggle" :class="{ open: ragOpen }" @click.stop="ragOpen = !ragOpen" :aria-expanded="ragOpen">
            <span class="menu-category-chevron" :class="{ open: ragOpen }" aria-hidden="true"></span>
            {{ t('nav.agenticRag') }}
          </button>
          <div v-show="ragOpen" class="menu-category-body menu-sub-body">
            <a href="#" class="menu-item menu-item-sub" :class="{ active: panel === 'agentic-rag' }" @click.prevent="showPanel('agentic-rag')">{{ t('nav.agenticRag') }}</a>
            <a href="#" class="menu-item menu-item-sub" :class="{ active: panel === 'native-rag' }" @click.prevent="showPanel('native-rag')">{{ t('nav.nativeRag') }}</a>
            <a href="#" class="menu-item menu-item-sub" :class="{ active: panel === 'rag-12-architectures' }" @click.prevent="showPanel('rag-12-architectures')">{{ t('nav.rag12Architectures') }}</a>
            <a href="#" class="menu-item menu-item-sub" :class="{ active: panel === 'rag-mia' }" @click.prevent="showPanel('rag-mia')">{{ t('nav.ragMia') }}</a>
            <a href="#" class="menu-item menu-item-sub" :class="{ active: panel === 'rag-hgmem' }" @click.prevent="showPanel('rag-hgmem')">{{ t('nav.ragHgmem') }}</a>
            <a href="#" class="menu-item menu-item-sub" :class="{ active: panel === 'rag-quco' }" @click.prevent="showPanel('rag-quco')">{{ t('nav.ragQuco') }}</a>
            <a href="#" class="menu-item menu-item-sub" :class="{ active: panel === 'rag-hifi' }" @click.prevent="showPanel('rag-hifi')">{{ t('nav.ragHifi') }}</a>
            <a href="#" class="menu-item menu-item-sub" :class="{ active: panel === 'rag-bidirectional' }" @click.prevent="showPanel('rag-bidirectional')">{{ t('nav.ragBidirectional') }}</a>
            <a href="#" class="menu-item menu-item-sub" :class="{ active: panel === 'rag-tv' }" @click.prevent="showPanel('rag-tv')">{{ t('nav.ragTv') }}</a>
            <a href="#" class="menu-item menu-item-sub" :class="{ active: panel === 'rag-megarag' }" @click.prevent="showPanel('rag-megarag')">{{ t('nav.ragMegarag') }}</a>
            <a href="#" class="menu-item menu-item-sub" :class="{ active: panel === 'rag-affordance' }" @click.prevent="showPanel('rag-affordance')">{{ t('nav.ragAffordance') }}</a>
            <a href="#" class="menu-item menu-item-sub" :class="{ active: panel === 'rag-graph-o1' }" @click.prevent="showPanel('rag-graph-o1')">{{ t('nav.ragGraphO1') }}</a>
            <a href="#" class="menu-item menu-item-sub" :class="{ active: panel === 'rag-sign' }" @click.prevent="showPanel('rag-sign')">{{ t('nav.ragSign') }}</a>
            <a href="#" class="menu-item menu-item-sub" :class="{ active: panel === 'rag-multilingual' }" @click.prevent="showPanel('rag-multilingual')">{{ t('nav.ragMultilingual') }}</a>
            <a href="#" class="menu-item menu-item-sub" :class="{ active: panel === 'rag-part-mask' }" @click.prevent="showPanel('rag-part-mask')">{{ t('nav.ragPartMask') }}</a>
          </div>

          <a href="#" class="menu-item" :class="{ active: panel === 'agentic-tool' }" @click.prevent="showPanel('agentic-tool')">{{ t('nav.agenticTool') }}</a>

          <button type="button" class="menu-sub-toggle" :class="{ open: skillsOpen }" @click.stop="skillsOpen = !skillsOpen" :aria-expanded="skillsOpen">
            <span class="menu-category-chevron" :class="{ open: skillsOpen }" aria-hidden="true"></span>
            {{ t('nav.agenticSkills') }}
          </button>
          <div v-show="skillsOpen" class="menu-category-body menu-sub-body">
            <a href="#" class="menu-item menu-item-sub" :class="{ active: panel === 'agentic-skills' }" @click.prevent="showPanel('agentic-skills')">{{ t('nav.skillsOverview') }}</a>
            <a href="#" class="menu-item menu-item-sub" :class="{ active: panel === 'skill-pdf' }" @click.prevent="showPanel('skill-pdf')">{{ t('nav.skillPdf') }}</a>
          </div>

          <button type="button" class="menu-sub-toggle" :class="{ open: workflowOpen }" @click.stop="workflowOpen = !workflowOpen" :aria-expanded="workflowOpen">
            <span class="menu-category-chevron" :class="{ open: workflowOpen }" aria-hidden="true"></span>
            {{ t('nav.agenticWorkflow') }}
          </button>
          <div v-show="workflowOpen" class="menu-category-body menu-sub-body">
            <a href="#" class="menu-item menu-item-sub" :class="{ active: panel === 'agentic-workflow' }" @click.prevent="showPanel('agentic-workflow')">{{ t('nav.workflowOverview') }}</a>
            <a href="#" class="menu-item menu-item-sub" :class="{ active: panel === 'workflow-executors-edges' }" @click.prevent="showPanel('workflow-executors-edges')">{{ t('nav.workflowExecutorsEdges') }}</a>
            <a href="#" class="menu-item menu-item-sub" :class="{ active: panel === 'workflow-control-checkpoints' }" @click.prevent="showPanel('workflow-control-checkpoints')">{{ t('nav.workflowControlCheckpoints') }}</a>
            <a href="#" class="menu-item menu-item-sub" :class="{ active: panel === 'workflow-multi-agent' }" @click.prevent="showPanel('workflow-multi-agent')">{{ t('nav.workflowMultiAgent') }}</a>
            <a href="#" class="menu-item menu-item-sub" :class="{ active: panel === 'workflow-integration' }" @click.prevent="showPanel('workflow-integration')">{{ t('nav.workflowIntegration') }}</a>
          </div>
        </div>

        <button type="button" class="menu-category menu-category-toggle" :class="{ open: protocolOpen }" @click="protocolOpen = !protocolOpen" :aria-expanded="protocolOpen">
          <span class="menu-category-chevron" :class="{ open: protocolOpen }" aria-hidden="true"></span>
          {{ t('nav.categoryProtocols') }}
        </button>
        <div v-show="protocolOpen" class="menu-category-body">
          <a href="#" class="menu-item" :class="{ active: panel === 'protocol-overview' }" @click.prevent="showPanel('protocol-overview')">{{ t('nav.protocolOverview') }}</a>
          <a href="#" class="menu-item" :class="{ active: panel === 'agentic-mcp' }" @click.prevent="showPanel('agentic-mcp')">{{ t('nav.agenticMcp') }}</a>
          <a href="#" class="menu-item" :class="{ active: panel === 'protocol-a2a' }" @click.prevent="showPanel('protocol-a2a')">{{ t('nav.protocolA2a') }}</a>
          <a href="#" class="menu-item" :class="{ active: panel === 'protocol-agui' }" @click.prevent="showPanel('protocol-agui')">{{ t('nav.protocolAgui') }}</a>
        </div>

        <button type="button" class="menu-category menu-category-toggle" :class="{ open: langOpen }" @click="langOpen = !langOpen" :aria-expanded="langOpen">
          <span class="menu-category-chevron" :class="{ open: langOpen }" aria-hidden="true"></span>
          {{ t('nav.categoryLang') }}
        </button>
        <div v-show="langOpen" class="menu-category-body">
          <a href="#" class="menu-item" :class="{ active: panel === 'lang-frameworks-intro' }" @click.prevent="showPanel('lang-frameworks-intro')">{{ t('nav.langOverview') }}</a>
          <a href="#" class="menu-item" :class="{ active: panel === 'lang-frameworks-scenarios' }" @click.prevent="showPanel('lang-frameworks-scenarios')">{{ t('nav.langScenarios') }}</a>
        </div>

        <button type="button" class="menu-category menu-category-toggle" :class="{ open: agentToolsOpen }" @click="agentToolsOpen = !agentToolsOpen" :aria-expanded="agentToolsOpen">
          <span class="menu-category-chevron" :class="{ open: agentToolsOpen }" aria-hidden="true"></span>
          {{ t('nav.categoryAgentTools') }}
        </button>
        <div v-show="agentToolsOpen" class="menu-category-body">
          <a href="#" class="menu-item" :class="{ active: panel === 'agent-tools' }" @click.prevent="showPanel('agent-tools')">{{ t('nav.agentTools') }}</a>
          <a href="#" class="menu-item" :class="{ active: panel === 'llm-vendors' }" @click.prevent="showPanel('llm-vendors')">{{ t('nav.llmVendors') }}</a>
        </div>
        <a href="#" class="menu-item" :class="{ active: panel === 'about' }" @click.prevent="showPanel('about')">{{ t('nav.about') }}</a>
      </div>
    </aside>

    <main class="content-area">
      <div class="content-area-inner">
      <div class="lang-switcher">
        <button type="button" :class="{ active: locale === 'en' }" @click="setLocale('en')">EN</button>
        <span class="sep">|</span>
        <button type="button" :class="{ active: locale === 'zh-CN' }" @click="setLocale('zh-CN')">中文</button>
      </div>

      <!-- Home -->
      <div v-show="panel === 'home'" class="content-panel active">
        <div class="portal-hero">
          <span class="hero-badge">{{ t('home.blogBadge') }}</span>
          <h1>{{ t('home.title') }}</h1>
          <p class="tagline">{{ t('home.tagline') }}</p>
          <p class="tagline-detail">{{ t('home.taglineDetail') }}</p>
        </div>
        <div class="portal-gateways">
          <a href="#" class="portal-card portal-card-agentic" @click.prevent="showPanel('agentic-intro')">
            <span class="card-title">{{ t('home.cardAgentic') }}</span>
            <span class="card-desc">{{ t('home.cardAgenticDesc') }}</span>
            <span class="card-link">{{ t('home.cardLink') }}</span>
          </a>
          <a href="#" class="portal-card" @click.prevent="scrollToBlog">
            <span class="card-title">{{ t('home.cardBlog') }}</span>
            <span class="card-desc">{{ t('home.cardBlogDesc') }}</span>
            <span class="card-link">{{ t('home.cardLink') }}</span>
          </a>
          <a href="#" class="portal-card" @click.prevent="showPanel('lang-frameworks-intro')">
            <span class="card-title">{{ t('home.cardLang') }}</span>
            <span class="card-desc">{{ t('home.cardLangDesc') }}</span>
            <span class="card-link">{{ t('home.cardLink') }}</span>
          </a>
          <a href="#" class="portal-card" @click.prevent="showPanel('about')">
            <span class="card-title">{{ t('home.cardAbout') }}</span>
            <span class="card-desc">{{ t('home.cardAboutDesc') }}</span>
            <span class="card-link">{{ t('home.cardLink') }}</span>
          </a>
        </div>

        <section class="portal-section agentic-section">
          <h2 class="portal-section-title">{{ t('home.agenticSectionTitle') }}</h2>
          <p class="portal-section-desc">{{ t('home.agenticSectionDesc') }}</p>
          <div class="agentic-grid">
            <a v-for="a in agenticArticles" :key="a.id" href="#" class="agentic-card" @click.prevent="showPanel(a.id)">
              <span class="agentic-card-title">{{ a.title }}</span>
              <span class="agentic-card-excerpt">{{ a.excerpt }}</span>
            </a>
          </div>
        </section>

        <section id="blog" class="portal-section blog-section">
          <h2 class="portal-section-title">{{ t('home.blogSectionTitle') }}</h2>
          <p class="blog-intro">{{ t('home.blogSectionIntro') }}</p>
          <div class="portal-section-title portal-list-label">{{ t('home.listTitle') }}</div>
          <ul class="home-list">
            <li v-for="a in homeArticles" :key="a.id">
              <a href="#" @click.prevent="showPanel(a.id)">
                <span class="item-title">{{ a.title }}</span>
                <span class="item-meta">{{ a.meta }}</span>
                <span class="item-excerpt">{{ a.excerpt }}</span>
              </a>
            </li>
          </ul>
        </section>
      </div>

      <!-- Article (single panel, switch by currentArticle) -->
      <div v-show="currentArticle" class="content-panel active">
        <template v-if="currentArticle">
          <div class="article-header">
            <h1 class="article-title">{{ currentArticleTitle }}</h1>
            <div class="article-meta">{{ currentArticle.meta }}</div>
          </div>
          <div class="article-body">
            <template v-for="(block, bi) in currentArticle.body" :key="bi">
              <p v-if="block.t === 'p'" v-html="format(block.c)"></p>
              <h2 v-else-if="block.t === 'h2'">{{ block.c }}</h2>
              <ul v-else-if="block.t === 'ul'">
                <li v-for="(item, ii) in block.c" :key="ii" v-html="format(item)"></li>
              </ul>
              <div v-else-if="block.t === 'mermaid'" class="article-diagram-wrap">
                <div class="article-diagram-main">
                  <div class="mermaid" :data-mermaid-id="`mermaid-${panel}-${bi}`">{{ block.c }}</div>
                  <button type="button" class="article-diagram-zoom-btn" :aria-label="t('article.enlargeDiagram')" @click="openDiagramZoom(panel, bi, block.c)">
                    {{ t('article.enlargeDiagram') }}
                  </button>
                </div>
              </div>
              <div v-else-if="block.t === 'code'" class="article-code-wrap">
                <pre class="article-code"><code :class="'language-' + (block.lang || 'text')">{{ block.c }}</code></pre>
              </div>
              <p v-else-if="block.t === 'raw'" class="article-raw" v-html="block.c"></p>
              <div v-else-if="block.t === 'table'" class="article-table-wrap">
                <table class="article-table">
                  <thead>
                    <tr>
                      <th v-for="(h, hi) in block.c.headers" :key="hi" v-html="format(h)"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(row, ri) in block.c.rows" :key="ri">
                      <td v-for="(cell, ci) in row" :key="ci" v-html="format(cell)"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </template>
          </div>
          <nav v-if="prevSection || nextSection" class="article-section-nav">
            <a v-if="prevSection" href="#" class="article-section-nav-btn prev" @click.prevent="showPanel(prevSection.id)">
              <span class="nav-label">{{ t('article.prevSection') }}</span>
              <span class="nav-title">{{ prevSection.title }}</span>
            </a>
            <a v-if="nextSection" href="#" class="article-section-nav-btn next" @click.prevent="showPanel(nextSection.id)">
              <span class="nav-label">{{ t('article.nextSection') }}</span>
              <span class="nav-title">{{ nextSection.title }}</span>
            </a>
          </nav>
        </template>
      </div>
      </div>
    </main>
  </div>

  <!-- Diagram zoom modal -->
  <Teleport to="body">
    <Transition name="diagram-modal">
      <div v-if="expandedDiagram" class="diagram-modal-overlay" @click.self="closeDiagramZoom">
        <div class="diagram-modal">
          <div class="diagram-modal-content">
            <div ref="modalMermaidRef" class="mermaid diagram-modal-mermaid" :data-mermaid-id="'diagram-modal'">{{ expandedDiagram.code }}</div>
          </div>
          <button type="button" class="diagram-modal-close" :aria-label="t('article.closeDiagram')" @click="closeDiagramZoom">{{ t('article.closeDiagram') }}</button>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, computed, watch, onMounted, nextTick } from 'vue'
import { useI18n } from 'vue-i18n'
import mermaid from 'mermaid'
import en from './locales/en'
import zhCN from './locales/zh-CN'

const messages = { en, 'zh-CN': zhCN }
const { t, locale } = useI18n()

const validPanels = ['home', 'about', 'agent-tools', 'llm-vendors', 'agentic-intro', 'agentic-context', 'context-sliding-window', 'context-summary', 'context-priority', 'context-memory', 'context-long', 'context-memory-trends', 'agentic-rag', 'native-rag', 'rag-12-architectures', 'rag-mia', 'rag-hgmem', 'rag-quco', 'rag-hifi', 'rag-bidirectional', 'rag-tv', 'rag-megarag', 'rag-affordance', 'rag-graph-o1', 'rag-sign', 'rag-multilingual', 'rag-part-mask', 'agentic-tool', 'agentic-skills', 'skill-pdf', 'agentic-workflow', 'workflow-executors-edges', 'workflow-control-checkpoints', 'workflow-multi-agent', 'workflow-integration', 'protocol-overview', 'agentic-mcp', 'protocol-a2a', 'protocol-agui', 'lang-frameworks-intro', 'lang-frameworks-scenarios']
const panel = ref('home')
const expandedDiagram = ref(null)
const modalMermaidRef = ref(null)
const agenticOpen = ref(true)
const skillsOpen = ref(false)
const protocolOpen = ref(false)
const langOpen = ref(false)
const agentToolsOpen = ref(false)
const agentPatternsOpen = ref(false)
const contextOpen = ref(false)
const ragOpen = ref(false)
const workflowOpen = ref(false)

const agentPatternsPanelIds = ['agent-pattern-react', 'agent-pattern-plan-execute', 'agent-pattern-rewoo', 'agent-pattern-llm-compiler', 'agent-pattern-basic-reflection', 'agent-pattern-reflexion', 'agent-pattern-lats', 'agent-pattern-self-discover', 'agent-pattern-storm']
const contextPanelIds = ['agentic-context', 'context-sliding-window', 'context-summary', 'context-priority', 'context-memory', 'context-long', 'context-memory-trends']
const ragPanelIds = ['agentic-rag', 'native-rag', 'rag-12-architectures', 'rag-mia', 'rag-hgmem', 'rag-quco', 'rag-hifi', 'rag-bidirectional', 'rag-tv', 'rag-megarag', 'rag-affordance', 'rag-graph-o1', 'rag-sign', 'rag-multilingual', 'rag-part-mask']
const workflowPanelIds = ['agentic-workflow', 'workflow-executors-edges', 'workflow-control-checkpoints', 'workflow-multi-agent', 'workflow-integration']
const skillsPanelIds = ['agentic-skills', 'skill-pdf']
const protocolPanelIds = ['protocol-overview', 'agentic-mcp', 'protocol-a2a', 'protocol-agui']
const agenticPanelIds = ['agentic-intro', ...agentPatternsPanelIds, ...contextPanelIds, ...ragPanelIds, 'agentic-tool', ...skillsPanelIds, ...workflowPanelIds]
const langPanelIds = ['lang-frameworks-intro', 'lang-frameworks-scenarios']
const agentToolsPanelIds = ['agent-tools', 'llm-vendors']

/** All section IDs in sidebar order (for prev/next navigation). */
const sectionOrder = [...agenticPanelIds, ...protocolPanelIds, ...langPanelIds, ...agentToolsPanelIds, 'about']

function getPanelFromHash() {
  const hash = window.location.hash.slice(1) || ''
  const id = hash.split('?')[0]
  return validPanels.includes(id) ? id : 'home'
}

function syncMenuFromPanel(p) {
  agenticOpen.value = agenticPanelIds.includes(p) || p === 'home'
  agentPatternsOpen.value = agentPatternsPanelIds.includes(p)
  contextOpen.value = contextPanelIds.includes(p)
  ragOpen.value = ragPanelIds.includes(p)
  workflowOpen.value = workflowPanelIds.includes(p)
  skillsOpen.value = skillsPanelIds.includes(p)
  protocolOpen.value = protocolPanelIds.includes(p)
  langOpen.value = langPanelIds.includes(p)
  agentToolsOpen.value = agentToolsPanelIds.includes(p)
}

onMounted(() => {
  mermaid.initialize({ startOnLoad: false, theme: 'dark', securityLevel: 'loose' })
  const hash = window.location.hash.slice(1).split('?')[0]
  panel.value = validPanels.includes(hash) ? hash : 'home'
  if (hash === 'blog') scrollToBlog()
  window.addEventListener('hashchange', () => {
    const h = window.location.hash.slice(1).split('?')[0]
    const nextPanel = validPanels.includes(h) ? h : (h === 'blog' ? panel.value : 'home')
    if (h === 'blog') {
      scrollToBlog()
      return
    }
    panel.value = nextPanel
    syncMenuFromPanel(nextPanel)
  })
})

watch(panel, (p) => {
  syncMenuFromPanel(p)
}, { immediate: true })

watch(locale, (l) => {
  document.documentElement.lang = l === 'zh-CN' ? 'zh-CN' : 'en'
}, { immediate: true })

function runMermaidWhenReady() {
  nextTick(() => {
    const nodes = document.querySelectorAll('.content-area .article-body .mermaid')
    if (nodes.length) {
      nodes.forEach(n => { n.removeAttribute('data-processed') })
      mermaid.run({ nodes })
    }
  })
}

const articleIds = [
  'agentic-intro', 'agentic-context', 'context-sliding-window', 'context-summary', 'context-priority', 'context-memory', 'context-long', 'context-memory-trends', 'agentic-rag', 'native-rag', 'rag-12-architectures', 'rag-mia', 'rag-hgmem', 'rag-quco', 'rag-hifi', 'rag-bidirectional', 'rag-tv', 'rag-megarag', 'rag-affordance', 'rag-graph-o1', 'rag-sign', 'rag-multilingual', 'rag-part-mask',
  'agentic-tool', ...skillsPanelIds, ...workflowPanelIds, ...protocolPanelIds,
  'lang-frameworks-intro', 'lang-frameworks-scenarios', ...agentToolsPanelIds, 'about',
]

const localeKey = computed(() => (locale.value === 'zh-CN' ? 'zh-CN' : 'en'))
const homeArticles = computed(() => messages[localeKey.value]?.home?.articles ?? [])
const agenticArticleIds = ['agentic-intro', ...agentPatternsPanelIds, 'agentic-context', 'context-sliding-window', 'context-summary', 'context-priority', 'context-memory', 'context-long', 'context-memory-trends', 'agentic-rag', 'native-rag', 'rag-12-architectures', 'rag-mia', 'rag-hgmem', 'rag-quco', 'rag-hifi', 'rag-bidirectional', 'rag-tv', 'rag-megarag', 'rag-affordance', 'rag-graph-o1', 'rag-sign', 'rag-multilingual', 'rag-part-mask', 'agentic-tool', ...skillsPanelIds, ...workflowPanelIds, ...protocolPanelIds]
const agenticArticles = computed(() => homeArticles.value.filter(a => agenticArticleIds.includes(a.id)))

function scrollToBlog() {
  if (panel.value !== 'home') showPanel('home')
  if (window.location.hash !== '#blog') window.history.replaceState(null, '', window.location.pathname + '#blog')
  setTimeout(() => document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), panel.value === 'home' ? 0 : 100)
}

const currentArticle = computed(() => {
  const p = panel.value
  if (p === 'home') return null
  return messages[localeKey.value]?.articles?.[p] ?? null
})
const currentArticleTitle = computed(() => {
  const a = homeArticles.value.find(x => x.id === panel.value)
  return a ? a.title : panel.value
})

const sectionIndex = computed(() => {
  const idx = sectionOrder.indexOf(panel.value)
  return idx >= 0 ? idx : -1
})
const prevSection = computed(() => {
  const idx = sectionIndex.value
  if (idx <= 0) return null
  const id = sectionOrder[idx - 1]
  const a = homeArticles.value.find(x => x.id === id)
  return { id, title: a ? a.title : id }
})
const nextSection = computed(() => {
  const idx = sectionIndex.value
  if (idx < 0 || idx >= sectionOrder.length - 1) return null
  const id = sectionOrder[idx + 1]
  const a = homeArticles.value.find(x => x.id === id)
  return { id, title: a ? a.title : id }
})

watch(currentArticle, (art) => {
  if (art?.body?.some(b => b.t === 'mermaid')) runMermaidWhenReady()
}, { immediate: true })

watch(locale, () => {
  if (currentArticle.value?.body?.some(b => b.t === 'mermaid')) runMermaidWhenReady()
})

watch(expandedDiagram, (val) => {
  if (val) runModalMermaid()
})

function showPanel(id) {
  const next = id || 'home'
  panel.value = next
  const hash = next === 'home' ? '' : next
  if (window.location.hash.slice(1) !== hash) {
    window.history.replaceState(null, '', window.location.pathname + (hash ? '#' + hash : ''))
  }
}

function openDiagramZoom(panelId, blockIndex, code) {
  expandedDiagram.value = { panelId, blockIndex, code }
}

function closeDiagramZoom() {
  expandedDiagram.value = null
}

function runModalMermaid() {
  nextTick(() => {
    const node = modalMermaidRef.value
    if (!node) return
    node.removeAttribute('data-processed')
    mermaid.run({ nodes: [node] })
  })
}

function setLocale(l) {
  locale.value = l
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
  --sidebar-width: 280px;
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
.sidebar .site-title { font-size: 1.1rem; font-weight: 700; padding: 0 12px 20px; border-bottom: 1px solid var(--border); margin-bottom: 20px; }
.sidebar .site-title a { color: var(--text); text-decoration: none; }
.sidebar .site-title a:hover { color: var(--accent); }
.sidebar .menu-category-body { padding-left: 0; }
.sidebar .menu-category-toggle {
  display: flex;
  align-items: center;
  gap: 6px;
  width: 100%;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-muted);
  padding: 12px 12px 6px;
  margin-top: 8px;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  font-family: inherit;
}
.sidebar .menu-category-toggle:hover { color: var(--text); }
.sidebar .menu-category-toggle:first-of-type { margin-top: 0; }
.sidebar .menu-category-chevron {
  display: inline-block;
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 5px solid currentColor;
  margin-bottom: 2px;
  transform: rotate(-90deg);
  transition: transform 0.2s ease;
  flex-shrink: 0;
}
.sidebar .menu-category-chevron.open {
  transform: rotate(0deg);
}
.sidebar .menu-sub-toggle {
  display: flex;
  align-items: center;
  gap: 6px;
  width: 100%;
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text-muted);
  padding: 8px 12px 6px 20px;
  margin-top: 4px;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  font-family: inherit;
}
.sidebar .menu-sub-toggle:hover { color: var(--text); }
.sidebar .menu-sub-toggle .menu-category-chevron { margin-bottom: 0; }
.sidebar .menu-sub-body { padding-left: 20px; }
.sidebar .menu-sub-body .menu-item-sub { padding-left: 20px; }
.sidebar .menu-category-body .menu-item:first-child { margin-top: 2px; }
.sidebar .menu-item {
  display: block;
  padding: 8px 12px;
  color: var(--text-muted);
  text-decoration: none;
  font-size: 1.05rem;
  border-radius: 6px;
  margin-bottom: 2px;
  transition: color 0.15s, background 0.15s;
}
.sidebar .menu-item:hover { color: var(--text); background: var(--accent-soft); }
.sidebar .menu-item.active { color: var(--accent); background: var(--accent-soft); }
.sidebar .menu-item.home { font-weight: 600; color: var(--text); }
.sidebar .menu-item-sub { padding-left: 24px; font-size: 1rem; }

main.content-area {
  flex: 1 1 0;
  min-width: 0;
  margin-left: var(--sidebar-width);
  min-height: 100%;
  width: 100%;
  max-width: calc(100vw - var(--sidebar-width));
  display: flex;
  justify-content: center;
  padding: 32px 24px 48px;
  box-sizing: border-box;
}
.content-area-inner {
  position: relative;
  width: 100%;
  max-width: min(1280px, 100%);
  margin-left: auto;
  margin-right: auto;
}

.portal-hero { padding: 24px 0 40px; border-bottom: 1px solid var(--border); margin-bottom: 40px; }
.portal-hero .hero-badge {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--accent);
  background: var(--accent-soft);
  padding: 4px 10px;
  border-radius: 6px;
  margin-bottom: 14px;
}
.portal-hero h1 { font-size: clamp(1.75rem, 4vw, 2.25rem); font-weight: 700; margin-bottom: 12px; }
.portal-hero .tagline { color: var(--text); font-size: 1.1rem; max-width: 560px; margin-bottom: 6px; }
.portal-hero .tagline-detail { color: var(--text-muted); font-size: 0.95rem; max-width: 560px; }

.portal-gateways {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
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
.portal-card-agentic { border-color: var(--accent); background: linear-gradient(135deg, var(--bg-card) 0%, rgba(88, 166, 255, 0.08) 100%); }
.portal-card-agentic:hover { box-shadow: 0 0 0 1px var(--accent), 0 4px 12px var(--accent-soft); }

.portal-section { margin-bottom: 48px; }
.portal-section .portal-section-title { font-size: 1.1rem; font-weight: 700; color: var(--text); margin-bottom: 8px; text-transform: none; letter-spacing: 0; }
.portal-section-desc { color: var(--text-muted); font-size: 0.95rem; margin-bottom: 20px; }
.portal-list-label { font-size: 0.85rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-muted); margin-top: 24px; margin-bottom: 12px; }

.agentic-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 12px;
}
.agentic-card {
  display: block;
  padding: 14px 16px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 8px;
  text-decoration: none;
  color: inherit;
  transition: border-color 0.2s, background 0.2s;
}
.agentic-card:hover { border-color: var(--accent); background: var(--accent-soft); }
.agentic-card-title { font-size: 0.95rem; font-weight: 600; color: var(--text); display: block; margin-bottom: 4px; }
.agentic-card-excerpt { font-size: 0.8rem; color: var(--text-muted); line-height: 1.4; display: block; }

.blog-section { padding-top: 8px; }
.blog-intro { color: var(--text-muted); font-size: 0.95rem; margin-bottom: 20px; max-width: 560px; }

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

.article-header { margin-bottom: 28px; text-align: center; }
.article-title { font-size: 1.5rem; font-weight: 700; line-height: 1.3; margin-bottom: 10px; }
.article-meta { color: var(--text-muted); font-size: 0.875rem; }
.article-body { font-size: 1rem; max-width: 960px; margin-left: auto; margin-right: auto; }
.article-body :deep(h2) { font-size: 1.15rem; font-weight: 600; margin: 28px 0 12px; color: var(--text); }
.article-body :deep(h2:first-child) { margin-top: 0; }
.article-body :deep(p) { margin-bottom: 16px; color: var(--text-muted); }
.article-body :deep(p:last-child) { margin-bottom: 0; }
.article-body :deep(.article-raw) { margin-bottom: 16px; color: var(--text-muted); }
.article-body :deep(.article-raw a) { color: var(--accent); text-decoration: none; }
.article-body :deep(.article-raw a:hover) { text-decoration: underline; }
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

.article-table-wrap { margin: 20px 0; overflow-x: auto; }
.article-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.95rem;
  color: var(--text-muted);
}
.article-table th,
.article-table td {
  padding: 10px 14px;
  text-align: left;
  border: 1px solid var(--border);
}
.article-table th {
  font-weight: 600;
  color: var(--text);
  background: var(--bg-card);
}
.article-table tbody tr:nth-child(even) { background: var(--bg-soft); }

/* Unified diagram size: same width for all in-article flowcharts */
.article-diagram-wrap {
  margin: 24px 0;
  padding: 20px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 8px;
  overflow-x: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
}
.article-diagram-main {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  width: 100%;
}
.article-diagram-zoom-btn {
  font-size: 0.8rem;
  color: var(--text-muted);
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 6px 12px;
  cursor: pointer;
  font-family: inherit;
  transition: color 0.2s, border-color 0.2s, background 0.2s;
}
.article-diagram-zoom-btn:hover {
  color: var(--accent);
  border-color: var(--accent);
  background: var(--accent-soft);
}
.article-diagram-wrap .mermaid {
  min-height: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.article-diagram-wrap .mermaid :deep(> *) {
  width: 100%;
  max-width: 100%;
}
.article-diagram-wrap :deep(svg) {
  width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
  max-width: 100%;
}

.article-code-wrap { margin: 24px 0; }
.article-code {
  display: block;
  margin: 0;
  padding: 16px 20px;
  font-family: var(--font-mono);
  font-size: 0.875rem;
  line-height: 1.5;
  color: var(--text);
  background: var(--bg-soft);
  border: 1px solid var(--border);
  border-radius: 8px;
  overflow-x: auto;
  white-space: pre;
}
.article-code code { background: none; padding: 0; border-radius: 0; }

.article-section-nav {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  margin-top: 40px;
  padding-top: 24px;
  border-top: 1px solid var(--border);
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
}
.article-section-nav-btn {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 45%;
  padding: 12px 16px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 8px;
  text-decoration: none;
  color: inherit;
  transition: border-color 0.2s, background 0.2s;
}
.article-section-nav-btn:hover { border-color: var(--accent); background: var(--accent-soft); }
.article-section-nav-btn.next { align-items: flex-end; margin-left: auto; }
.article-section-nav-btn .nav-label { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-muted); margin-bottom: 4px; }
.article-section-nav-btn .nav-title { font-size: 0.9rem; font-weight: 600; color: var(--text); line-height: 1.3; }

/* Diagram zoom modal */
.diagram-modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 24px;
  box-sizing: border-box;
  overflow: auto;
}
.diagram-modal {
  position: relative;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 24px;
  width: min(96vw, 1600px);
  max-height: 90vh;
  overflow: auto;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
}
.diagram-modal-content {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  width: 100%;
  overflow: auto;
}
.diagram-modal-mermaid {
  min-width: 0;
  width: 100%;
  display: flex;
  justify-content: center;
}
.diagram-modal-mermaid :deep(svg) {
  max-width: none;
  width: auto;
  height: auto;
  flex-shrink: 0;
}
.diagram-modal-close {
  display: block;
  margin-top: 16px;
  margin-left: auto;
  margin-right: auto;
  font-size: 0.9rem;
  color: var(--text-muted);
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 8px 20px;
  cursor: pointer;
  font-family: inherit;
  transition: color 0.2s, border-color 0.2s, background 0.2s;
}
.diagram-modal-close:hover {
  color: var(--accent);
  border-color: var(--accent);
  background: var(--accent-soft);
}
.diagram-modal-enter-active,
.diagram-modal-leave-active {
  transition: opacity 0.2s ease;
}
.diagram-modal-enter-from,
.diagram-modal-leave-to {
  opacity: 0;
}
.diagram-modal-enter-active .diagram-modal,
.diagram-modal-leave-active .diagram-modal {
  transition: transform 0.2s ease;
}
.diagram-modal-enter-from .diagram-modal,
.diagram-modal-leave-to .diagram-modal {
  transform: scale(0.95);
}

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
  .sidebar .menu-category-toggle { padding: 0 8px 0 0; margin: 0; }
  .sidebar .menu-item { display: inline-block; margin: 0; }
  main.content-area { margin-left: 0; padding: 24px 20px; }
  .lang-switcher { right: 20px; }
}
</style>
