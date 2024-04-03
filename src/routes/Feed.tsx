import React, { useState } from 'react';
import { FeedPost, Aside, FilterAside } from '../components';
import { logo } from '../assets';
import { maryFernandez } from "../assets"
import { Card, Rating } from "flowbite-react";

const Feed = () => {

  const postsData = [
    {
      id: 1,
      user: {
        name: "User 1",
        image: logo,
        job: "Job 1",
        tags: {
          city: "city1",
          category: "category1",
          subcategory: "subcategory1",
          delivery: "delivery1",
          product: "product1",
          // Add more tag categories as needed
        }
      }
    },
    {
      id: 2,
      user: {
        name: "User 2",
        image: logo,
        job: "Job 2",
        tags: {
          city: "city2",
          category: "category2",
          subcategory: "subcategory2",
          delivery: "delivery2",
          product: "product2",
          // Add more tag categories as needed
        }
      }
    },
    {
      id: 3,
      user: {
        name: "User 2",
        image: logo,
        job: "Job 2",
        tags: {
          city: "city2",
          category: "category2",
          subcategory: "subcategory2",
          delivery: "delivery2",
          product: "product2",
          // Add more tag categories as needed
        }
      }
    },
    {
      id: 4,
      user: {
        name: "User 2",
        image: logo,
        job: "Job 2",
        tags: {
          city: "city2",
          category: "category2",
          subcategory: "subcategory2",
          delivery: "delivery2",
          product: "product2",
          // Add more tag categories as needed
        }
      }
    },
    // Add more post data as needed
  ];

  const [filters, setFilters] = useState({
    city: "",
    category: "",
    subcategory: "",
    delivery: "",
    product: "",
    // Initialize other filter categories as needed
  });

  const filteredPosts = postsData.filter((post) => {
    for (const key in filters) {
      if (filters[key] && post.user.tags[key] !== filters[key]) {
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
    // Add other tag categories as needed
  };

  return (
    <div className="flex flex-col md:flex-row">
      {/* Card - Oculta en pantallas pequeñas */}
      <div className="hidden md:block">
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
      </div>
      
      {/* FeedPosts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">
        {filteredPosts.map((post) => (
          <FeedPost key={post.id} user={post.user} />
        ))}
      </div>

      {/* FilterAside - Hacer más pequeño en pantallas pequeñas */}
      <div className="md:block sm:sticky fixed top-16 h-full">
        <FilterAside tags={tags} setFilters={setFilters} />
      </div>
    </div>

);

};
export default Feed;