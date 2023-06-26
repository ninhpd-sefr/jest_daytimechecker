function getNumberOfDays(year, month) {
  let numberOfDays = 1;

  if (year === null || month === null) {
    return 0;
  }

  if (month > 12 || month < 1) {
    return -1;
  }

  if (year < 1) {
    return -2;
  }

  if (month === 2) {
    // Check if it's a leap year
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      numberOfDays = 29; // February has 29 days in a leap year
    } else {
      numberOfDays = 28; // February has 28 days in a non-leap year
    }
  } else if (month === 4 || month === 6 || month === 9 || month === 11) {
    numberOfDays = 30; // April, June, September, and November have 30 days
  }
  // Change logic here
  // else {
  //   numberOfDays = 31; // All other months have 31 days
  // }

  return numberOfDays;
}

test("UTCID01", () => {
  // INPUT
  const year = 2021;
  const month = 1;
  const expectedNumberOfDays = 31;

  // ACTUAL
  const actualNumberOfDays = getNumberOfDays(year, month);

  // ASSERT
  expect(expectedNumberOfDays).toBe(actualNumberOfDays);
});

test("UTCID02", () => {
  // INPUT
  const year = 2000;
  const month = 2;
  const expectedNumberOfDays = 29;

  // ACTUAL
  const actualNumberOfDays = getNumberOfDays(year, month);

  // ASSERT
  expect(expectedNumberOfDays).toBe(actualNumberOfDays);
});

test("UTCID03", () => {
  // INPUT
  const year = 1;
  const month = 2;
  const expectedNumberOfDays = 28;

  // ACTUAL
  const actualNumberOfDays = getNumberOfDays(year, month);

  // ASSERT
  expect(expectedNumberOfDays).toBe(actualNumberOfDays);
});

test("UTCID04", () => {
  // INPUT
  const year = 2022;
  const month = 4;
  const expectedNumberOfDays = 30;

  // ACTUAL
  const actualNumberOfDays = getNumberOfDays(year, month);

  // ASSERT
  expect(expectedNumberOfDays).toBe(actualNumberOfDays);
});

test("UTCID05", () => {
  // INPUT
  const year = null;
  const month = 12;
  const expectedNumberOfDays = 0;

  // ACTUAL
  const actualNumberOfDays = getNumberOfDays(year, month);

  // ASSERT
  expect(expectedNumberOfDays).toBe(actualNumberOfDays);
});

test("UTCID06", () => {
  // INPUT
  const year = 0;
  const month = 1;
  const expectedNumberOfDays = -2;

  // ACTUAL
  const actualNumberOfDays = getNumberOfDays(year, month);

  // ASSERT
  expect(expectedNumberOfDays).toBe(actualNumberOfDays);
});

test("UTCID07", () => {
  // INPUT
  const year = 2022;
  const month = 13;
  const expectedNumberOfDays = -1;

  // ACTUAL
  const actualNumberOfDays = getNumberOfDays(year, month);

  // ASSERT
  expect(expectedNumberOfDays).toBe(actualNumberOfDays);
});

test("UTCID08", () => {
  // INPUT
  const year = 2019;
  const month = 0;
  const expectedNumberOfDays = -1;

  // ACTUAL
  const actualNumberOfDays = getNumberOfDays(year, month);

  // ASSERT
  expect(expectedNumberOfDays).toBe(actualNumberOfDays);
});

test("UTCID09", () => {
  // INPUT
  const year = 2022;
  const month = null;
  const expectedNumberOfDays = 0;

  // ACTUAL
  const actualNumberOfDays = getNumberOfDays(year, month);

  // ASSERT
  expect(expectedNumberOfDays).toBe(actualNumberOfDays);
});

test("UTCID10", () => {
  // INPUT
  const year = 0;
  const month = 12;
  const expectedNumberOfDays = -2;

  // ACTUAL
  const actualNumberOfDays = getNumberOfDays(year, month);

  // ASSERT
  expect(expectedNumberOfDays).toBe(actualNumberOfDays);
});
