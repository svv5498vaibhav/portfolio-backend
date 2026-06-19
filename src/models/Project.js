const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: [true, 'Project title is required'], 
    trim: true 
  },
  slug: { 
    type: String, 
    required: true, 
    unique: true, 
    index: true,
    lowercase: true
  },
  summary: { 
    type: String, 
    required: [true, 'Project summary is required'] 
  },
  description: { 
    type: String, 
    required: [true, 'Project long-form description is required'] 
  },
  techStack: [{ 
    type: String 
  }],
  githubUrl: { 
    type: String,
    trim: true
  },
  liveUrl: { 
    type: String,
    trim: true
  },
  views: { 
    type: Number, 
    default: 0 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

module.exports = mongoose.model('Project', projectSchema);
