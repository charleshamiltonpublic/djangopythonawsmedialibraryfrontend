import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BaseComponent from './components/baseComponent';
import MediaDashboardComponent from './components/mediaDashboardComponent';
import React, { useState, useEffect } from 'react';

function App() {
  // Sample data for demonstration
  const sampleMediaFiles = [
    {
      id: 1,
      thumbnail: {
        url: 'https://placeimg.com/640/480/any'
      },
      title: 'Sample Media 1',
      description: 'This is a sample media description.',
      metadata: {
        date: '2023-08-25',
        type: 'Image'
      }
    },
    // ... more sample media
  ];
  
  const sampleTags = [
    { name: 'Nature' },
    { name: 'Urban' },
    // ... more tags
  ];

  const [mediaFiles, setMediaFiles] = useState([]);

  useEffect(() => {
    fetch("http://medialibrary.eba-8w5qchtp.us-east-2.elasticbeanstalk.com/mediafiles/api/mediafiles/")
      .then(response => response.json())
      .then(data => {
        setMediaFiles(data);
      })
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <Router>
      <BaseComponent>
        <nav>
          <Link to="/">Dashboard</Link>
          {/* Add other navigation links */}
        </nav>
        <Routes>
          <Route path="/" element={<MediaDashboardComponent mediaFiles={mediaFiles} allTags={sampleTags} />} />
          {/* Add other routes for login, register, upload, etc. */}
          {/* Example:
          <Route path="/login">
            <LoginComponent />
          </Route>
          */}
        </Routes>
      </BaseComponent>
    </Router>
  );
}

export default App;

