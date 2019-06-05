var sourceStr = "BBC ABB ABCF";
var searchStr = "ABC";

function BF_Ordinary(sourceStr, searchStr) {
  var sourceLength = sourceStr.length;
  var searchLength = searchStr.length;
  var padding      = sourceLength - searchLength; //循环的次数
  //BBC ABB ABCF =>ABC => 搜索9次
  for (var i = 0; i <= padding; i++) {
    //如果满足了第一个charAt是相等的
    //开始子循环检测
    //其中sourceStr的取值是需要叠加i的值
    if (sourceStr.charAt(i) == searchStr.charAt(0)) {
      //匹配成功的数据
      var complete = searchLength;
      for (var j = 0; j < searchLength; j++) {
        if (sourceStr.charAt(i + j) == searchStr.charAt(j)) {
          --complete
          if (!complete) {
            return i;
          }
        }
      }
    }
  }
  return -1;
}