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
      "name": "Александра Суркова",
      "title": "1994 — н.в.\nЖурналист, музыкант"
    },
    "image": "https://via.placeholder.com/80?text=AS",
    "children": [
      {
        "text": {
          "name": "Дарья Слабий",
          "title": "1973 — н.в.\nМама, родом из Новосибирска"
        },
        "image": "https://via.placeholder.com/80?text=DS",
        "children": [
          {
            "text": {
              "name": "Людмила Климачкова",
              "title": "1938 — ?\nБиблиотекарь"
            },
            "image": "https://via.placeholder.com/80?text=LK"
          },
          {
            "text": {
              "name": "Валентин Слабий",
              "title": "1937 — ?\nРабочий"
            },
            "image": "https://via.placeholder.com/80?text=VS",
            "children": [
              {
                "text": {
                  "name": "Агриппина Иваненко",
                  "title": "? — ?\nМать Валентина"
                },
                "image": "https://via.placeholder.com/80?text=AI"
              },
              {
                "text": {
                  "name": "Пётр Слабий",
                  "title": "? — ?\nОтец Валентина"
                },
                "image": "https://via.placeholder.com/80?text=PS"
              }
            ]
          }
        ]
      },
      {
        "text": {
          "name": "Андрей Боляновский",
          "title": "1971 — н.в.\nОтец, инженер"
        },
        "image": "https://via.placeholder.com/80?text=AB",
        "children": [
          {
            "text": {
              "name": "Галина Моцкус",
              "title": "? — ?\nБабушка по папе"
            },
            "image": "https://via.placeholder.com/80?text=GM"
          },
          {
            "text": {
              "name": "Александр Боляновский",
              "title": "? — ?\nДедушка по папе"
            },
            "image": "https://via.placeholder.com/80?text=ALB"
          }
        ]
      }
    ]
  }
};
new Treant(chart_config);