import { Rive, Layout, Fit, Alignment } from "@rive-app/canvas";
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));


// Expandable
async function expandHiddenContent(): Promise<void> {
  const expandables: Element[] = Array.from(
    document.getElementsByClassName("expandable")
  );

  for (const expandable of expandables) {
    expandable.classList.toggle("expanded");
    await sleep(300);
  }
}

// Rive
function setupRiveAnimation() {
  const canvases: HTMLCollectionOf<Element> = document.getElementsByClassName("rive-canvas");
  const layout = new Layout({
    fit: Fit.Contain,
    alignment: Alignment.Center,
  });

  Array.from(canvases).forEach((riveCanvas) => {
    if (riveCanvas !== null) {
      const riveInstance = new Rive({
        // @ts-ignore
        src: `../../${riveCanvas.id}.riv`,
        // @ts-ignore
        canvas: riveCanvas,
        layout: layout, // This is optional. Provides additional layout control.
        autoplay: true,
        // @ts-ignore
        stateMachines: riveCanvas.id === "server-side" ? "default" : null, // why won't this default state machine play?
        onLoad: () => {
          // Prevent a blurry canvas by using the device pixel ratio
          riveInstance.resizeDrawingSurfaceToCanvas();
        },
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
      console.log("Oeps! Didn't find a canvas to draw in!");
    }
  });
}

// Event listeners
// https://docs.astro.build/en/guides/view-transitions/#script-behavior-during-page-navigation
document.addEventListener("astro:page-load", (ev) => {
  expandHiddenContent();
});

document.addEventListener("astro:page-load", (ev) => {
  setupRiveAnimation();
});
