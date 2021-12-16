import FullscreenLoader from "@/components/FullscreenLoader";
import useAuth from "@/hooks/useAuth";
import AppLayout from "@/layouts/AppLayout";
import { getUserByUsername, User } from "@/services/profile";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const UserProfile = () => {
  const router = useRouter();
  const { user: authUser } = useAuth();
  const [loading, setLoading] = useState<boolean>();
  const [user, setUser] = useState<User>();

  useEffect(() => {
    setLoading(true);
    if (router.query.username)
      getUserByUsername(router.query.username as string)
        .then((userSnap) => {
          setUser(userSnap);
          setLoading(false);
        })
        .catch((e) => {
          setUser(null);
          console.log(e.message);
          setLoading(false);
        });
  }, [router.query.username]);

  if (loading) return <FullscreenLoader />;

  if (!user)
    return (
      <AppLayout>
        <h1>User not found</h1>
      </AppLayout>
    );

  return (
    <AppLayout>
      <div className="flex items-center max-w-lg mx-auto space-x-6">
        <div className="overflow-hidden rounded-full">
          <img src={user.avatar} alt={user.username} />
        </div>
        <div>
          <div className="flex space-x-4">
            <h3 className="text-2xl lowercase">{user.username}</h3>

            {authUser && authUser.uid !== user.uid && (
              <button className="px-10 py-1 text-white bg-blue-500 rounded">
                Follow
              </button>
            )}
          </div>

          <div className="flex mt-4 space-x-6">
            <p className="flex items-center space-x-1">
              <span>320</span> <span className="text-gray-800">posts</span>
            </p>

            <p className="flex items-center space-x-1">
              <span>211</span> <span className="text-gray-800">followers</span>
            </p>

            <p className="flex items-center space-x-1">
              <span>571</span> <span className="text-gray-800">following</span>
            </p>
          </div>

          <div className="mt-4">
            <h3 className="font-medium">{user.displayName}</h3>
            <p className="text-gray-800">{user.bio}</p>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default UserProfile;
