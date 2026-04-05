document.addEventListener("DOMContentLoaded", function () {
  const root = document.getElementById("figure-3-4-interactive-sampling");
  if (!root || typeof Plotly === "undefined") {
    return;
  }

  const sampleInput = document.getElementById("sample-count");
  const seedInput = document.getElementById("sample-seed");
  const runButton = document.getElementById("run-sampling");
  const lhcCdInline = document.getElementById("lhc-cd-inline");
  const rndCdInline = document.getElementById("rnd-cd-inline");

  const X_MAX = 0.3;
  const Y_MAX = 0.2;
  const GRID_RES = 120;

  function makeRng(seed) {
    let state = seed >>> 0;
    return function () {
      state = (1664525 * state + 1013904223) >>> 0;
      return state / 4294967296;
    };
  }

  function sampleRandom(n, rng) {
    const pts = [];
    for (let i = 0; i < n; i += 1) {
      pts.push([rng(), rng()]);
    }
    return pts;
  }

  function sampleLhc(n, rng) {
    const xBins = [];
    const yBins = [];

    for (let i = 0; i < n; i += 1) {
      xBins.push((i + rng()) / n);
      yBins.push((i + rng()) / n);
    }

    for (let i = n - 1; i > 0; i -= 1) {
      const j = Math.floor(rng() * (i + 1));
      const temp = yBins[i];
      yBins[i] = yBins[j];
      yBins[j] = temp;
    }

    const pts = [];
    for (let i = 0; i < n; i += 1) {
      pts.push([xBins[i], yBins[i]]);
    }
    return pts;
  }

  function centeredDiscrepancy(points) {
    const n = points.length;
    let term1 = Math.pow(13 / 12, 2);
    let term2 = 0;
    let term3 = 0;

    for (let i = 0; i < n; i += 1) {
      const xi = points[i][0];
      const yi = points[i][1];
      term2 +=
        (1 + 0.5 * Math.abs(xi - 0.5) - 0.5 * Math.pow(Math.abs(xi - 0.5), 2)) *
        (1 + 0.5 * Math.abs(yi - 0.5) - 0.5 * Math.pow(Math.abs(yi - 0.5), 2));

      for (let j = 0; j < n; j += 1) {
        const xj = points[j][0];
        const yj = points[j][1];
        term3 +=
          (1 +
            0.5 * Math.abs(xi - 0.5) +
            0.5 * Math.abs(xj - 0.5) -
            0.5 * Math.abs(xi - xj)) *
          (1 +
            0.5 * Math.abs(yi - 0.5) +
            0.5 * Math.abs(yj - 0.5) -
            0.5 * Math.abs(yi - yj));
      }
    }

    return term1 - (2 / n) * term2 + (1 / (n * n)) * term3;
  }

  function scalePoints(points, xMax, yMax) {
    return points.map(function (p) {
      return [p[0] * xMax, p[1] * yMax];
    });
  }

  function mean(values) {
    return (
      values.reduce(function (a, b) {
        return a + b;
      }, 0) / values.length
    );
  }

  function std(values, mu) {
    const variance =
      values.reduce(function (acc, x) {
        const d = x - mu;
        return acc + d * d;
      }, 0) / Math.max(1, values.length - 1);
    return Math.sqrt(variance);
  }

  function kdeGrid(points, xMin, xMax, yMin, yMax, nx, ny) {
    const xVals = points.map(function (p) {
      return p[0];
    });
    const yVals = points.map(function (p) {
      return p[1];
    });

    const n = points.length;
    const mux = mean(xVals);
    const muy = mean(yVals);
    const sdx = std(xVals, mux);
    const sdy = std(yVals, muy);

    const hx = Math.max(0.01, 1.06 * sdx * Math.pow(n, -1 / 5));
    const hy = Math.max(0.01, 1.06 * sdy * Math.pow(n, -1 / 5));

    const xs = [];
    const ys = [];

    for (let i = 0; i < nx; i += 1) {
      xs.push(xMin + (xMax - xMin) * (i / (nx - 1)));
    }
    for (let j = 0; j < ny; j += 1) {
      ys.push(yMin + (yMax - yMin) * (j / (ny - 1)));
    }

    const z = ys.map(function (y) {
      return xs.map(function (x) {
        let sum = 0;
        for (let k = 0; k < n; k += 1) {
          const dx = (x - points[k][0]) / hx;
          const dy = (y - points[k][1]) / hy;
          sum += Math.exp(-0.5 * (dx * dx + dy * dy));
        }
        return sum / (n * hx * hy);
      });
    });

    return { xs: xs, ys: ys, z: z };
  }

  function buildSeries(
    points,
    density,
    xAxis,
    yAxis,
    panelName,
    colorScale,
    showColorBar,
    zMin,
    zMax,
  ) {
    const x = points.map(function (p) {
      return p[0];
    });
    const y = points.map(function (p) {
      return p[1];
    });
    const step = (zMax - zMin) / 18 || 1e-6;

    return [
      {
        type: "contour",
        x: density.xs,
        y: density.ys,
        z: density.z,
        colorscale: colorScale,
        xaxis: xAxis,
        yaxis: yAxis,
        opacity: 0.95,
        contours: {
          coloring: "heatmap",
          showlines: true,
          start: zMin,
          end: zMax,
          size: step,
        },
        zmin: zMin,
        zmax: zMax,
        line: {
          color: "rgba(255,255,255,0.9)",
          width: 0.45,
        },
        showscale: showColorBar,
        colorbar: showColorBar
          ? {
              title: {
                text: "Estimated density (KDE)",
                side: "right",
              },
              x: 1.02,
              len: 0.74,
              thickness: 12,
              outlinewidth: 0.8,
            }
          : undefined,
        hoverinfo: "skip",
        name: panelName,
      },
      {
        type: "scatter",
        mode: "markers",
        x: x,
        y: y,
        xaxis: xAxis,
        yaxis: yAxis,
        marker: {
          color: "#ffffff",
          size: 6,
          line: { color: "#2b2b2b", width: 0.75 },
        },
        showlegend: false,
        hovertemplate: "NaOH: %{x:.3f}<br>CO\u2082: %{y:.3f}<extra></extra>",
      },
    ];
  }

  function runSampling() {
    const n = Math.max(10, Math.min(200, Number(sampleInput.value) || 30));
    const seed = Math.max(1, Number(seedInput.value) || 42);

    sampleInput.value = n;
    seedInput.value = seed;

    const rngLhc = makeRng(seed);
    const rngRnd = makeRng(seed + 101);

    const lhcUnit = sampleLhc(n, rngLhc);
    const rndUnit = sampleRandom(n, rngRnd);
    const lhcCd = centeredDiscrepancy(lhcUnit);
    const rndCd = centeredDiscrepancy(rndUnit);

    const lhc = scalePoints(lhcUnit, X_MAX, Y_MAX);
    const rnd = scalePoints(rndUnit, X_MAX, Y_MAX);

    if (lhcCdInline) {
      lhcCdInline.textContent = lhcCd.toFixed(5);
    }
    if (rndCdInline) {
      rndCdInline.textContent = rndCd.toFixed(5);
    }

    const lhcDensity = kdeGrid(lhc, 0, X_MAX, 0, Y_MAX, GRID_RES, GRID_RES);
    const rndDensity = kdeGrid(rnd, 0, X_MAX, 0, Y_MAX, GRID_RES, GRID_RES);
    const lhcFlat = lhcDensity.z.flat();
    const rndFlat = rndDensity.z.flat();
    const zMin = Math.min(
      Math.min.apply(null, lhcFlat),
      Math.min.apply(null, rndFlat),
    );
    const zMax = Math.max(
      Math.max.apply(null, lhcFlat),
      Math.max.apply(null, rndFlat),
    );

    const traces = []
      .concat(
        buildSeries(
          lhc,
          lhcDensity,
          "x",
          "y",
          "Latin Hypercube",
          "Oranges",
          false,
          zMin,
          zMax,
        ),
      )
      .concat(
        buildSeries(
          rnd,
          rndDensity,
          "x2",
          "y2",
          "Random",
          "Oranges",
          true,
          zMin,
          zMax,
        ),
      );

    const layout = {
      margin: { l: 58, r: 78, t: 46, b: 128 },
      paper_bgcolor: "#ffffff",
      plot_bgcolor: "#ffffff",
      font: { family: "Times New Roman, Georgia, serif", size: 13 },
      showlegend: false,
      xaxis: {
        domain: [0.0, 0.46],
        title: "NaOH flowrate (L/min)",
        range: [0, X_MAX],
        dtick: 0.05,
        gridcolor: "rgba(0,0,0,0.15)",
        fixedrange: true,
      },
      yaxis: {
        title: "CO\u2082 flowrate (L/min)",
        range: [0, Y_MAX],
        dtick: 0.025,
        gridcolor: "rgba(0,0,0,0.15)",
        fixedrange: true,
      },
      xaxis2: {
        domain: [0.54, 1.0],
        title: "NaOH flowrate (L/min)",
        range: [0, X_MAX],
        dtick: 0.05,
        gridcolor: "rgba(0,0,0,0.15)",
        fixedrange: true,
      },
      yaxis2: {
        title: "CO\u2082 flowrate (L/min)",
        range: [0, Y_MAX],
        dtick: 0.025,
        gridcolor: "rgba(0,0,0,0.15)",
        fixedrange: true,
      },
      dragmode: false,
      annotations: [
        {
          text: "<b>Latin Hypercube</b>",
          xref: "x domain",
          yref: "paper",
          x: 0.5,
          y: 1.1,
          xanchor: "center",
          showarrow: false,
        },
        {
          text: "<b>Random</b>",
          xref: "x2 domain",
          yref: "paper",
          x: 0.5,
          y: 1.1,
          xanchor: "center",
          showarrow: false,
        },
        {
          text: "<b>Centered discrepancy:</b> " + lhcCd.toFixed(5),
          xref: "x domain",
          yref: "paper",
          x: 0.5,
          y: -0.31,
          xanchor: "center",
          showarrow: false,
          font: { size: 12 },
        },
        {
          text: "<b>Centered discrepancy:</b> " + rndCd.toFixed(5),
          xref: "x2 domain",
          yref: "paper",
          x: 0.5,
          y: -0.31,
          xanchor: "center",
          showarrow: false,
          font: { size: 12 },
        },
      ],
    };

    Plotly.newPlot("sampling-method-plot", traces, layout, {
      responsive: true,
      displaylogo: false,
      displayModeBar: false,
      scrollZoom: false,
      doubleClick: false,
      modeBarButtonsToRemove: [
        "zoom2d",
        "pan2d",
        "zoomIn2d",
        "zoomOut2d",
        "autoScale2d",
        "resetScale2d",
        "select2d",
        "lasso2d",
      ],
    });
  }

  runButton.addEventListener("click", runSampling);
  runSampling();
});
