import React, { useState } from 'react';
import { FeedPost, FilterAside } from '../components';
import { postsData } from '../constants';
import { maryFernandez, llave_coppel } from "../assets";
import { Card } from "flowbite-react";

interface Filters {
  city: string;
  category: string;
  subcategory: string;
  delivery: string;
  product: string;
  keys: Number;
  [tags: string]: string;
}

const UserCard: React.FC = () => {
  const [showPopover, setShowPopover] = useState<boolean>(false);

  return (
    <Card className="top-16 sticky mx-10 max-w-xs" imgSrc={maryFernandez}>
      <h5 className="mb-1 text-center text-base font-bold tracking-tight text-black-100 dark:text-white">María Fernández</h5>
      <p className="text-center font-normal text-black dark:text-gray-400">Florista</p>
      <p className="text-center font-normal text-black-200 dark:text-gray-400">@MaryFernandez</p>
      <div className="flex items-center justify-center relative">
        <img
          src={llave_coppel}
          alt="Llave Coppel"
          className="w-6 h-6 mr-1 cursor-pointer"
          onMouseEnter={() => setShowPopover(true)}
          onMouseLeave={() => setShowPopover(false)}
        />
        {showPopover && (
          <div className="absolute z-10 bg-gray-800 text-white text-xs px-2 py-1 rounded-md -top-8 left-1/2 transform -translate-x-1/2">
            Llaves de Coppel Emprende
          </div>
        )}
        <span className="text-black-200 dark:text-gray-400">50</span>
      </div>
    </Card>
  );
};

const Feed: React.FC = () => {
  const [filters, setFilters] = useState<Filters>({
    city: "",
    category: "",
    subcategory: "",
    delivery: "",
    product: "",
  });

  const filteredPosts = postsData.filter((post) => {
    for (const key in filters) {
      if (filters[key] && (post.user.tags as { [key: string]: string })[key] !== filters[key]) {
        return false;
      }
    }
    return true;
  });

  const tags = {
    cities: Array.from(new Set(postsData.map((post) => post.user.tags.city))),
    categories: Array.from(
      new Set(postsData.map((post) => post.user.tags.category))
    ),
    subcategories: Array.from(
      new Set(postsData.map((post) => post.user.tags.subcategory))
    ),
    deliveryTypes: Array.from(
      new Set(postsData.map((post) => post.user.tags.delivery))
    ),
    productTypes: Array.from(
      new Set(postsData.map((post) => post.user.tags.product))
    ),
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="hidden md:block">
        <UserCard />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">
        {filteredPosts.map((post) => (
          <FeedPost key={post.id} user={{...post.user, keys: post.keys, name: post.user.name, image: post.user.image, job: post.user.job }} />
        ))}
      </div>
      <div className="md:block sm:sticky fixed top-16 h-full">
        <FilterAside tags={tags} setFilters={setFilters} />
      </div>
    </div>
  );
};

export default Feed;

