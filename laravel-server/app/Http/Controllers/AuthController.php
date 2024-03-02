<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    // Register API (POST, formdata)
    public function register(Request $request){

        // data validation  
        $request->validate([
            "username" => "required",
            "email" => "required|email|unique:users",
            "password" => "required|confirmed",
            "fName" => "required",
            "lName" => "required",
            "weight" => "required",     
            "height" => "required",     
            "age" => "required",     
            "gender" => "required",
            "activity" => "required"     
        ]);

        // Author model
        User::create([
            "username" => $request->username,
            "email" => $request->email,
            "password" => Hash::make($request->password),
            // "fName" => 'kenTest',
            // "lName" => 'kt',
            // "weight" => '67.4',
            // "height" => '170',
            // "age" => '16',
            // "gender" => 'male',
            // "activity" => '1'
            "fName" => $request->fName,
            "lName" => $request->lName,
            "weight" => $request->weight,
            "height" => $request->height,
            "age" => $request->age,
            "gender" => $request->gender,
            "activity" => $request->activity
        ]);

        // Response
        return response()->json([
            "status" => true,
            "message" => "User created successfully"
        ]);
    }

    // Login API (POST, formdata)
    public function login(Request $request){


        
        // Data validation
        $request->validate([
            "email" => "required|email",
            "password" => "required"
        ]);


        // Auth Facade        
        if(Auth::attempt([
            "email" => $request->email,
            "password" => $request->password
        ])){
            
             $user = Auth::user();

             $token = $user->createToken("myToken")->accessToken;

            return response()->json([
                "status" => true,
                "message" => "Login successful",
                "access_token" => $token
            ]);
        }
        //return response()->json(['message' => $request->email]);
        
        return response()->json([
            "status" => false,
            "message" => "Invalid credentials"
        ]);
    }

    // Profile API (GET)
    public function profile(){
        
        $userdata = Auth::user();

        return response()->json([
            "status" => true,
            "message" => "Profile data",
            "data" => $userdata
        ]);
    }

    // Logout API (GET)
    public function logout(){

        auth()->user()->token()->revoke();

        return response()->json([
            "status" => true,
            "message" => "User logged out"
        ]);
    }
}
