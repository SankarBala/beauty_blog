<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1.0, shrink-to-fit=no">
    <link href="images/favicon.png" rel="icon" />

    <title>{{ env('APP_NAME') }}</title>
    <meta name="description" content="Blog HTML5 Template">
    <meta name="author" content="Sankar Bala">

    <!-- Web Fonts =========== -->
    <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900'
        type='text/css'>

    <!-- Stylesheet ============ -->
    <link rel="stylesheet" type="text/css" href="{{ asset('vendor/bootstrap/css/bootstrap.min.css') }}" />
    <link rel="stylesheet" type="text/css" href="{{ asset('vendor/font-awesome/css/all.min.css') }}" />
    <link rel="stylesheet" type="text/css" href="{{ asset('css/stylesheet.css') }}" />

</head>

<body>

    <!-- Document Wrapper =========== -->
    <div id="main-wrapper">

        <!-- Header ========= -->
        @include('layouts.header')
        <!-- Header end -->

        <!-- Page Header ============ -->
        @yield('page-header')
        <!-- Page Header end -->

        <!-- Content ========== -->
        @yield('content')
        <!-- Content end -->


        <!-- Footer =========== -->
        @include('layouts.footer')
        <!-- Footer end -->

    </div>
    <!-- Document Wrapper end -->

    <!-- Back to Top ========= -->
    <a id="back-to-top" data-toggle="tooltip" title="Back to Top" href="javascript:void(0)"><i
            class="fa fa-chevron-up"></i></a>

    <!-- Script -->
    <script src="{{ asset('vendor/jquery/jquery.min.js') }}"></script>
    <script src="{{ asset('vendor/bootstrap/js/bootstrap.bundle.min.js') }}"></script>
    <script src="{{ asset('js/theme.js') }}"></script>

</body>

</html>
