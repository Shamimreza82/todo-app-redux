import App from "@/App";
import Task from "@/pages/task";
import { createBrowserRouter } from "react-router";

const route = createBrowserRouter([
    {
        path: "/", 
        element: <App/>,
        children: [
            {
                index: true, 
                element: <Task/>
            }
        ]
    }
])

export default route