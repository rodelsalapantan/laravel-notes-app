<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>
<small>This will serve as API for my Vue NotesApp Project

## Technologies

- Laravel

### Instruction:
1. Add this to .env file
- APP_URL=http://localhost:8000
- FRONTEND_URL=http://localhost:3000
- SANCTUM_STATEFUL_DOMAINS=localhost:3000
- SESSION_DOMAIN=localhost
2.  Open the terminal and run this codes.
- composer install
- php artisan migrate:fresh --seed
3. To serve, run:
- php artisan serve