function toRoman(num) {
    let result = ''
    if(num === 0){
      return result
    }
  
    const nums = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
    const roms = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I']
  
    for (let i = 0; i < nums.length; i++) {
      if (num >= nums[i]) {
        result += roms[i]
        num -= nums[i]
  
        return result += toRoman(num)
      }
    }
}

// Drive code
console.log("My totally sweet testing script for new roman\n");
console.log("input | expected | actual");
console.log("——————|——————————|———————");
console.log("4     | IV       | ", toRoman(4));
console.log("9     | IX       | ", toRoman(9));
console.log("13    | XIII     | ", toRoman(13));
console.log("1453  | MCDLIII  | ", toRoman(1453));
console.log("1646  | MDCXLVI  | ", toRoman(1646));

//abaikan code dibawah ini
module.exports = toRoman
