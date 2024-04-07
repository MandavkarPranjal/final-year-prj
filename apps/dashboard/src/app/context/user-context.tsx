import { User } from "./user-data-transfer";
import React from "react";

export const UserContext = React.createContext<User | null>(null);