# Description
> A simplistic setup to get running with the core essentials for a client-side app - Includes:
> 1. React (includes: Flux, Protected Routes)
> 2. Redux (Initial setup in store/)
> 3. Service Workers
> 4. Atomic Design (SASS/CSS styling)
> 5. Testing (Jest)
> 6. Minimal webpack configuration with SOC (Development & Production)
> 7. Priv keys stored in .env

### SETUP -- Front-end
1. Clone Repo
2. Run `touch .env` and copy input from `.env.example` into it
3. Run `yarn install`
4. Run `npm start` and open browser to port 3200

### SETUP -- Front-end + Server
1. Clone Repo
2. Run `touch .env` and copy input from `.env.example` into it
3. Run `yarn install`
4. Setup a Postgres database to use for the project
5. Insert Postgres credentials into the .env file 
6. Run `knex migrate:latest --env development`
7. Run `knex seed:run --env development`
8. Run `npm run server`