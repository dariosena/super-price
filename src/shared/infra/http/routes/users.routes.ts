import { Router } from "express";
import multer from "multer";

import uploadConfig from "../../../../config/upload";
import { ensureAuthenticated } from "../../../../middlewares/EnsureAuthenticated";
import { UpdateUserAvatarController } from "../../../../modules/accounts/uploadUserAvatar/UploadUserAvatarController";
import { CreateUserController } from "../../../../modules/accounts/users/useCases/createUser/CreateUserController";

const createUserController = new CreateUserController();
const updateUserAvatar = new UpdateUserAvatarController();
const updloadAvatar = multer(uploadConfig.upload("./tmp"));

const usersRoutes = Router();

usersRoutes.post("/", createUserController.handle);
usersRoutes.patch(
    "/avatar",
    ensureAuthenticated,
    updloadAvatar.single("avatar"),
    updateUserAvatar.handle
);

export { usersRoutes };
