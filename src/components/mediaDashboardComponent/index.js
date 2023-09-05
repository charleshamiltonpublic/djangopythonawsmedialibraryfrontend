import React from 'react';
import {
  MediaDashboardContainer,
  SearchForm,
  MediaList,
  MediaItem,
  MediaMeta,
  MediaThumbnail,
} from './mediaDashboardElements';

const MediaDashboardComponent = ({ mediaFiles = [], allTags = [] }) => {
  return (
    <MediaDashboardContainer>
      <h2>Media Dashboard</h2>
      <SearchForm>
        <input type="text" name="q" placeholder="Search..." />
        <select name="sort_by">
          <option value="uploaded_at">Date</option>
          <option value="filetype">Type</option>
        </select>
        <select name="file_type">
          <option value="image">Image</option>
          <option value="video">Video</option>
        </select>
        <select name="tag">
          {allTags.map(tag => (
            <option key={tag.name} value={tag.name}>{tag.name}</option>
          ))}
        </select>
        <button type="submit">Search</button>
      </SearchForm>

      {mediaFiles.length > 0 ? (
        <MediaList>
          {mediaFiles.map(media => (
            <MediaItem key={media.id}>
              <MediaThumbnail src={media.thumbnail} alt={`Thumbnail for ${media.title}`} />
              <h3>{media.title}</h3>
              <p>{media.description}</p>
              <MediaMeta>
                {media.metadata ? (
                  <ul>
                    {Object.entries(media.metadata).map(([key, value]) => (
                      <li key={key}><strong>{key}:</strong> {value}</li>
                    ))}
                  </ul>
                ) : <p>No Metadata available</p>}
              </MediaMeta>
            </MediaItem>
          ))}
        </MediaList>
      ) : (
        <p>No media files have been uploaded yet.</p>
      )}
    </MediaDashboardContainer>
  );
};

export default MediaDashboardComponent;
