document.addEventListener("DOMContentLoaded", function () {
    // =====================================================
    // Get DOM elements
    // =====================================================
    const informedBtn = document.getElementById("informedBtn");
    const entertainedBtn = document.getElementById("entertainedBtn");
    const banner = document.getElementById("ffBanner");

    // 如果关键元素不存在，就直接退出，避免报错
    if (!informedBtn || !entertainedBtn || !banner) return;

    // =====================================================
    // Helper: set current mode
    // 我新增了这个函数，把重复逻辑收起来
    // 这样点击按钮时不会重复写两大段几乎一样的代码
    // =====================================================
    function setMode(mode) {
        // 先清掉两个 mode class
        document.body.classList.remove("ff-informed", "ff-entertained");

        if (mode === "informed") {
            // 1) 给 body 加 informed class
            document.body.classList.add("ff-informed");

            // 2) 更新按钮 active 状态
            informedBtn.classList.add("active");
            entertainedBtn.classList.remove("active");

            // 3) 更新 banner 文案
            banner.innerText = "Mode: Informed";
        } else if (mode === "entertained") {
            // 1) 给 body 加 entertained class
            document.body.classList.add("ff-entertained");

            // 2) 更新按钮 active 状态
            entertainedBtn.classList.add("active");
            informedBtn.classList.remove("active");

            // 3) 更新 banner 文案
            banner.innerText = "Mode: Entertained";
        }
    }

    // =====================================================
    // Button click events
    // 我把你原来按钮里的逻辑换成直接调用 setMode()
    // =====================================================
    informedBtn.addEventListener("click", function () {
        setMode("informed");
    });

    entertainedBtn.addEventListener("click", function () {
        setMode("entertained");
    });

    // =====================================================
    // Reminder logic: every 60 sec, hide colors for 5 sec
    // 新增内容：
    // 每隔 60 秒：
    //   1) 给 body 加 ff-color-hidden
    //   2) 5 秒后移除
    //
    // 这样不会改变当前 mode
    // 只是让颜色临时消失，再恢复
    // =====================================================
    setInterval(function () {
        // 临时隐藏颜色
        document.body.classList.add("ff-color-hidden");

        // 5 秒后恢复颜色
        setTimeout(function () {
            document.body.classList.remove("ff-color-hidden");
        }, 2500);
    }, 15000);
});