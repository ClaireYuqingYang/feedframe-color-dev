document.addEventListener("DOMContentLoaded", function () {
    const informedBtn = document.getElementById("informedBtn");
    const entertainedBtn = document.getElementById("entertainedBtn");
    const banner = document.getElementById("ffBanner");

    if (!informedBtn || !entertainedBtn || !banner) return;

    function setMode(mode) {
        document.body.classList.remove("ff-informed", "ff-entertained");

        if (mode === "informed") {
            document.body.classList.add("ff-informed");
            informedBtn.classList.add("active");
            entertainedBtn.classList.remove("active");
            banner.innerText = "Mode: Informed";
        } else if (mode === "entertained") {
            document.body.classList.add("ff-entertained");
            entertainedBtn.classList.add("active");
            informedBtn.classList.remove("active");
            banner.innerText = "Mode: Entertained";
        }
    }

    informedBtn.addEventListener("click", function () {
        setMode("informed");
    });

    entertainedBtn.addEventListener("click", function () {
        setMode("entertained");
    });

    let pulseTimeout = null;

    function triggerPulse() {
        // 先移除，确保动画可以重新开始
        document.body.classList.remove("ff-pulsing");

        // 强制浏览器重算样式，帮助 animation 重新触发
        void document.body.offsetWidth;

        // 再加回来
        document.body.classList.add("ff-pulsing");

        console.log("pulse started:", document.body.className);

        // 避免上一次 timeout 残留
        if (pulseTimeout) {
            clearTimeout(pulseTimeout);
        }

        pulseTimeout = setTimeout(function () {
            document.body.classList.remove("ff-pulsing");
            console.log("pulse ended:", document.body.className);
        }, 5000);
    }

    // 暴露到 console，方便你手动测试
    window.triggerPulse = triggerPulse;

    // 每 10 秒 pulse 一次；正式实验再改回 60000
    setInterval(triggerPulse, 10000);
});