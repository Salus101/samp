<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class IsAdmin
{
    public function handle(Request $request, Closure $next): Response
    {
        if (auth()->check() && auth()->user()->role === 'admin') {
            return $next($request);
        }

        // If not logged in, redirect to login
        if (! auth()->check()) {
            return redirect()->route('login');
        }

        // Logged in but not admin
        abort(403, 'Unauthorized.');
    }
}
