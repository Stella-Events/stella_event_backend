import multer from "multer";
import { multerSaveFilesOrg } from "multer-savefilesorg";
import 'dotenv/config'

export const remoteUploads = multer({
    storage:multerSaveFilesOrg({
        apiAcessToken:process.env.SAVEFILESORG_API_KEY,
        relativePath:'/remoteUploads/*'
    })
})

