# Kinfolx

## 📖 Description

Kinfolx: An app that allows you rate companies based on their diversity & company culture. This app allows users to explore and rate companies based on diversity and company culture, helping job seekers make informed decisions. Users can read reviews from others, share their own experiences, and see how different companies stack up in terms of inclusivity and work environment. The app also features a dynamic feed showcasing the latest reviews, keeping the community up-to-date with real-time insights. Whether you’re evaluating a potential employer or contributing your own perspective, this platform fosters transparency and promotes workplace improvement.

## Key Features

- Company Ratings: Rate companies based on their commitment to diversity, inclusivity, work-life balance, and overall company culture, providing valuable feedback to the community.
- User Reviews: Read in-depth reviews from current and former employees, offering honest insights into the workplace environment, management style, and diversity initiatives.
- Real-time Feed: Stay updated with the latest reviews, ratings, and trends through a continuously refreshed feed that highlights the most recent employee experiences and feedback.
- Personal Review Submission: Share your own experiences with companies by submitting detailed reviews, helping others make more informed decisions about potential employers.
- Company Comparison: Easily compare ratings and reviews from multiple companies, allowing you to evaluate their diversity practices and workplace culture to make more confident career choices.
- Favorite Companies: Mark companies you’re interested in as favorites, keeping track of them for easy reference and updates.
- Best & Worst Rated Companies: View the highest and lowest rated companies overall, giving you a clear picture of which workplaces excel and which have room for improvement.

## 🛠️ Built With

- React
- Node.js
- Express.js
- MongoDB

View our app live : https://kinfolx-production.up.railway.app/

## 🚀 Getting Started

### 📦 Install packages

Make sure to use `npm install` to install all Dependencies.
:exclamation: You will also need to cd into the server file and do npm install as well because the front and back end have two different package.json files.

### ⚙️ Running the servers

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

### 🌐 Environment Variables

One ENV goes inside of the config file inside the server and the other ENV is in the root

```
VITE_CLERK_PUBLISHABLE_KEY=clerk_key_here
DB_STRING=mongodb_string_here
CLERK_SECRET_KEY=clerk_secret_key_here
CLERK_PUBLISHABLE_KEY=clerk_publishable_key_here
```

Front end needs "VITE\_" prefixing all keys

## 💡 Usage

Use Kinfolx to:

- View company reviews: Browse ratings and feedback on companies’ diversity and culture from current and former employees.
- Share your own experiences: Contribute your insights by adding personal reviews to help others make informed decisions.
- Stay updated with real-time feedback: Explore the latest reviews and trends through a dynamic feed of fresh, user-generated content.

## 🤝🏽 Contributing

Contributions are what make the open-source community an amazing place to learn, inspire, and create. Here's how you can contribute:

- Fork the Project
- Create your Feature Branch (git checkout -b feature/AmazingFeature)
- Commit your Changes (git commit -m 'Add some AmazingFeature')
- Push to the Branch (git push origin feature/AmazingFeature)
- Open a Pull Request

## 📞 Contact

Project Lead: bongisiba@gmail.com

## 📚 Challenges

- Resolving Merge Conflicts: Effectively managing and resolving merge conflicts presented challenges, emphasizing the importance of clear communication, collaboration, and problem-solving within the team.
- Learning React Under Tight Deadlines: Adopting and applying a new framework like React while working under strict time constraints required balancing the learning process with delivering functional results.
- Mastering Git Workflows: Developing a comprehensive understanding of Git workflows was initially challenging. Consistent practice and persistence ultimately led to improved confidence and technical proficiency.
- Streamlining Task Delegation: Breaking down tasks into smaller, well-defined components was essential to avoid overlapping efforts and enhance team productivity.
- Facilitating Frontend and Backend Collaboration: Maintaining clear and consistent communication between frontend and backend teams was vital. Establishing aligned expectations and fostering a sense of accountability helped ensure a seamless integration of components.
