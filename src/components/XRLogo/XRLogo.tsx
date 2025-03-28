"use client";

import { ModelViewerElement } from "@google/model-viewer";
import { createComponent } from "@lit/react";
import React from "react";

import "@google/model-viewer";

const ModelViewer = createComponent({
  tagName: "model-viewer",
  elementClass: ModelViewerElement,
  react: React,
  events: {
    // https://modelviewer.dev/docs/index.html#loading-events
    onError: "error",
    onBeforeRender: "before-render",
    onLoad: "load",
    onPosterDismissed: "poster-dismissed",
    onModelVisibility: "model-visibility",
    onProgress: "progress",
    onRenderScale: "render-scale",
    // https://modelviewer.dev/docs/index.html#augmentedreality-events
    onArStatus: "ar-status",
    onArTracking: "ar-tracking",
    onQuickLookButtonTapped: "quick-look-button-tapped",
    // https://modelviewer.dev/docs/index.html#stagingandcameras-events
    onCameraChange: "camera-change",
    onInteractStopped: "interact-stopped",
    // https://modelviewer.dev/docs/index.html#lightingandenv-events
    onEnvironmentChange: "environment-change",
    // https://modelviewer.dev/docs/index.html#animation-events
    onPlay: "play",
    onPause: "pause",
    onLoop: "loop",
    onFinished: "finished",
    onAppendAnimation: "append-animation",
    onDetachAnimation: "detach-animation",
  },
});

export const XRLogo = () => {
  return (
    <ModelViewer
      className="h-full w-full"
      src="/logo.glb"
      camera-orbit="0deg 90deg 300%"
      max-camera-orbit="Infinity 180deg 300%"
      scale="0.25 0.25 0.25"
      ar
    />
  );
};
