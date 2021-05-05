<?php

namespace App\Http\Controllers;

class BiodataController extends Controller
{
    public function welcome()
    {
        return view('welcome');
    }
    public function biodata()
    {
        return view('biodata');
    }
}
