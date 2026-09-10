# 星星戀愛日記｜Starry Love Diary 官方網站

靜態、手機優先的《星星戀愛日記》官方網站。它介紹產品如何協助使用者記錄心動、整理感受，並把注意力慢慢帶回自己。

## 開發

```bash
npm install
npm run dev
npm run build
npm run lint
npm test
```

## GitHub Pages

Vite 的 `base` 已設定為 `/starry-love-diary-official-site/`，可部署到 repository 的 GitHub Pages 專案路徑。網站使用實體 `privacy.html` 與 `terms.html`，因此不依賴 SPA fallback；直接開啟法律頁也不會遇到 GitHub Pages 的 route 404。

## 語言

V1 正式內容為繁體中文。文案集中於 `src/content/zh-TW.ts`，未來可在相同目錄新增英文、日文、韓文、西班牙文與法文內容後，再啟用語言切換。

## 結構

- `src/components/`：網站共用元件
- `src/content/`：集中式內容
- `src/pages/`：首頁與法律資訊頁
- `src/styles/`：全站樣式

本網站沒有後端、登入、分析、cookies、資料庫或下載商店連結。備份、匯出與跨裝置同步仍以 App 正式功能狀態為準。
