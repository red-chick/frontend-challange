import { useEffect, useRef } from "react";

import { Chart, ArcElement, PieController, Legend, Tooltip } from "chart.js";

Chart.register(ArcElement, PieController, Legend, Tooltip);

const PieChart = ({ data }) => {
  const canvasDom = useRef(null);
  const myChart = useRef(null);

  useEffect(() => {
    const canvas = canvasDom.current;
    const ctx = canvas.getContext("2d");
    if (myChart.current) {
      myChart.current.data = data;
      myChart.current.update();
    } else {
      myChart.current = new Chart(ctx, {
        type: "pie",
        data,
      });
    }
  }, [data]);

  return <canvas ref={canvasDom}></canvas>;
};

export default PieChart;
