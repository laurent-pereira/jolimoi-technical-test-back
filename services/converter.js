export const convertToRoman = (num) => {
    const romanNumerals = {
      100: "C",
      90: "XC",
      50: "L",
      40: "XL",
      10: "X",
      9: "IX",
      5: "V",
      4: "IV",
      1: "I"
    };
    let roman = "";
    Object.keys(romanNumerals).reverse().map((arabic) => {
      while (num >= arabic) {
        roman += romanNumerals[arabic];
        num -= arabic;
      }
    });
    return roman;
  }