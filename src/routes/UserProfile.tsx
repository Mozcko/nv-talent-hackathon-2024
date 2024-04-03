import { maryFernandez } from "../assets"
import { Card } from "flowbite-react";

const UserProfile = () => {
    return(
        <Card className="ml-10 max-w-xs" imgSrc={maryFernandez}>
            <h5 className="mb-1 text-center text-base font-bold tracking-tight text-black-100 dark:text-white">María Fernández</h5>
            <p className="text-center font-normal text-black-200 dark:text-gray-400">@MaryFernandez</p>
        </Card>
        
    )
}

export default UserProfile