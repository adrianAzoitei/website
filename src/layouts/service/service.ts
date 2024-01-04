import { Rive, Layout, Fit, Alignment } from '@rive-app/canvas';

// Expandable
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


// Rive
function setupRiveAnimation() {
  const container = document.getElementsByClassName("rive-canvas")[0]
  
  const layout = new Layout({
    fit: Fit.Contain,
    alignment: Alignment.Center,
  });

  // @ts-ignore
  const riveCanvas = document.getElementById(container.dataset.id)

  if (riveCanvas !== null) {
    const riveInstance = new Rive({
      // @ts-ignore
      src: container.dataset.src,
      // @ts-ignore
      canvas: riveCanvas,
      layout: layout, // This is optional. Provides additional layout control.
      autoplay: true,
      onLoad: () => {
        // Prevent a blurry canvas by using the device pixel ratio
        riveInstance.resizeDrawingSurfaceToCanvas();
      }
    });

    // Resize the drawing surface if the window resizes
    window.addEventListener(
      "resize",
      () => {
        riveInstance.resizeDrawingSurfaceToCanvas();
      },
      false
    );
  } else {
    console.log("Oeps! Didn't find a canvas to draw in!")
  }
}

// Event listeners
// https://docs.astro.build/en/guides/view-transitions/#script-behavior-during-page-navigation
document.addEventListener('astro:page-load', ev => {
  setUpHiddenContentHandler();
});

document.addEventListener('astro:page-load', ev => {
    setupRiveAnimation();
});
