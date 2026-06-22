const mongoose = require('mongoose');

const seedData = async () => {
  const Project = require('../models/Project');
  const Achievement = require('../models/Achievement');
  const Stats = require('../models/Stats');

  try {
    // Seed Stats
    const statsCount = await Stats.countDocuments();
    if (statsCount === 0) {
      await Stats.create({
        dsaSolved: 72,
        hackathonsWon: 3,
        totalPageViews: 0
      });
      console.log('Seeded default Stats metrics');
    }

    // Seed Projects
    const projectCount = await Project.countDocuments();
    if (projectCount === 0) {
      await Project.create([
        {
          title: "CampusX",
          slug: "campus-x",
          summary: "A student-focused networking and achievement collaboration platform where students share accomplishments and pitch startup ideas.",
          description: "Built a centralized system mapping achievements to student profiles and providing real-time feed updates using Next.js App Router for server-rendered page assets and custom APIs.\nDeveloped secure student email verification using Node mailer and designed database locking configurations.",
          techStack: ["Next.js", "Express.js", "MongoDB", "Node.js", "Tailwind CSS"],
          githubUrl: "https://github.com/svv5498/campusx",
          liveUrl: "https://campusx.dev",
          views: 154
        },
        {
          title: "Airbnb Clone",
          slug: "airbnb-clone",
          summary: "A fully responsive booking platform offering dynamic room listing views, calendar searches, and checkout simulations.",
          description: "Developed atomic React layout grid items combined with database locking configurations to prevent duplicate reservation errors.\nConfigured secure mock-checkout profiles and loaded responsive visual layers.",
          techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "CSS Modules"],
          githubUrl: "https://github.com/svv5498/airbnb-clone",
          liveUrl: "https://airbnb-clone.dev",
          views: 82
        },
        {
          title: "Personal Portfolio",
          slug: "personal-portfolio",
          summary: "This premium SaaS-inspired website showcasing skills, hackathons, and dynamic visitor and view logs.",
          description: "Implemented font optimization structures, server-rendered components, and dynamic asynchronous import setups for overlay modals.\nTargeted 100/100 performance scores on Google Lighthouse.",
          techStack: ["Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion", "MongoDB"],
          githubUrl: "https://github.com/svv5498/portfolio",
          liveUrl: "https://vaibhav.dev",
          views: 245
        }
      ]);
      console.log('Seeded initial Projects database objects');
    }

    // Seed Achievements
    const achievementCount = await Achievement.countDocuments();
    if (achievementCount === 0) {
      await Achievement.create([
        {
          title: "2x Hackathon Winner",
          organization: "Regional Hackathons",
          dateString: "2024 - 2025",
          description: "First place honors in coding sprints. Designed system flow diagrams, implemented fast prototype routing structures, and integrated multi-service backend modules.",
          category: "hackathon",
          rank: 1
        },
        {
          title: "Startup Arena Winner",
          organization: "PBCOE Incubation Wing",
          dateString: "2025",
          description: "Secured top place during pitch competition for software startup prototype. Handled user-flows, operational logic diagrams, and data structure modeling.",
          category: "startup",
          rank: 2
        },
        {
          title: "2x Technical Quiz Winner",
          organization: "Department Tech Fests",
          dateString: "2024",
          description: "First place honors answering technical queries about OOP paradigms, database optimizations (indexing, hashing), and web protocols.",
          category: "quiz",
          rank: 3
        },
        {
          title: "70+ DSA Problems Solved",
          organization: "LeetCode & GFG",
          dateString: "Ongoing",
          description: "Continuous study of string manipulations, matrix optimizations, dynamic programming structures, and graph theory in C++ and Python.",
          category: "academic",
          rank: 4
        }
      ]);
      console.log('Seeded initial Achievements database timeline milestones');
    }
  } catch (err) {
    console.error('Error seeding initial data:', err.message);
  }
};

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio');
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    // Auto seed database data
    await seedData();
  } catch (error) {
    console.error(`Database Connection Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
