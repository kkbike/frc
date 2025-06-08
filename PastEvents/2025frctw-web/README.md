<div align="center">
  <a href="https://frc.tw">
    <picture>
      <img alt="logo" src="https://frc.tw/logo.png" height="64">
    </picture>
  </a>
  <h1>FRC 2025 台灣區賽官方網站</h1>
  <a href="https://github.com/codecat-tw/frctw-web/blob/main/package.json"><img alt="version" src="https://img.shields.io/badge/Next.js-15-blue"></a>
  <a href="https://github.com/codecat-tw/frctw-web/blob/main/package.json"><img alt="version" src="https://img.shields.io/badge/React-19-blue"></a>
  <a href="https://github.com/codecat-tw/frctw-web/blob/main/package.json"><img alt="version" src="https://img.shields.io/badge/TailwindCSS-4-blue"></a>
</div>

> 生產網址: https://www.frc.tw

> 測試網址: https://frctw-web.vercel.app

- 專案標籤: frctw-web
- 專案名稱: FRC 2025 台灣區賽官方網站
- 專案狀態: 安全維護
- 運作團隊: 程式貓
- 提案人: 中和高中-KKbike
- 開發人: 程式貓-YD

## 文件目錄

- [網站開發流程](#網站開發流程)
- [資料更新](#資料更新)
- [Markdown教學](#Markdown教學)
- [json教學](#json教學)

## 網站開發流程

1. **克隆儲存庫**  
   使用 `git clone` 指令下載此專案，然後執行 `npm install` 安裝依賴套件。
2. **啟動本地測試**  
   執行 `npm run dev` 開啟開發伺服器。
3. **提交變更**  
   編輯完成後，將修改 `git push` 至 GitHub。
4. **建置網站**  
   前往 `Github Actions` 啟動「`BuildWebsite`」腳本，系統將自動代理運行 CI/CD 並完成網站更新與發佈。

請確認網站的 commit 訊息旁是否有一個綠色的勾勾符號，這個符號表示網站成功更新。如果是黃色的點點表示網站仍在更新中，稍等約一分鐘即可；若是紅色叉叉則表示更新失敗，網站將維持正確的舊版運行，請確認更新的資料是否錯誤導致網站建置失敗，若找不到問題來源可以來信至 `codecat.tw@gmail.com` 尋求幫助。

![img](/public/README.png)

## 資料更新

各頁面的配置分成兩種模式，分別是 `markdown` 和 `json` ，每個頁面對應的配置模式在下表列出。而詳細的配置教學可以參閱 [Markdown教學](#markdown教學) 或 [json教學](#json教學) 。

| 頁面名稱  | 網站功能 | 資料模式 | 檔案路徑                |
| --------- | -------- | -------- | ----------------------- |
| about     | 關於我們 | markdown | `/posts/about`          |
| calendar  | 活動日曆 | json     | `/config/calendar.json` |
| contact   | 聯繫團隊 | json     | `/config/contact.json`  |
| news      | 最新公告 | markdown | `/posts/news`           |
| sponsors  | 贊助商   | json     | `/config/sponsors.json` |
| volunteer | 志工招募 | markdown | `/posts/volunteer`      |

## Markdown教學

Markdown 是一種輕量級標記式語言，常用於網站資訊撰寫。雖然 Markdown 有很多語法，但是不使用語法的純文字文件仍可以正常顯示，因此如果不熟悉語法不妨先以純文字的方式寫看看吧！

除了基本的 Markdown 語法外，這個網站還支援 元標記 用來做內容預覽和搜索引擎優化 SEO 。下面是支援的屬性資料。

```
---
title: "系統測試" //文件標題(必填)
publishedAt: "2024-09-26" //發布日期(必填)
description: "測試中狀態" //內容摘要(選填)
icon: "akar-icons:circle-check-fill" //公告圖標(選填)
---
```

⚠️ 圖標配置說明
屬性中的 `icon` 是使用 iconify 的標誌，可以到 [這裡](https://icon-sets.iconify.design/) 找到喜歡的圖標並寫進去。

⚠️ 圖片配置說明
文件中若需要使用圖片功能，圖片請放置於根目錄的 `/pubic` 下，程式會自動映射到網站的媒體資源中。假設有一個圖片是 `/pubic/example.png`，則只需要輸入 `![img](/example.png)`。

## Json教學

JSON（JavaScript Object Notation）是一種輕量級資料交換格式。其內容由屬性和值所組成，因此也有易於閱讀和處理的優勢，廣泛使用於屬性配置和資料傳輸。

這個網站透過 json 處理資料配置，其對應的結構如下方所示。同時日曆和贊助商為陣列格式，可自由新增數筆資料，新增時請注意 json 格式中逗號的位置確保配置正確。

### calendar

```json
{
  "name": "行憲紀念日", //活動名稱
  "date": "2024-12-25", // 活動日期
  "link": "https://example.com" // 指向連結
},
```

### sponsors

```json
{
  "name": "中和高中", // 贊助商名稱
  "logo": "https://frc.codecat.tw/icon.png", // 贊助商圖標
  "link": "https://frc.codecat.tw" // 贊助商導向連結
},
```

由於贊助商有分類，因此需要將資料填入對應的類別中，若欄位陣列為空網站則自動隱藏該分類。

### contact

```json
{
  "電子郵件": "contact@gmail.com",
  "電話號碼": "+886 ..."
}


// 每一個項目名稱和資料都會以單獨一行顯示出來，因此可以自由輸入名稱和內容。
```

每一個配置都是一個陣列，也就是說你可以按照實際需求新增更多的資料出來，像是新增十個活動或是二十個贊助商。
