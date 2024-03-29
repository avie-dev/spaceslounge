import React from "react";
import Head from "next/head";

import {
  HOST_DASHBOARD,
  SCHEDULED_TWITTER_SPACES,
} from "../content/Host-dashboard";

import Titles from "../components/Speaker/Titles";
import Details from "../components/Speaker/Details";
import Scheduled_Twitter from "../components/Speaker/Scheduled_Twitter";
import User from "../components/Speaker/User";

export default function Speaker() {
  return (
    <div className="flex justify-center">
      <Head>
        <title>Speaker Dashboard</title>
      </Head>

      <div className="lg:h-[90vh] w-full max-w-[1520px] mt-24 mb-8 px-4 flex flex-col">
        {/* Container */}
        <div className="grid grid-cols-1 lg:grid-cols-5 items-start gap-8 mt-4">
          {/* User's Details */}
          <User />

          {/* Spaces */}
          <div className="col-span-1 lg:col-span-3 bg-[#2F3F50] dark:bg-[#F0F0F0] rounded-lg overflow-y-hidden">
            {/* Titles */}
            <Titles />

            {/* Details */}
            <div>
              {HOST_DASHBOARD.map((hostSpaces) => {
                return <Details key={hostSpaces.id} hostSpaces={hostSpaces} />;
              })}
            </div>
          </div>

          {/* Scheduled Twitter Spaces */}
          <div className="bg-[#2F3F50] dark:bg-[#F0F0F0] rounded-lg p-2 lg:max-w-[300px]">
            <h2 className="text-center">Speaker Highlight</h2>
            {/* Details */}
            <div className="p-6 lg:p-2 mt-0 lg:mt-4 flex flex-col gap-4">
              {SCHEDULED_TWITTER_SPACES.map((twitterSpaces) => {
                return (
                  <Scheduled_Twitter
                    key={twitterSpaces.id}
                    twitterSpaces={twitterSpaces}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
