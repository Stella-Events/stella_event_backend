import { EventModel } from "../model/event.js"

// Creating a get event
export const getEvent = async (req,res,next) => {

try {
  // Creating the query
      const getEvents = await EventModel
      .find(filter ? JSON.parse(filter) : {})
      .select(fields ? JSON.parse(fields) : '')
      .limit(limit ? parseInt(limit) : 10)
      .skip(skip ? parseInt(skip) : 0);
  // return all recipe response
      res.status(201).json(getEvents)
} catch (error) {
    next(error)
}
}

// Creating a post event
export const postEvent = async (req,res) => {
    
    try {
 // uploading a file
        const postEvents = await EventModel.create({
      ...req.body,
      image: req.file.filename

        })
        res.status(201).json(postEvents)
    } catch (error) {
        
    }
}

// creating get by Id

export const getEventId = async (req,res,next) => {
  try {
      const getEventsId = await EventModel.findById(req.params.id);
      res.status(201).json(getEventsId)

  } catch (error) {
    next(error)
  }
}

// pacthing an event by Id

export const patchEvent = async (req,res,next) => {
    try {
 
     // update recipe by Id
     const updateEvent = await EventModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
     // return response
      res.status(201).json(updateEvent)
    } catch (error) {
     next(error)
    }
 }

 // deleting an event

 export const deleteEvent = async (req, res, next) => {
    try {
        // delete recipe by id
        const deletedEvents = await EventModel.findByIdAndDelete(req.params.id);
        // return response
        res.status(201).json(deletedEvents)
    } catch (error) {
        next(error)
    }
}