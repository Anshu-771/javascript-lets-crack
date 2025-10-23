/*
 * Notes on Strings and Date in JavaScript
 * Based on: https://www.notion.so/Lecture-06-String-and-Date-27e3a78e0e22803ca796f1eef30bc86b
 */

/*
 * Strings in JavaScript
 * - Strings are sequences of characters, enclosed in single ('') or double ("") quotes
 * - Common String methods:
 *   - length: Returns the length of the string
 *   - toUpperCase(): Converts string to uppercase
 *   - toLowerCase(): Converts string to lowercase
 *   - substring(start, end): Extracts part of the string
 *   - indexOf(substring): Returns the index of the first occurrence of substring
 *   - replace(old, new): Replaces first occurrence of old with new
 */

/*
 * Date in JavaScript
 * - Date object represents a single moment in time
 * - Creating a Date object:
 *   - new Date(): Current date and time
 *   - new Date(year, month, day): Specific date (month is 0-based)
 *   - new Date(milliseconds): Date from milliseconds since Unix epoch
 * - Common Date methods:
 *   - getFullYear(): Returns the year
 *   - getMonth(): Returns the month (0-11)
 *   - getDate(): Returns the day of the month
 *   - getHours(): Returns the hour (0-23)
 *   - getMinutes(): Returns the minutes
 *   - getSeconds(): Returns the seconds
 *   - toISOString(): Returns date in ISO format
 */