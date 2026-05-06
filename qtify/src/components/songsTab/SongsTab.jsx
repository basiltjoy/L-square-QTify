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
  Avatar,
  useMediaQuery,
  useTheme
} from '@mui/material';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

const SongsTab = () => {
  const [value, setValue] = useState(0);
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const tabLabels = ["All", "Rock", "Pop", "Jazz", "Blues"];

  useEffect(() => {
    const fetchSongsData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://qtify-backend.labs.crio.do/songs");
        setSongs(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
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
    <Box sx={{ mt: { xs: 2, md: 4 }, }}>
      <Paper
        elevation={4}
        sx={{
          borderRadius: { xs: 1, md: 3 },
          overflow: 'hidden',
          bgcolor: '#121212',
          color: '#fff'
        }}
      >
        <Typography
          variant={isMobile ? "h6" : "h5"}
          sx={{ p: { xs: 2, md: 3 }, fontWeight: 'bold' }}
        >
          Songs
        </Typography>

        <Box sx={{ borderBottom: 1, borderColor: '#333' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="inherit"
            indicatorColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            sx={{
              '& .MuiTabs-indicator': { backgroundColor: '#3f51b5' },
              px: isMobile ? 0 : 2
            }}
          >
            {tabLabels.map((label, index) => (
              <Tab
                key={index}
                label={label}
                sx={{
                  fontWeight: '600',
                  textTransform: 'none',
                  minWidth: { xs: 80, md: 100 },
                  fontSize: { xs: '0.8rem', md: '0.9rem' }
                }}
              />
            ))}
          </Tabs>
        </Box>

        <Box sx={{ maxHeight: '70vh', overflowY: 'auto', p: { xs: 0.5, md: 1 } }}>
          <List>
            {filteredSongs.map((song) => (
              <ListItem
                key={song.id}
                sx={{
                  mb: 1,
                  borderRadius: 2,
                  px: { xs: 1, md: 2 },
                  '&:hover': { bgcolor: 'rgba(255,255,255,0.05)' }
                }}
              >
                <ListItemIcon sx={{ minWidth: { xs: 50, md: 60 } }}>
                  <Avatar
                    variant="rounded"
                    src={song.image}
                    sx={{ width: { xs: 40, md: 50 }, height: { xs: 40, md: 50 } }}
                  >
                    <MusicNoteIcon />
                  </Avatar>
                </ListItemIcon>

                <ListItemText
                  primary={
                    <Typography sx={{ fontWeight: 'bold', fontSize: { xs: '0.9rem', md: '1rem' }, lineHeight: 1.2 }}>
                      {song.title}
                    </Typography>
                  }
                  secondary={
                    <Typography sx={{ color: '#b3b3b3', fontSize: { xs: '0.7rem', md: '0.85rem' } }}>
                      {isMobile ? song.artists[0] : song.artists.join(", ")}
                    </Typography>
                  }
                />

                <Box sx={{ textAlign: 'right', ml: 1 }}>
                  <Typography sx={{ color: '#3f51b5', fontSize: '0.7rem', fontWeight: 'bold' }}>
                    {song.genre.label}
                  </Typography>
                  <Typography sx={{ color: '#666', fontSize: '0.65rem' }}>
                    {song.likes.toLocaleString()} likes
                  </Typography>
                </Box>
              </ListItem>
            ))}
          </List>
        </Box>
      </Paper>
    </Box>
  );
};

export default SongsTab;