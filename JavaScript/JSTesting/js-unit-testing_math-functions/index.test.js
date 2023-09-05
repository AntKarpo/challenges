import {add, subtract, multiply, divide} from "./index.js";


describe("add function",()=>{
  test("add(2,3) returns a number 'a + b' if called with arguments 'a , b'.",()=> {
   expect (add(2,3)).toBe(5);
  });

  test("returns a negative value if the greater argument is negative", () => {
      expect(add(-5, 3)).toBeLessThan(0);
    });

    test("returns a value close to 0.3 if called with add(a,b)", () => {
      expect(add(0.1, 0.2)).toBeCloseTo(0.3);
    });
});

test("subtract(15,5) returns a number 'a-b' if called add(a,b)",()=>{
    expect (subtract(15,5)).toBe(10);
});

test("returns a negative value if the second argument is greater than the first one", () => {
    expect(subtract(5, 15)).toBeLessThan(0);
  });


test("multiply(3,3) returns number 'a*b' if called with arguments 'a,b'.",()=>{
    const result= multiply(3,3);
    expect (result).toBe(9);
});

test("returns a negative value if only the first argument is negative", () => {
    const result = multiply(-2, 4);
    expect(result).toBeLessThan(0);
  });

  test("returns a negative value if only the second argument is negative", () => {
    const result = multiply(2, -4);
    expect(result).toBeLessThan(0);
  });

  test("returns a positive value if called with two negative arguments", () => {
    const result = multiply(-2, -4);
    expect(result).toBeGreaterThan(0);
  });

test("divide(6, 4) returns a number 'a/b' if called with arguments 'a,b'.",()=>{
    const result= divide(6,4);
    expect (result).toBe(1.5);
})

test("divide(5, 0) returns 'You should not do this!'", () => {
    const result = divide(5, 0);
    expect(result).toBe("You should not do this!");
  });


