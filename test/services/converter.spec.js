import { expect } from "chai";
import { convertToRoman } from "../../services/converter";

describe("convertToRoman", () => {
    it("should return I if number is 1", () => {
        const result = convertToRoman(1);
        expect(result).equals("I");
    })
    it("should return LXXXI if number is 81", () => {
        const result = convertToRoman(2);
        expect(result).equals("II");
    })
    it('should return C if number is 100', () => {
        const result = convertToRoman(100);
        expect(result).equals('C')
    })
});
