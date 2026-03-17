# GameZone (GZ) 移动端 H5 游戏平台

本项目是 GameZone 的移动端 H5 演示页面及入口应用，主要用于展示游戏列表、活动（Promo）、奖励（Reward）等功能，并提供丰富的动画展示效果。

## 🛠 技术栈概览

本项目基于现代前端技术栈构建，具有快速、轻量、动画丰富的特点：

*   **核心框架:** Vue 3 (Composition API)
*   **路由管理:** Vue Router 4
*   **构建工具:** Vite 6
*   **动画库:** 
    *   `gsap`, `motion` (用于通用动画和滚动效果)
    *   `lottie-web`, `vue3-lottie` (用于渲染复杂矢量动画)
    *   `pixi.js`, `pixi-spine` (用于渲染 Spine 骨骼动画)
*   **样式处理:** CSS + Tailwind CSS (配置引入阶段) + PostCSS (含 px-to-viewport 移动端适配)

---

## 📁 目录说明

```text
├── public/                 # 静态资源目录（不经过 Vite 编译，直接复制到输出目录）
│   ├── icons/              # PWA 和网站图标
│   └── manifest.json       # PWA 配置文件
├── src/                    # 源代码目录
│   ├── assets/             # 静态资源（图片、CSS、字体等，由 Vite 处理）
│   │   └── ms/             # UI 切图和图标
│   ├── components/         # 公共 Vue 组件
│   │   ├── Banner.vue             # 首页轮播图组件 (动态获取 API)
│   │   ├── tab_navigation.vue     # 底部全局导航栏
│   │   ├── Floating.vue           # 悬浮图标组件 (如倒计时/红包)
│   │   ├── SpinePixi.vue          # Spine 动画渲染组件
│   │   └── ...                    # 其他基础 UI 组件
│   ├── composables/        # 组合式函数 (Hooks)
│   │   └── useFetchImages.js      # 封装了请求游戏列表、解析 API 数据并返回图片 URL 的逻辑
│   ├── router/             # Vue Router 路由配置
│   ├── views/              # 页面级组件 (路由组件)
│   │   ├── home.vue               # 首页
│   │   ├── promo.vue              # 活动页
│   │   ├── reward.vue             # 奖励页
│   │   ├── wallet.vue             # 钱包页
│   │   ├── account.vue            # 账户页
│   │   └── ...
│   ├── App.vue             # 根组件
│   ├── main.js             # 入口文件
│   └── config.js           # ⚙️ 全局配置文件（统一管理 API 和图片域名）
├── index.html              # HTML 模板
├── package.json            # 项目依赖和脚本配置
├── vite.config.js          # Vite 配置文件
└── postcss.config.cjs      # PostCSS 配置文件 (主要负责移动端 vw 适配)
```

---

## 💻 核心开发规范

### 1. 全局配置与 API 域名管理
所有的**接口域名**和**静态图片资源域名**都统一在 `src/config.js` 中管理。
*   **严禁在组件内硬编码 `http://localhost...` 或线上绝对地址**。
*   修改环境配置只需修改此文件。

```javascript
// src/config.js 示例
export const API_BASE_URL = 'http://localhost:8000/api';
export const IMAGE_BASE_URL = 'https://image.digidiving.com';
```

### 2. 如何调用接口获取数据
项目中统一使用浏览器原生的 `fetch` API 发起请求，且大部分业务接口使用 `POST` 方法。

**基础调用范例 (以组件内调用为例):**

```vue
<script setup>
import { ref, onMounted } from 'vue'
import { API_BASE_URL, IMAGE_BASE_URL } from '../config'

const dataList = ref([])

const fetchData = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/your/api/path`, {
      method: 'POST', // 或 GET，根据后端要求
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ channel_id: 1, type: 'xxx' }) 
    })
    
    if (response.ok) {
      const result = await response.json()
      // 解析带 JSON 字符串的特殊字段 (如 info)
      dataList.value = result.data.map(item => {
        const info = typeof item.info === 'string' ? JSON.parse(item.info) : item.info
        return {
           id: item.id,
           // 必须使用统一配置拼接图片地址
           coverUrl: `${IMAGE_BASE_URL}/path/${info.cover}` 
        }
      })
    }
  } catch (error) {
    console.error('请求失败', error)
  }
}

onMounted(() => fetchData())
</script>
```

**游戏列表复用 Hook:**
如果是获取**列表形式的图片展示数据**，请直接复用 `src/composables/useFetchImages.js`：
```javascript
import { useFetchImages } from '../composables/useFetchImages';
import { API_BASE_URL } from '../config';

const { jsonData, fetchImages, isLoading } = useFetchImages();
// 调用时传入地址和 POST body 即可
fetchImages(`${API_BASE_URL}/game/getpublicall`, { channel_id: 4, type: 'gz' });
```

### 3. 如何添加新页面
1.  **创建 Vue 文件:** 在 `src/views/` 目录下新建您的页面文件，例如 `src/views/profile.vue`。
2.  **配置路由:** 打开 `src/router/index.js`（假设存在，或直接在路由配置文件中）。
3.  **导入并注册:**
    ```javascript
    import Profile from '../views/profile.vue'
    
    const routes = [
      // ... 其他路由
      { path: '/profile', name: 'Profile', component: Profile }
    ]
    ```
4.  *(可选)* **添加到导航栏:** 如果这是一个底部一级菜单，请前往 `src/components/tab_navigation.vue`，在 `tabs` 数组中添加对应的配置项。

### 4. 资源规范 (重要避坑)
*   **大小写敏感:** 部署到 Linux 服务器时，文件系统**严格区分大小写**。例如 `assets/Reward.webp` 必须在代码中写为 `url("../assets/Reward.webp")`，不能写成 `reward.webp`，否则会导致线上 404 图片消失。
*   **推荐规范:** 建议新加的静态资源图片一律使用**全小写+连字符**的命名方式 (kebab-case，如 `promo-banner.webp`)。

---

## 🚀 运行与构建

**安装依赖**
```bash
npm install
```

**本地开发运行**
```bash
npm run dev
```

**生产环境打包**
```bash
npm run build
```

**部署到 GitHub Pages (如已配置)**
```bash
npm run deploy
```
