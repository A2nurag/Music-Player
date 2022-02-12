import {
  HomeIcon,
  SearchIcon,
  CollectionIcon,
  PlusCircleIcon,
  HeartIcon,
  BookmarkIcon,
} from '@heroicons/react/outline'

export default function Sidebar() {
  return (
    <div className="w-max overflow-auto bg-gray-100 dark:bg-gray-800">
      <div className="flex flex-col sm:flex-row sm:justify-around">
        <div className="h-screen w-72">
          <nav className="mt-10 px-6 ">
            {/* Home */}
            <a
              className="my-4 flex items-center rounded-lg p-2 text-gray-700 transition-colors duration-200 hover:bg-gray-200 hover:text-gray-800  dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white "
              href="#"
            >
              <span className="">
                <HomeIcon className="h-5 w-5" />
              </span>
              <span className="mx-4 text-lg font-normal">Home</span>
            </a>

            {/* Search */}
            <a
              className="my-4 flex items-center rounded-lg p-2 text-gray-700 transition-colors duration-200 hover:bg-gray-200 hover:text-gray-800  dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white "
              href="#"
            >
              <span className="">
                <SearchIcon className="h-5 w-5" />
              </span>
              <span className="mx-4 text-lg font-normal">Search</span>
            </a>

            {/* Your Library */}
            <a
              className="my-4 flex items-center rounded-lg p-2 text-gray-700 transition-colors duration-200 hover:bg-gray-200 hover:text-gray-800  dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white "
              href="#"
            >
              <span className="">
                <CollectionIcon className="h-5 w-5" />
              </span>
              <span className="mx-4 text-lg font-normal">Your Library</span>
            </a>

            <hr className="border border-solid border-gray-300 dark:border-gray-600" />

            {/* Create Playlist */}
            <a
              className="my-4 flex items-center rounded-lg p-2 text-gray-700 transition-colors duration-200 hover:bg-gray-200 hover:text-gray-800  dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white "
              href="#"
            >
              <span className="">
                <PlusCircleIcon className="h-5 w-5" />
              </span>
              <span className="mx-4 text-lg font-normal">Create Playlist</span>
            </a>

            {/* Liked Songs */}
            <a
              className="my-4 flex items-center rounded-lg p-2 text-gray-700 transition-colors duration-200 hover:bg-gray-200 hover:text-gray-800  dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white "
              href="#"
            >
              <span className="">
                <HeartIcon className="h-5 w-5" />
              </span>
              <span className="mx-4 text-lg font-normal">Liked Songs</span>
            </a>

            {/* Your episodes */}
            <a
              className="my-4 flex items-center rounded-lg p-2 text-gray-700 transition-colors duration-200 hover:bg-gray-200 hover:text-gray-800  dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white "
              href="#"
            >
              <span className="">
                <BookmarkIcon className="h-5 w-5" />
              </span>
              <span className="mx-4 text-lg font-normal">Your episodes</span>
            </a>

            <hr className="border border-solid border-gray-300 dark:border-gray-600" />

            {/* Playlists */}
            <a
              className="my-4 flex items-center rounded-lg p-2 text-gray-700 transition-colors duration-200 hover:bg-gray-200 hover:text-gray-800  dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white "
              href="#"
            >
              <span className="mx-4 text-lg font-normal">Playlist</span>
            </a>

            <a
              className="my-4 flex items-center rounded-lg p-2 text-gray-700 transition-colors duration-200 hover:bg-gray-200 hover:text-gray-800  dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white "
              href="#"
            >
              <span className="mx-4 text-lg font-normal">Playlist</span>
            </a>

            <a
              className="my-4 flex items-center rounded-lg p-2 text-gray-700 transition-colors duration-200 hover:bg-gray-200 hover:text-gray-800  dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white "
              href="#"
            >
              <span className="mx-4 text-lg font-normal">Playlist</span>
            </a>

            <a
              className="my-4 flex items-center rounded-lg p-2 text-gray-700 transition-colors duration-200 hover:bg-gray-200 hover:text-gray-800  dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white "
              href="#"
            >
              <span className="mx-4 text-lg font-normal">Playlist</span>
            </a>

            <a
              className="my-4 flex items-center rounded-lg p-2 text-gray-700 transition-colors duration-200 hover:bg-gray-200 hover:text-gray-800  dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white "
              href="#"
            >
              <span className="mx-4 text-lg font-normal">Playlist</span>
            </a>

            <a
              className="my-4 flex items-center rounded-lg p-2 text-gray-700 transition-colors duration-200 hover:bg-gray-200 hover:text-gray-800  dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white "
              href="#"
            >
              <span className="mx-4 text-lg font-normal">Playlist</span>
            </a>

            <a
              className="my-4 flex items-center rounded-lg p-2 text-gray-700 transition-colors duration-200 hover:bg-gray-200 hover:text-gray-800  dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white "
              href="#"
            >
              <span className="mx-4 text-lg font-normal">Playlist</span>
            </a>

            <a
              className="my-4 flex items-center rounded-lg p-2 text-gray-700 transition-colors duration-200 hover:bg-gray-200 hover:text-gray-800  dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white "
              href="#"
            >
              <span className="mx-4 text-lg font-normal">Playlist</span>
            </a>

            <a
              className="my-4 flex items-center rounded-lg p-2 text-gray-700 transition-colors duration-200 hover:bg-gray-200 hover:text-gray-800  dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white "
              href="#"
            >
              <span className="mx-4 text-lg font-normal">Playlist</span>
            </a>

            <a
              className="my-4 flex items-center rounded-lg p-2 text-gray-700 transition-colors duration-200 hover:bg-gray-200 hover:text-gray-800  dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white "
              href="#"
            >
              <span className="mx-4 text-lg font-normal">Playlist</span>
            </a>

            <a
              className="my-4 flex items-center rounded-lg p-2 text-gray-700 transition-colors duration-200 hover:bg-gray-200 hover:text-gray-800  dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white "
              href="#"
            >
              <span className="mx-4 text-lg font-normal">Playlist</span>
            </a>

            <a
              className="my-4 flex items-center rounded-lg p-2 text-gray-700 transition-colors duration-200 hover:bg-gray-200 hover:text-gray-800  dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white "
              href="#"
            >
              <span className="mx-4 text-lg font-normal">Playlist</span>
            </a>

            <a
              className="my-4 flex items-center rounded-lg p-2 text-gray-700 transition-colors duration-200 hover:bg-gray-200 hover:text-gray-800  dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white "
              href="#"
            >
              <span className="mx-4 text-lg font-normal">Playlist</span>
            </a>
          </nav>
        </div>
      </div>
    </div>
  )
}
