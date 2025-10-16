// Re-render on every page load (works with Material's instant navigation)
document$.subscribe(() => {
  if (!window.mermaid) return;

  mermaid.initialize({
    startOnLoad: false,
    theme: document.documentElement.dataset.mdColorScheme === "slate" ? "dark" : "default",
    securityLevel: "strict"
  });

  // Convert ```mermaid fenced blocks (thanks to superfences custom_fences)
  const blocks = document.querySelectorAll("div.mermaid, pre code.language-mermaid");
  blocks.forEach((node) => {
    // If it's still a <pre><code> fence, swap to <div class="mermaid">
    if (node.tagName === "CODE") {
      const pre = node.parentElement;
      const container = document.createElement("div");
      container.className = "mermaid";
      container.textContent = node.textContent;
      pre.replaceWith(container);
    }
  });

  // Render and then fade-in
  const targets = document.querySelectorAll("div.mermaid");
  if (targets.length) {
    mermaid.run({ nodes: targets }).then(() => {
      targets.forEach(el => el.classList.add("is-ready"));
    });
  }
});
