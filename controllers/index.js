import { convertToRoman } from "../services/converter";
import { numberSchema } from "../validators";
import { clients } from "../routes";

export const convert = (req, res) => {
    const { body } = req;
    const { error } = numberSchema.validate(body);
    if (error) {
        return res.status(400).json(error);
    }
    const { number, session } = body;
    const result = convertToRoman(number);
    
    clients.filter((client) => client.id === session).find(client => client.response.write(`data: ${JSON.stringify({id: client.id, result: result})}\n\n`));
    
    console.log(`Send message to client ${session}`)

    return res.status(200).json({ success: true});
}
