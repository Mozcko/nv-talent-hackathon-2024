import { maryFernandez } from "../assets"
import { Card, Rating } from "flowbite-react";

const UserCard = () => {
    return (
        <Card className="sticky top-16 mx-10 max-w-xs" imgSrc={maryFernandez}>
          <h5 className="mb-1 text-center text-base font-bold tracking-tight text-black-100 dark:text-white">María Fernández</h5>
          <p className="text-center font-normal text-black-200 dark:text-gray-400">@MaryFernandez</p>
          <div className='mx-auto'>
            <Rating>
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <Rating.Star filled={false} />
            </Rating>
          </div>
        </Card>
    )
}

export default UserCard;