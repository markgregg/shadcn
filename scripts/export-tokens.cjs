#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

const ROOT = path.resolve(__dirname, '..')
const OUTPUT_FILE = path.join(ROOT, 'tokens', 'variables-pro.json')

const TOKEN_SOURCE_FILES = [
  path.join(ROOT, 'src', 'styles', 'tokens', 'primitives.css'),
  path.join(ROOT, 'src', 'styles', 'tokens', 'semantic.css'),
  path.join(ROOT, 'src', 'styles', 'components', 'data-table', 'data-table.tokens.css'),
  path.join(ROOT, 'src', 'styles', 'components', 'table', 'table.tokens.css'),
  path.join(ROOT, 'src', 'styles', 'components', 'sidebar', 'sidebar.tokens.css'),
  path.join(ROOT, 'src', 'styles', 'components', 'dialog', 'dialog.tokens.css'),
  path.join(ROOT, 'src', 'styles', 'components', 'drawer', 'drawer.tokens.css'),
  path.join(ROOT, 'src', 'styles', 'components', 'alert-dialog', 'alert-dialog.tokens.css'),
  path.join(ROOT, 'src', 'styles', 'components', 'sheet', 'sheet.tokens.css'),
  path.join(ROOT, 'src', 'styles', 'components', 'slider', 'slider.tokens.css'),
  path.join(ROOT, 'src', 'styles', 'components', 'switch', 'switch.tokens.css'),
  path.join(ROOT, 'src', 'styles', 'components', 'input', 'input.tokens.css'),
  path.join(ROOT, 'src', 'styles', 'components', 'calendar', 'calendar.tokens.css'),
  path.join(ROOT, 'src', 'styles', 'components', 'sonner', 'sonner.tokens.css'),
]

/** Extract CSS custom properties from a block. Returns { name: value } */
function extractVars(cssBlock) {
  const vars = {}
  const regex = /--([a-zA-Z0-9-]+)\s*:\s*([^;]+);/g
  let m
  while ((m = regex.exec(cssBlock)) !== null) {
    vars[`--${m[1]}`] = m[2].trim()
  }
  return vars
}

/** Extract every `:root { … }` block in order and merge (later overrides earlier). */
function mergeBlocks(css, selectorPrefix) {
  const merged = {}
  let pos = 0
  while (pos < css.length) {
    const i = css.indexOf(selectorPrefix, pos)
    if (i === -1) break
    const openBrace = selectorPrefix.endsWith('{') ? i + selectorPrefix.length - 1 : css.indexOf('{', i)
    if (openBrace === -1) break
    let depth = 1
    let p = openBrace + 1
    while (p < css.length && depth > 0) {
      if (css[p] === '{') depth++
      else if (css[p] === '}') depth--
      p++
    }
    Object.assign(merged, extractVars(css.slice(openBrace + 1, p - 1)))
    pos = p
  }
  return merged
}

function mergeAllRoots(files) {
  const merged = {}
  for (const file of files) {
    if (!fs.existsSync(file)) continue
    const css = fs.readFileSync(file, 'utf8')
    Object.assign(merged, mergeBlocks(css, ':root {'))
  }
  return merged
}

function mergeAllDark(files) {
  const merged = {}
  for (const file of files) {
    if (!fs.existsSync(file)) continue
    const css = fs.readFileSync(file, 'utf8')
    Object.assign(merged, mergeBlocks(css, '.dark {'))
  }
  return merged
}

/** Map Signal `--color-*` names to legacy keys expected by `buildLightMode`. */
function toLegacyVars(vars) {
  const v = { ...vars }
  const pairs = [
    ['--background', '--color-bg'],
    ['--foreground', '--color-fg'],
    ['--card', '--color-card'],
    ['--card-foreground', '--color-card-fg'],
    ['--popover', '--color-popover'],
    ['--popover-foreground', '--color-popover-fg'],
    ['--primary', '--color-primary'],
    ['--primary-foreground', '--color-primary-fg'],
    ['--secondary', '--color-secondary'],
    ['--secondary-foreground', '--color-secondary-fg'],
    ['--secondary-hover', '--color-secondary-hover'],
    ['--muted', '--color-muted'],
    ['--muted-foreground', '--color-muted-fg'],
    ['--accent', '--color-accent'],
    ['--accent-foreground', '--color-accent-fg'],
    ['--link', '--color-link'],
    ['--link-foreground', '--color-link-fg'],
    ['--destructive', '--color-destructive'],
    ['--destructive-foreground', '--color-destructive-fg'],
    ['--success', '--color-success'],
    ['--success-foreground', '--color-success-fg'],
    ['--warning', '--color-warning'],
    ['--warning-foreground', '--color-warning-fg'],
    ['--info', '--color-info'],
    ['--info-foreground', '--color-info-fg'],
    ['--press', '--color-press'],
    ['--press-foreground', '--color-press-fg'],
    ['--selection', '--color-selection'],
    ['--selection-foreground', '--color-selection-fg'],
    ['--border', '--color-border'],
    ['--input', '--color-input-border'],
    ['--ring', '--color-ring'],
    ['--data-primary', '--color-data-primary'],
    ['--data-secondary', '--color-data-secondary'],
    ['--data-currency', '--color-data-currency'],
    ['--data-entity', '--color-data-entity'],
    ['--data-identifier', '--color-data-identifier'],
    ['--data-category', '--color-data-category'],
    ['--data-datetime', '--color-data-datetime'],
    ['--data-status-positive', '--color-data-status-positive'],
    ['--data-status-negative', '--color-data-status-negative'],
    ['--data-status-warning', '--color-data-status-warning'],
    ['--data-status-neutral', '--color-data-status-neutral'],
    ['--data-value-positive', '--color-data-value-positive'],
    ['--data-value-negative', '--color-data-value-negative'],
    ['--data-value-neutral', '--color-data-value-neutral'],
  ]
  for (const [legacy, sem] of pairs) {
    if (v[sem] != null && v[legacy] == null) v[legacy] = v[sem]
  }

  if (v['--size-control-sm']) v['--control-height-sm'] = v['--size-control-sm']
  if (v['--size-control-md']) v['--control-height-md'] = v['--size-control-md']
  if (v['--size-control-lg']) v['--control-height-lg'] = v['--size-control-lg']
  if (v['--space-control-x-sm']) v['--control-px-sm'] = v['--space-control-x-sm']
  if (v['--space-control-x-md']) v['--control-px-md'] = v['--space-control-x-md']
  if (v['--space-control-x-lg']) v['--control-px-lg'] = v['--space-control-x-lg']
  if (v['--space-gap-x-control']) v['--control-gap-x'] = v['--space-gap-x-control']
  if (v['--space-gap-y-control']) v['--control-gap-y'] = v['--space-gap-y-control']
  if (v['--space-card']) v['--card-padding'] = v['--space-card']
  if (v['--space-content']) v['--content-padding'] = v['--space-content']
  if (v['--space-menu']) v['--menu-padding'] = v['--space-menu']
  if (v['--space-menu-item-x']) v['--menu-item-px'] = v['--space-menu-item-x']
  if (v['--space-menu-item-y']) v['--menu-item-py'] = v['--space-menu-item-y']
  if (v['--size-icon']) v['--icon-size'] = v['--size-icon']
  if (v['--size-badge']) v['--badge-height'] = v['--size-badge']
  if (v['--space-badge-x']) v['--badge-px'] = v['--space-badge-x']
  if (v['--size-avatar-sm']) v['--avatar-size-sm'] = v['--size-avatar-sm']
  if (v['--size-avatar-md']) v['--avatar-size-md'] = v['--size-avatar-md']
  if (v['--size-avatar-lg']) v['--avatar-size-lg'] = v['--size-avatar-lg']
  if (v['--opacity-disabled']) v['--disabled-opacity'] = String(v['--opacity-disabled'])

  return v
}

function remToPx(value) {
  const match = String(value).match(/^([\d.]+)rem$/)
  if (match) return Math.round(parseFloat(match[1]) * 16)
  const pxMatch = String(value).match(/^([\d.]+)px$/)
  if (pxMatch) return parseFloat(pxMatch[1])
  return null
}

function spacingCalcToPx(value) {
  const m = String(value)
    .trim()
    .match(/^calc\(var\(--spacing\)\s*\*\s*([\d.]+)\)$/i)
  if (!m) return null
  return Math.round(parseFloat(m[1]) * 0.25 * 16)
}

function toExportPx(value, allVars, depth = 0) {
  if (depth > 8) return null
  const v = String(value).trim()
  const fromSpacing = spacingCalcToPx(v)
  if (fromSpacing !== null) return fromSpacing
  const literal = remToPx(v)
  if (literal !== null) return literal
  const varM = v.match(/^var\(--([a-zA-Z0-9-]+)\)$/)
  if (varM && allVars[`--${varM[1]}`]) {
    return toExportPx(allVars[`--${varM[1]}`], allVars, depth + 1)
  }
  return null
}

function isColorValue(value) {
  if (!value) return false
  const s = String(value)
  return (
    s.startsWith('var(') ||
    s.startsWith('oklch') ||
    s.startsWith('rgba') ||
    s.startsWith('rgb(') ||
    s.startsWith('#') ||
    s.startsWith('color-mix') ||
    s === 'transparent'
  )
}

/** Build Light Mode export */
function buildLightMode(vars) {
  const mode = {}

  const fillOnlyKeys = new Set([
    'background',
    'foreground',
    'primary-foreground',
    'secondary-foreground',
    'muted-foreground',
    'accent-foreground',
    'destructive-foreground',
    'success-foreground',
    'warning-foreground',
    'info-foreground',
    'popover-foreground',
    'card-foreground',
    'sidebar-foreground',
    'link-foreground',
    'press-foreground',
    'selection-foreground',
  ])
  const strokeOnlyKeys = new Set(['border', 'input', 'ring'])

  const colorKeys = [
    'background',
    'foreground',
    'card',
    'card-foreground',
    'popover',
    'popover-foreground',
    'primary',
    'primary-foreground',
    'secondary',
    'secondary-foreground',
    'secondary-hover',
    'muted',
    'muted-foreground',
    'accent',
    'accent-foreground',
    'link',
    'link-foreground',
    'destructive',
    'destructive-foreground',
    'success',
    'success-foreground',
    'warning',
    'warning-foreground',
    'info',
    'info-foreground',
    'press',
    'press-foreground',
    'selection',
    'selection-foreground',
    'border',
    'input',
    'ring',
    'chart-1',
    'chart-2',
    'chart-3',
    'chart-4',
    'chart-5',
    'chart-6',
    'chart-7',
    'chart-8',
    'chart-9',
    'chart-10',
    'chart-11',
    'chart-12',
    'chart-13',
    'chart-14',
    'sidebar',
    'sidebar-foreground',
    'data-primary',
    'data-secondary',
    'data-currency',
    'data-entity',
    'data-identifier',
    'data-category',
    'data-datetime',
    'data-status-positive',
    'data-status-negative',
    'data-status-warning',
    'data-status-neutral',
    'data-value-positive',
    'data-value-negative',
    'data-value-neutral',
  ]

  mode.colors = {}
  for (const key of colorKeys) {
    const value = vars[`--${key}`]
    if (!value) continue
    let scopes
    if (strokeOnlyKeys.has(key)) scopes = ['STROKE_COLOR']
    else if (fillOnlyKeys.has(key)) scopes = ['ALL_FILLS']
    else scopes = ['ALL_FILLS', 'STROKE_COLOR']
    mode.colors[key] = { $type: 'color', $value: value, $scopes: scopes }
  }

  mode.radius = {}
  const radiusMd = vars['--radius-md']
  if (radiusMd) {
    const px = remToPx(radiusMd)
    if (px !== null) mode.radius.base = { $type: 'float', $value: px, $scopes: ['CORNER_RADIUS'] }
  }
  for (const key of ['container', 'control', 'inset', 'pill']) {
    const val = vars[`--radius-${key}`]
    if (!val) continue
    const px = toExportPx(val, vars)
    if (px !== null) {
      mode.radius[key] = { $type: 'float', $value: px, $scopes: ['CORNER_RADIUS'] }
    } else {
      mode.radius[key] = { $type: 'string', $value: val, $scopes: ['CORNER_RADIUS'] }
    }
  }

  mode.spacing = {}

  const spacingTokens = {
    'control-height-sm': { scopes: ['WIDTH_HEIGHT'] },
    'control-height-md': { scopes: ['WIDTH_HEIGHT'] },
    'control-height-lg': { scopes: ['WIDTH_HEIGHT'] },
    'control-px-sm': { scopes: ['GAP'] },
    'control-px-md': { scopes: ['GAP'] },
    'control-px-lg': { scopes: ['GAP'] },
    'control-gap-x': { scopes: ['GAP'] },
    'control-gap-y': { scopes: ['GAP'] },
    'card-padding': { scopes: ['GAP'] },
    'content-padding': { scopes: ['GAP'] },
    'menu-padding': { scopes: ['GAP'] },
    'menu-item-px': { scopes: ['GAP'] },
    'menu-item-py': { scopes: ['GAP'] },
    'icon-size': { scopes: ['WIDTH_HEIGHT'] },
    'badge-height': { scopes: ['WIDTH_HEIGHT'] },
    'badge-px': { scopes: ['GAP'] },
    'avatar-size-sm': { scopes: ['WIDTH_HEIGHT'] },
    'avatar-size-md': { scopes: ['WIDTH_HEIGHT'] },
    'avatar-size-lg': { scopes: ['WIDTH_HEIGHT'] },
    'sidebar-width': { scopes: ['WIDTH_HEIGHT'] },
  }

  for (const [key, meta] of Object.entries(spacingTokens)) {
    const val = vars[`--${key}`]
    if (!val) continue
    const px = toExportPx(val, vars)
    if (px !== null) {
      mode.spacing[key] = { $type: 'float', $value: px, $scopes: meta.scopes }
    }
  }

  const disabledOpacity = vars['--disabled-opacity']
  if (disabledOpacity) {
    mode['disabled-opacity'] = {
      $type: 'float',
      $value: parseFloat(disabledOpacity),
      $scopes: ['OPACITY'],
    }
  }

  mode['data-table'] = {}

  const dtSizeTokens = {
    'row-height-sm': { scopes: ['WIDTH_HEIGHT'] },
    'row-height-md': { scopes: ['WIDTH_HEIGHT'] },
    'row-height-lg': { scopes: ['WIDTH_HEIGHT'] },
    'header-height': { scopes: ['WIDTH_HEIGHT'] },
    'cell-px': { scopes: ['GAP'] },
  }
  for (const [key, meta] of Object.entries(dtSizeTokens)) {
    const val = vars[`--data-table-${key}`]
    if (!val) continue
    const px = toExportPx(val, vars)
    if (px !== null) {
      mode['data-table'][key] = { $type: 'float', $value: px, $scopes: meta.scopes }
    }
  }

  const dtFontSize = vars['--data-table-font-size']
  if (dtFontSize) {
    const px = remToPx(dtFontSize)
    if (px !== null)
      mode['data-table']['font-size'] = { $type: 'float', $value: px, $scopes: ['FONT_SIZE'] }
  }
  const dtHeaderFontSize = vars['--data-table-header-font-size']
  if (dtHeaderFontSize) {
    const px = toExportPx(dtHeaderFontSize, vars)
    if (px !== null)
      mode['data-table']['header-font-size'] = {
        $type: 'float',
        $value: px,
        $scopes: ['FONT_SIZE'],
      }
  }

  return mode
}

/** Dark mode — only entries present in `.dark` blocks; values fully resolved via merged map. */
function buildDarkMode(rawDarkOverrides, resolvedMerged) {
  const mode = { colors: {} }
  for (const [name, rawVal] of Object.entries(rawDarkOverrides)) {
    if (!isColorValue(rawVal)) continue
    const resolved = resolvedMerged[name] ?? rawVal
    const key = name.replace(/^--/, '')
    mode.colors[key] = {
      $type: 'color',
      $value: resolved,
      $scopes: ['ALL_FILLS', 'STROKE_COLOR'],
    }
  }
  return mode
}

function countTokens(obj) {
  let count = 0
  for (const v of Object.values(obj)) {
    if (v && typeof v === 'object' && v.$type) count++
    else if (v && typeof v === 'object' && !Array.isArray(v)) count += countTokens(v)
  }
  return count
}

function main() {
  const rawRoot = mergeAllRoots(TOKEN_SOURCE_FILES)
  const rawDark = mergeAllDark(TOKEN_SOURCE_FILES)
  const vars = toLegacyVars(rawRoot)
  const resolvedMerged = toLegacyVars({ ...rawRoot, ...rawDark })

  const lightMode = buildLightMode(vars)
  const darkMode = buildDarkMode(rawDark, resolvedMerged)

  const output = [
    {
      'Design System': {
        modes: {
          'Light Mode': lightMode,
          'Dark Mode': darkMode,
        },
      },
    },
  ]

  const jsonStr = JSON.stringify(output, null, 2)
  try {
    JSON.parse(jsonStr)
  } catch (e) {
    console.error('Invalid JSON generated:', e.message)
    process.exit(1)
  }

  const outputDir = path.dirname(OUTPUT_FILE)
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true })
  fs.writeFileSync(OUTPUT_FILE, jsonStr)

  console.log('Exported tokens/variables-pro.json (Variables Pro format)')
  console.log(`  Light Mode: ${countTokens(lightMode)} tokens`)
  console.log(`  Dark Mode: ${countTokens(darkMode)} color overrides`)
  console.log('  (Full npm run tokens also writes tokens/light.json + tokens/dark.json via export-tokens-figma.js)')
}

main()
