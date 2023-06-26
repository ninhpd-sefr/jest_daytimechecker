function isValidTime(day, month, year) {
  //Validate null
  if (day === null || month === null || year === null) {
    return false;
  }
  // Validate the year
  if (year < 0) {
    return false; // Year cannot be negative
  }

  // Validate the month
  if (month < 1 || month > 12) {
    return false; // Month should be between 1 and 12
  }

  // Validate the day based on the month
  //Change logic here
  // const daysInMonth = new Date(year, month, 0).getDate(); // Get the number of days in the month
  // if (day < 1 || day > daysInMonth) {
  //   return false; // Day should be between 1 and the number of days in the month
  // }

  // Return true if the time is valid, otherwise false
  return true;
}

// Tests
test("UTCID01_ReturnsTrue()", () => {
  // INPUT
  const day = 1;
  const month = 1;
  const year = 1;

  // ACTUAL
  const result = isValidTime(day, month, year);

  // ASSERT
  expect(result).toBe(true);
});

test("UTCID02_ReturnsTrue()", () => {
  // INPUT
  const day = 30;
  const month = 4;
  const year = 2022;

  // ACTUAL
  const result = isValidTime(day, month, year);

  // ASSERT
  expect(result).toBe(true);
});

test("UTCID03_ReturnsTrue()", () => {
  // INPUT
  const day = 31;
  const month = 3;
  const year = 2000;

  // ACTUAL
  const result = isValidTime(day, month, year);

  // ASSERT
  expect(result).toBe(true);
});

test("UTCID04_ReturnsTrue()", () => {
  // INPUT
  const day = 29;
  const month = 2;
  const year = 2000;

  // ACTUAL
  const result = isValidTime(day, month, year);

  // ASSERT
  expect(result).toBe(true);
});

test("UTCID05_ReturnsTrue()", () => {
  // INPUT
  const day = 28;
  const month = 2;
  const year = 2022;

  // ACTUAL
  const result = isValidTime(day, month, year);

  // ASSERT
  expect(result).toBe(true);
});

test("UTCID06_ReturnsFalse()", () => {
  // INPUT
  const day = 32;
  const month = 12;
  const year = 2022;

  // ACTUAL
  const result = isValidTime(day, month, year);

  // ASSERT
  expect(result).toBe(false);
});

test("UTCID07_ReturnsFalse()", () => {
  // INPUT
  const day = 0;
  const month = 3;
  const year = 1;

  // ACTUAL
  const result = isValidTime(day, month, year);

  // ASSERT
  expect(result).toBe(false);
});

test("UTCID08_ReturnsFalse()", () => {
  // INPUT
  const day = 30;
  const month = 2;
  const year = 1;

  // ACTUAL
  const result = isValidTime(day, month, year);

  // ASSERT
  expect(result).toBe(false);
});

test("UTCID09_ReturnsFalse()", () => {
  // INPUT
  const day = 29;
  const month = 2;
  const year = 2022;

  // ACTUAL
  const result = isValidTime(day, month, year);

  // ASSERT
  expect(result).toBe(false);
});

test("UTCID10_ReturnsFalse()", () => {
  // INPUT
  const day = null;
  const month = 12;
  const year = 2022;

  // ACTUAL
  const result = isValidTime(day, month, year);

  // ASSERT
  expect(result).toBe(false);
});

test("UTCID11_ReturnsFalse()", () => {
  // INPUT
  const day = 28;
  const month = null;
  const year = 2022;

  // ACTUAL
  const result = isValidTime(day, month, year);

  // ASSERT
  expect(result).toBe(false);
});

test("UTCID12_ReturnsFalse()", () => {
  // INPUT
  const day = 30;
  const month = 12;
  const year = null;

  // ACTUAL
  const result = isValidTime(day, month, year);

  // ASSERT
  expect(result).toBe(false);
});
