function setUpHiddenContentHandler(): void {
    const expandables: Element[] = Array.from(document.getElementsByClassName('expandable'));
  
    expandables.forEach(expandable => {
      const expandableContainer: Element = expandable.getElementsByClassName('hidden-content')[0];
      expandable.addEventListener('click', () => {
        if (expandableContainer.classList.contains('expanded')) {
          expandableContainer.classList.remove('expanded');
          expandable.classList.remove("bg-use-cases-hover");
        } else {
          expandableContainer.classList.toggle('expanded');
          expandable.classList.toggle("bg-use-cases-hover");
        }
      });
    });
  }

// https://docs.astro.build/en/guides/view-transitions/#script-behavior-during-page-navigation
document.addEventListener('astro:page-load', ev => {
    setUpHiddenContentHandler();
});
