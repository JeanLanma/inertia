<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Mail;
use App\Repositories\Prices\Price;
use App\Repositories\Quotes\Quote;
use App\Http\Requests\Quote\Save;
use App\Repositories\Zones\Hotel;
use App\Repositories\Zones\Zone;
use Illuminate\Http\Request;
use App\Mail\QuoteCreated;

class QuoteController extends Controller
{
    
    public function index(Quote $quote, Zone $zone){

        $parks = $quote->getParks();
        $zones = $zone->all();

        return inertia('Quotes/Index', compact('parks','zones'));
    
    }

    public function parks(Quote $quote){

        return response()->json($quote->getParks());
    
    }

    public function tours(Quote $quote){

        return response()->json($quote->getTours());
    
    }

    public function hotels(Hotel $hotels, $zone){

        return response()->json($hotels->getByZone($zone));
    
    }

    public function price($activity, $zone, $season){
        if($zone == 2) $zone = 1;
        return response()->json(Price::get($activity, $zone, $season));
    
    }

    public function store(Save $request, Quote $quote){
        // dd($request); return;
        $quote = $quote->save($request);

        Mail::to('jeanmacario048@gmail.com')->send(new QuoteCreated($quote));
        
        return redirect()
                ->route('quote')
                ->with('message' , 'Cotización realizada con exito');

    }

    public function preview(Quote $quoteData, $uuid){

        $quote = $quoteData->preview($uuid);

        return inertia('Quotes/Preview/Index', compact('quote'));
    }

}
