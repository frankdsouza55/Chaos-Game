function ChaosGame() {
  const TOTAL_POINTS = 500000; // No of points to be drawn
  let initialCoordinates; // Points of main triangle
  let canvasCtx, width, height;

  function createCoordinate(x, y) {
    return { x, y };
  }

  function createCanvas(width, height) {
    let canvas = document.createElement("canvas");
    canvas.setAttribute("width", width);
    canvas.setAttribute("height", height);
    document.body.appendChild(canvas);
    return canvas.getContext("2d");
  }

  function plotPoint(point) {
    canvasCtx.fillRect(point.x, point.y, 1, 1);
  }

  function generateFractal(initialPoint) {
    let lastPoint = initialPoint;
    for (let i = 0; i < TOTAL_POINTS; i++) {
      // Choose random corner of the triangle
      let p = Math.floor(Math.random() * 3);
      let midPoint = createCoordinate(
        (lastPoint.x + initialCoordinates[p].x) / 2,
        (lastPoint.y + initialCoordinates[p].y) / 2
      );
      plotPoint(midPoint);

      // Update last point drawn
      lastPoint = midPoint;
    }
  }

  function init() {
    height = window.innerHeight;
    width = window.innerWidth - 20;

    canvasCtx = createCanvas(width, height);

    // Set triangle points
    initialCoordinates = [
      createCoordinate(width / 2, 0),
      createCoordinate(10, height - 10),
      createCoordinate(width - 30, height - 10),
    ];
  }

  function start() {
    // Plot the triangle points
    initialCoordinates.forEach((c) => {
      plotPoint(c);
    });
    // Initial point to start drawing fractal from
    let initialPoint = createCoordinate(width / 2, height / 2);
    generateFractal(initialPoint);
  }

  init();
  start();
}
