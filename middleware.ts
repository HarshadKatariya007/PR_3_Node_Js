import { Request,Response,NextFunction } from "express";

 export const Data_Check = (req:Request,res:Response,next:NextFunction) =>
{
    let {name,description,preparationTime,cookingTime,imageUrl,country,veg} =req.body

    if(!name || !description || !preparationTime || !cookingTime || !imageUrl || !country || veg===undefined)
        {
            res.status(400).send("All fields are required.")
        }
    else
    {
        next()
    }    
}