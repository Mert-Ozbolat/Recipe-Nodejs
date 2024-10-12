import { readRecipes } from "../model/recipeModel.js";

const data = readRecipes();

const controlId = (req, res, next) => {

    const found = data.find((i) => i.id === req.params.id);

    // Eleman yoksa hata!
    if (!found) {
        return res.status(404).json({ message: "Aradığınız eleman bulunamadı" })
    }

    // req içesindeki eleman
    req.foundRecipe = found;

    next();
};

export default controlId;