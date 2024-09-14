### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/SwapnilVG/virtual-classroom.git

2. Navigate to the project root:

    ```bash
    cd virtual-classroom
    ```

3. Install dependencies for the client:

    ```bash
    cd frontend
    npm install
    ```

4. Install dependencies for the server:

    ```bash
    cd ../backend
    npm install
    ```

### Running the App

1. Start the frontend (frontend):

    ```bash
    cd frontend
    npm run dev
    ```

   This will launch the client application, and you can access it in your web browser at [http://localhost:5173](http://localhost:5173).

2. Start the server (backend):

    ```bash
    cd backend
    npm run dev
    ```

   The server will be running at [http://localhost:3000](http://localhost:3000).


## Sample Environment File 

Create a `.env` file in the `server` folder with the following content:

```env
PORT = 
MONGO_URI = 
JWT_SECRET = 
```



