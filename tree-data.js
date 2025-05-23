var chart_config = {
  "chart": {
    "container": "#tree-simple",
    "nodeAlign": "TOP",
    "connectors": {
      "type": "step"
    },
    "node": {
      "HTMLclass": "person-node"
    }
  },
  "nodeStructure": {
    "text": {
      "name": "Александра Суркова"
    },
    "image": "images/aleksandra.jpg",
    "children": [
      {
        "text": {
          "name": "Дарья Слабий"
        },
        "image": "images/darya.jpg",
        "children": [
          {
            "text": {
              "name": "Людмила Климачкова"
            },
            "image": "images/lyudmila.jpg"
          },
          {
            "text": {
              "name": "Валентин Слабий"
            },
            "image": "images/valentin.jpg"
          }
        ]
      },
      {
        "text": {
          "name": "Андрей Боляновский"
        },
        "image": "images/andrey.jpg",
        "children": [
          {
            "text": {
              "name": "Галина Моцкус"
            },
            "image": "images/galina.jpg"
          },
          {
            "text": {
              "name": "Александр Боляновский"
            },
            "image": "images/aleksandr.jpg"
          }
        ]
      }
    ]
  }
};