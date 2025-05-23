
var chart_config = {
  chart: {
    container: "#tree-simple",
    nodeAlign: "TOP",
    connectors: { type: "step" },
    node: { HTMLclass: "person-node" }
  },
  nodeStructure: {
    text: { name: "Александра Суркова" },
    image: "https://via.placeholder.com/80?text=AS",
    children: [
      {
        text: { name: "Дарья Слабий" },
        image: "https://via.placeholder.com/80?text=DS",
        children: [
          {
            text: { name: "Людмила Климачкова" },
            image: "https://via.placeholder.com/80?text=LK"
          },
          {
            text: { name: "Валентин Слабий" },
            image: "https://via.placeholder.com/80?text=VS"
          }
        ]
      },
      {
        text: { name: "Андрей Боляновский" },
        image: "https://via.placeholder.com/80?text=AB",
        children: [
          {
            text: { name: "Галина Моцкус" },
            image: "https://via.placeholder.com/80?text=GM"
          },
          {
            text: { name: "Александр Боляновский" },
            image: "https://via.placeholder.com/80?text=ALB"
          }
        ]
      }
    ]
  }
};

new Treant(chart_config);
