//! Start by creating the variables for the data recorded
//* Then work on the conversion of the temperature from Celsius to Fahrenheit (or viceversa)


//! Start the calculation of the total temperatures
//* Then apply the conversion to calculate the total in the other unit of measurement
//* Call the variables: tot_temperature_in_fahrenheit and tot_temperature_in_celsius

//! Start the calculation of the average temperatures
//* Call the variables: avg_temperature_in_fahrenheit and avg_temperature_in_celsius

//! Console.log the results for your own inspection if you'd like

//! After creating the four variables mentioned above, uncomment the following lines
//* This way you can export them to the test file, this is essential for the tests to work

// Temperature data for 30 days
const day1_F = 32;
const day2_C = 25;
const day3_F = 70;
const day4_C = 18;
const day5_F = 80;
const day6_C = 15;
const day7_F = 72;
const day8_C = 28;
const day9_F = 68;
const day10_C = 20;
const day11_F = 75;
const day12_C = 23;
const day13_F = 82;
const day14_C = 30;
const day15_F = 65;
const day16_C = 22;
const day17_F = 77;
const day18_C = 26;
const day19_F = 78;
const day20_C = 24;
const day21_F = 73;
const day22_C = 21;
const day23_F = 79;
const day24_C = 27;
const day25_F = 71;
const day26_C = 19;
const day27_F = 74;
const day28_C = 17;
const day29_F = 76;
const day30_C = 29;

// Convert Celsius to Fahrenheit
const day2_F = (day2_C * 9/5) + 32;
const day4_F = (day4_C * 9/5) + 32;
const day6_F = (day6_C * 9/5) + 32;
const day8_F = (day8_C * 9/5) + 32;
const day10_F = (day10_C * 9/5) + 32;
const day12_F = (day12_C * 9/5) + 32;
const day14_F = (day14_C * 9/5) + 32;
const day16_F = (day16_C * 9/5) + 32;
const day18_F = (day18_C * 9/5) + 32;
const day20_F = (day20_C * 9/5) + 32;
const day22_F = (day22_C * 9/5) + 32;
const day24_F = (day24_C * 9/5) + 32;
const day26_F = (day26_C * 9/5) + 32;
const day28_F = (day28_C * 9/5) + 32;
const day30_F = (day30_C * 9/5) + 32;

// Convert Fahrenheit to Celsius
const day1_C = (day1_F - 32) * 5/9;
const day3_C = (day3_F - 32) * 5/9;
const day5_C = (day5_F - 32) * 5/9;
const day7_C = (day7_F - 32) * 5/9;
const day9_C = (day9_F - 32) * 5/9;
const day11_C = (day11_F - 32) * 5/9;
const day13_C = (day13_F - 32) * 5/9;
const day15_C = (day15_F - 32) * 5/9;
const day17_C = (day17_F - 32) * 5/9;
const day19_C = (day19_F - 32) * 5/9;
const day21_C = (day21_F - 32) * 5/9;
const day23_C = (day23_F - 32) * 5/9;
const day25_C = (day25_F - 32) * 5/9;
const day27_C = (day27_F - 32) * 5/9;
const day29_C = (day29_F - 32) * 5/9;

// Calculate total temperature in Fahrenheit
const tot_temperature_in_fahrenheit = day1_F + day2_F + day3_F + day4_F + day5_F + 
    day6_F + day7_F + day8_F + day9_F + day10_F + day11_F + day12_F + day13_F + 
    day14_F + day15_F + day16_F + day17_F + day18_F + day19_F + day20_F + day21_F + 
    day22_F + day23_F + day24_F + day25_F + day26_F + day27_F + day28_F + day29_F + day30_F;

// Calculate total temperature in Celsius
const tot_temperature_in_celsius = day1_C + day2_C + day3_C + day4_C + day5_C + 
    day6_C + day7_C + day8_C + day9_C + day10_C + day11_C + day12_C + day13_C + 
    day14_C + day15_C + day16_C + day17_C + day18_C + day19_C + day20_C + day21_C + 
    day22_C + day23_C + day24_C + day25_C + day26_C + day27_C + day28_C + day29_C + day30_C;

// Calculate average temperature in Fahrenheit
const avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / 30;

// Calculate average temperature in Celsius
const avg_temperature_in_celsius = tot_temperature_in_celsius / 30;

// Console log results
console.log("Total Fahrenheit:", tot_temperature_in_fahrenheit);
console.log("Total Celsius:", tot_temperature_in_celsius);
console.log("Average Fahrenheit:", avg_temperature_in_fahrenheit);
console.log("Average Celsius:", avg_temperature_in_celsius);

module.exports = {
    tot_temperature_in_fahrenheit,
    tot_temperature_in_celsius,
    avg_temperature_in_fahrenheit,
    avg_temperature_in_celsius
};


module.exports = {
    // tot_temperature_in_fahrenheit,
    // tot_temperature_in_celsius,
    // avg_temperature_in_fahrenheit,
    // avg_temperature_in_celsius
};