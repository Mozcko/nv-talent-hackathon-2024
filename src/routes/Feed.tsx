import React from 'react';
import { FeedPost, Aside, Filter } from '../components';
import { logo } from '../assets';

const Feed = () => {

    const users = [
        {
            id: 1,
            name: 'Bonnie Green',
            job: 'Visual Designer',
            image: logo,
            linkedIn: 'https://www.linkedin.com/in/bonnie-green/',
            post: 'Check out my latest project!',
            postImage: 'https://via.placeholder.com/300x200.png?text=Post+Image',
            tags: ['Design', 'Project', 'Visual'],
        },
        //...
    ];

  const [selectedTags, setSelectedTags] = React.useState([]);
  const [filteredUsers, setFilteredUsers] = React.useState([]);

  const filterUsers = (tags) => {
    setSelectedTags(tags);
    setFilteredUsers(users.filter((user) => user.tags.some((userTag) => tags.includes(userTag))));
  };

  return (
    <div className="flex">
      <Aside />
      <div className="flex-1">
        {/* Display the selected tags */}
        {selectedTags.map((tag, index) => (
          <span
            key={index}
            className="text-sm py-1 px-2 rounded-full bg-blue-gray-100 text-blue-gray-800 mr-2 my-1"
          >
            {tag}
            <button
              onClick={() => handleTagClick(tag)}
              className="ml-1 text-xs font-medium text-blue-gray-400 hover:text-blue-gray-500 focus:outline-none focus:shadow-outline-blue"
            >
              &times;
            </button>
          </span>
        ))}
        {/* Display the filtered feed posts */}
        {users.map((user) => (
          <FeedPost key={user.id} user={user} friendStatus="Add Friend" />
        ))}
      </div>
      <Filter onFilterTags={filterUsers} />
    </div>
  );
};

export default Feed;