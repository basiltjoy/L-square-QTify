import React, { useState, useEffect } from 'react';
import axios from "axios";
import { 
  Box, 
  Tabs, 
  Tab, 
  Typography, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText, 
  Paper, 
  CircularProgress,
  Avatar 
} from '@mui/material';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

const SongsTab = () => {
  const [value, setValue] = useState(0);
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);

  const tabLabels = ["All", "Rock", "Pop", "Jazz", "Blues"];

  useEffect(() => {
    const fetchSongsData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://qtify-backend.labs.crio.do/songs");
        setSongs(response.data);
      } catch (error) {
        console.error("Error fetching song data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSongsData();
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const filteredSongs = value === 0 ? songs 
    : songs.filter(song => song.genre.label.toLowerCase() === tabLabels[value].toLowerCase());

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', p: 5 }}>
        <CircularProgress color="success" />
      </Box>
    );
  }

  return (
    <Box sx={{ width: '100%', mt: 4 }}>
      <Paper elevation={4} sx={{ borderRadius: 3, overflow: 'hidden', bgcolor: '#121212', color: '#fff' }}>
        <Typography variant="h5" sx={{ p: 3, fontWeight: 'bold' }}>
          Songs
        </Typography>

        <Box sx={{ borderBottom: 1, borderColor: '#333' }}>
          <Tabs 
            value={value} 
            onChange={handleChange} 
            textColor="inherit"
            indicatorColor="secondary"
            variant="scrollable"
            sx={{
              '& .MuiTabs-indicator': { backgroundColor: '#3f51b5' },
              px: 2
            }}
          >
            {tabLabels.map((label, index) => (
              <Tab key={index} label={label} sx={{ fontWeight: '600', textTransform: 'none', minWidth: 100 }} />
            ))}
          </Tabs>
        </Box>

        <Box sx={{ maxHeight: '500px', overflowY: 'auto', p: 1 }}>
          <List>
            {filteredSongs.length > 0 ? (
              filteredSongs.map((song) => (
                <ListItem 
                  key={song.id} 
                  sx={{ 
                    mb: 1, 
                    borderRadius: 2, 
                    '&:hover': { bgcolor: 'rgba(255,255,255,0.05)' } 
                  }}
                >
                  <ListItemIcon>
                    <Avatar 
                      variant="rounded" 
                      src={song.image} 
                      sx={{ width: 50, height: 50, mr: 1 }}
                    >
                      <MusicNoteIcon />
                    </Avatar>
                  </ListItemIcon>
                  <ListItemText 
                    primary={
                      <Typography sx={{ fontWeight: 'bold', fontSize: '1rem' }}>
                        {song.title}
                      </Typography>
                    } 
                    secondary={
                      <Typography sx={{ color: '#b3b3b3', fontSize: '0.85rem' }}>
                        {song.artists.join(", ")} • {song.likes.toLocaleString()} Likes
                      </Typography>
                    } 
                  />
                  <Typography sx={{ color: '#3f51b5', fontSize: '0.8rem', fontWeight: 'bold' }}>
                    {song.genre.label}
                  </Typography>
                </ListItem>
              ))
            ) : (
              <Typography sx={{ p: 3, textAlign: 'center', color: '#666' }}>
                No songs available in this genre.
              </Typography>
            )}
          </List>
        </Box>
      </Paper>
    </Box>
  );
};

export default SongsTab;