import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Welcome() {
    // Safely read auth props from the page
    const { auth } = usePage<SharedData>().props || { auth: { user: null } };
    const user = auth?.user;

    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                />
            </Head>
            <div className="flex min-h-screen flex-col items-center bg-[#FDFDFC] p-6 text-[#1b1b18] lg:justify-center lg:p-8 dark:bg-[#0a0a0a]">
                <header className="mb-6 w-full max-w-[335px] text-sm not-has-[nav]:hidden lg:max-w-4xl">
                    <nav className="flex items-center justify-end gap-4">
                        {user ? (
                            <>
                                <Link
                                    href={route('dashboard')}
                                    className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                                >
                                    Dashboard
                                </Link>

                                {/* Show admin link only for admins */}
                                {user.role === 'admin' && (
                                    <Link
                                        href={route('admin.dashboard')}
                                        className="inline-block rounded-sm border border-blue-500 px-5 py-1.5 text-sm leading-normal text-blue-500 hover:bg-blue-500 hover:text-white"
                                    >
                                        Admin Panel
                                    </Link>
                                )}
                            </>
                        ) : (
                            <>
                                <Link
                                    href={route('login')}
                                    className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A]"
                                >
                                    Log in
                                </Link>
                                <Link
                                    href={route('register')}
                                    className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </nav>
                </header>

                <div className="flex w-full items-center justify-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0">
                    <main className="flex w-full max-w-[335px] flex-col-reverse lg:max-w-4xl lg:flex-row">
                        <div className="flex-1 rounded-br-lg rounded-bl-lg bg-white p-6 pb-12 text-[13px] leading-[20px] shadow-[inset_0px_0px_0px_1px_rgba(26,26,0,0.16)] lg:rounded-tl-lg lg:rounded-br-none lg:p-20 dark:bg-[#161615] dark:text-[#EDEDEC] dark:shadow-[inset_0px_0px_0px_1px_#fffaed2d]">
                            <h1 className="mb-2 text-xl font-semibold">Welcome to the User Management Portal</h1>
                            <p className="mb-4 text-[#706f6c] dark:text-[#A1A09A]">
                                Easily manage users in this simple Laravel application.
                                <br />
                                To get started, register for an account.
                            </p>

                            {!user && (
                                <ul className="flex gap-3 text-sm leading-normal">
                                    <li>
                                        <Link
                                            href={route('register')}
                                            className="inline-block rounded-sm border border-black bg-[#1b1b18] px-5 py-1.5 text-sm leading-normal text-white hover:border-black hover:bg-black dark:border-[#eeeeec] dark:bg-[#eeeeec] dark:text-[#1C1C1A] dark:hover:border-white dark:hover:bg-white"
                                        >
                                            Register Now
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </div>

                        <div className="relative aspect-[335/200] w-full shrink-0 overflow-hidden rounded-t-lg bg-[#f0f9ff] lg:w-[438px] lg:rounded-none lg:rounded-r-lg dark:bg-[#0b1f2a] flex flex-col items-center justify-center p-6">
                            <svg
                                className="w-20 h-20 text-blue-500 dark:text-blue-300 mb-4"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5.121 17.804A13.937 13.937 0 0112 15c2.485 0 4.797.64 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                            </svg>

                            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                                Welcome to User Manager
                            </h1>

                            <p className="mt-2 text-gray-600 dark:text-gray-300 text-center">
                                Manage accounts, roles, and permissions easily.
                            </p>
                        </div>
                    </main>
                </div>

                <div className="hidden h-14.5 lg:block"></div>
            </div>
        </>
    );
}
