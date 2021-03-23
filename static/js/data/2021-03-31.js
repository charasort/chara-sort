  
dataSetVersion = "2021-03-31"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};
 
dataSet[dataSetVersion].options = [
  {
    name: "Filter by Series Entry",
    key: "series",
    tooltip: "Check this to restrict to certain series.",
    checked: false,
    sub: [
      { name: "Books", key: "book" },
    ]
  }
];
 
 
dataSet[dataSetVersion].characterData = [
    {   img: 'd/d0/JonSnow8x06.PNG/',
        name: 'Jon Snow',
        opts: { "series": ["book"],
        stage: ["st4"]}},
    {   img: '4/4f/Daenerys_Season_8.JPG/',
        name: 'Daenerys Targaryen',
        opts: { "series": ["book"],
        stage: ["st4"]}},
    {   img: '5/51/Rhaeger_main_infobox.PNG/',
        name: 'Rhaegar Targaryen',
        opts: { "series": ["book"],
        stage: ["st4"]}},
    {   img: '6/63/QueenSansa.PNG/',
        name: 'Sansa Stark',
        opts: { "series": ["book"],
        stage: ["st4"]}},
    {   img: 'b/be/AryaShipIronThrone.PNG/',
        name: 'Arya Stark',
        opts: { "series": ["book"],
        stage: ["st4"]}},
    {   img: 'd/d2/Ramsay_S06E09_RESZIED_FOR_INFOBOX.JPG/',
        name: 'Ramsay Bolton',
        opts: { "series": ["book"],
        stage: ["st4"]}},
    {   img: '7/78/TheonS8E1.PNG/',
        name: 'Theon Greyjoy',
        opts: { "series": ["book"],
        stage: ["st4"]}}
]