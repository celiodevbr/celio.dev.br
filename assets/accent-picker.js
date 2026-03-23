const ACCENT_STORAGE_KEY = "lp-accent";
const DEFAULT_ACCENT = "#2d9cdb";

function applyAccent(value) {
    document.documentElement.style.setProperty("--accent", value);
}

function syncPressedState(buttons, activeValue) {
    for (const button of buttons) {
        button.setAttribute(
            "aria-pressed",
            String(button.dataset.accent === activeValue)
        );
    }
}

function initAccentPicker() {
    const buttons = Array.from(document.querySelectorAll(".accent-picker__swatch"));
    if (!buttons.length) {
        return;
    }

    let activeAccent = DEFAULT_ACCENT;

    try {
        activeAccent = localStorage.getItem(ACCENT_STORAGE_KEY) || DEFAULT_ACCENT;
    } catch (_) {}

    applyAccent(activeAccent);
    syncPressedState(buttons, activeAccent);

    for (const button of buttons) {
        button.addEventListener("click", () => {
            const nextAccent = button.dataset.accent || DEFAULT_ACCENT;
            applyAccent(nextAccent);
            syncPressedState(buttons, nextAccent);

            try {
                localStorage.setItem(ACCENT_STORAGE_KEY, nextAccent);
            } catch (_) {}
        });
    }
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAccentPicker, { once: true });
} else {
    initAccentPicker();
}
