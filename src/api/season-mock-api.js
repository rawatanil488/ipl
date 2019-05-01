const _SeasonsData = [
  {
    "Season_Id": 1,
    "Season_Year": 2008,
    "Orange_Cap_Id": 100,
    "Purple_Cap_Id": 102,
    "Man_of_the_Series_Id": 32
  },
  {
    "Season_Id": 2,
    "Season_Year": 2009,
    "Orange_Cap_Id": 18,
    "Purple_Cap_Id": 61,
    "Man_of_the_Series_Id": 53
  },
  {
    "Season_Id": 3,
    "Season_Year": 2010,
    "Orange_Cap_Id": 133,
    "Purple_Cap_Id": 131,
    "Man_of_the_Series_Id": 133
  },
  {
    "Season_Id": 4,
    "Season_Year": 2011,
    "Orange_Cap_Id": 162,
    "Purple_Cap_Id": 194,
    "Man_of_the_Series_Id": 162
  },
  {
    "Season_Id": 5,
    "Season_Year": 2012,
    "Orange_Cap_Id": 162,
    "Purple_Cap_Id": 190,
    "Man_of_the_Series_Id": 315
  },
  {
    "Season_Id": 6,
    "Season_Year": 2013,
    "Orange_Cap_Id": 19,
    "Purple_Cap_Id": 71,
    "Man_of_the_Series_Id": 32
  },
  {
    "Season_Id": 7,
    "Season_Year": 2014,
    "Orange_Cap_Id": 46,
    "Purple_Cap_Id": 364,
    "Man_of_the_Series_Id": 305
  },
  {
    "Season_Id": 8,
    "Season_Year": 2015,
    "Orange_Cap_Id": 187,
    "Purple_Cap_Id": 71,
    "Man_of_the_Series_Id": 334
  },
  {
    "Season_Id": 9,
    "Season_Year": 2016,
    "Orange_Cap_Id": 8,
    "Purple_Cap_Id": 299,
    "Man_of_the_Series_Id": 8
  }
]

export default {
  getSeasonsData (cb, data) {
    setTimeout(() => cb(_SeasonsData, 100))
  }
}
