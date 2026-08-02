import { describe, expect, it } from "vitest";

import { parsePort } from "./parse-port.ts";

describe("parsePort", () => {
  it("should return the port for a valid numeric string", () => {
    expect(parsePort("3000")).toBe(3000);
  });

  it("should return the port for a valid number", () => {
    expect(parsePort(3000)).toBe(3000);
  });

  it("should accept port 0", () => {
    expect(parsePort("0")).toBe(0);
  });

  it("should accept the maximum port", () => {
    expect(parsePort("65535")).toBe(65_535);
  });

  it("should throw for a port above the maximum", () => {
    expect(() => parsePort("65536")).toThrow(RangeError);
  });

  it("should throw for a negative port", () => {
    expect(() => parsePort(-1)).toThrow(RangeError);
  });

  it("should throw for a non-integer port", () => {
    expect(() => parsePort(3000.5)).toThrow(RangeError);
  });

  it("should throw for a non-numeric string", () => {
    expect(() => parsePort("not-a-port")).toThrow(RangeError);
  });
});
