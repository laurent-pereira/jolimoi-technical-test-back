import { convertToRoman } from "../services/converter";
import { numberSchema } from "../validators";

export const convert = (req, res) => {
    const { body } = req;
    const { error } = numberSchema.validate(body);
    if (error) {
        return res.status(400).json(error);
    }
    const { number } = body;
    const result = convertToRoman(number);
    res.status(200).json({ result });
}