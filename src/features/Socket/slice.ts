import { createAction } from "@reduxjs/toolkit";

import { User } from "src/types";

export const connectSocket = createAction<User["id"]>("socket/connect");
export const newUser = createAction<User["id"]>("socket/newUser");
