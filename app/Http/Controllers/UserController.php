<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function login()
    {
        return Inertia::render('User/UserLogin/UserLogin');
    }
    public function create()
    {

        return Inertia::render('User/UserCreate/UserCreate');
    }
}
