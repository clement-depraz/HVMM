<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class AppUserController extends Controller
{

    public function getPendingUsers()
    {
        return response()->json(User::where('isCertified', 0)
            ->orderBy('last_name', 'desc')
            ->get());
    }

    public function create(Request $request)
    {
        $request->only(['last_name', 'first_name', 'email', 'password', 'rank']);
        $this->validate($request, [
            'last_name' => 'required|string|max:50',
            'first_name' => 'required|string|max:50',
            'email' => 'required|email|unique:users|max:255',
            // 'email' => 'required|unique:users|max:255',
            'password' => 'required|max:255',
            'rank' => 'required|numeric|min:1'
        ]);

        $user = new User($request->all());
        $user->last_name = $request->last_name;
        $user->first_name = $request->first_name;
        $user->password = $request->password;
        $user->rank = $request->rank;
        $user->save();

        return response()->json($user, 201);
    }

    public function certify($id, Request $request)
    {
        try {
            $user = User::findOrFail($id);
            $user->isCertified = 1;
            $user->save();
        } catch(\Exception $e) {
            return response($e->getMessage(), 400);
        }
        return response('Certified Successfully', 200);
    }

    public function delete($id)
    {
        try {
            $user = User::findOrFail($id);
            $user->delete();
        } catch(\Exception $e) {
            return response($e->getMessage(), 400);
        }
        return response('Deleted Successfully', 200);
    }
}