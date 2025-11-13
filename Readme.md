🏆 Sports Management API
Description
A RESTful API for managing sports operations — including teams, players, matches, and events.
It supports authentication, analytics, and role-based access for admins, coaches, and players.

🚀 Features


✅ User Authentication (JWT)


👥 Role-based Access Control (Admin, Coach, Player)


🏟️ Team and Player Management


🗓️ Match Scheduling & Results Tracking


🎯 Event and Tournament Management


📊 Player Performance Analytics


🧩 MongoDB Integration with Mongoose



🗄️ Project Structure
sports-api/
│── config/
│   └── db.js
│
│── controllers/
│   ├── authController.js
│   ├── teamController.js
│   ├── playerController.js
│   ├── matchController.js
│   └── eventController.js
│
│── middleware/
│   ├── authMiddleware.js
│   └── roleMiddleware.js
│
│── models/
│   ├── User.js
│   ├── Team.js
│   ├── Player.js
│   ├── Match.js
│   └── Event.js
│
│── routes/
│   ├── authRoutes.js
│   ├── teamRoutes.js
│   ├── playerRoutes.js
│   ├── matchRoutes.js
│   └── eventRoutes.js
│
│── .env
│── server.js
│── package.json
│── README.md


⚙️ Tech Stack


Node.js + Express


MongoDB + Mongoose


JWT for Authentication


bcryptjs for Password Hashing


dotenv, cors, morgan for Configuration and Logging



🧩 Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/your-username/sports-api.git
cd sports-api

2️⃣ Install dependencies
npm install

3️⃣ Configure environment variables
Create a .env file in the root directory:
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

4️⃣ Start the server
npm run dev

Server will run at:
👉 http://localhost:5000

🧠 API Endpoints
🔐 Authentication
MethodEndpointDescriptionPOST/api/auth/registerRegister a new userPOST/api/auth/loginLogin user & get token
Example Register Request
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "123456",
  "role": "admin"
}


🏟️ Teams
MethodEndpointDescriptionPOST/api/teamsCreate new team (Admin/Coach only)GET/api/teamsGet all teams
Create Team
{
  "name": "Eagles FC",
  "founded": 2005,
  "city": "Lagos"
}


⚽ Players
MethodEndpointDescriptionPOST/api/playersAdd player (Admin/Coach only)GET/api/playersView all players
Add Player
{
  "name": "David King",
  "position": "Forward",
  "number": 9
}


🏁 Matches
MethodEndpointDescriptionPOST/api/matchesSchedule match (Admin only)GET/api/matchesList all matches
Schedule Match
{
  "homeTeam": "64a2efb789caedc111111111",
  "awayTeam": "64a2efb789caedc222222222",
  "matchDate": "2025-11-20T15:00:00Z",
  "venue": "National Stadium"
}


🏆 Events
MethodEndpointDescriptionPOST/api/eventsCreate sports event (Admin only)GET/api/eventsList all events
Create Event
{
  "name": "Champions Cup",
  "startDate": "2025-12-01",
  "location": "Abuja Stadium"
}


🔑 Authentication Header
All protected routes require a JWT Token.
In Postman, go to the Authorization tab and set:
Type: Bearer Token
Token: <paste token from login>


🧪 Testing with Postman
Step-by-step:


Start MongoDB (local or Atlas)


Run npm run dev


Open Postman


Test /api/auth/register → copy returned token


Add Authorization: Bearer <token> to subsequent requests


Test routes for:


/api/teams


/api/players


/api/matches


/api/events





🧰 Scripts
CommandDescriptionnpm run devRun server in development modenpm startRun server in production mode

📦 Dependencies
express
mongoose
dotenv
bcryptjs
jsonwebtoken
cors
morgan

(Installed automatically using npm install)

✅ Example Successful Response
{
  "name": "Champions Cup",
  "startDate": "2025-12-01",
  "location": "Abuja Stadium",
  "_id": "6789abcd1234ef567890",
  "__v": 0
}


🧾 License
MIT License © 2025 — Sports Management API

Would you like me to include a seed.js script to auto-generate sample teams, players, and matches for instant Postman testing?