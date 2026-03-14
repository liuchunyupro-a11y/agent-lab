# GitHub 登录后 Code 页面不显示 — 解决方案

> 现象：用 Google 等账号登录 GitHub 后，仓库的 Code 标签页空白或无法加载；未登录时正常。

---

## ⚠️ 若控制台出现 `____ds_script_proxy____` 与大量 404（必做）

若按 F12 在 Console/Network 里看到：

- 大量请求指向 **`https://github.com/____ds_script_proxy____/chunk-xxxxx-....js`** 且返回 **404**
- 报错：`Loading chunk xxxxx failed after 3 retries`、CSP 报错、`MIME type ('application/json') is not executable`

**原因**：**Tampermonkey（篡改猴）** 里的 **「Github 增强 - 高速下载」**（或同类 dev-sidecar 脚本）把 GitHub 的 JS 地址改成了不存在的代理路径，导致所有 chunk 加载失败，页面空白。

**解决（任选其一）：**

1. **关闭该脚本对 GitHub 的生效**  
   - 打开 Tampermonkey 面板 → 找到「Github 增强 - 高速下载」或类似脚本 → 编辑 → 在「用户匹配」里去掉 `github.com`，或把 `@match https://github.com/*` 改为不包含 GitHub，保存。
2. **在 GitHub 上暂时禁用该脚本**  
   - 打开任意 GitHub 页面 → 点 Tampermonkey 图标 → 在该脚本前取消勾选（本次会话不运行）。
3. **直接卸载该脚本**  
   - Tampermonkey → 管理面板 → 找到该脚本 → 删除。

完成后**强刷** GitHub（Ctrl+Shift+R）或关掉所有 GitHub 标签页再打开，Code 页应恢复正常。若仍异常，再按下面「一、二」排查 Cookie/缓存等。

---

## 一、优先尝试（按顺序）

### 1. 清除 GitHub 相关 Cookie（常见有效）

部分用户反馈：**删除以下 Cookie 后页面恢复正常**。

- **Cookie 名称**：`_ga`、`_octo`、`_gh_sess`
- **操作步骤（Chrome）**：
  1. 打开 GitHub 任意页面
  2. 按 `F12` → 切到 **Application**（应用程序）
  3. 左侧 **Storage** → **Cookies** → 选中 `https://github.com`
  4. 在右侧列表中找到 `_ga`、`_octo`、`_gh_sess`，逐个右键 → **Delete**
  5. 刷新页面（F5）或重新打开仓库的 Code 页

**或** 直接清除该站点的所有数据：

- Chrome：地址栏左侧锁/信息图标 → **网站设置** → **清除数据**（或“Cookie 和网站数据”）
- 或：设置 → 隐私和安全 → 清除浏览数据 → 时间范围选“全部” → 勾选 **Cookie 及其他网站数据**，**高级**里把“主机名”限定为 `github.com`（若支持）

---

### 2. 允许 GitHub 使用 Cookie（含第三方）

GitHub 文档与社区反馈显示：**禁用或严格限制 Cookie 会导致页面空白**（如报错 `Cannot read property 'cookies' of undefined`）。

- **Chrome**：
  1. 设置 → **隐私和安全** → **Cookie 及其他网站数据**
  2. 选“允许所有 Cookie”或“阻止第三方 Cookie”时，把 **github.com** 加入 **允许使用 Cookie 的网站**
  3. 若使用 Codespaces，将 `[*.]github.dev` 加入“始终可使用 Cookie 的网站”，并勾选“包括此网站上的第三方 Cookie”

- **检查项**：确保没有扩展或设置对 `github.com` 全局拦截 Cookie。

---

### 3. 无痕/隐私模式 + 禁用扩展

- 用**无痕/隐私窗口**打开 GitHub 并登录，再访问仓库 Code 页。
- 若无痕下正常，说明是**扩展或本地存储**导致：
  - 逐个关闭扩展（尤其是广告拦截、隐私、脚本管理类）再试
  - 或在该浏览器下清除 `github.com` 的 Cookie 与本地存储后重试

---

### 4. 清除缓存与本地存储

- **缓存**：设置 → 隐私和安全 → 清除浏览数据 → 勾选“缓存的图片和文件”，时间选“过去 1 小时”或“全部”。
- **本地存储**：F12 → Application → **Local Storage** / **Session Storage** → 选中 `https://github.com` → 右键 **Clear**。
- 完成后关闭所有 GitHub 标签页，重新打开仓库再试。

---

## 二、浏览器与环境

- **更新浏览器**：使用 Chrome/Edge 最新正式版（旧版可能存在已知 Bug）。
- **换浏览器**：用 Edge 或 Firefox 登录同一账号，看 Code 页是否正常，以排除本机 Chrome 配置问题。
- **DNS**：若在国内，可尝试将 DNS 改为 `8.8.8.8` 或 `1.1.1.1`，或更换网络/VPN 后重试。

---

## 三、排查是否前端报错

1. 打开有问题的仓库 Code 页
2. 按 `F12` → **Console**（控制台）
3. 看是否有红色报错，例如：
   - `Cannot read property 'cookies' of undefined`
   - `sendBeacon`、CORS 相关错误
   - 其他 JavaScript 报错

若有，可把完整报错复制下来，到 [GitHub Community](https://github.com/orgs/community/discussions) 发帖或搜索类似问题。

---

## 四、参考来源

| 来源 | 说明 |
|------|------|
| [GitHub Community #139047](https://github.com/orgs/community/discussions/139047) | 登录后 Chrome 下 Code 视图空白（含行号链接） |
| [isaacs/github #1790](https://github.com/isaacs/github/issues/1790) | 删除 `_ga`、`_octo`、`_gh_sess` 后页面恢复 |
| [github/docs #10026](https://github.com/github/docs/issues/10026) | 禁用 Cookie 导致 blank page 与 `cookies` 报错 |
| GitHub Docs | [Cookie 管理](https://docs.github.com/en/account-and-profile/tutorials/managing-your-cookie-preferences-for-githubs-enterprise-marketing-pages)、[Codespaces 第三方 Cookie](https://docs.github.com/en/codespaces/troubleshooting/troubleshooting-github-codespaces-clients) |

---

## 五、小结

1. **最先做**：删除 `_ga`、`_octo`、`_gh_sess` 或清除 github.com 的 Cookie/网站数据。
2. **其次**：确认未对 github.com 禁用 Cookie，必要时允许第三方 Cookie（至少对 GitHub 相关域名）。
3. **再配合**：无痕模式、关扩展、清缓存与本地存储、更新或更换浏览器。

若以上都无效，可在 [GitHub Status](https://www.githubstatus.com/) 查看是否有故障，并到 [GitHub Community](https://github.com/orgs/community/discussions) 发帖反馈（附浏览器版本、是否仅登录后出现、Console 报错截图）。
