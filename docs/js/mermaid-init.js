window.addEventListener("DOMContentLoaded", () => {
  const render = () => {
    if (!window.mermaid) return;
    
    mermaid.initialize({
      startOnLoad: false,
      theme: document.documentElement.dataset.mdColorScheme === "slate" ? "dark" : "default",
      securityLevel: "loose"
    });
    
    // Find all mermaid code blocks and convert them
    const blocks = document.querySelectorAll("pre code.language-mermaid");
    blocks.forEach((block) => {
      const wrapper = document.createElement("div");
      wrapper.classList.add("mermaid");
      wrapper.textContent = block.textContent;
      block.parentNode.replaceWith(wrapper);
    });
    
    // Initialize mermaid on all .mermaid elements
    mermaid.init(undefined, ".mermaid");
  };

  render();

  // Re-render when navigating with Material's instant loading
  document.addEventListener("DOMContentLoaded", render);
  
  // Also handle theme changes
  const observer = new MutationObserver(() => {
    if (window.mermaid) {
      const theme = document.documentElement.dataset.mdColorScheme === "slate" ? "dark" : "default";
      mermaid.initialize({ theme });
    }
  });
  
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-md-color-scheme"]
  });
});
