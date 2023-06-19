function isValidTime(day, month, year) {
  // Validate the year
  if (year < 0) {
    return false; // Year cannot be negative
  }

  // Validate the month
  if (month < 1 || month > 12) {
    return false; // Month should be between 1 and 12
  }

  // Validate the day based on the month
  const daysInMonth = new Date(year, month, 0).getDate(); // Get the number of days in the month
  if (day < 1 || day > daysInMonth) {
    return false; // Day should be between 1 and the number of days in the month
  }

  // Return true if the time is valid, otherwise false
  return true;
}

// Tests
test("UTCID01_ReturnsTrue()", () => {
  // INPUT
  const day = 29;
  const month = 2;
  const year = 2000;

  // ACTUAL
  const result = isValidTime(day, month, year);

  // ASSERT
  expect(result).toBe(true);
});

test("UTCID02_ReturnsFalse()", () => {
  // INPUT
  const day = 29;
  const month = 2;
  const year = 2009;

  // ACTUAL
  const result = isValidTime(day, month, year);

  // ASSERT
  expect(result).toBe(false);
});

test("UTCID03_ReturnsFalse()", () => {
  // INPUT
  const day = 31;
  const month = 2;
  const year = 2020;

  // ACTUAL
  const result = isValidTime(day, month, year);

  // ASSERT
  expect(result).toBe(false);
});

test("UTCID04_ReturnsTrue()", () => {
  // INPUT
  const day = 29;
  const month = 4;
  const year = 2000;

  // ACTUAL
  const result = isValidTime(day, month, year);

  // ASSERT
  expect(result).toBe(true);
});

test("UTCID05_ReturnsTrue()", () => {
  // INPUT
  const day = 30;
  const month = 3;
  const year = 2021;

  // ACTUAL
  const result = isValidTime(day, month, year);

  // ASSERT
  expect(result).toBe(true);
});

test("UTCID06_ReturnsFalse()", () => {
  // INPUT
  const day = 31;
  const month = 4;
  const year = 2020;

  // ACTUAL
  const result = isValidTime(day, month, year);

  // ASSERT
  expect(result).toBe(false);
});

test("UTCID07_ReturnsFalse()", () => {
  // INPUT
  const day = 29;
  const month = 2;
  const year = 2021;

  // ACTUAL
  const result = isValidTime(day, month, year);

  // ASSERT
  expect(result).toBe(false);
});

test("UTCID08_ReturnsFalse()", () => {
  // INPUT
  const day = 30;
  const month = 2;
  const year = 2026;

  // ACTUAL
  const result = isValidTime(day, month, year);

  // ASSERT
  expect(result).toBe(false);
});

test("UTCID09_ReturnsTrue()", () => {
  // INPUT
  const day = 29;
  const month = 2;
  const year = 2020;

  // ACTUAL
  const result = isValidTime(day, month, year);

  // ASSERT
  expect(result).toBe(true);
});

test("UTCID10_ReturnsTrue()", () => {
  // INPUT
  const day = 31;
  const month = 3;
  const year = 2009;

  // ACTUAL
  const result = isValidTime(day, month, year);

  // ASSERT
  expect(result).toBe(true);
});
