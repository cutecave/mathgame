// 多語言文字管理
const LANG = {
    zh: {
        // 遊戲標題
        title: '🎯 99 乘法大挑戰',
        subtitle: '30 秒內答對越多越好！',

        // 遊戲中提示
        hurryUp: '加油！快速作答！',
        lastQuestion: '最後一󠇢題！',
        combo: '連擊！',

        // 答題結果
        correct: '+',
        wrongAnswer: '答案是',

        // 結束畫面
        gameOver: '🎉 遊戲結束！',
        playAgain: '🔄 再玩一󠇡次',
        viewStats: '📊 查看統計',

        // 結束評語（依分數）
        endMessages: [
            { min: 300, text: '🏆 數學天才！' },
            { min: 200, text: '🌟 表現優異！' },
            { min: 150, text: '👍 做得󠇡不󠇡錯！' },
            { min: 100, text: '💪 繼續加油！' },
            { min: 0,   text: '😊 熟能生巧！' }
        ],

        // 統計頁面
        statsTitle: '📊 學習統計',
        tabRecent: '最近紀錄',
        tabChart: '每日圖表',
        noRecord: '還沒有遊戲紀錄',
        back: '← 返回',

        // 刪除確認
        deleteConfirm1: '刪除嗎？',
        deleteConfirm2: '真的要刪除紀錄嗎？',
        cancel: '取消',
        confirm: '確定',

        // 開始按鈕
        multiplyGame: '✕ 乘法遊戲',
        multiplyChallenge: '✕ 乘法挑戰',
        divideChallenge: '÷ 除法挑戰',

        // 設定頁面
        settingsTitle: '要練習什麼數字呢？',
        settingsSave: '✓ 儲存',
        settingsSelectAll: '全選',
        settingsDeselectAll: '取消全選'
    },

    en: {
        // Game title
        title: '🎯 Times Table Challenge',
        subtitle: 'Answer as many as you can in 30 seconds!',

        // In-game hints
        hurryUp: 'Go go go!',
        lastQuestion: 'Last one!',
        combo: 'Combo!',

        // Answer results
        correct: '+',
        wrongAnswer: 'Answer:',

        // End screen
        gameOver: '🎉 Game Over!',
        playAgain: '🔄 Play Again',
        viewStats: '📊 View Stats',

        // End messages (by score)
        endMessages: [
            { min: 300, text: '🏆 Math Genius!' },
            { min: 200, text: '🌟 Excellent!' },
            { min: 150, text: '👍 Well Done!' },
            { min: 100, text: '💪 Keep Going!' },
            { min: 0,   text: '😊 Practice Makes Perfect!' }
        ],

        // Stats page
        statsTitle: '📊 Learning Stats',
        tabRecent: 'Recent',
        tabChart: 'Daily Chart',
        noRecord: 'No records yet',
        back: '← Back',

        // Delete confirmation
        deleteConfirm1: 'Delete?',
        deleteConfirm2: 'Really delete all records?',
        cancel: 'Cancel',
        confirm: 'OK',

        // Start buttons
        multiplyGame: '✕ Multiply',
        multiplyChallenge: '✕ Challenge',
        divideChallenge: '÷ Divide',

        // Settings page
        settingsTitle: 'Which numbers to practice?',
        settingsSave: '✓ Save',
        settingsSelectAll: 'All',
        settingsDeselectAll: 'None'
    }
};

// 當前語言
const LANG_KEY = 'mathgame_lang';
let currentLang = localStorage.getItem(LANG_KEY) || 'zh';

// 取得文字
function t(key) {
    return LANG[currentLang][key] || LANG.zh[key] || key;
}

// 切換語言
function setLang(lang) {
    currentLang = lang;
    localStorage.setItem(LANG_KEY, lang);
    document.body.className = 'lang-' + lang;
    updateAllI18n();
}

// 自動更新所有 data-i18n 元素
function updateAllI18n() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        el.textContent = t(el.dataset.i18n);
    });
    // 更新語言按鈕（顯示當前語言）
    const langBtn = document.getElementById('langBtn');
    if (langBtn) langBtn.textContent = currentLang === 'zh' ? '中' : 'EN';
}

// 頁面載入時初始化
document.addEventListener('DOMContentLoaded', () => {
    document.body.className = 'lang-' + currentLang;
    updateAllI18n();
});

// 取得結束評語
function getEndMessage(score) {
    const messages = t('endMessages');
    for (const item of messages) {
        if (score >= item.min) return item.text;
    }
    return messages[messages.length - 1].text;
}

// 相容舊代碼
const STRINGS = new Proxy({}, {
    get: (_, key) => t(key)
});
