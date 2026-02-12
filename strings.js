// 遊戲文字集中管理（避免注音碼被意外修改）
const STRINGS = {
    // 遊戲標題
    title: '🎯 99 乘法大挑戰',
    subtitle: '30 秒內答對越多越好！',

    // 遊戲中提示
    hurryUp: '加油！快速作答！',
    lastQuestion: '最後一題！',
    combo: '連擊！',

    // 答題結果
    correct: '+',
    wrongAnswer: '答案是',

    // 結束畫面
    gameOver: '🎉 遊戲結束！',
    playAgain: '🔄 再玩一次',
    viewStats: '📊 查看統計',

    // 結束評語（依分數）
    endMessages: [
        { min: 500, text: '🏆 數學天才！' },
        { min: 400, text: '🌟 表現優異！' },
        { min: 300, text: '👍 做得不錯！' },
        { min: 200, text: '💪 繼續加油！' },
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
    startGame: '🚀 開始遊戲',

    // 設定頁面
    settingsTitle: '⚙️ 練習設定',
    settingsSubtitle: '選擇要練習的乘法表',
    settingsSave: '✓ 儲存',
    settingsSelectAll: '全選',
    settingsDeselectAll: '取消全選'
};

// 取得結束評語
function getEndMessage(score) {
    for (const item of STRINGS.endMessages) {
        if (score >= item.min) return item.text;
    }
    return STRINGS.endMessages[STRINGS.endMessages.length - 1].text;
}
