@extends('layouts.app')

@section('page-header')
    <section class="page-header page-header-text-light bg-secondary">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-8">
                    <h1>404 - Page not found</h1>
                </div>
                <div class="col-md-4">
                    <ul class="breadcrumb justify-content-start justify-content-md-end mb-0">
                        <li><a href="index.html">Home</a></li>
                        <li class="active">404 - Page Not Found</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
@endsection

@section('content')
    <div id="content">
        <!-- 404
        ============================================= -->
        <section class="section">
            <div class="container text-center">
                <h2 class="text-25 font-weight-600 mb-0">404</h2>
                <h3 class="text-6 font-weight-600 mb-3">oops! The page you requested was not found!</h3>
                <p class="text-3 text-muted">The page you are looking for was moved, removed, renamed or might never
                    existed.</p>
                <a href="#" class="btn btn-primary shadow-none px-5 m-2">Home</a> <a href="#"
                    class="btn btn-outline-dark shadow-none px-5 m-2">Back</a>
            </div>
        </section>
        <!-- 404 end -->

    </div>
@endsection
