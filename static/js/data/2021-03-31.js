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
    {   img: 'Whzl0VK.png',
        name: 'Jon Snow',
        opts: { "series": ["book"],
        stage: ["st4"]}},
    {   img: 'Qk4zwx1.png',
        name: 'Daenerys Targaryen',
        opts: { "series": ["book"],
        stage: ["st4"]}},
    {   img: 'hFfj6Yf.png',
        name: 'Rhaegar Targaryen',
        opts: { "series": ["book"],
        stage: ["st4"]}},
    {   img: 'wz309Pv.png',
        name: 'Sansa Stark',
        opts: { "series": ["book"],
        stage: ["st4"]}},
    {   img: 'aoy6mma.png',
        name: 'Arya Stark',
        opts: { "series": ["book"],
        stage: ["st4"]}},
    {   img: 'ELhNjUr.png',
        name: 'Ramsay Bolton',
        opts: { "series": ["book"],
        stage: ["st4"]}},
    {   img: 'Q2kKXdu.png',
        name: 'Theon Greyjoy',
        opts: { "series": ["book"],
        stage: ["st4"]}}
]