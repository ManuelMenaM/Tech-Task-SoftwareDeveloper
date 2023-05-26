import { connect, ConnectOptions } from "mongoose";

export const dbconnect = () => {
  connect(process.env.MONGO_URI!, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions).then(
    () => console.log("Connected to database"),
    (error) => console.log(error)
  );
};
