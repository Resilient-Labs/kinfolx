# Kinfolx

## An app that allows you rate companies based on their diversity & company culture.

Kinfolx: An app that allows you rate companies based on their diversity & company culture.

Make sure to use npm install to install all Dependencies.

View our app live : https://kinfolx-production.up.railway.app/

## Instructions to run the code locally

Make sure to use `npm install` to install all Dependencies.
:exclamation: You will also need to cd into the server file and do npm install as well because the front and back end have two different package.json files.

### Running the servers

1. Start the frontend server:

```
bash
npm i
npm run dev
```

2. Start the backend server:

```
bash
cd server
npm i
npm run dev
```

3. Open your browser and go to `http://localhost:5173`
   The backend server is loading from `http://localhost:3000`

### Environment Variables

=======

1. Start the backend server:

```bash
cd server
npm i
npm run dev
```

2. Start the frontend server:

```bash
npm i
npm run dev
```

3. Open your browser and go to `http://localhost:5173`
   The backend server is loading from `http://localhost:3000`
    > > > > > > > 3ddd9d9 (company controller updates)

One ENV goes inside of the config file inside the server and the other ENV is in the root

```
VITE_CLERK_PUBLISHABLE_KEY=clerk_key_here
DB_STRING=mongodb_string_here
CLERK_SECRET_KEY=clerk_secret_key_here
CLERK_PUBLISHABLE_KEY=clerk_publishable_key_here
```

Front end needs "VITE\_" prefixing all keys
