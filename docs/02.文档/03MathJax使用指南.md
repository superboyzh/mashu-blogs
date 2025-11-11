---
title: MathJax使用指南
date: 2025-11-11 10:30:00
permalink: /frontend/mathjax-guide
categories:
  - 文档
tags:
  - 前端
  - MathJax
  - 数学公式
  - Markdown
---

## 背景

在技术文档、学术博客、教程等内容中，经常需要展示数学公式。传统的做法是使用图片或者 HTML 标签来模拟公式，但这种方式不仅制作复杂，而且不够灵活。MathJax 是一个开源的 JavaScript 显示引擎，它可以在所有现代浏览器中优美地显示数学公式。

## 什么是 MathJax

MathJax 是一个 JavaScript 库，用于在网页中显示数学符号和公式。它支持多种数学标记语言：

- **LaTeX**：最流行的数学排版系统
- **MathML**：W3C 推荐的数学标记语言
- **AsciiMath**：易于输入的 ASCII 数学标记法

## 核心优势

- **高质量渲染**：生成美观的数学公式，支持多种显示模式
- **跨浏览器兼容**：在所有现代浏览器中都能正常工作
- **响应式设计**：公式可以适应不同的屏幕尺寸
- **可访问性**：支持屏幕阅读器，符合无障碍标准
- **易于集成**：可以轻松集成到各种 Web 框架中

## 在 VitePress 中集成 MathJax

### 方法一：使用 VitePress 插件

```javascript
// .vitepress/config.js
export default {
  // ...其他配置
  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark'
    },
    lineNumbers: true,
    config: (md) => {
      // 可以在这里添加 markdown-it 插件
    }
  },
  // 添加 MathJax 配置
  head: [
    ['script', {
      src: 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js',
      async: true
    }]
  ]
}
```

### 方法二：使用组件方式

首先创建一个 MathJax 组件：

```vue
<!-- components/MathJax.vue -->
<template>
  <div ref="mathJaxContainer" class="mathjax-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'MathJax',
  props: {
    formula: {
      type: String,
      required: true
    },
    displayMode: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.renderMath();
  },
  updated() {
    this.renderMath();
  },
  methods: {
    renderMath() {
      if (window.MathJax) {
        // 配置 MathJax
        window.MathJax = {
          tex: {
            inlineMath: [['$', '$'], ['\\(', '\\)']],
            displayMath: [['$$', '$$'], ['\\[', '\\]']],
            processEscapes: true
          },
          options: {
            skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre']
          },
          startup: {
            typeset: false
          }
        };

        // 等待 MathJax 加载完成
        if (window.MathJax.typesetPromise) {
          window.MathJax.typesetPromise([this.$refs.mathJaxContainer]);
        }
      }
    }
  }
}
</script>

<style scoped>
.mathjax-container {
  display: inline-block;
}
</style>
```

## 基础使用方法

::: tip 配置说明
MathJax 已经配置到 VitePress 主题中，支持以下公式格式：
- 内联公式：使用 `$...$` 或 `\(...\)` 包裹
- 块级公式：使用 `$$...$$` 或 `\[...\]` 包裹
:::

### 内联公式

使用 `$...$` 包裹内联公式：

```markdown
欧拉公式是 $e^{i\pi} + 1 = 0$，被称为最优美的数学公式。
```

效果：欧拉公式是 $e^{i\pi} + 1 = 0$，被称为最优美的数学公式。

### 块级公式

使用 `$$...$$` 包裹块级公式：

```markdown
$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$
```

效果：
$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$

::: info 故障排除
如果公式没有正确显示，请尝试：

1. 刷新页面重新加载
2. 检查浏览器控制台是否有错误信息
3. 确认公式语法正确无误
:::

## 常用数学符号和公式

### 基础符号

| 符号 | LaTeX 代码 | 说明 |
|------|------------|------|
| α, β, γ | `\alpha, \beta, \gamma` | 希腊字母 |
| Σ, Π, Δ | `\Sigma, \Pi, \Delta` | 大写希腊字母 |
| ≤, ≥, ≠ | `\le, \ge, \neq` | 关系符号 |
| ∈, ∉, ⊂ | `\in, \notin, \subset` | 集合符号 |
| ∀, ∃, ∅ | `\forall, \exists, \emptyset` | 逻辑符号 |

### 分数和根式

```markdown
分数：$\frac{a}{b}$

根式：$\sqrt{x}$，$\sqrt[3]{x}$

复杂分数：$\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 0$
```

效果：
- 分数：$\frac{a}{b}$
- 根式：$\sqrt{x}$，$\sqrt[3]{x}$
- 复杂分数：$\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 0$

### 求和与积分

```markdown
求和：$\sum_{i=1}^{n} i = \frac{n(n+1)}{2}$

积分：$\int_{a}^{b} f(x) dx$

极限：$\lim_{x \to \infty} \left(1 + \frac{1}{x}\right)^x = e$
```

效果：
- 求和：$\sum_{i=1}^{n} i = \frac{n(n+1)}{2}$
- 积分：$\int_{a}^{b} f(x) dx$
- 极限：$\lim_{x \to \infty} \left(1 + \frac{1}{x}\right)^x = e$

### 矩阵和向量

```markdown
矩阵：
$$
\begin{pmatrix}
a_{11} & a_{12} & a_{13} \\
a_{21} & a_{22} & a_{23} \\
a_{31} & a_{32} & a_{33}
\end{pmatrix}
$$

向量：$\vec{v} = (v_x, v_y, v_z)$

点积：$\vec{a} \cdot \vec{b} = |\vec{a}| |\vec{b}| \cos\theta$
```

效果：
矩阵：
$$
\begin{pmatrix}
a_{11} & a_{12} & a_{13} \\
a_{21} & a_{22} & a_{23} \\
a_{31} & a_{32} & a_{33}
\end{pmatrix}
$$

向量：$\vec{v} = (v_x, v_y, v_z)$

点积：$\vec{a} \cdot \vec{b} = |\vec{a}| |\vec{b}| \cos\theta$

## 高级应用

### 物理公式示例

```markdown
牛顿第二定律：
$$
\vec{F} = m\vec{a} = m\frac{d^2\vec{x}}{dt^2}
$$

麦克斯韦方程组：
$$
\begin{aligned}
\nabla \cdot \vec{E} &= \frac{\rho}{\epsilon_0} \\
\nabla \cdot \vec{B} &= 0 \\
\nabla \times \vec{E} &= -\frac{\partial \vec{B}}{\partial t} \\
\nabla \times \vec{B} &= \mu_0 \vec{J} + \mu_0 \epsilon_0 \frac{\partial \vec{E}}{\partial t}
\end{aligned}
$$
```

效果：
牛顿第二定律：
$$
\vec{F} = m\vec{a} = m\frac{d^2\vec{x}}{dt^2}
$$

麦克斯韦方程组：
$$
\begin{aligned}
\nabla \cdot \vec{E} &= \frac{\rho}{\epsilon_0} \\
\nabla \cdot \vec{B} &= 0 \\
\nabla \times \vec{E} &= -\frac{\partial \vec{B}}{\partial t} \\
\nabla \times \vec{B} &= \mu_0 \vec{J} + \mu_0 \epsilon_0 \frac{\partial \vec{E}}{\partial t}
\end{aligned}
$$

### 统计学公式

```markdown
正态分布概率密度函数：
$$
f(x) = \frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{(x-\mu)^2}{2\sigma^2}}
$$

贝叶斯定理：
$$
P(A|B) = \frac{P(B|A)P(A)}{P(B)}
$$
```

效果：
正态分布概率密度函数：
$$
f(x) = \frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{(x-\mu)^2}{2\sigma^2}}
$$

贝叶斯定理：
$$
P(A|B) = \frac{P(B|A)P(A)}{P(B)}
$$

## Vue 组件中的 MathJax

### 动态渲染公式

```vue
<template>
  <div class="formula-demo">
    <h2>数学公式演示</h2>

    <div class="input-section">
      <h3>输入 LaTeX 公式：</h3>
      <input
        v-model="formula"
        @input="updateFormula"
        placeholder="输入 LaTeX 公式，如：x^2 + y^2 = z^2"
      />
      <label>
        <input
          type="checkbox"
          v-model="displayMode"
          @change="updateFormula"
        />
        块级显示
      </label>
    </div>

    <div class="result-section">
      <h3>渲染结果：</h3>
      <div ref="formulaDisplay" class="formula-display">
        {{ formula }}
      </div>
    </div>

    <div class="examples">
      <h3>常用示例：</h3>
      <button
        v-for="(example, index) in examples"
        :key="index"
        @click="setFormula(example.formula, example.display)"
      >
        {{ example.name }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormulaDemo',
  data() {
    return {
      formula: 'x^2 + y^2 = z^2',
      displayMode: false,
      examples: [
        {
          name: '勾股定理',
          formula: 'a^2 + b^2 = c^2',
          display: false
        },
        {
          name: '欧拉公式',
          formula: 'e^{i\\pi} + 1 = 0',
          display: false
        },
        {
          name: '二次方程求根',
          formula: 'x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}',
          display: true
        },
        {
          name: '积分公式',
          formula: '\\int_{0}^{\\infty} e^{-x^2} dx = \\frac{\\sqrt{\\pi}}{2}',
          display: true
        }
      ]
    };
  },
  mounted() {
    this.renderFormula();
  },
  methods: {
    setFormula(formula, display) {
      this.formula = formula;
      this.displayMode = display;
      this.renderFormula();
    },
    updateFormula() {
      this.$nextTick(() => {
        this.renderFormula();
      });
    },
    renderFormula() {
      if (!window.MathJax) return;

      // 根据显示模式包装公式
      let wrappedFormula = this.formula;
      if (this.displayMode) {
        wrappedFormula = `$$${this.formula}$$`;
      } else {
        wrappedFormula = `$${this.formula}$`;
      }

      // 更新显示内容
      this.$refs.formulaDisplay.innerHTML = wrappedFormula;

      // 重新渲染 MathJax
      window.MathJax.typesetPromise([this.$refs.formulaDisplay]);
    }
  }
};
</script>

<style scoped>
.formula-demo {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.input-section, .result-section {
  margin-bottom: 30px;
}

input[type="text"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
}

label {
  margin-left: 20px;
}

.formula-display {
  min-height: 50px;
  padding: 15px;
  background: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 18px;
}

.examples button {
  margin: 5px;
  padding: 8px 15px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.examples button:hover {
  background: #0056b3;
}
</style>
```

## 常见问题与解决方案

### 1. 公式不显示

**问题**：MathJax 加载完成后，页面中的公式没有渲染。

**解决方案**：
```javascript
// 手动触发渲染
window.MathJax.typesetPromise();

// 或者针对特定元素
window.MathJax.typesetPromise([document.getElementById('formula-container')]);
```

### 2. 动态内容不渲染

**问题**：Vue 动态更新的内容中的公式不会自动渲染。

**解决方案**：
```javascript
// 在 Vue 的 updated 或 nextTick 中调用
this.$nextTick(() => {
  if (window.MathJax) {
    window.MathJax.typesetPromise([this.$refs.dynamicContent]);
  }
});
```

### 3. 性能优化

**问题**：大量公式渲染导致页面卡顿。

**解决方案**：
```javascript
// 配置 MathJax 性能选项
window.MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    displayMath: [['$$', '$$'], ['\\[', '\\]']],
    processEscapes: true
  },
  options: {
    processHtmlClass: 'tex2jax_process',
    ignoreHtmlClass: 'tex2jax_ignore'
  },
  startup: {
    typeset: false // 延迟渲染
  }
};
```

## 最佳实践

### 1. 性能优化建议

- **延迟加载**：只在需要时加载 MathJax
- **批量渲染**：避免频繁的单个公式渲染
- **缓存机制**：对重复使用的公式进行缓存

### 2. 内容编写建议

- **语义化**：使用有意义的变量名和注释
- **格式化**：保持 LaTeX 代码的可读性
- **测试验证**：确保公式在不同浏览器中都能正确显示

### 3. 可访问性考虑

```javascript
// 配置 MathJax 支持屏幕阅读器
window.MathJax = {
  a11y: {
    assistiveMml: true,
    braille: true
  }
};
```

## 总结

MathJax 是一个强大且灵活的数学公式渲染引擎，特别适合：

1. **技术文档**：教程、API 文档中的数学说明
2. **学术博客**：科研论文、技术分享
3. **教育网站**：在线课程、练习平台
4. **科学计算**：数据可视化、结果展示

通过合理使用 MathJax，可以让数学内容在网页中得到优美且准确的展示，提升用户的阅读体验和理解效果。

## 故障排除指南

### 如果公式不显示，请按以下步骤检查：

1. **检查浏览器控制台**
   - 按 F12 打开开发者工具
   - 查看 Console 面板是否有 MathJax 相关错误
   - 常见错误：网络加载失败、语法错误等

2. **验证 MathJax 是否加载**
   ```javascript
   // 在浏览器控制台运行
   console.log(window.MathJax ? '✅ MathJax 已加载' : '❌ MathJax 未加载');
   ```

3. **手动触发渲染**
   ```javascript
   // 在浏览器控制台运行
   if (window.MathJax) {
     window.MathJax.typesetPromise().then(() => {
       console.log('✅ 公式渲染完成');
     });
   }
   ```

4. **检查公式语法**
   - 确保所有 LaTeX 命令正确
   - 检查括号是否匹配
   - 确认转义字符使用正确

5. **清除缓存并重新加载**
   - 按 Ctrl+F5 (或 Cmd+Shift+R) 强制刷新
   - 清除浏览器缓存

### 性能优化建议

- 避免在同一页面使用过多复杂公式
- 考虑将长公式分解为多个简单部分
- 使用图片替代极其复杂的公式（如需要）

如果以上方法都无法解决问题，请检查 VitePress 配置文件中的 MathJax 设置。
