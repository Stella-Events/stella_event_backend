





// Creating a get event
export const getEvent = async (req,res) => {

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