<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BaseController extends Controller
{
    public function index(){
        return view('index');
    }

    public function post(){
        return view('post');
    }
}
