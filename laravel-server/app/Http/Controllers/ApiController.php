<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Meal;

class ApiController extends Controller
{
    public function addMeal(Request $request) {
        $request->validate([
            'name' => 'required'
        ]);

        Meal::create([
            'name' => $request->name,
            'ingredients' => $request->ingredients,
            'energy' => $request->energy,
            'protein' => $request->protein,
            'carbohydrate' => $request->carbohydrate,
            'fat' => $request->fat
        ]);

        return response()->json([
            "status" => true,
            "message" => "Meal created successfully"
        ]);

    }
}
