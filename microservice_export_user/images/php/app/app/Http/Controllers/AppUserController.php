<?php

namespace App\Http\Controllers;

use App\AppUser;
use Illuminate\Http\Request;
// use App\Exports\AppUserExport;
// use Maatwebsite\Excel\Facades\Excel;
// use Maatwebsite\Excel\Facades\Excel;
// use App\Http\Controllers\Controller;

class AppUserController extends Controller
{

    public function exportUsers()
    {
        $users = AppUser::orderBy('created_at', 'desc')->get();
        $csvExporter = new \Laracsv\Export();
        $csvExporter->build($users, ['first_name', 'last_name', 'email', 'password', 'rank'])->download('crime_reports_users.csv');
    }
}