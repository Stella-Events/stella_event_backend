import { EventModel } from "../model/event.js"

// Creating a get event
export const getEvent = async (req,res,next) => {

try {
      const getEvents = await EventModel.find()
      res.json(getEvents)
} catch (error) {
    next(error)
}
}

// Creating a post event
export const postEvent = async (req,res) => {
    try {
        const postEvents = await EventModel.create(req.body)
        res.json(postEvents)
    } catch (error) {
        
    }
}

// creating get by Id

export const getEventId = async (req,res,next) => {
  try {
      const getEventsId = await EventModel.findById(req.params.id);
      res.json(getEventId)

  } catch (error) {
    next(error)
  }
}

// pacthing an event

export const patchEvent = async (req, res,next) => {
    try {
 
     // update recipe by Id
     const updateEvent = await EventModel.findByIdAndUpdate(req.params.id,req.body)
     // return response
      res.json(updateEvent)
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
        res.json(deletedEvents)
    } catch (error) {
        next(error)
    }
}