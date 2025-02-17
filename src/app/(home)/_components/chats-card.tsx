
'use client'

const TOP_ARTISTS = [
  {
    name: "Eminem",
    song: "Lose Yourself",
  },
  {
    name: "The Weeknd",
    song: "Blinding Lights",
  },
  {
    name: "Kendrick Lamar",
    song: "HUMBLE.",
  },
  {
    name: "Taylor Swift",
    song: "Anti-Hero",
  },
  {
    name: "Drake",
    song: "God's Plan",
  }
];

export function ChatsCard() {
  return (
    <div className="col-span-12 rounded-[10px] bg-white py-6 shadow-1 dark:bg-gray-dark dark:shadow-card xl:col-span-4">
      <h2 className="mb-5.5 px-7.5 text-body-2xlg font-bold text-dark dark:text-white">
        Top Artists
      </h2>

      <ul>
        {TOP_ARTISTS.map((artist, index) => (
          <li key={index}>
            <div className="flex items-center gap-4.5 px-7.5 py-3">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gray-2 text-xl font-bold text-dark dark:bg-dark-2 dark:text-white">
                {index + 1}
              </div>

              <div className="flex-grow">
                <h3 className="font-medium text-dark dark:text-white">
                  {artist.name}
                </h3>
                <div className="text-sm font-medium text-gray-5 dark:text-dark-5">
                  {artist.song}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}