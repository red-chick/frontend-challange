import { useEffect, useRef } from "react";

import { Chart, ArcElement, PieController, Legend, Tooltip } from "chart.js";

Chart.register(ArcElement, PieController, Legend, Tooltip);

const PieChart = ({ data }) => {
  const canvasDom = useRef(null);

  useEffect(() => {
    const ctx = canvasDom.current.getContext("2d");
    var myChart = new Chart(ctx, {
      type: "pie",
      data,
    });
  }, []);

  return <canvas ref={canvasDom}></canvas>;
};

export default PieChart;
