'use client'
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

interface MusicData {
  songName: string;
  artist: string;
  dateStreamed: string;
  streamCount: number;
  userId: string;
}

const ARTISTS = [
  "Eminem",
  "The Weeknd",
  "Kendrick Lamar",
  "Taylor Swift",
  "Drake"
];

export function TopChannels({ className }: { className?: string }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedArtists, setSelectedArtists] = useState<Record<string, boolean>>(
    ARTISTS.reduce((acc, artist) => ({ ...acc, [artist]: false }), {})
  );
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Replace this with your actual data fetching
  const data: MusicData[] = [
  { songName: "Lose Yourself", artist: "Eminem", dateStreamed: "2024-02-15", streamCount: 752340, userId: "550e8400-e29b-41d4-a716-446655440000" },
  { songName: "Stan", artist: "Eminem", dateStreamed: "2024-03-22", streamCount: 612890, userId: "550e8400-e29b-41d4-a716-446655440001" },
  { songName: "Without Me", artist: "Eminem", dateStreamed: "2024-01-05", streamCount: 481230, userId: "550e8400-e29b-41d4-a716-446655440002" },
  { songName: "The Real Slim Shady", artist: "Eminem", dateStreamed: "2024-04-11", streamCount: 623450, userId: "550e8400-e29b-41d4-a716-446655440003" },
  { songName: "Not Afraid", artist: "Eminem", dateStreamed: "2024-05-17", streamCount: 412670, userId: "550e8400-e29b-41d4-a716-446655440004" },
  { songName: "Rap God", artist: "Eminem", dateStreamed: "2024-06-23", streamCount: 532980, userId: "550e8400-e29b-41d4-a716-446655440005" },

  // The Weeknd Songs
  { songName: "Blinding Lights", artist: "The Weeknd", dateStreamed: "2024-01-30", streamCount: 891230, userId: "550e8400-e29b-41d4-a716-446655440006" },
  { songName: "Save Your Tears", artist: "The Weeknd", dateStreamed: "2024-02-14", streamCount: 674520, userId: "550e8400-e29b-41d4-a716-446655440007" },
  { songName: "Starboy", artist: "The Weeknd", dateStreamed: "2024-03-08", streamCount: 456780, userId: "550e8400-e29b-41d4-a716-446655440008" },
  { songName: "Can't Feel My Face", artist: "The Weeknd", dateStreamed: "2024-04-20", streamCount: 563210, userId: "550e8400-e29b-41d4-a716-446655440009" },
  { songName: "The Hills", artist: "The Weeknd", dateStreamed: "2024-05-05", streamCount: 412890, userId: "550e8400-e29b-41d4-a716-446655440010" },
  { songName: "Call Out My Name", artist: "The Weeknd", dateStreamed: "2024-06-12", streamCount: 321670, userId: "550e8400-e29b-41d4-a716-446655440011" },

  // Kendrick Lamar Songs
  { songName: "HUMBLE.", artist: "Kendrick Lamar", dateStreamed: "2024-01-17", streamCount: 689540, userId: "550e8400-e29b-41d4-a716-446655440012" },
  { songName: "Alright", artist: "Kendrick Lamar", dateStreamed: "2024-02-28", streamCount: 534210, userId: "550e8400-e29b-41d4-a716-446655440013" },
  { songName: "Swimming Pools", artist: "Kendrick Lamar", dateStreamed: "2024-03-15", streamCount: 412780, userId: "550e8400-e29b-41d4-a716-446655440014" },
  { songName: "DNA.", artist: "Kendrick Lamar", dateStreamed: "2024-04-30", streamCount: 576230, userId: "550e8400-e29b-41d4-a716-446655440015" },
  { songName: "King's Dead", artist: "Kendrick Lamar", dateStreamed: "2024-05-22", streamCount: 423560, userId: "550e8400-e29b-41d4-a716-446655440016" },
  { songName: "Money Trees", artist: "Kendrick Lamar", dateStreamed: "2024-06-07", streamCount: 345890, userId: "550e8400-e29b-41d4-a716-446655440017" },

  // Taylor Swift Songs
  { songName: "Shake It Off", artist: "Taylor Swift", dateStreamed: "2024-01-25", streamCount: 923450, userId: "550e8400-e29b-41d4-a716-446655440018" },
  { songName: "Anti-Hero", artist: "Taylor Swift", dateStreamed: "2024-02-10", streamCount: 765430, userId: "550e8400-e29b-41d4-a716-446655440019" },
  { songName: "Blank Space", artist: "Taylor Swift", dateStreamed: "2024-03-05", streamCount: 612890, userId: "550e8400-e29b-41d4-a716-446655440020" },
  { songName: "Bad Blood", artist: "Taylor Swift", dateStreamed: "2024-04-18", streamCount: 487620, userId: "550e8400-e29b-41d4-a716-446655440021" },
  { songName: "Style", artist: "Taylor Swift", dateStreamed: "2024-05-12", streamCount: 556780, userId: "550e8400-e29b-41d4-a716-446655440022" },
  { songName: "Cruel Summer", artist: "Taylor Swift", dateStreamed: "2024-06-25", streamCount: 412350, userId: "550e8400-e29b-41d4-a716-446655440023" },

  // Drake Songs
  { songName: "God's Plan", artist: "Drake", dateStreamed: "2024-01-12", streamCount: 845670, userId: "550e8400-e29b-41d4-a716-446655440024" },
  { songName: "One Dance", artist: "Drake", dateStreamed: "2024-02-20", streamCount: 678930, userId: "550e8400-e29b-41d4-a716-446655440025" },
  { songName: "Started From the Bottom", artist: "Drake", dateStreamed: "2024-03-10", streamCount: 532180, userId: "550e8400-e29b-41d4-a716-446655440026" },
  { songName: "Nice For What", artist: "Drake", dateStreamed: "2024-04-25", streamCount: 456780, userId: "550e8400-e29b-41d4-a716-446655440027" },
  { songName: "In My Feelings", artist: "Drake", dateStreamed: "2024-05-16", streamCount: 389540, userId: "550e8400-e29b-41d4-a716-446655440028" },
  { songName: "Hold On, We're Going Home", artist: "Drake", dateStreamed: "2024-06-30", streamCount: 321670, userId: "550e8400-e29b-41d4-a716-446655440029" }

  ];


  const filteredData = data.filter(item => {
    const matchesSearch = searchTerm === "" || 
      item.songName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.artist.toLowerCase().includes(searchTerm.toLowerCase());

    const activeFilters = Object.entries(selectedArtists).filter(([_, isSelected]) => isSelected);
    const matchesArtistFilter = activeFilters.length === 0 || 
      activeFilters.some(([artist, _]) => item.artist === artist);

    return matchesSearch && matchesArtistFilter;
  });

  const handleArtistFilterChange = (artist: string) => {
    setSelectedArtists(prev => ({
      ...prev,
      [artist]: !prev[artist]
    }));
  };

  return (
    <div className={cn(
      "grid rounded-[10px] bg-white px-7.5 pb-4 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card",
      className,
    )}>
      <div className="mb-4">
        <h2 className="text-body-2xlg font-bold text-dark dark:text-white">
          Music Streams
        </h2>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
        <div className="w-full md:w-1/2">
          <form className="flex items-center">
            <label htmlFor="simple-search" className="sr-only">Search</label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Search by artist or song name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </form>
        </div>
        <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
          <div className="flex items-center space-x-3 w-full md:w-auto">
            <div className="relative">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                type="button"
              >
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="h-4 w-4 mr-2 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
                </svg>
                Filter by Artist
              </button>
              
              {isFilterOpen && (
                <div className="absolute right-0 mt-2 w-48 p-3 bg-white rounded-lg shadow dark:bg-gray-700 z-50">
                  <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">Select Artists</h6>
                  <ul className="space-y-2 text-sm">
                    {ARTISTS.map(artist => (
                      <li key={artist} className="flex items-center">
                        <input
                          id={artist}
                          type="checkbox"
                          checked={selectedArtists[artist]}
                          onChange={() => handleArtistFilterChange(artist)}
                          className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label htmlFor={artist} className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                          {artist}
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-hidden">
        <div className="max-h-96 overflow-y-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-none uppercase [&>th]:text-center">
                <TableHead className="min-w-[120px] !text-left sticky top-0 bg-white dark:bg-gray-800">Song Name</TableHead>
                <TableHead className="sticky top-0 bg-white dark:bg-gray-800">Artist</TableHead>
                <TableHead className="sticky top-0 bg-white dark:bg-gray-800">Date Streamed</TableHead>
                <TableHead className="sticky top-0 bg-white dark:bg-gray-800">Stream Count</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {filteredData.map((item, i) => (
                <TableRow
                  className="text-center text-base font-medium text-dark dark:text-white"
                  key={item.userId + i}
                >
                  <TableCell className="!text-left">{item.songName}</TableCell>
                  <TableCell>{item.artist}</TableCell>
                  <TableCell>{item.dateStreamed}</TableCell>
                  <TableCell>{item.streamCount.toLocaleString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}