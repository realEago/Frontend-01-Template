// 本周作业
// 1、写一个正则表达式 匹配所有 Number 直接量
// 2、写一个 UTF-8 Encoding 的函数
// 3、写一个正则表达式，匹配所有的字符串直接量，单引号和双引号
// 4、完成一篇本周的学习总结

// 1、写一个正则表达式 匹配所有 Number 直接量
// 整数、浮点数、二进制数、八进制数、十六进制数
// 整数
/^-?\d+$/
// 浮点数
/^(-?\d+)(\.\d+)?$/
// 二进制数
/^0[bB][01]+$/
// 八进制数
/^0[oO][0-7]+$/
//十六进制数
/^0[xX][0-9a-fA-F]+$/
//匹配所有直接量
/^-?\d+$|^(-?\d+)(\.\d+)?$|^0[bB][01]+$|^0[oO][0-7]+$|^0[xX][0-9a-fA-F]+$/

// 2、写一个 UTF-8 Encoding 的函数
function encodeUtf8(text) {
  const code = encodeURIComponent(text);
  const bytes = [];
  for (var i = 0; i < code.length; i++) {
      const c = code.charAt(i);
      if (c === '%') {
          const hex = code.charAt(i + 1) + code.charAt(i + 2);
          const hexVal = parseInt(hex, 16);
          bytes.push(hexVal);
          i += 2;
      } else bytes.push(c.charCodeAt(0));
  }
  return bytes;
}

// 3、写一个正则表达式，匹配所有的字符串直接量，单引号和双引号
/[\u0021-\u007E]{6,16}|[\x21-\x7E]{6,16}|(['"])(?:(?!\1).)*?\1/g

// 4、完成一篇本周的学习总结
// 本周自我感觉表现不太好，不过学会了一个重要的BNF概念，从更高的抽象层次理解了编程语言，ECMA在慢慢的苦读中，不过从winter大大的课上，学到了如何阅读的技巧，继续努力吧