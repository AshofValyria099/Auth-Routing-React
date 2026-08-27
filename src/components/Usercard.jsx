import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
      
      {/* Profile Header */}
      <div className="mb-4 flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black text-xl font-bold text-white">
          {user.name.firstname[0].toUpperCase()}
          {user.name.lastname[0].toUpperCase()}
        </div>

        <div>
          <h2 className="text-lg font-bold capitalize">
            {user.name.firstname} {user.name.lastname}
          </h2>

          <p className="text-sm text-gray-500">
            @{user.username}
          </p>
        </div>
      </div>

      {/* User Details */}
      <div className="space-y-3 border-t pt-4 text-sm">
        
        <div>
          <p className="text-gray-400">Email</p>
          <p className="font-medium">{user.email}</p>
        </div>

        <div>
          <p className="text-gray-400">Phone</p>
          <p className="font-medium">{user.phone}</p>
        </div>

        <div>
          <p className="text-gray-400">Address</p>

          <p className="font-medium capitalize">
            {user.address.number}, {user.address.street}
          </p>

          <p className="capitalize text-gray-500">
            {user.address.city}, {user.address.zipcode}
          </p>
        </div>

      </div>

      {/* Button */}
      <button className="mt-5 w-full rounded-lg bg-black py-2 text-sm font-medium text-white transition hover:bg-gray-800">
        View Profile
      </button>

    </div>
  );
};

export default UserCard;