import { useState } from 'react';
import { FeedPost, UserCard, FilterAside } from '../components';
import { motion } from 'framer-motion';
import { postsData } from '../constants';

const Feed = () => {
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
        <UserCard />
      </div>
      
      {/* FeedPosts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">
        {filteredPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <FeedPost user={post.user} />
          </motion.div>
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