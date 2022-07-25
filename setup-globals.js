function test(title, cback) {
  try {
    cback();
    console.log(`√ ${title}`);
  } catch (error) {
    console.error(`x ${title}`);
    console.error(error);
  }
}

function expect(actual) {
  return {
    tobe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },
  };
}

global.test = test;
global.expect = expect;
