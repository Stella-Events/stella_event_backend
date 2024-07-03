import { CategoryModel } from "../model/category.js";



// creating a get category
export const getCategories = async (req,res,res) => {
  try {
      const getCategory = await CategoryModel
      .find(filter ? JSON.parse(filter) : {})
      .select(fields ? JSON.parse(fields) : '')
      .limit(limit ? parseInt(limit) : undefined)
      .skip(skip ? parseInt(skip) : undefined);
      res.status(200).json(getCategory);
  } catch (error) {
    next(error)
  }

  }

  // creating a post category

  export const postCategories = async (req,res,next) => {
    try {
        const postCategory = await CategoryModel.create({
            ...req.body,
            image: req.file.filename
          });
          // retuern the response
          res.status(201).json(postCategory)
    } catch (error) {
        next(error)
    }
  }
