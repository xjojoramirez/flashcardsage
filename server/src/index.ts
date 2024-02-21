import  express, {Request, Response} from "express";
import mongoose from 'mongoose';
import Deck from "./models/Deck"; 

const PORT = 5000;
const app = express();

app.use(express.json());

app.get('/',(req: Request, res: Response) => {
    res.send('index page');
})

app.post('/decks', async (req: Request, res: Response) => {
    const newDeck = new Deck({
        title:req.body.title,
    });
    const createdDeck = await newDeck.save();
    res.json(createdDeck);
})

mongoose.connect('mongodb+srv://jojoryanramirez:qWuXFSS50kBusxZa@cluster0.k67ozue.mongodb.net/?retryWrites=true&w=majority').then(() => {

console.log(`listening on ${PORT}`);
app.listen(PORT)
})

