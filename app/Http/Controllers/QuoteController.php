<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class QuoteController extends Controller
{
    
    public function index(){

        return inertia('Quotes/Index');
    
    }

    public function store(){
        
        dd(request()->all());

    }

}
