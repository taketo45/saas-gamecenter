import Link from 'next/link';
import { usePathname } from 'next/navigation';
// import { UserNav } from './UserNav';

export function Header() {
  const pathname = usePathname();

  return (
    <nav className="bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="shrink-0 flex items-center">
              <Link href="/">
                <span className="text-2xl font-bold text-orange-600">Quiz Game</span>
              </Link>
            </div>

            <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
              <Link
                href="/quiz"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out ${
                  pathname.startsWith('/quiz')
                    ? 'border-orange-400 dark:border-orange-600 text-gray-900 dark:text-gray-100'
                    : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700'
                }`}
              >
                クイズ
              </Link>
              <Link
                href="/pictures"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out ${
                  pathname === '/pictures'
                    ? 'border-orange-400 dark:border-orange-600 text-gray-900 dark:text-gray-100'
                    : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700'
                }`}
              >
                獲得した記念写真
              </Link>
            </div>
          </div>
          {/* <UserNav /> */}
        </div>
      </div>
    </nav>
  );
} 